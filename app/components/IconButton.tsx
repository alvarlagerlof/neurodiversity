import Image from "next/image";
import { ElementType, forwardRef } from "react";

import { Bounce } from "./Bounce";

interface IconButtonProps {
  as?: ElementType;
  className?: string;
  variant?: "primary" | "secondary";
  src: string;
  alt: string;
  badge: boolean;
  [x: string]: any;
}

const IconButton = forwardRef<HTMLDivElement, IconButtonProps>(
  (
    {
      as = "button",
      className = "",
      variant = "primary",
      badge = false,
      src,
      alt,
      ...props
    }: IconButtonProps,
    ref,
  ) => {
    const Tag = as as keyof JSX.IntrinsicElements;

    const baseStyle = `rounded-full block p-[7px] ${className}`;
    const variants = {
      primary: `${baseStyle} bg-primary`,
      secondary: `${baseStyle} bg-button-secondary-light dark:bg-button-secondary-dark`,
    };

    return (
      <div ref={ref} className="relative inline-flex flex-row items-center">
        <Bounce amount={1.1}>
          <Tag className={variants[variant]} {...props}>
            <Image src={src} alt={alt} width={24} height={24} />
            {badge && (
              <div
                className="absolute top-0 right-0 inline-flex items-center justify-center
                          w-3 h-3 bg-red-600 rounded-full
                          transform translate-x-1/4 -translate-y-1/4"
              />
            )}
          </Tag>
        </Bounce>
      </div>
    );
  },
);

IconButton.displayName = "IconButton";

export { IconButton };
