import React, { type JSX } from "react";

type TypographyVariant = "h1" | "h2" | "p";

interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const baseStyles: Record<TypographyVariant, string> = {
  h1: "text-3xl md:text-4xl lg:text-[64px] lg:leading-19 font-semibold w-full md:max-w-[450px] lg:max-w-[657px] text-secondary-foreground",
  h2: "text-2xl md:text-3xl lg:text-4xl font-semibold w-full md:max-w-[500px] lg:max-w-[601px] text-center text-secondary-foreground",
  p: "text-base font-normal text-dark-grey-foreground",
};

export function Typography({
  variant = "p",
  children,
  className = "",
}: TypographyProps) {
  const Tag = variant as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`${baseStyles[variant]}${className ? " " + className : ""}`}>
      {children}
    </Tag>
  );
}