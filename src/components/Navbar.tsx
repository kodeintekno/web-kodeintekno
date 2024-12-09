"use client";
import { menuItem } from "@/constants/data";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-[220px] bg-slate-600 h-16">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white">LOGO</h1>

      {/* Hamburger Button */}
      <button className="md:hidden text-white text-3xl" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex bg-slate-600 md:bg-transparent flex-col md:flex-row items-center md:gap-8 font-semibold text-lg md:text-xl transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {menuItem.map((item, index) => (
          <li
            key={index}
            className="p-4 md:p-0 text-white hover:text-gray-300 cursor-pointer"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
