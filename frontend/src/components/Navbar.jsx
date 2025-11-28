// frontend/src/components/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const cartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300">
            ClothesStore
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/cart" className="relative hover:text-gray-300">
              <FaShoppingCart className="text-xl" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            
            {userInfo ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 hover:text-gray-300">
                  <FaUser />
                  <span>{userInfo.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">My Orders</Link>
                  {userInfo.isAdmin && (
                    <Link to="/admin" className="block px-4 py-2 hover:bg-gray-100">Admin</Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-gray-300">Home</Link>
            <Link to="/cart" className="block py-2 hover:text-gray-300">
              Cart ({cartItemsCount})
            </Link>
            {userInfo ? (
              <>
                <Link to="/profile" className="block py-2 hover:text-gray-300">Profile</Link>
                <Link to="/orders" className="block py-2 hover:text-gray-300">My Orders</Link>
                {userInfo.isAdmin && (
                  <Link to="/admin" className="block py-2 hover:text-gray-300">Admin</Link>
                )}
                <button onClick={handleLogout} className="block py-2 hover:text-gray-300">
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="block py-2 hover:text-gray-300">Login</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;