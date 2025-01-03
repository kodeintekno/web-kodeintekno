import { aboutImg } from "@/assets";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="h-auto md:h-[95vh] mb-10">
        <div className="flex flex-col lg:flex-row-reverse mx-4 md:mx-12 lg:mx-[200px] mt-8 md:mt-12 items-center gap-8 lg:gap-32 lg:mb-96">
          {/* Konten Teks */}
          <div className="flex flex-col md:gap-2 lg:gap-2 text-center lg:text-right items-end">
            <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold text-center my-7 md:my-7 underline underline-offset-[24px] text-[#FFB158]">
              Tentang Kami
            </h1>
            <p className="text-xl md:text-lg lg:text-2xl max-w-full md:max-w-[80%] lg:max-w-[90%] mx-auto lg:mx-0 lg:leading-9">
              <span className="font-bold">Kodeintekno</span> adalah mitra
              strategis Anda dalam transformasi digital. Kami menghadirkan
              solusi-solusi inovatif yang menggabungkan kreativitas dan
              teknologi terkini. Dengan portofolio layanan lengkap mulai dari
              pengembangan website, desain grafis, hingga pemasaran digital,
              kami membantu bisnis Anda mencapai pertumbuhan yang signifikan dan
              berkelanjutan.
            </p>
          </div>
          {/* Gambar */}
          <Image
            className="w-[300px] md:w-[450px] lg:w-[694px] h-auto mx-auto lg:mx-0 order-first lg:order-last"
            src={aboutImg}
            alt="error gambar tidak bisa digunakan"
          />
        </div>
      </div>
      {/* kodein tekno */}
    </>
  );
};

export default About;
