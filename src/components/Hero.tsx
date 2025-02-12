import { hero, heroBg } from "@/assets";
import Image from "next/image";
import { styles } from "./styles";

const Hero = () => {
  return (
    <div
      className="bg-[#1B2735] flex justify-center items-center bg-cover bg-no-repeat pt-20 md:pt-24 lg:pt-14 h-screen"
      id="hero"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="container mx-auto px-4 md:px-8 h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-2 sm:gap-20py-8">
        {/* Left Section */}
        <div className={`text-center lg:text-left text-white`}>
          <h1 className={`${styles.heroHeadText} `}>Creative Digital Agency</h1>

          <p className={`${styles.paragrafText} pb-8 sm:pb-16`}>
            Tempat Anda Menemukan Berbagai Solusi Digital dan Teknologi Terbaik
            untuk Mendukung Pertumbuhan dan Kesuksesan Bisnis Anda!
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 py-2 border-2 border-[#F59E0B] text-[#F59E0B] font-semibold rounded-full shadow-md hover:bg-gradient-to-r from-[#ffb158] to-[#f59e0b] hover:text-white transition duration-300 text-sm md:text-base lg:text-lg hover:border-transparent"
            >
              Mulai Konsultasi
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-full max-w-[1080px] aspect-square relative">
            <Image
              src={hero}
              alt="Gambar visual kreatif untuk Digital Agency"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
