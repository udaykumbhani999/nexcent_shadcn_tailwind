import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Image } from "@/assets/images/Image";
import { TypographyH1 } from "../Typography/TypographyH1";
import { TypographyP } from "../Typography/TypographyP";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);

  // Listen for slide changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // Set initial state

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const slides = [0, 1, 2]; // 3 slides

  return (
    <div className="relative">
      <Carousel setApi={setEmblaApi} className="w-full">
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

      {/* Carousel Dots */}
      <div className="flex justify-center mt-4 mb-4 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              selectedIndex === index
                ? "bg-primary scale-110"
                : "bg-primary/30 hover:bg-primary/70"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
