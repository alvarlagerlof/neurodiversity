import { setBannerData } from "next-banner";
import Head from "next/head";

export default function Meta({ image, tags, appendTitle = true }) {
  setBannerData({
    custom: image,
  });

  return (
    <Head>
      <title>{`${tags.title}${appendTitle ? " - Neurodiveristy Wiki" : ""}`}</title>
      <meta name="description" content={tags.description} />
      <meta
        property="og:title"
        content={`${tags.title}${appendTitle ? " - Neurodiveristy Wiki" : ""}`}
      ></meta>
      <meta property="og:site_name" content="neurodiversity.wiki"></meta>
      <meta property="og:description" content={tags.sdescription}></meta>
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@alvarlagerlof"></meta>
      <meta name="twitter:creator" content="@alvarlagerlof"></meta>
    </Head>
  );
}
