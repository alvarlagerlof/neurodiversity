import { setBannerData } from "next-banner";
import Head from "next/head";

interface MetaProps {
  image: {
    title: string;
    description: string;
  };
  imageLayout?: string;
  tags: {
    title: string;
    description: string;
  };
  appendTitle?: boolean;
}

export default function Meta({
  image,
  imageLayout = "default",
  tags,
  appendTitle = true,
}: MetaProps) {
  setBannerData({
    custom: image,
    layout: imageLayout,
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
      <meta property="og:description" content={tags.description}></meta>
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@alvarlagerlof"></meta>
      <meta name="twitter:creator" content="@alvarlagerlof"></meta>
    </Head>
  );
}
