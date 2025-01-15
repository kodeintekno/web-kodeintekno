import { serviceData } from "@/data/constant";
import Card from "./Card";

import { serviceBg } from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import Image from "next/image";

const Service = () => {
  return (
    <div
      className="min-h-screen pt-[90px] flex flex-col items-center bg-cover bg-no-repeat pb-[90px] lg:"
      id="service"
      style={{ backgroundImage: `url(${serviceBg.src})` }}
    >
      <h1 className="text-4xl md:text-5xl lg:text-[65px] font-bold text-center my-7 text-[#FFB158] mb-7">
        Layanan Kami
      </h1>
      <p className="text-xl md:text-lg lg:text-2xl max-w-full md:max-w-[80%] lg:max-w-[64%] lg:leading-10 text-center text-white mb-[50px]">
        Kami menyediakan berbagai layanan digital terpadu yang dirancang untuk
        mendukung perkembangan bisnis Anda, mulai dari pengembangan website
        hingga pemasaran digital.
      </p>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4"> */}
      <Carousel className="w-full max-w-[351px] md:max-w-[716px] lg:max-w-[1555px] ">
        <CarouselContent>
          {serviceData.map((data, index) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/4 flex justify-center"
              key={index}
            >
              <Card {...data} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="flex lg:hidden" />
        <CarouselNext className="flex lg:hidden" />
      </Carousel>
      {/* </div> */}
    </div>
  );
};

export default Service;
