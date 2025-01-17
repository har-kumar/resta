
// src/pages/Restaurant.jsx
import React from 'react';
import DishCard from '../components/Menu/DishCard';

const Restaurant = () => {
  const dishes = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, and basil on a crispy crust",
      price: 14.99,
      category: "Pizza",
      image: "https://ohsweetbasil.com/wp-content/uploads/how-to-make-authentic-margherita-pizza-at-home-recipe-4.jpg"
    },
    {
      id: 2,
      name: "Spaghetti Carbonara",
      description: "Classic pasta with eggs, cheese, pancetta, and black pepper",
      price: 16.99,
      category: "Pasta",
      image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-ii-DDMFS-4x3-6edea51e421e4457ac0c3269f3be5157.jpg"
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crispy romaine lettuce with our homemade Caesar dressing",
      price: 10.99,
      category: "Salads",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg"
    },
    // Add more dishes as needed
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
