import { ScreenshotCanvas, useBannerData } from "next-banner";

export default function BannerLayout() {
  const {
    custom: {
      title = "Neurodiversity Wiki",
      description = "Learn about conditions like OCD, Autism, Bipolar, Anxiety, Dyslexia and more.",
    },
  } = useBannerData();

  return (
    <ScreenshotCanvas>
      <div className="h-full w-full bg-secondary py-20 px-24 flex flex-col justify-between">
        <img src="/logos/logomark-primary.svg" className="w-[500px]" alt="" />
        <div className="space-y-4">
          <h1 className="text-[5.7em] font-display font-extrabold leading-none">
            {title}
          </h1>
          <h2 className="text-[2.7em] font-medium leading-snug">{description}</h2>
        </div>
      </div>
    </ScreenshotCanvas>
  );
}
