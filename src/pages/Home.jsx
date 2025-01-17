// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/1920/500')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to FoodieHub</h1>
            <p className="text-xl mb-8">Experience the finest dining in town</p>
            <Link
              to="/restaurant"
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🍝</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Italian Cuisine</h3>
            <p className="text-gray-600">Authentic Italian dishes made with love</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🍣</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Asian Fusion</h3>
            <p className="text-gray-600">A perfect blend of Asian flavors</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-4xl">🍖</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Grilled Specialties</h3>
            <p className="text-gray-600">Perfectly grilled meats and vegetables</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;