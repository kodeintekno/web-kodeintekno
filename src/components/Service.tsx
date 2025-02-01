"use client";
import { cn } from "@/lib/utils";
import { CarouselApi } from "@/components/ui/carousel";
import { serviceData } from "@/data/constant";
import Card from "./Card";
import { styles } from "./styles";

import { serviceBg } from "@/assets";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// import Image from "next/image";

const Service = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-cover bg-no-repeat py-24"
      id="service"
      style={{ backgroundImage: `url(${serviceBg.src})` }}
    >
      <h1 className={` ${styles.heroHeadText}`}>Layanan Kami</h1>
      <p className={`${styles.paragrafText} text-white text-center pb-8`}>
        Kami menyediakan berbagai layanan digital terpadu yang dirancang untuk
        mendukung perkembangan bisnis Anda, mulai dari pengembangan website
        hingga pemasaran digital.
      </p>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4"> */}
      <Carousel
        className="w-full md:max-w-[620px] lg:max-w-[1200px] xl:max-w-[1650px]"
        setApi={setApi}
      >
        <CarouselContent className="px-8">
          {serviceData.map((data, index) => (
            <CarouselItem
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center"
              key={index}
            >
              <Card {...data} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="xl:hidden w-32 mx-auto flex justify-center gap-2 p-1rounded-l-full mt-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "size-3 rounded-full transition-colors duration-500",
              current - 1 === index ? "bg-white" : "bg-gray-700",
            )}
          ></div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Service;
