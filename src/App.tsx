import React from 'react';
import Banner from './components/Banner';
import DishGrid from './components/DishGrid';
import Cart from './components/Cart';
import ImageGenerator from './components/ImageGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Banner />
      <main className="container mx-auto px-4 py-8">
        <DishGrid />
      </main>
      <Cart />
      <ImageGenerator />
    </div>
  );
};

export default App; 