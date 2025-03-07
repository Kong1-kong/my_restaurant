import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon, PhoneIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 左侧 Logo 和 Slogan */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=32&h=32&fit=crop" 
                alt="餐厅Logo" 
                className="h-8 w-8 rounded-full"
              />
              <span className="ml-2 text-lg font-heading text-primary">美味餐厅</span>
            </Link>
            <span className="hidden md:block text-sm text-gray-600">新鲜食材，家的味道</span>
          </div>

          {/* 中部快捷入口 */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/menu" className="text-gray-700 hover:text-primary">菜单</Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary">购物车</Link>
            <Link to="/profile" className="text-gray-700 hover:text-primary">个人中心</Link>
          </div>

          {/* 右侧功能区 */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary">
              <span className="hidden md:inline">EN</span>
            </button>
            <button className="text-gray-600 hover:text-primary">
              <PhoneIcon className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-primary">
              <ChatBubbleLeftIcon className="h-5 w-5" />
            </button>
            <Link to="/login" className="text-gray-700 hover:text-primary">
              <UserIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 