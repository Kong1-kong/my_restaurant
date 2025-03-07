import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Category {
  id: number;
  name: string;
  subCategories?: {
    id: number;
    name: string;
  }[];
}

const categories: Category[] = [
  {
    id: 1,
    name: '主食',
    subCategories: [
      { id: 11, name: '米饭面食' },
      { id: 12, name: '包子饺子' }
    ]
  },
  {
    id: 2,
    name: '热菜',
    subCategories: [
      { id: 21, name: '川菜' },
      { id: 22, name: '粤菜' },
      { id: 23, name: '湘菜' }
    ]
  },
  {
    id: 3,
    name: '凉菜',
    subCategories: [
      { id: 31, name: '开胃凉菜' },
      { id: 32, name: '特色凉菜' }
    ]
  },
  {
    id: 4,
    name: '饮品',
    subCategories: [
      { id: 41, name: '冷饮' },
      { id: 42, name: '热饮' },
      { id: 43, name: '奶茶特调' }
    ]
  },
  {
    id: 5,
    name: '套餐组合'
  }
];

const CategoryNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative">
      {/* 移动端横向滚动 */}
      {isMobile ? (
        <div className="overflow-x-auto whitespace-nowrap pb-2">
          <div className="inline-flex space-x-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        // PC端固定分类栏
        <div className="flex space-x-8 border-b border-gray-200 pb-4">
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <button
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={`px-4 py-2 text-base font-medium ${
                  activeCategory === category.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {category.name}
              </button>
              {category.subCategories && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: activeCategory === category.id ? 1 : 0,
                    y: activeCategory === category.id ? 0 : 10
                  }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10"
                >
                  {category.subCategories.map((sub) => (
                    <button
                      key={sub.id}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {sub.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNav; 