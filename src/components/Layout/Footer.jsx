
// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FoodieHub</h3>
            <p className="text-gray-300">
              Serving delicious meals since 2020. Your satisfaction is our priority.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              123 Food Street<br />
              Foodie City, FC 12345<br />
              Phone: (555) 123-4567<br />
              Email: info@foodiehub.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="text-gray-300">
              Monday - Friday: 11am - 10pm<br />
              Saturday - Sunday: 10am - 11pm
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 FoodieHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;