// import React from "react";
import { Button } from "@/components/ui/button";
import { Image } from "@/assets/images/Image";
import { TypographyH1 } from "../Typography/TypographyH1";
import { TypographyP } from "../Typography/TypographyP";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
const Hero = () => {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        <CarouselItem>
          <div className="flex gap-10 md:gap-5 lg:gap-2.5 flex-col md:flex-row items-center justify-between pt-12 lg:pt-24 pb-12 lg:pb-24">
            <div className="w-full md:max-w-[450px] lg:max-w-[657px] flex flex-col gap-5 md:gap-6 lg:gap-8">
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <TypographyH1 />
                <TypographyP
                  para_content={
                    "Where to grow your business as a photographer: site or social media?"
                  }
                />
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="default"
                  size={"default"}
                  className=" text-base font-medium  rounded-none"
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="img">
              <img src={Image.Banner} alt="hero" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex gap-10 md:gap-5 lg:gap-2.5 flex-col md:flex-row items-center justify-between pt-12 lg:pt-24 pb-12 lg:pb-24">
            <div className="w-full md:max-w-[450px] lg:max-w-[657px] flex flex-col gap-5 md:gap-6 lg:gap-8">
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <TypographyH1 />
                <TypographyP
                  para_content={
                    "Where to grow your business as a photographer: site or social media?"
                  }
                />
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="default"
                  size={"default"}
                  className=" text-base font-medium  rounded-none"
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="img">
              <img src={Image.Banner} alt="hero" />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex gap-10 md:gap-5 lg:gap-2.5 flex-col md:flex-row items-center justify-between pt-12 lg:pt-24 pb-12 lg:pb-24">
            <div className="w-full md:max-w-[450px] lg:max-w-[657px] flex flex-col gap-5 md:gap-6 lg:gap-8">
              <div className="flex flex-col gap-2.5 lg:gap-4">
                <TypographyH1 />
                <TypographyP
                  para_content={
                    "Where to grow your business as a photographer: site or social media?"
                  }
                />
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="default"
                  size={"default"}
                  className=" text-base font-medium  rounded-none"
                >
                  Register
                </Button>
              </div>
            </div>
            <div className="img">
              <img src={Image.Banner} alt="hero" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default Hero;
