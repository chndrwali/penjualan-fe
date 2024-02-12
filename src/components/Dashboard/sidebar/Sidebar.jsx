import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaLayerGroup, FaShoppingCart, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Fragment>
      <div
        style={{ boxShadow: "1px 1px 8px 0.2px #aaaaaa" }}
        id="sidebar"
        className="hidden md:block sticky top-0 left-0 h-screen md:w-3/12 lg:w-2/12 sidebarShadow bg-white text-gray-600"
      >
        <Link
          to="/admin/dashboard"
          className="hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6"
        >
          <span>
            <FaTachometerAlt className="w-8 h-8 text-gray-600 hover:text-gray-800" />
          </span>
          <span className="hover:text-gray-800">Dashboard</span>
        </Link>
        <hr className="border-b border-gray-200" />
        <Link
          to="/admin/categories"
          className="hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6"
        >
          <span>
            <FaLayerGroup className="w-8 h-8 text-gray-600 hover:text-gray-800" />
          </span>
          <span className="hover:text-gray-800">Categories</span>
        </Link>
        <hr className="border-b border-gray-200" />
        <Link
          to="/admin/products"
          className="hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6"
        >
          <span>
            <FaShoppingCart className="w-8 h-8 text-gray-600 hover:text-gray-800" />
          </span>
          <span className="hover:text-gray-800">Products</span>
        </Link>
        <hr className="border-b border-gray-200" />
        <Link
          to="/admin/orders"
          className="hover:bg-gray-200 cursor-pointer flex flex-col items-center justify-center py-6"
        >
          <span>
            <FaClipboardList className="w-8 h-8 text-gray-600 hover:text-gray-800" />
          </span>
          <span className="hover:text-gray-800">Orders</span>
        </Link>
        <hr className="border-b border-gray-200" />       
      </div>
    </Fragment>
  );
};

export default Sidebar;
