import { aboutImg } from "@/assets";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="h-auto md:h-[57vh] p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold flex justify-center my-12 md:my-20">
          Tentang Kami
        </h1>
        <div className="flex flex-col lg:flex-row mx-4 md:mx-12 lg:mx-[200px] mt-8 md:mt-12 items-center gap-8 lg:gap-0">
          {/* Konten Teks */}
          <div className="flex flex-col gap-6 md:gap-10 lg:gap-14 text-center lg:text-left">
            <p className="text-base md:text-lg lg:text-xl max-w-full md:max-w-[80%] lg:max-w-[70%] mx-auto lg:mx-0">
              Kodeintekno adalah Creative Digital Agency yang menyediakan solusi
              digital untuk mendukung pertumbuhan bisnis Anda. Kami menawarkan
              layanan seperti pengembangan website, desain grafis, pemasaran
              digital, dan pembuatan konten yang kreatif dan efektif.
            </p>
            <p className="text-base md:text-lg lg:text-xl max-w-full md:max-w-[80%] lg:max-w-[70%] mx-auto lg:mx-0">
              Dengan pendekatan inovatif dan teknologi terbaru, Kodeintekno
              membantu Anda mencapai tujuan bisnis melalui solusi digital yang
              tepat dan terintegrasi.
            </p>
          </div>

          {/* Gambar */}
          <Image
            className="w-[300px] md:w-[450px] lg:w-[594px] h-auto mx-auto lg:mx-0 order-first lg:order-last"
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
