import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

interface Dish {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  originalPrice?: number;
  image: string;
  spiciness?: number;
  sweetness?: number;
  tags?: string[];
  allergens?: string[];
}

const dishes: Dish[] = [
  {
    id: 1,
    name: '红烧狮子头',
    nameEn: 'Braised Lion\'s Head Meatballs',
    price: 68,
    originalPrice: 88,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    spiciness: 2,
    tags: ['厨师推荐', '人气TOP3'],
    allergens: ['猪肉']
  },
  {
    id: 2,
    name: '北京烤鸭',
    nameEn: 'Peking Duck',
    price: 188,
    originalPrice: 228,
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=300&fit=crop',
    tags: ['招牌菜', '人气TOP1'],
    allergens: ['鸭肉']
  },
  {
    id: 3,
    name: '麻婆豆腐',
    nameEn: 'Mapo Tofu',
    price: 48,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    spiciness: 3,
    tags: ['川菜经典', '人气TOP2'],
    allergens: ['大豆']
  },
  {
    id: 4,
    name: '清蒸鲈鱼',
    nameEn: 'Steamed Sea Bass',
    price: 128,
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=300&fit=crop',
    tags: ['粤式经典', '新鲜海鲜'],
    allergens: ['鱼类']
  },
  {
    id: 5,
    name: '宫保鸡丁',
    nameEn: 'Kung Pao Chicken',
    price: 58,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    spiciness: 2,
    tags: ['川菜经典'],
    allergens: ['鸡肉', '花生']
  },
  {
    id: 6,
    name: '水煮牛肉',
    nameEn: 'Boiled Beef in Spicy Sauce',
    price: 88,
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=300&fit=crop',
    spiciness: 3,
    tags: ['川菜经典', '人气TOP3'],
    allergens: ['牛肉']
  },
  {
    id: 7,
    name: '糖醋排骨',
    nameEn: 'Sweet and Sour Spare Ribs',
    price: 78,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    sweetness: 2,
    tags: ['粤式经典'],
    allergens: ['猪肉']
  },
  {
    id: 8,
    name: '蒜蓉炒青菜',
    nameEn: 'Stir-fried Vegetables with Garlic',
    price: 38,
    image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=300&fit=crop',
    tags: ['健康素食']
  },
  {
    id: 9,
    name: '蛋炒饭',
    nameEn: 'Egg Fried Rice',
    price: 32,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    tags: ['主食']
  }
];

const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md">
          <HeartIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-heading">{dish.name}</h3>
            <p className="text-sm text-gray-500">{dish.nameEn}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-price text-primary">¥{dish.price}</p>
            {dish.originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                ¥{dish.originalPrice}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-2">
          {dish.spiciness && (
            <div className="flex items-center">
              <span className="text-sm text-gray-600">辣度：</span>
              <div className="flex">
                {[1, 2, 3].map((level) => (
                  <span
                    key={level}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      level <= (dish.spiciness ?? 0) ? 'bg-red-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
          {dish.sweetness && (
            <div className="flex items-center">
              <span className="text-sm text-gray-600">甜度：</span>
              <div className="flex">
                {[1, 2, 3].map((level) => (
                  <span
                    key={level}
                    className={`w-2 h-2 rounded-full mx-1 ${
                      level <= (dish.sweetness ?? 0) ? 'bg-yellow-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-2">
          {dish.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary bg-opacity-10 text-primary text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark">
            加入购物车
          </button>
          {dish.allergens && (
            <button className="text-gray-400 hover:text-gray-600">
              <ExclamationCircleIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const DishGrid: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* 每日特价专区 */}
      <section>
        <h2 className="text-2xl font-heading mb-4">每日特价</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.slice(0, 3).map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* 套餐组合推荐 */}
      <section>
        <h2 className="text-2xl font-heading mb-4">套餐组合</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.slice(3, 6).map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* 用户评价最高的菜品 */}
      <section>
        <h2 className="text-2xl font-heading mb-4">人气推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.slice(6, 9).map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DishGrid; 