/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white border-gray-200 relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 ">
          <Link to="/" className="flex items-center">
            <img src="./logo/android-chrome-512x512.png" className="h-8" alt="Rukun Perkasa Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-brown-800">Rukun Perkasa</span>
          </Link>
        </div>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 ml-auto">
        <Link to="/purchase-history" className="text-sm text-gray-800 px-2 hover:text-brown-600 ">
            Riwayat
          </Link>
          <Link to="/cart" className="text-gray-500 hover:text-brown-500 hover:bg-gray-100 px-2 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5" aria-label="Shopping cart">
            <FaShoppingCart className="w-5 h-5" />
            <span className="sr-only">Shopping cart</span>
          </Link>
    
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
            id="user-menu-button"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
          </button>
          <div className={`absolute top-full right-0 z-20 ${isDropdownOpen ? 'block' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow `} id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 ">Bonnie Green</span>
              <span className="block text-sm text-gray-500 truncate ">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " onClick={toggleDropdown}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={toggleDropdown}>
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/earnings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " onClick={toggleDropdown}>
                  Earnings
                </Link>
              </li>
              <li>
                <Link to="/sign-out" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 " onClick={toggleDropdown}>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
