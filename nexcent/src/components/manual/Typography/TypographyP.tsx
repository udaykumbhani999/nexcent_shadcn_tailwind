interface TypographyPProps {
  para_content: string;
  className?: string; // Optional className prop
}

export function TypographyP({ para_content, className }: TypographyPProps) {
  return (
    <p
      className={`text-base font-normal text-dark-grey-foreground ${
        className ? ` ${className}` : ""
      }`}
    >
      {para_content}
    </p>
  );
}
