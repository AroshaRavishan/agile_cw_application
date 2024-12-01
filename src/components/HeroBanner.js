import React from 'react';

const HeroBanner = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://www.usnews.com/cmsmedia/9a/74/e488e0db46dda064869bfa9cc19e/2024-mustang-family.jpg')` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black-900 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Welcome to Our Website
                </h1>
                <p className="text-xl md:text-2xl mb-6">
                    Discover amazing products and services tailored just for you.
                </p>
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium text-lg rounded shadow-md transition-all">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default HeroBanner;
