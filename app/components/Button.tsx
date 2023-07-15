import { ElementType, forwardRef } from "react";

import { Bounce } from "./Bounce";

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
    ref,
  ) => {
    const Tag = as as keyof JSX.IntrinsicElements;

    const baseStyle = `py-2 px-5 rounded-full font-medium ${className} `;
    const variants = {
      primary: `${baseStyle} bg-button-primary-light dark:bg-button-primary-dark text-text-dark`,
      secondary: `${baseStyle} bg-button-secondary-light dark:bg-button-secondary-dark text-text-light`,
    };

    return (
      <div ref={ref}>
        <Bounce amount={1.1}>
          <Tag {...props} className={variants[variant]}>
            {children}
          </Tag>
        </Bounce>
      </div>
    );
  },
);

Button.displayName = "Button";

export { Button };
