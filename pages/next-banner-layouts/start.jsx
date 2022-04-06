import { ScreenshotCanvas, useBannerData } from "next-banner";

export default function BannerLayout() {
  const {
    custom: {
      title = "Neurodiversity Wiki",
      description = "Learn about Autism, OCD, Bipolar, ADHD, Dyslexia and more on this crowdsourced guide.",
    },
  } = useBannerData();

  return (
    <ScreenshotCanvas>
      <div className="flex h-full flex-row">
        <div className="h-full bg-secondary px-24 flex flex-row">
          <div className="flex flex-col justify-center space-y-16">
            {/* <img src="/logos/logo-primary.svg" className="w-[80px]" alt="" /> */}

            <img src="/logos/logomark-primary.svg" width={460} alt="" />

            <h2 className="text-[2.5em] font-medium leading-snug">{description}</h2>

            {/* <h1 className="text-[4.5em] font-display font-extrabold leading-[5rem]">
            {title}
          </h1> */}
          </div>
        </div>
        <div className="bg-[#874f34] w-[1400px]">
          <img
            src="/backgrounds/neuron.png"
            className="w-full h-full object-contain;"
            alt=""
          />
        </div>
      </div>
    </ScreenshotCanvas>
  );
}
