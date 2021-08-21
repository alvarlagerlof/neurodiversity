import { useData } from "next-opengraph-image";

export default function OgImageLayout() {
  const { title, description } = useData({
    placeholder: {
      title: "Neurodiversity Wiki",
      description: "Learn about OCD, Autism, Bipolar, Anxiety, Depression and more.",
    },
  });

  return (
    <div className="w-[1200px] h-[630px] fixed top-0 left-0 bg-secondary py-20 px-24 flex flex-col justify-between">
      <img src="/logos/logomark-primary.svg" className="w-[500px]" alt="" />
      <div className="space-y-4">
        <h1 className="text-[6em] font-display font-extrabold leading-none">{title}</h1>
        <h2 className="text-[2.7em] font-medium leading-snug">{description}</h2>
      </div>
    </div>
  );
}
