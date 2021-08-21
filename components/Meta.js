import Head from "next/head";

import { useOgImage } from "next-opengraph-image";

export default function Meta({ title, description }) {
  const ogImage = useOgImage();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:site_name" content="neurodiversity.wiki"></meta>
      <meta property="og:description" content={description}></meta>
      <meta {...ogImage}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@alvarlagerlof"></meta>
      <meta name="twitter:creator" content="@alvarlagerlof"></meta>
    </Head>
  );
}
