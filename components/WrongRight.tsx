import Image from "next/image";

import Typography from "components/Typography";

interface WrongRightProps {
  title: string;
  wrong: React.ReactNode;
  right: React.ReactNode;
}

export default function WrongRight({ title, wrong, right }: WrongRightProps) {
  return (
    <section className="space-y-8 sm:rounded-xl bg-white shadow px-4 py-8 sm:py-4 -mx-4 ">
      <div>
        <IconHeading url="/icons/cross.svg" alt="Cross icon">
          {title} is not:
        </IconHeading>
        {wrong}
      </div>

      <div>
        <IconHeading url="/icons/check.svg" alt="Check icon">
          {title} is:
        </IconHeading>
        {right}
      </div>
    </section>
  );
}

function IconHeading({ url, alt, children }) {
  return (
    <div className="flex flex-row space-x-2 mb-0">
      <Image src={url} alt={alt} width="24px" height="24px" />
      <Typography.Heading margin={0}>{children}</Typography.Heading>
    </div>
  );
}
