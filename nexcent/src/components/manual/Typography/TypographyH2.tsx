interface TypographyH2Props {
  Heading2: string;
  className?: string;
}
export function TypographyH2({ Heading2, className }: TypographyH2Props) {
  return (
    <h2
      className={`text-2xl md:text-3xl lg:text-4xl font-semibold w-full md:max-w-[500px] lg:max-w-[601px] text-center text-secondary-foreground ${
        className ? ` ${className}` : ""
      }`}
    >
      {Heading2}
    </h2>
  );
}
