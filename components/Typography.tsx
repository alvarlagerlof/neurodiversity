import { ElementType } from "react";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  margin?: number;
  as?: ElementType;
}

function Base({ children, className, margin, as, ...props }: BaseProps) {
  const Tag = as as keyof JSX.IntrinsicElements;
  const classNameWithMargin = `${className} mb-${margin}`;

  return (
    <Tag className={classNameWithMargin} {...props}>
      {children}
    </Tag>
  );
}

function Title({ children, className = "", margin = 4, as = "h1", ...props }: BaseProps) {
  return (
    <Base
      as={as}
      className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5xl ${className}`}
      margin={margin}
      {...props}
    >
      {children}
    </Base>
  );
}

function Subtitle({
  children,
  className = "",
  margin = 0,
  as = "h2",
  ...props
}: BaseProps) {
  return (
    <Base
      as={as}
      className={`font-display font-medium text-xl md:text-2xl ${className}`}
      margin={margin}
      {...props}
    >
      {children}
    </Base>
  );
}

function Heading({
  children,
  className = "",
  margin = 2,
  as = "h3",
  ...props
}: BaseProps) {
  return (
    <Base
      as={as}
      className={`font-display font-semibold text-xl md:text-2xl ${className}`}
      margin={margin}
      {...props}
    >
      {children}
    </Base>
  );
}

function Body({ children, className = "", margin = 4, as = "p", ...props }: BaseProps) {
  return (
    <Base as={as} className={`text-body ${className}`} margin={margin} {...props}>
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

export default Typography;
