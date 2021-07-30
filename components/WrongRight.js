import Image from "next/image";

export default function WrongRight({ title, wrong, right }) {
  return (
    <section className="space-y-8 rounded-xl bg-white shadow p-4 lg:-mx-4">
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
      <h3 className="font-display font-semibold text-2xl">{children}</h3>
    </div>
  );
}
