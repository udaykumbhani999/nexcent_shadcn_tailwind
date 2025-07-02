import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

import Nexcent from "../../../assets/icons/Nexcent";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/features", label: "Features" },
  { href: "/product", label: "Product" },
  { href: "/testimonial", label: "Testimonial" },
  { href: "/faq", label: "FAQ" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-grey pt-[22px] pb-[22px]">
      <div className="nav-container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Nexcent />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="hidden lg:flex items-center gap-[50px]">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link
                  to={link.href}
                  className={`text-black-foreground hover:font-bold hover:text-primary-foreground transition-colors ${
                    isActiveLink(link.href)
                      ? "font-bold text-primary-foreground"
                      : ""
                  }`}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-[14px]">
          <Button variant="link" size={"sm"}>
            Login
          </Button>
          <Button variant="default" size={"sm"}>
            Sign up
          </Button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden flex items-center p-0 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-black/40 lg:hidden">
            <div className="w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col">
              <button
                className="self-end mb-4 p-2"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-black-foreground text-lg font-medium hover:font-bold hover:text-primary-foreground transition-colors ${
                      isActiveLink(link.href)
                        ? "font-bold text-primary-foreground"
                        : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-1 pt-0">
                <Button
                  variant="link"
                  size={"sm"}
                  className="w-full flex align-item-start justify-start"
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  size={"sm"}
                  className="w-full flex align-item-start justify-start"
                >
                  Sign up
                </Button>
              </div>
            </div>
            {/* Click outside to close */}
            <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
