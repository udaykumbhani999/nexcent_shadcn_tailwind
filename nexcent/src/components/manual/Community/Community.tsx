import Membership from "@/assets/icons/Membership";
import { TypographyH2 } from "../Typography/TypographyH2";
import { TypographyP } from "../Typography/TypographyP";
import Association from "@/assets/icons/Association";
import Clubgrp from "@/assets/icons/Clubgrp";

const Community = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-2 lg:gap-4 pt-8 lg:pt-10">
      <div className="flex flex-col items-center justify-between gap-2">
        <TypographyH2
          Heading2={"Manage your entire community in a single system"}
        />
        <TypographyP
          className="text-center"
          para_content={"We have been working with some Fortune 500+ clients"}
        />
      </div>
      <div className="flex item-center justify-between flex-wrap w-full">
        <div className="lg:max-w-[299px] shadow-md rounded-md flex flex-col gap-2 items-center justify-center w-1/1 md:w-1/2 lg:w-1/3 h-50 md:h-70 p-6">
          <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
            <span>
              <Membership />
            </span>
            <span className="text-xl md:text-2xl text-center font-bold text-secondary-foreground">
              Membership Organisations
            </span>
          </div>
          <TypographyP
            className="text-center"
            para_content={
              "Our membership management software provides full automation of membership renewals and payments"
            }
          />
        </div>
        <div className="lg:max-w-[299px] shadow-md rounded-md flex flex-col gap-2 items-center justify-center w-1/1 md:w-1/2 lg:w-1/3 h-50 md:h-70 p-6">
          <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
            <span>
              <Association />
            </span>
            <span className="text-xl md:text-2xl text-center font-bold text-secondary-foreground">
              Membership Organisations
            </span>
          </div>
          <TypographyP
            className="text-center"
            para_content={
              "Our membership management software provides full automation of membership renewals and payments"
            }
          />
        </div>
        <div className="lg:max-w-[299px] shadow-md rounded-md flex flex-col gap-2 items-center justify-center w-1/1 md:w-1/2 lg:w-1/3 h-50 md:h-70 p-6">
          <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
            <span>
              <Clubgrp />
            </span>
            <span className="text-xl md:text-2xl text-center font-bold text-secondary-foreground">
              Membership Organisations
            </span>
          </div>
          <TypographyP
            className="text-center"
            para_content={
              "Our membership management software provides full automation of membership renewals and payments"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
