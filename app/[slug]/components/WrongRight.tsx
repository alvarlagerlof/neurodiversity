import Image from "next/image";

import { Typography } from "../../components/Typography";
import check from "./icons/check.svg";
import cross from "./icons/cross.svg";

interface WrongRightProps {
  title: string;
  wrong: React.ReactNode;
  right: React.ReactNode;
}

export function WrongRight({ title, wrong, right }: WrongRightProps) {
  return (
    <section className="space-y-8 sm:rounded-xl bg-white dark:bg-card-dark shadow-sm px-4 py-8 sm:py-4 -mx-4">
      <div>
        <IconHeading variant="cross" alt="Cross icon">
          {title} is not:
        </IconHeading>
        {wrong}
      </div>

      <div>
        <IconHeading variant="check" alt="Check icon">
          {title} is:
        </IconHeading>
        {right}
      </div>
    </section>
  );
}

interface IconHeadingProps {
  variant: "cross" | "check";
  alt: string;
  children: React.ReactNode;
}

function IconHeading({ variant, alt, children }: IconHeadingProps) {
  return (
    <div className="flex flex-row space-x-2 mb-0">
      <Image
        src={variant == "cross" ? cross : check}
        alt={alt}
        width={24}
        height={24}
      />
      <Typography.Heading className="mb-0!">{children}</Typography.Heading>
    </div>
  );
}
