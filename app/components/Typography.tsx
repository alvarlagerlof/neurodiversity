import { ElementType } from "react";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

function Base({ children, className, as, ...props }: BaseProps) {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}

function Title({ children, className = "", as = "h1", ...props }: BaseProps) {
  return (
    <Base
      as={as}
      className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5xl !leading-tight mb-4 ${className}`}
      {...props}
    >
      {children}
    </Base>
  );
}

function Subtitle({
  children,
  className = "",
  as = "h2",
  ...props
}: BaseProps) {
  return (
    <Base
      as={as}
      className={`font-display font-medium text-xl md:text-2xl ${className}`}
      {...props}
    >
      {children}
    </Base>
  );
}

function Heading({ children, className = "", as = "h3", ...props }: BaseProps) {
  return (
    <Base
      as={as}
      className={`font-display font-semibold text-xl md:text-2xl mb-2 ${className}`}
      {...props}
    >
      {children}
    </Base>
  );
}

function Body({ children, className = "", as = "p", ...props }: BaseProps) {
  return (
    <Base
      as={as}
      className={`text-text-body dark:text-text-body-dark mb-4 ${className}`}
      {...props}
    >
      {children}
    </Base>
  );
}

const Typography = {
  Title,
  Subtitle,
  Heading,
  Body,
};

export { Typography };
