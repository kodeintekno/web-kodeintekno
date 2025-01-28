"use client";

import Image from "next/image";
import { kodeinTeknoLogo2, instagramLogo, facebookLogo } from "@/assets";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white px-10 py-10 lg:px-0 flex items-center flex-col">
      <div className="container flex flex-col lg:flex-row justify-between gap-10 mt-14 items-start">
        {/* Logo dan Alamat */}
        <Link
          href="/"
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image src={kodeinTeknoLogo2} alt="logo-nav" />
        </Link>
        <div>
          <h3 className="font-semibold text-xl mb-4">Alamat</h3>
          <p className="mt-4 text-lg font-light w-[340px]">
            Harvest City, Cluster Orchid A, Blok OA 12 No. 18, Ragemanunggal,
            Setu - Kabupaten Bekasi, Jawa Barat - 17320
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#hero" className="hover:underline text-lg font-light">
                Beranda
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-lg font-light">
                Tentang
              </a>
            </li>
            <li>
              <a href="#service" className="hover:underline text-lg font-light">
                Layanan
              </a>
            </li>
            <li>
              {/* <a href="#" className="hover:underline text-lg font-light">
                Team
              </a> */}
            </li>
            <li>
              <a href="#contact" className="hover:underline text-lg font-light">
                kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Kontak</h3>
          <ul className="space-y-2 text-lg font-light">
            <li>+62 821-7027-0241</li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Sosial Media</h3>
          <ul className="space-y-2 text-lg font-light">
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full">
                <Image src={facebookLogo} alt="" className="fill-white" />
              </span>
              <a
                href="https://www.facebook.com/profile.php?id=100090626140021"
                target="_blank"
                className="hover:underline"
              >
                Kodein Tekno
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full">
                <Image src={instagramLogo} alt="" />
              </span>
              <a
                href="https://www.instagram.com/kodeintekno/"
                className="hover:underline"
                target="_blank"
              >
                @kodeintekno
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 w-full text-center text-sm border-t border-gray-600 pt-4">
        ©2025 Kodeintekno | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
