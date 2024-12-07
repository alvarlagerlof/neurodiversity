import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  try {
    const interMediumFont = fetch(
      new URL("../../../../assets/Inter-Medium.ttf", import.meta.url),
    ).then((res) => res.arrayBuffer());

    const description =
      "Learn about Autism, OCD, Bipolar, ADHD, Dyslexia and more on this crowdsourced guide.";

    const interMediumFontData = await interMediumFont;

    return new ImageResponse(
      (
        <div tw="h-full w-full bg-[#FFEEE5] flex flex-row justify-between">
          <div tw="flex flex-col justify-between h-full py-20 px-24 w-[800px]">
            <img
              src={`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/logos/logomark-primary.svg`}
              tw="w-[500px]"
              alt=""
            />
            <h2 tw="font-medium leading-snug text-[38px]">{description}</h2>
          </div>

          <div tw="flex h-full bg-[#874f34]">
            <img
              src={`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/backgrounds/neuron.png`}
              className="w-full h-full object-contain"
              alt=""
              width="370px"
              height="500px"
            />
          </div>
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
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
