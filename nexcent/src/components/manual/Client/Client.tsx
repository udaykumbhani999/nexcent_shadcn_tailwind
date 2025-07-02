
import Client1 from "@/assets/icons/Client1";
import Client2 from "@/assets/icons/Client2";
import Client3 from "@/assets/icons/Client3";
import Client4 from "@/assets/icons/Client4";
import Client5 from "@/assets/icons/Client5";
import Client6 from "@/assets/icons/Client6";
import Client7 from "@/assets/icons/Client7";
import { Typography } from "../Typography/Typography";

const Client = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 lg:gap-4 pt-8 lg:pt-10">
      <div className="flex flex-col items-center justify-between gap-2">
        <Typography variant="h2" children={"Our Clients"} />
        <Typography
          className="text-center"
          variant="p"
          children={"We have been working with some Fortune 500+ clients"}
        />
      </div>
      <div className="flex item-center justify-between flex-wrap w-full">
        <div className="lg:max-w-[48px] flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7 h-24">
          <Client1 />
        </div>
        <div className="lg:max-w-[48px] flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7 h-24">
          <Client2 />
        </div>
        <div className="lg:max-w-[48px] flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7 h-24">
          <Client3 />
        </div>
        <div className="lg:max-w-[48px] flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7 h-24">
          <Client4 />
        </div>
        <div className="lg:max-w-[48px] flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7 h-24">
          <Client5 />
        </div>
        <div className="lg:max-w-[48px] flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7 h-24">
          <Client6 />
        </div>
        <div className="lg:max-w-[48px] flex items-center justify-center w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/7 h-24">
          <Client7 />
        </div>
      </div>
    </div>
  );
};

export default Client;
