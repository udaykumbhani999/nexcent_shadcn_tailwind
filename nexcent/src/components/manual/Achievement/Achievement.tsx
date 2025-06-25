import Count from "@/assets/icons/Count";
import { TypographyP } from "../Typography/TypographyP";
import Clubs from "@/assets/icons/Clubs";
import Events from "@/assets/icons/Events";
import Payments from "@/assets/icons/Payments";

const Achievement = () => {
  return (
    <div className="flex gap-10 md:gap-5 lg:gap-2.5 flex-col lg:flex-row items-center justify-between pt-8 md:pt-16 pb-8 md:pb-16">
      <div className="w-full lg:max-w-[540px] flex flex-col items-center justify-center lg:items-start gap-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold w-full lg:max-w-[408px] text-center lg:text-start text-secondary-foreground">
          Helping a local{" "}
          <span className="text-primary-foreground">
            business reinvent itself
          </span>
        </h2>
        <TypographyP
          className="text-black-foreground"
          para_content={"We reached here with our hard work and dedication"}
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full lg:max-w-[540px] gap-10">
        <div className="flex flex-col sm:flex-row gap-7 items-center justify-center lg:justify-between w-full">
          <div className="flex items-center gap-1.5 min-w-[200px] lg:min-w-[255px]">
            <span>
              <Count />
            </span>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-secondary-foreground">
                2,245,341
              </span>
              <span className="text-base font-normal text-dark-grey-foreground">
                Members
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 min-w-[200px] lg:min-w-[255px]">
            <span>
              <Clubs />
            </span>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-secondary-foreground">
                46,328
              </span>
              <span className="text-base font-normal text-dark-grey-foreground">
                Clubs
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-7 items-center justify-center lg:justify-between w-full">
          <div className="flex items-center gap-1.5 min-w-[200px] lg:min-w-[255px]">
            <span>
              <Events />
            </span>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-secondary-foreground">
                828,867
              </span>
              <span className="text-base font-normal text-dark-grey-foreground">
                Event Bookings
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 min-w-[200px] lg:min-w-[255px]">
            <span>
              <Payments />
            </span>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-secondary-foreground">
                1,926,436
              </span>
              <span className="text-base font-normal text-dark-grey-foreground">
                Payments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
