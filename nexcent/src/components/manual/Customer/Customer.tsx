
import { Image } from "../../../assets/images/Image";
import { Button } from "@/components/ui/button";
import Right from "@/assets/icons/Right";
import { Typography } from "../Typography/Typography";
const Customer = () => {
  return (
    <div className="flex gap-10 md:gap-5 lg:gap-2.5 flex-col lg:flex-row items-center justify-between pb-6 md:pb-8 pt-6 md:pt-8">
      <div className="img">
        <img src={Image.Association} alt="calender" />
      </div>
      <div className="w-full lg:max-w-[748px] flex flex-col items-center justify-center lg:items-start gap-5 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-2.5 lg:gap-4">
          <Typography
            className="min-w-[100%] text-center lg:text-start"
            variant="p"
            children={
              "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
            }
          />
          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="text-base sm:text-xl text-primary-foreground font-semibold">
              Tim Smith
            </h3>
            <Typography
              variant="p"
              children={"British Dragon Boat Racing Association"}
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="link"
            size={"default"}
            className=" text-base font-medium  rounded-none"
          >
            <a href="/client" className="flex items-center gap-2">
              Meet all customers{" "}
              <span className="fill-primary">
                <Right />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
