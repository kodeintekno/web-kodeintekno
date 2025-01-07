import {
  serviceBg,
  webDevelopment,
  digitalMarketing,
  grapichDesign,
  contentCreator,
} from "@/assets";
import Image from "next/image";
// import Image from "next/image";

const Service = () => {
  return (
    <>
      <div
        className="h-screen bg-slate-600 pt-[90px] flex flex-col items-center"
        style={{ background: `url(${serviceBg})` }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold text-center my-7 md:my-7 text-[#FFB158] mb-7">
          Layanan Kami
        </h1>
        <p className="text-xl md:text-lg lg:text-2xl max-w-full md:max-w-[80%] lg:max-w-[64%] lg:leading-10 text-center text-white mb-[50px]">
          Kami menyediakan berbagai layanan digital terpadu yang dirancang untuk
          mendukung perkembangan bisnis Anda, mulai dari pengembangan website
          hingga pemasaran digital.
        </p>
        <div className="flex gap-10">
          {/* first card */}
          <div className="flex flex-col items-center bg-white w-[350px] h-[480px] rounded-xl">
            <Image alt="" src={webDevelopment} className="w-[150px] mt-8" />
            <h1 className="font-semibold text-2xl my-5">
              Web Design Development
            </h1>
            <p className="text-xl w-[70%] text-center font-medium mb-5">
              Solusi website Responsif dan profesional untuk berbagai kebutuhan
              bisnis.
            </p>
            <a
              href="#"
              className="font-semibold text-base border-b-2 border-black"
            >
              Read More
            </a>
          </div>

          {/* second card */}
          <div className="flex flex-col items-center bg-white w-[350px] h-[480px] rounded-xl">
            <Image alt="" src={digitalMarketing} className="w-[140px] mt-8" />
            <h1 className="font-semibold text-2xl my-5">Digital Marketing</h1>
            <p className="text-xl w-[60%] text-center font-medium mb-5">
              Solusi pemasaran online yang efeltif dengan berbagai macam
              pendekatan.
            </p>
            <a
              href="#"
              className="font-semibold text-base border-b-2 border-black"
            >
              Read More
            </a>
          </div>

          {/* third card */}
          <div className="flex flex-col items-center bg-white w-[350px] h-[480px] rounded-xl">
            <Image alt="" src={grapichDesign} className="w-[250px] mt-14" />
            <h1 className="font-semibold text-2xl my-5">Grapich Design</h1>
            <p className="text-xl w-[70%] text-center font-medium mb-5">
              Desain visual kreatif yang mendukung branding dan identitas
              perusahaan
            </p>
            <a
              href="#"
              className="font-semibold text-base border-b-2 border-black"
            >
              Read More
            </a>
          </div>

          {/* fourth card */}
          <div className="flex flex-col items-center bg-white w-[350px] h-[480px] rounded-xl">
            <Image alt="" src={contentCreator} className="w-[170px] mt-12" />
            <h1 className="font-semibold text-2xl my-5">Content Creation</h1>
            <p className="text-xl w-[70%] text-center font-medium mb-5">
              Pembuatan konten berkualitas untuk media sosial dan kebutuhan
              pemasaran lainnya.
            </p>
            <a
              href="#"
              className="font-semibold text-base border-b-2 border-black"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
