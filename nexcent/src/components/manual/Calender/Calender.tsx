import { Button } from "@/components/ui/button";
import { Image } from "../../../assets/images/Image";
import { TypographyP } from "../Typography/TypographyP";
import { TypographyH2 } from "../Typography/TypographyH2";
const Calender = () => {
  return (
    <div className="flex gap-10 md:gap-5 lg:gap-2.5 flex-col lg:flex-row items-center justify-between pt-8 md:pt-10">
      <div className="img">
        <img src={Image.Unlocking} alt="calender" />
      </div>
      <div className="w-full lg:max-w-[601px] flex flex-col items-center justify-center lg:items-start gap-5 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-2.5 lg:gap-4">
          <TypographyH2
            className="min-w-[100%] lg:text-start"
            Heading2={"How to design your site footer like we did"}
          />
          <TypographyP
            className="min-w-[100%] text-center lg:text-start"
            para_content={
              "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
            }
          />
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="default"
            size={"default"}
            className=" text-base font-medium  rounded-none"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calender;
