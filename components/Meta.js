import Head from "next/head";

import { useOgImage } from "next-opengraph-image";

export default function Meta({ image, tags, appendTitle = true }) {
  const ogImage = useOgImage({
    baseUrl: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    data: image,
  });

  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="description" content={tags.description} />
      <meta
        property="og:title"
        content={`${tags.title}${appendTitle ? " - Neurodiveristy Wiki" : ""}`}
      ></meta>
      <meta property="og:site_name" content="neurodiversity.wiki"></meta>
      <meta property="og:description" content={tags.sdescription}></meta>
      <meta property="og:type" content="website" />
      <meta {...ogImage}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@alvarlagerlof"></meta>
      <meta name="twitter:creator" content="@alvarlagerlof"></meta>
    </Head>
  );
}
