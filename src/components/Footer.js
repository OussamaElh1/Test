import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      {/* Top Section: Main Footer Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Section 1: About Us */}
        <div>
          {/* Add Logo Above the Title */}
          {/* <img
            src="ensilogo.png" // Replace with your logo path
            alt="BDE Logo"
            className="mx-auto md:mx-0 mb-4 w-auto h-16" // Logo size and alignment
          /> */}
          <h2 className="text-2xl font-bold mb-4 text-orange-500">About Us</h2>
          <p className="leading-relaxed">
            Enhancing student life and fostering a vibrant community through
            events, activities, and engagement.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-orange-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/announcements"
                className="hover:text-orange-400 transition duration-300"
              >
                Announcements
              </a>
            </li>
            <li>
              <a
                href="/votes"
                className="hover:text-orange-400 transition duration-300"
              >
                Voting System
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-orange-400 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Contact Us</h2>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@ensi-bde.com"
                className="hover:text-orange-400 transition duration-300"
              >
                info@ensi-bde.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+123456789"
                className="hover:text-orange-400 transition duration-300"
              >
                +123 456 789
              </a>
            </li>
            <li>Location: ENSI Campus, North Morocco</li>
          </ul>
        </div>

        {/* Section 4: Social Media */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-orange-500">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition duration-300"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition duration-300"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition duration-300"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition duration-300"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} BDE ENSI | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
