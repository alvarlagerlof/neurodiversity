import Bounce from "components/Bounce";
import { ElementType, forwardRef } from "react";

interface ButtonProps {
  as?: ElementType;
  className?: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  [x: string]: any;
}

const Button = forwardRef<HTMLDivElement, ButtonProps>(
  (
    {
      as = "button",
      className = "",
      variant = "primary",
      children,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const Tag = as as keyof JSX.IntrinsicElements;

    const baseStyle = `py-2 px-5 rounded-full font-medium ${className} `;
    const variants = {
      primary: `${baseStyle} bg-primary text-white`,
      secondary: `${baseStyle} bg-secondary`,
    };

    return (
      <div ref={ref}>
        <Bounce amount={1.1}>
          <Tag className={variants[variant]} {...props}>
            {children}
          </Tag>
        </Bounce>
      </div>
    );
  }
);

Button.displayName = "Button";

export default Button;
