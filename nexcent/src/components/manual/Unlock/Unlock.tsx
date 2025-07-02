import { Button } from "@/components/ui/button";
import { Image } from "../../../assets/images/Image";
import { Typography } from "../Typography/Typography";


const Unlock = () => {
  return (
    <div className="flex gap-10 md:gap-5 lg:gap-2.5 flex-col lg:flex-row items-center justify-between pt-8 md:pt-10">
      <div className="img">
        <img src={Image.Mobilelogin} alt="login" />
      </div>
      <div className="w-full lg:max-w-[601px] flex flex-col items-center justify-center lg:items-start gap-5 md:gap-6 lg:gap-8">
        <div className="flex flex-col gap-2.5 lg:gap-4">
          <Typography
            className="min-w-[100%] lg:text-start"
            variant="h2"
            children={"The unseen of spending three years at Pixelgrade"}
          />
          <Typography
            className="min-w-[100%] text-center lg:text-start"
            variant="p"
            children={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
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

export default Unlock;
