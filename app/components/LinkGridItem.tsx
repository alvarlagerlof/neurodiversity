"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import arrowDark from "../../public/icons/arrow-dark.svg";
import arrowLight from "../../public/icons/arrow-light.svg";
import { Bounce } from "./Bounce";
import { Typography } from "./Typography";

interface Props {
  href: string;
  title: string;
  description: string;
}

export function LinkGridItem({ href, title, description }: Props) {
  const link = useRef<HTMLAnchorElement | null>(null);

  return (
    <li>
      <Bounce amount={1.04} className="w-full h-full">
        <div
          onClick={(e) => {
            if (link.current && link.current !== e.target) {
              link.current.click();
            }
          }}
          className={`
                h-full w-full flex flex-row items-start space-x-2 rounded-xl p-4 bg-white dark:bg-card-dark ring-primary transition
                shadow
                hover:shadow-md
                outline-none focus-visible:ring cursor-pointer`}
        >
          <Image
            src={arrowLight}
            className="w-6 md:w-7 dark:hidden"
            alt=""
            aria-hidden
          />
          <Image
            src={arrowDark}
            className="w-6 md:w-7 hidden dark:block"
            alt=""
            aria-hidden
          />

          <div>
            <Typography.Heading className="mb-1">
              <Link href={href} ref={link}>
                {title}
              </Link>
            </Typography.Heading>
            <Typography.Body className="!mb-0">{description}</Typography.Body>
          </div>
        </div>
      </Bounce>
    </li>
  );
}
