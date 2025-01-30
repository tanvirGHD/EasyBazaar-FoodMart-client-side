import { useState } from "react";
import {
  FaUserAlt,
  FaHeart,
  FaShoppingCart,
  FaHeadphonesAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Dropdown Icon and Logo */}
        <div className="flex items-center space-x-2">
          {/* Dropdown Icon */}
          <button
            className="text-gray-700 text-2xl lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Logo */}
          <h1 className="text-3xl font-bold text-yellow-500">Vegist</h1>
          <span className="text-green-500 text-sm">&#127793;</span>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-1/2">
          <input
            type="text"
            placeholder="Search our store"
            className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none"
          />
          <button className="bg-gray-200 px-3 py-2 rounded-r-lg text-gray-600  hover:bg-gray-300">
            🔍
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Account */}
          <div className="flex items-center space-x-1">
            <FaUserAlt className="text-gray-700 h-6 w-6 md:h-8 md:w-8" />
            <div className="flex flex-col items-start">
              <span className="text-gray-700 hidden md:inline text-sm md:text-base">
                Account
              </span>
              <p className="text-gray-500 text-xs">
                <span className="hover:text-yellow-500 cursor-pointer">
                <Link to='/register'>Register</Link>
                </span>{" "}
                |{" "}
                <span className="hover:text-yellow-500 cursor-pointer">
                  Login
                </span>
              </p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="relative">
            <FaHeart className="text-gray-700 h-5 w-5 md:h-6 md:w-6" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div>

          {/* Cart */}
          <div className="relative">
            <FaShoppingCart className="text-gray-700 h-5 w-5 md:h-6 md:w-6" />
            <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      {/* Dropdown Section */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-lg lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col space-y-2 py-4 px-4">
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            <Link to='/'>Home</Link>
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            Shop
          </li>
          <li className="text-gray-700 hover:text-yellow-500cursor-pointer">
            Category
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            Blogs
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            About
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer relative">
            Buy Vegist
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              HOT
            </span>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="hidden lg:flex justify-between items-center space-x-4 py-2 container mx-auto px-4">
        {/* Nav Links */}
        <ul className="flex space-x-6 items-center text-sm md:text-lg">
        <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            <Link to='/'>Home</Link>
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            Shop
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
          Category
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            Blogs
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer">
            About
          </li>
          <li className="text-gray-700 hover:text-yellow-500 cursor-pointer relative">
            Buy Vegist
            <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              HOT
            </span>
          </li>
        </ul>

        {/* Hotline */}
        <div className="flex items-center space-x-2 text-gray-700 text-sm md:text-lg">
          <FaHeadphonesAlt className="h-6 w-6 md:h-8 md:w-8" />
          <span>Hotline:</span>
          <span className="font-semibold hover:text-yellow-500">0123 456 789</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
