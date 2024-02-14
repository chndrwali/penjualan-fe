import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTachometerAlt, FaSearch, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
    navigate("/");
  };

  return (
    <Fragment>
      <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white">
        {/*  Large Screen Show  */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4 mr-32">
          <span>
            <FaTachometerAlt className="w-8 h-8 cursor-pointer text-gray-600" />
          </span>
        </div>
        {/*  Large Screen Show  */}
        <div className="hidden lg:block">
          <span
            onClick={() => navigate("/admin/dashboard")}
            style={{ letterSpacing: "0.70rem" }}
            className="flex items-left font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
          >
            Rukun Perkasa
          </span>
        </div>
        {/* Small Screen Show */}
        <div className="lg:hidden flex items-center">
          <FaSearch
            className="lg:hidden w-8 h-8 cursor-pointer text-gray-600"
          />
          <span
            onClick={() => navigate("/admin/dashboard")}
            style={{ letterSpacing: "0.10rem" }}
            className="flex items-left font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
          >
            Rukun Perkasa
          </span>
        </div>
        {/* Both Screen show */}
        <div className="flex items-center">
          <div className="hover:bg-gray-200 rounded-lg p-2" title="Search">
            <FaSearch className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" />
          </div>
          {/* Logout Button Dropdown */}
          <div className="relative">
            <div
              className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative"
              title="Logout"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <FaCog className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800" />
            </div>
            {dropdownOpen && (
              <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
                <li className="flex flex-col text-gray-700">
                  <Link
                    to="/main"
                    className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                  >
                    <FaTachometerAlt className="w-6 h-6" />
                    <span>Shop</span>
                  </Link>
                  <div className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer">
                    <FaCog className="w-6 h-6" />
                    <span>Setting</span>
                  </div>
                  <div
                    onClick={() => logout()}
                    className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                  >
                    <FaSignOutAlt className="w-6 h-6" />
                    <span>Logout</span>
                  </div>
                </li>
              </div>
            )}
          </div>
        </div>
        {/* Mobile Navber */}
        {/* End Mobile Navber */}
      </nav>
    </Fragment>
  );
};

export default Header;
