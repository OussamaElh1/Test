import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white text-black py-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 h-20">
        {/* Logo Section */}
        <div>
          <a href="/">
            <img
              src="/ensilogo.png"
              alt="ENSI Logo"
              className="h-16 w-auto"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 text-base font-medium"> {/* Changed from text-lg to text-base */}
            <li>
              <a
                href="/"
                className="hover:text-[#ef4444] transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="hover:text-[#ef4444] transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-[#ef4444] transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/Announcement"
                className="hover:text-[#ef4444] transition-colors duration-300"
              >
                Announcements
              </a>
            </li>
            <li>
              <a
                href="/Faq"
                className="hover:text-[#ef4444] transition-colors duration-300"
              >
                FAQ's
              </a>
            </li>
            <li>
              <a
                href="/research"
                className="hover:text-[#ef4444] transition-colors duration-300"
              >
                Recherche
              </a>
            </li>
          </ul>
        </nav>

        {/* Search Icon */}
        <div>
          <button className="text-black hover:text-[#ef4444] transition-colors duration-300">
            <FaSearch size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
