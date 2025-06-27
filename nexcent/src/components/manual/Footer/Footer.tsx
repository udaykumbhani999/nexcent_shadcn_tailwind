import Nexcentlogo from "@/assets/icons/Nexcentlogo";
import { TypographyP } from "../Typography/TypographyP";
import Instagram from "@/assets/icons/Instagram";
import Dribble from "@/assets/icons/Dribble";
import Twitter from "@/assets/icons/Twitter";
import Youtube from "@/assets/icons/Youtube";
import { Input } from "@/components/ui/input";
import Send from "@/assets/icons/Send";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[50px] md:gap-[80px] lg:gap-[125px] lg:flex-row min-h-[330px]">
      {/* Left section - Logo and social */}
      <div className="p-6 lg:p-8 lg:w-[30%]">
        <div className="flex flex-col gap-6 lg:gap-10">
          <a href="/" className="self-start">
            <Nexcentlogo />
          </a>
          <div className="text-white-foreground flex flex-col gap-2">
            <TypographyP
              className="text-grey"
              para_content={"Copyright © 2020 Nexcent ltd."}
            />
            <TypographyP
              className="text-grey"
              para_content={"All rights reserved"}
            />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center p-2 bg-white/20 rounded-full hover:bg-primary transition-colors"
            >
              <Instagram />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center p-2 bg-white/20 rounded-full hover:bg-primary transition-colors"
            >
              <Dribble />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center p-2 bg-white/20 rounded-full hover:bg-primary transition-colors"
            >
              <Twitter />
            </a>
            <a
              href="/"
              className="w-8 h-8 flex items-center justify-center p-2 bg-white/20 rounded-full hover:bg-primary transition-colors"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>

      {/* Right section - Navigation and newsletter */}
      <div className="p-6 lg:p-8 lg:w-[70%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Links */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h5 className="text-lg lg:text-xl text-white-foreground font-semibold">
              Company
            </h5>
            <div className="flex flex-col gap-2 lg:gap-3">
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                About Us
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Blog
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Contact us
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Testimonials
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h5 className="text-lg lg:text-xl text-white-foreground font-semibold">
              Support
            </h5>
            <div className="flex flex-col gap-2 lg:gap-3">
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Help center
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Terms of service
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Legal
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Privacy policy
              </a>
              <a
                href="/"
                className="text-sm lg:text-base text-grey hover:text-primary-foreground transition-colors"
              >
                Status
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4 lg:gap-6 md:col-span-2 lg:col-span-1">
            <h5 className="text-lg lg:text-xl text-white-foreground font-semibold">
              Stay up to date
            </h5>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Input
                  type="email"
                  className="placeholder:text-[#D9DBE1] text-primary-foreground bg-white/20 border-0 focus:ring-2 focus:ring-white/30 transition-all pr-12"
                  placeholder="Your email address"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  type="submit"
                  aria-label="Subscribe to newsletter"
                >
                 <Send />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
