import { heroImg } from "@/assets";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#F5F5F5] h-[70vh]">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-6xl w-[50%] leading-tight">
            Profesional Creative Digital Agency
          </h1>
          <p className="text-xl w-[55%] leading-8 pb-10">
            Cari semua kebutuhan konten digital dan teknologi untuk bisnis Anda
            hanya di <span className="font-bold">Kodeintekno!</span>
          </p>
          <Button className="rounded-3xl w-[218px] h-[50px]">
            Konsultasi Gratis
          </Button>
        </div>
        <Image
          className="w-[624px] h-[384px]"
          src={heroImg}
          alt="error gambar tidak bisa digunakan"
        />
      </div>
    </>
  );
};

export default Hero;
