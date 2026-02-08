import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-14 py-4 border-b border-gray-300 bg-white relative">

      {/* Logo */}
      <NavLink to="/">
        <img
          src={assets.logo}
          alt="dummyLogoColored"
          className="h-9"
        />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-700">

        <NavLink to="/" className="hover:text-indigo-600">
          Home
        </NavLink>

        <NavLink to="/about" className="hover:text-indigo-600">
          About
        </NavLink>

        <NavLink to="/contact" className="hover:text-indigo-600">
          Contact
        </NavLink>

        {/* Search */}
        <div className="hidden lg:flex items-center gap-2 border border-gray-300 px-3 rounded-full">
          <input
            type="text"
            placeholder="Search products"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-sm"
          />
        </div>

        {/* Login */}
        <button className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full">
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden"
      >
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md py-4 flex flex-col gap-3 px-5 text-sm sm:hidden z-50">

          <NavLink to="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>

          <button className="mt-2 px-6 py-2 bg-indigo-500 text-white rounded-full">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
