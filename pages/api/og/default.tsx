import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

const interMediumFont = fetch(
  new URL("../../../assets/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

const interExtraBoldFont = fetch(
  new URL("../../../assets/Inter-ExtraBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "Neurodiversity Wiki";

    const description = searchParams.has("description")
      ? searchParams.get("description")?.slice(0, 100)
      : "Learn about conditions like OCD, Autism, Bipolar, Anxiety, Dyslexia and more";

    const interMediumFontData = await interMediumFont;
    const interExtraBoldFontData = await interExtraBoldFont;

    return new ImageResponse(
      (
        <div tw="h-full w-full bg-[#FFEEE5] py-20 px-24 flex flex-col justify-between">
          <img
            src={`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/logos/logomark-primary.svg`}
            tw="w-[500px]"
            alt=""
          />
          <div tw="flex flex-col">
            <h1
              tw={
                title.length > 30
                  ? "text-[100px] font-display font-extrabold leading-[6rem]"
                  : "text-[80px] font-display font-extrabold leading-[5.2rem]"
              }
            >
              {title}
            </h1>
            <h2 tw="font-medium text-xl leading-snug text-[40px]">{description}</h2>
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
          {
            name: "Inter",
            data: interExtraBoldFontData,
            style: "normal",
            weight: 800,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
