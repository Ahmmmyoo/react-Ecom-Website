import React, { useState } from 'react';

const Header = () => {
  // State to handle mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className=" text-2xl font-bold text-gray-800">MyEcomShop</div>

        {/* Navigation Links (Hidden on mobile) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-900 transition">
            Home
          </a>
          <a href="#shop" className="text-gray-600 hover:text-gray-900 transition">
            Shop
          </a>
          <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </a>
        </nav>

        {/* CTA Button (Hidden on mobile) */}
        <div className="hidden md:block">
          <a
            href='#shoppingcart'
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
          >
            View Cart
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-800 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
            onClick={toggleMenu} // Call toggle function
          >
            {/* Mobile menu icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </a>
            <a href="#shop" className="text-gray-600 hover:text-gray-900 transition">
              Shop
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </a>
            <a
              href="#cart"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition"
            >
              View Cart
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
