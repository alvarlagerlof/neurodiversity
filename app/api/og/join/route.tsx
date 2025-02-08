import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  try {
    const interMediumFont = fetch(
      new URL("../../../../assets/Inter-Medium.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());

    const description =
      "We're a small team working to educate the public through our crowd-sourced wiki. Join us to help contribute.";

    const interMediumFontData = await interMediumFont;

    return new ImageResponse(
      (
        <div tw="h-full w-full bg-[#FFEEE5] py-20 px-24 flex flex-col items-center">
          <img
            src={`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/logos/logomark-primary.svg`}
            tw="w-[500px]"
            alt=""
          />
          <img
            src={`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/backgrounds/join-hands.png`}
            className="translate-y-[-40px]"
            width={900}
            alt=""
          />
          <h2 tw="font-medium text-xl leading-snug text-center text-[40px]">
            {description}
          </h2>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interMediumFontData,
            style: "normal",
            weight: 500,
          },
        ],
      },
    );
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
