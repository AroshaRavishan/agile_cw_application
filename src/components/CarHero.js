import React from 'react';
import carHero from '../assests/cars.png';

const CarHeroSection = () => {
  return (
    <div className="relative">
      <nav className="bg-[#F6F6F6BD] text-[#505050] px-10 py-4">
        <div className="text-lg">
          <span>Category</span>
          <span className="mx-2">&gt;</span>
          <span>Cars</span>
        </div>
      </nav>
      
      <div className="relative h-96">
        <img 
          src={carHero}
          alt="Yellow Honda Type R"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black-900 bg-opacity-70" />
        
        <div className="absolute inset-0 flex items-end p-8">
          <h1 className="text-white text-6xl font-bold mb-4">Cars</h1>
        </div>
      </div>
      
    </div>
  );
};

export default CarHeroSection;