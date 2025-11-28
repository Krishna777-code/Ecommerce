// frontend/src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ClothesStore</h3>
            <p className="text-gray-400">
              Your one-stop destination for trendy and affordable clothing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/?category=Men" className="hover:text-white">Men</Link></li>
              <li><Link to="/?category=Women" className="hover:text-white">Women</Link></li>
              <li><Link to="/?category=Kids" className="hover:text-white">Kids</Link></li>
              <li><Link to="/?category=Accessories" className="hover:text-white">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-blue-400"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-red-500"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ClothesStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;