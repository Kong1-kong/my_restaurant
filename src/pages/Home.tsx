import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CategoryNav from '../components/CategoryNav';
import DishGrid from '../components/DishGrid';
import Cart from '../components/Cart';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Banner />
        <div className="container mx-auto px-4 py-8">
          <CategoryNav />
          <DishGrid />
        </div>
      </main>
      <Cart />
    </div>
  );
};

export default Home; 