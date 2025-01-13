"use client"; // Add this directive at the very top

import Image from "next/image";
import { useState } from "react";
import { kodeinTeknoLogo } from "@/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed inset-x-0 z-20">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center max-w-40">
          <Image src={kodeinTeknoLogo} alt="logo-nav" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <a href="#" className="hover:text-orange-500">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Layanan
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Team
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Portofolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Testimoni
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500">
              Kontak
            </a>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="h-1 w-6 bg-gray-700 mb-1"></div>
          <div className="h-1 w-6 bg-gray-700 mb-1"></div>
          <div className="h-1 w-6 bg-gray-700"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 text-gray-700 p-4">
            <li>
              <a href="#" className="block hover:text-orange-500">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-orange-500">
                Layanan
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-orange-500">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-orange-500">
                Portofolio
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-orange-500">
                Testimoni
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-orange-500">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
