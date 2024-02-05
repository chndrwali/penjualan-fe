/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import Navbar from './Navbar';

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="bg-white absolute top-0 left-0 w-full flex items-center z-10 justify-center">
      <div className="container md:mx-12 lg:mx-20">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <span className="font-bold text-lg text-primary block py-4">
              <img src="/logo/android-chrome-512x512.png" alt="Logo" className="w-12 h-12" />
            </span>
          </div>
          <div className="flex items-center justify-center px-4">
            <HamburgerButton
              isHamburgerOpen={isHamburgerOpen}
              handleHamburgerClick={handleHamburgerClick}
            />
            <Navbar
              isHamburgerOpen={isHamburgerOpen}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;