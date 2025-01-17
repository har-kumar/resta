
// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Tasty Bites</h2>
          <p className="text-gray-600 mb-8">
            Founded in 2020, Tasty Bites has been serving delicious cuisine to our valued customers.
            Our commitment to quality ingredients and exceptional service makes us stand out.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide an unforgettable dining experience through exceptional food and service.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most loved restaurant by creating memorable moments for our guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
