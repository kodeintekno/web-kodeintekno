import Image from "next/image";
import { aboutImg } from "@/assets"; 

const About = () => {
  return (
    <div className="h-auto md:h-[95vh] mb-10" id="about">
      <div className="flex flex-col lg:flex-row-reverse mx-4 md:mx-12 lg:mx-[200px] mt-8 md:mt-12 items-center gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="flex flex-col md:gap-2 lg:gap-2 text-center lg:text-right items-center lg:items-end flex-2">
          <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold text-center my-7 md:my-7 underline underline-offset-[24px] text-[#FFB158]">
            Tentang Kami
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-full md:max-w-[80%] lg:max-w-[90%] mx-auto lg:mx-0 lg:leading-9">
            <span className="font-bold">Kodeintekno</span> adalah mitra strategis Anda dalam transformasi digital. Kami menghadirkan solusi-solusi inovatif yang menggabungkan kreativitas dan teknologi terkini. Dengan portofolio layanan lengkap mulai dari pengembangan website, desain grafis, hingga pemasaran digital, kami membantu bisnis Anda mencapai pertumbuhan yang signifikan dan berkelanjutan.
          </p>
        </div>

        {/* Image Section */}
        <Image
          className="w-[300px] md:w-[450px] lg:w-[694px] h-auto mx-auto lg:mx-0 order-first lg:order-last flex-1"
          src={aboutImg}
          alt="Tentang Kami Image"
        />
      </div>
    </div>
  );
};

export default About;
