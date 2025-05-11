import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import asmitaLogo from '../assets/asmitaLogo.png';
import asmita2ndLogo from '../assets/asmita2ndLogo.png';
import { FaFacebookF } from "react-icons/fa";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5dcdb1] shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink className="flex-shrink-0 flex items-center h-full mr-auto ml-4 lg:ml-0" to={"/"}>
            <img
              src={asmita2ndLogo}
              alt="Asmita Logo"
              className="h-8 md:h-10 w-auto object-contain"
              style={{ height: "140px" }}
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              <NavLink
                className={({ isActive }) =>
                  `px-3 py-3 text-xl font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#00916f] shadow-sm"
                      : "text-white hover:bg-[#007a5c] hover:text-white"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `px-3 py-3 text-xl font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#00916f] shadow-sm"
                      : "text-white hover:bg-[#007a5c] hover:text-white"
                  }`
                }
                to="/people"
              >
                People
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `px-3 py-3 text-xl font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#00916f] shadow-sm"
                      : "text-white hover:bg-[#007a5c] hover:text-white"
                  }`
                }
                to="/calender"
              >
                Calendar
              </NavLink>

              <a
                href="https://asmita.iiita.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 text-xl font-medium rounded-md transition-colors text-white hover:bg-[#007a5c] hover:text-white"
              >
                Asmita
              </a>

              <NavLink
                className={({ isActive }) =>
                  `px-3 py-3 text-xl font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#00916f] shadow-sm"
                      : "text-white hover:bg-[#007a5c] hover:text-white"
                  }`
                }
                to="/gallery"
              >
                Gallery
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `px-3 py-3 text-xl font-medium rounded-md transition-colors ${
                    isActive
                      ? "bg-white text-[#00916f] shadow-sm"
                      : "text-white hover:bg-[#007a5c] hover:text-white"
                  }`
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#007a5c] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#008a66]">
          {[
            { to: "/", label: "Home" },
            { to: "/people", label: "People" },
            { to: "/calender", label: "Calendar" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-white text-[#00916f]"
                    : "text-white hover:bg-[#007a5c] hover:text-white"
                }`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://asmita.iiita.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#007a5c] hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Asmita
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
