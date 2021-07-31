import { useMetadata } from "next-ogimage";

export default function OgImageLayout() {
  const { title, description } = useMetadata();

  return (
    <div className="w-[2000px] h-[1200px] bg-secondary py-44 px-32 flex flex-col justify-between">
      <img src="/logos/logomark-primary.svg" className="w-[900px]" alt="" />
      <div className="space-y-8">
        <h1 className="text-[11em] font-display font-extrabold leading-none">{title}</h1>
        <h2 className="text-[4.7em] font-medium leading-snug">{description}</h2>
      </div>
    </div>
  );
}
