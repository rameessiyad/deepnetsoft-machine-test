import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../public/images/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between pt-6">
        {/* Logo */}
        <div className="flex items-center justify-center w-full md:w-auto">
          <Link to="/" className="flex items-center">
            <img src={LogoImg} alt="logo" className="h-16 md:h-20" />
            <h1 className="md:text-3xl hidden md:block font-semibold ml-2">
              <span className="text-blue-500">DEEP </span>NET{" "}
              <span className="text-gray-400">SOFT</span>
            </h1>
          </Link>
        </div>

        {/* Hamburger Menu (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`
            md:flex md:space-x-10 
            ${isMenuOpen ? "block" : "hidden"} 
            absolute md:relative top-24 left-0 w-full md:w-auto bg-black md:bg-transparent text-center md:text-left
          `}
        >
          <Link
            to="/food"
            className="block py-2 text-lg hover:text-blue-500 md:py-0"
          >
            HOME
          </Link>
          <Link
            to="/drinks"
            className="block py-2 text-lg hover:text-blue-500 md:py-0"
          >
            MENU
          </Link>
          <Link
            to="/brunch"
            className="block py-2 text-lg hover:text-blue-500 md:py-0"
          >
            MAKE A RESERVATION
          </Link>
          <Link
            to="/brunch"
            className="block py-2 text-lg hover:text-blue-500 md:py-0"
          >
            CONTACT US
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
