import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className="bg-white absolute shadow top-0 left-0 w-full flex items-center z-10 justify-center">
      <div className="container md:mx-12 lg:mx-20">
        <div className="flex items-center justify-between relative">
        <Link to="/" className="flex items-center space-x-3">
          <img src="./logo/android-chrome-512x512.png" className="h-8" alt="Rukun Perkasa Logo" />
          <span className="font-mono self-center text-2xl font-semibold whitespace-nowrap text-brown-800">Rukun Perkasa</span>
        </Link>
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