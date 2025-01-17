import React from 'react';

const DishCard = ({ dish }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{dish.name}</h3>
          <span className="text-orange-600 font-bold">${dish.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{dish.description}</p>
        <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
          {dish.category}
        </span>
      </div>
    </div>
  );
};

export default DishCard;