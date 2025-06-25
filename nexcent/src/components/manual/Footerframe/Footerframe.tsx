import Right from "@/assets/icons/Right";
import { Button } from "@/components/ui/button";

const Footerframe = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 pt-6 lg:pt-8 pb-6 lg:pb-8">
      <h1 className="text-3xl md:text-4xl lg:text-[64px] lg:leading-19 font-semibold text-center w-full md:max-w-[700px] lg:max-w-[887px] text-light-black-foreground">
        Pellentesque suscipit fringilla libero eu.
      </h1>
      <div className="flex items-center gap-4">
        <Button
          variant="default"
          size={"default"}
          className=" text-base font-medium  rounded-none"
        >
          Get a Demo{" "}
          <span className="fill-primary">
            <Right />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default Footerframe;
