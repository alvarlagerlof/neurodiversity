import Bounce from "components/Bounce";
import { ComponentType, ElementType } from "react";

interface ButtonProps {
  as?: ElementType;
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  [x: string]: any;
}

export default function Button({
  as = "button",
  className = "",
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const Tag = as as keyof JSX.IntrinsicElements;

  const baseStyle = `py-2 px-5 rounded-full font-medium ${className} `;
  const variants = {
    primary: `${baseStyle} bg-primary text-white`,
    secondary: `${baseStyle} bg-secondary`,
  };

  return (
    <Bounce amount={1.1}>
      <Tag className={variants[variant]} {...props}>
        {children}
      </Tag>
    </Bounce>
  );
}
