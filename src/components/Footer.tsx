import Image from "next/image";
import { kodeinTeknoLogo2, instagramLogo, facebookLogo } from "@/assets"; // Sesuaikan dengan path logo Anda

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white px-10 py-10 lg:px-0 flex items-center flex-col">
      <div className="container flex flex-col lg:flex-row justify-between gap-10 mt-14 items-start">
        {/* Logo dan Alamat */}
        <a href="#hero">
          <Image
            src={kodeinTeknoLogo2}
            alt="Kodein Tekno"
            width={200}
            height={80}
          />
        </a>
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
            <li>+64 123 - 456 - 789</li>
            <li>+64 123 - 456 - 789</li>
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
              <a href="#" className="hover:underline">
                Kodeintekno
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full">
                <Image src={instagramLogo} alt="" />
              </span>
              <a href="#" className="hover:underline">
                @Kodein
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
