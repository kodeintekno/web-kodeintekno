import Image from "next/image";
import { aboutImg } from "@/assets";
import { styles } from "./styles";

const About = () => {
  return (
    <div className="h-auto  mb-10 py-20" id="about">
      <div className="flex flex-col lg:flex-row-reverse mx-4 md:mx-12 lg:mx-[200px] mt-8 md:mt-12 items-center gap-8 lg:gap-16">
        {/* Text Content */}
        <div className="flex flex-col md:gap-2 lg:gap-4 text-center lg:text-right items-center lg:items-end basis-3/4">
          <h1 className={` ${styles.heroHeadText}`}>Tentang Kami</h1>
          <p className={`${styles.paragrafText} text-gray-700`}>
            <span className="font-bold">Kodeintekno</span> adalah mitra
            strategis Anda dalam transformasi digital, menghadirkan solusi
            inovatif yang menggabungkan kreativitas, teknologi terkini, dan
            pendekatan strategis. Dengan layanan seperti pengembangan website,
            desain grafis, dan pemasaran digital, kami membantu bisnis Anda
            tumbuh dan beradaptasi di era modern. Bersama Kodeintekno, wujudkan
            transformasi digital yang berdampak nyata bagi kesuksesan Anda.
          </p>
        </div>

        {/* Image Section */}
        <Image
          className="w-[250px] md:w-[300px] lg:w-[350px] h-auto mx-auto lg:mx-0 lg:order-last basis-1/4 "
          src={aboutImg}
          alt="Tentang Kami Image"
        />
      </div>
    </div>
  );
};

export default About;
