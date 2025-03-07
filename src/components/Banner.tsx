import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface BannerItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const bannerItems: BannerItem[] = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    title: '精选食材，用心烹饪',
    description: '严选优质食材，传承经典味道'
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    title: '春季新品上市',
    description: '当季时令菜品，新鲜美味'
  },
  {
    id: 3,
    image: '/images/banner3.jpg',
    title: '全城配送',
    description: '30分钟极速送达，美味不等待'
  }
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bannerItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bannerItems.length) % bannerItems.length);
  };

  return (
    <div className="relative h-[400px] overflow-hidden">
      {bannerItems.length > 0 && (
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={bannerItems[currentIndex].image}
            alt={bannerItems[currentIndex].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-heading mb-2">{bannerItems[currentIndex].title}</h2>
              <p className="text-lg">{bannerItems[currentIndex].description}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* 导航按钮 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* 指示器 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner; 