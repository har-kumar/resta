// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/home" className="text-2xl font-bold text-orange-600">
            FoodieHub
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/home" className="text-gray-600 hover:text-orange-600">
              Home
            </Link>
            <Link to="/restaurant" className="text-gray-600 hover:text-orange-600">
              Menu
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-orange-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-600">
              Contact
            </Link>
          </div>
          <button 
            className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700"
            onClick={() => {/* Add logout logic */}}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
