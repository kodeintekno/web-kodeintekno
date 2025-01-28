"use client";

import Image from "next/image";
import { useState } from "react";
import { kodeinTeknoLogo } from "@/assets";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed inset-x-0 z-20">
      <div className="container mx-auto px-4 flex justify-between items-center py-6">
        {/* Logo */}
        <div className="flex items-center max-w-40">
          <Link
            href="/"
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image src={kodeinTeknoLogo} alt="logo-nav" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <a href="#hero" className="hover:text-orange-500">
              Beranda
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-orange-500">
              Tentang
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-orange-500">
              Layanan
            </a>
          </li>
          {/* <li>
            <a href="#" className="hover:text-orange-500">
              Portofolio
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="hover:text-orange-500">
              Testimoni
            </a>
          </li> */}
          <li>
            <a href="#contact" className="hover:text-orange-500">
              Kontak
            </a>
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div
            className={`h-1 w-6 bg-gray-700 mb-1 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-gray-700 mb-1 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-1 w-6 bg-gray-700 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 text-gray-700 p-4">
            <li>
              <a
                href="#hero"
                className="block hover:text-orange-500"
                onClick={handleMenuClick}
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:text-orange-500"
                onClick={handleMenuClick}
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block hover:text-orange-500"
                onClick={handleMenuClick}
              >
                Layanan
              </a>
            </li>
            {/* <li>
              <a href="#" className="block hover:text-orange-500">
                Portofolio
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-orange-500">
                Testimoni
              </a>
            </li> */}
            <li>
              <a
                href="#contact"
                className="block hover:text-orange-500"
                onClick={handleMenuClick}
              >
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
