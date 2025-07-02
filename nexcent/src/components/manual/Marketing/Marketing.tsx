
import { Image } from "../../../assets/images/Image";
import { Button } from "@/components/ui/button";
import Right from "@/assets/icons/Right";
import { Typography } from "../Typography/Typography";
const Marketing = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 pt-8 lg:pt-12 pb-8 lg:pb-12">
      <div className="flex flex-col items-center justify-between gap-2">
        <Typography variant="h2" children={"Caring is the new marketing"} />
        <Typography
          className="text-center w-full lg:max-w-[628px]"
          variant="p"
          children={
            "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
          }
        />
      </div>
      <div className="flex md:items-start item-center md:justify-center justify-between flex-wrap w-full gap-4 lg:gap-6">
        <div className="lg:max-w-[368px] flex flex-col items-center justify-center w-1/1 md:w-1/2 lg:w-1/3">
          <div className="flex items-center justify-center w-full">
            <img src={Image.MarketingFirst} alt="MarketingFirst" />
          </div>
          <div className="mt-[-88px] flex flex-col items-center justify-center gap-3 lg:gap-4 p-4 bg-grey rounded-md drop-shadow-xl/25 max-w-[250px] sm:max-w-[317px]">
            <Typography
              className="text-center text-dark-grey-foreground font-semibold"
              variant="p"
              children={
                "Creating Streamlined Safeguarding Processes with OneRen"
              }
            />
            <Button
              variant="link"
              size={"default"}
              className=" text-base font-medium  rounded-none text-center"
            >
              <a href="/client" className="flex items-center gap-2">
                Readmore
                <span className="fill-primary">
                  <Right />
                </span>
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:max-w-[368px] flex flex-col items-center justify-center w-1/1 md:w-1/2 lg:w-1/3">
          <div className="flex items-center justify-center">
            <img src={Image.MarketingFirst} alt="MarketingFirst" />
          </div>
          <div className="mt-[-88px] flex flex-col items-center justify-center gap-3 lg:gap-4 p-4 bg-grey rounded-md drop-shadow-xl/25 max-w-[250px] sm:max-w-[317px]">
            <Typography
              className="text-center text-dark-grey-foreground font-semibold"
              variant="p"
              children={
                "Creating Streamlined Safeguarding Processes with OneRen"
              }
            />
            <Button
              variant="link"
              size={"default"}
              className=" text-base font-medium  rounded-none text-center"
            >
              <a href="/client" className="flex items-center gap-2">
                Readmore
                <span className="fill-primary">
                  <Right />
                </span>
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:max-w-[368px] flex flex-col items-center justify-center w-1/1 md:w-1/2 lg:w-1/3">
          <div className="flex items-center justify-center">
            <img src={Image.MarketingFirst} alt="MarketingFirst" />
          </div>
          <div className="mt-[-88px] flex flex-col items-center justify-center gap-3 lg:gap-4 p-4 bg-grey rounded-md drop-shadow-xl/25 max-w-[250px] sm:max-w-[317px]">
            <Typography
              className="text-center text-dark-grey-foreground font-semibold"
              variant="p"
              children={
                "Creating Streamlined Safeguarding Processes with OneRen"
              }
            />
            <Button
              variant="link"
              size={"default"}
              className=" text-base font-medium  rounded-none text-center"
            >
              <a href="/client" className="flex items-center gap-2">
                Readmore
                <span className="fill-primary">
                  <Right />
                </span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
