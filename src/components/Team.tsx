import { styles } from "./styles";
import { teamCard } from "@/assets";

import Image from "next/image";

const Team = () => {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-center min-h-screen bg-cover bg-no-repeat md:flex-col-reverse md:items-center md:justify-center md:gap-y-8 lg:flex-row-reverse lg:justify-center lg:items-center lg:gap-32 xl:flex-row-reverse xl:justify-center xl:items-center xl:gap-52 bg-white">
        {/* Left Section */}
        <button
          className={`block border-4 border-[#FB9E3C] text-[#FB9E3C] rounded-2xl px-4 py-2 lg:hidden w-[200px] h-[50px] sm:w-[250px] sm:h-[60px] md:w-[300px] md:h-[65px] 
    lg:w-[340px] lg:h-[73px] ${styles.paragrafText} md:${styles.paragrafText} lg:${styles.paragrafText} xl:${styles.paragrafText} mt-10 hover:bg-[#FB9E3C] hover:border-none hover:text-white`}
        >
          See More
        </button>
        <Image
          src={teamCard}
          alt=""
          className="w-[68%] md:w-[50%] lg:w-[38%] xl:w-[35%] pt-0"
        />

        {/* Right Section */}
        <div className="flex flex-col max-w-[600px] ">
          <div className="w-full flex-col flex items-center gap-y-8">
            <h1 className={`${styles.heroHeadText} flex justify-center`}>
              Portofolio Kami
            </h1>
            <p className={`${styles.paragrafText} text-center w-[85%]`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
              semper enim, at porttitor velit. Ut consequat enim nisl, vel
              rutrum nunc volutpat at. Mauris odio tellus, venenatis facilisis
              ligula.
            </p>
          </div>
          <div className="flex justify-center pt-9">
            <button
              className={`border-4 border-[#FB9E3C] rounded-2xl text-[#FB9E3C] 
    w-[200px] h-[50px] sm:w-[250px] sm:h-[60px] md:w-[300px] md:h-[65px] 
    lg:w-[340px] lg:h-[73px] ${styles.paragrafText} md:${styles.paragrafText} lg:${styles.paragrafText} xl:${styles.paragrafText} hidden lg:block hover:bg-[#FB9E3C] hover:border-none hover:text-white`}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

{
  /* <Image
  src={teamCard}
  alt="Contact Us"
  className=""
/> */
}
