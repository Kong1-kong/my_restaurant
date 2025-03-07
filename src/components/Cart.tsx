import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  specialRequest?: string;
}

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: '红烧狮子头',
      price: 68,
      quantity: 1,
      image: '/images/dish1.jpg',
      specialRequest: '不要香菜'
    }
  ]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 5;
  const packagingFee = 2;
  const finalTotal = total + deliveryFee + packagingFee;

  const updateQuantity = (id: number, change: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <>
      {/* 悬浮购物车按钮 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark"
      >
        <ShoppingCartIcon className="h-6 w-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-accent-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>

      {/* 购物车面板 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
          >
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-heading">购物车</h2>
                <button onClick={() => setIsOpen(false)}>
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex flex-col h-[calc(100vh-200px)]">
              {/* 商品列表 */}
              <div className="flex-1 overflow-y-auto p-4">
                {items.map(item => (
                  <div key={item.id} className="flex items-center space-x-4 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-primary font-price">¥{item.price}</p>
                      {item.specialRequest && (
                        <p className="text-sm text-gray-500">
                          备注：{item.specialRequest}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* 结算区域 */}
              <div className="border-t p-4">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>商品总额</span>
                    <span>¥{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>配送费</span>
                    <span>¥{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>包装费</span>
                    <span>¥{packagingFee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>总计</span>
                    <span className="text-primary">¥{finalTotal}</span>
                  </div>
                </div>
                <button
                  className="w-full bg-primary text-white py-3 rounded-full hover:bg-primary-dark"
                  disabled={items.length === 0}
                >
                  去结算
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Cart; 