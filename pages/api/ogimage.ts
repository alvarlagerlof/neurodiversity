import { NextApiRequest, NextApiResponse } from "next";
import screenshot from "lib/screenshot";

export default async function ticketImages(req: NextApiRequest, res: NextApiResponse) {
  const url = `https://${
    process.env.NEXT_PUBLIC_VERCEL_URL
  }/ogimage/?title=${req.query.title.toString()}&description=${req.query.description.toString()}`;
  const cacheSeconds = 7 * 24 * 60 * 60;

  const file = await screenshot(url);
  res.setHeader("Content-Type", `image/png`);
  res.setHeader(
    "Cache-Control",
    `public, immutable, no-transform, s-maxage=${cacheSeconds}, max-age=${cacheSeconds}`
  );
  res.statusCode = 200;
  res.end(file);
}
