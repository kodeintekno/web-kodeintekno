"use client";
import { serviceData } from "@/data/constant";
import Card from "./ui/Card";
import { styles } from "./styles";

import { serviceBg } from "@/assets";
// import Image from "next/image";

const Service = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center bg-cover bg-no-repeat py-24"
      id="service"
      style={{ backgroundImage: `url(${serviceBg.src})` }}
    >
      <h1 className={` ${styles.heroHeadText}`}>Layanan Kami</h1>
      <p
        className={`${styles.paragrafText} text-white text-center pb-[70px] w-[60%] lg:w-[55%] xl:w-[48%]`}
      >
        Kami menyediakan berbagai layanan digital terpadu yang dirancang untuk
        mendukung perkembangan bisnis Anda, mulai dari pengembangan website
        hingga pemasaran digital.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-[50px] gap-y-[50px]">
        {serviceData.map((data, index) => (
          <Card {...data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Service;
