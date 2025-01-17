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
      image: "https://www.allrecipes.com/thmb/Vg2cRidr2zcYhWGvPD8M18xM_WY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11973-spaghetti-carbonara-mfs-043-4x3-6ed91ba4fc9045539234e31c3e5995a5.jpg"
    },
    {
      id: 3,
      name: "Caesar Salad",
      description: "Crispy romaine lettuce with our homemade Caesar dressing",
      price: 10.99,
      category: "Salads",
      image: "https://www.seriouseats.com/thmb/Fi_FEyKQ3KPJ8q_mLDIqG3CPmK4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2013__07__20130723-caesar-salad-recipe-11-2-f7d9316d52204f2aa05a3651ace108e8.jpg"
    },
    {
      id: 4,
      name: "Chicken Alfredo",
      description: "Creamy Alfredo sauce with grilled chicken over fettuccine",
      price: 17.99,
      category: "Pasta",
      image: "https://www.modernhoney.com/wp-content/uploads/2018/08/Fettuccine-Alfredo-Recipe-1.jpg"
    },
    {
      id: 5,
      name: "Greek Salad",
      description: "Fresh vegetables, olives, and feta cheese with olive oil dressing",
      price: 12.99,
      category: "Salads",
      image: "https://www.recipetineats.com/wp-content/uploads/2020/05/Greek-Salad_6.jpg"
    },
    {
      id: 6,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni with melted mozzarella and tomato sauce",
      price: 15.99,
      category: "Pizza",
      image: "https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg"
    }
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