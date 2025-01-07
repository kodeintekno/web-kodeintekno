import { heroAsset, heroBg } from "@/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="bg-[#1B2735] flex justify-center items-center bg-cover bg-no-repeat pt-14 h-screen"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container mx-auto px-4 md:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        {/* Left Section */}
        <div className="text-center lg:text-left text-white space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ffb158]">
            Creative Digital Agency
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-[650px] mx-auto lg:mx-0">
            Tempat Anda Menemukan Berbagai Solusi Digital dan Teknologi Terbaik
            untuk Mendukung Pertumbuhan dan Kesuksesan Bisnis Anda!
          </p>
          <div>
            <button className="px-6 py-3 bg-[#F59E0B] text-black font-semibold rounded-full shadow-md hover:bg-[#e58b06] text-lg md:text-xl lg:text-2xl">
              Mulai Konsultasi
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-64 h-96 md:w-96 md:h-96 lg:w-[582px] lg:h-[828px] relative">
            <Image
              src={heroAsset}
              alt="Creative Digital Agency"
              layout="fill"
              className="z-10 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
