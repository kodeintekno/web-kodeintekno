// import { heroImg } from "@/assets";
import { heroAsset, heroBg } from "@/assets";
import Image from "next/image";
// import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="bg-[#1B2735] flex justify-center items-center">
        <div
          className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 items-center"
          style={{ backgroundImage: `url(${heroBg})`, width: `100%` }}
        >
          {/* Left Section */}
          <div className="text-left text-white space-y-6">
            <h1 className="text-5xl font-bold text-[#ffb158]">
              Creative Digital Agency
            </h1>
            <p className="text-lg leading-relaxed">
              Tempat Anda Menemukan Berbagai Solusi Digital dan Teknologi
              Terbaik untuk Mendukung Pertumbuhan dan Kesuksesan Bisnis Anda!
            </p>
            <button className="px-6 py-3 bg-[#F59E0B] text-black font-semibold rounded-md shadow-md hover:bg-[#e58b06]">
              Mulai Konsultasi
            </button>
          </div>

          {/* Right Section */}
          <div className="relative">
            <Image
              src={heroAsset} // Ganti dengan URL gambar atau file yang sesuai
              alt="Creative Digital Agency"
              width={582}
              height={828}
              className="relative left-36 z-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
