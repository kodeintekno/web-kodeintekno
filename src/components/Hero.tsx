import { heroImg } from "@/assets";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center bg-[#F5F5F5] h-auto lg:h-[70vh] lg:px-[200px]">
        {/* Konten Teks */}
        <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center lg:items-start text-center lg:text-left">
          <h1 className="font-bold text-3xl mt-10 md:text-4xl lg:text-6xl w-[65%] md:w-[55%] lg:w-[65%] leading-snug md:leading-relaxed lg:leading-tight">
            Profesional Creative Digital Agency
          </h1>
          <p className="text-base md:text-lg lg:text-xl w-[60%] md:w-[70%] lg:w-[65%] leading-7 lg:leading-8 mb-16">
            Cari semua kebutuhan konten digital dan teknologi untuk bisnis Anda
            hanya di <span className="font-bold">Kodeintekno!</span>
          </p>
          <Button className="rounded-3xl w-[160px] md:w-[190px] lg:w-[218px] h-[40px] md:h-[45px] lg:h-[50px] mb-16">
            Konsultasi Gratis
          </Button>
        </div>

        {/* Gambar */}
        <Image
          className="w-[420px] md:w-[800px] lg:w-[800px] h-auto mt-6 lg:mt-0"
          src={heroImg}
          alt="error gambar tidak bisa digunakan"
        />
      </div>
    </>
  );
};

export default Hero;
