import { ScreenshotCanvas, useBannerData } from "next-banner";

export default function BannerLayout() {
  const {
    custom: {
      title = "Join us",
      description = "We're a small team working to educate the public through our crowd-sourced wiki. Join us to help contribute.",
    },
  } = useBannerData();

  return (
    <ScreenshotCanvas>
      <div className="h-full w-full bg-secondary py-20 px-24 flex flex-col justify-center items-center">
        <img src="/logos/logomark-primary.svg" className="w-[500px]" alt="" />
        <img
          src="/backgrounds/join-hands.png"
          className="translate-y-[-40px]"
          width={900}
          alt=""
        />
        <h2 className="text-[2.7em] font-medium leading-snug text-center translate-y-[-20px]">
          {description}
        </h2>
      </div>
    </ScreenshotCanvas>
  );
}
