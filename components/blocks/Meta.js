import Head from "next/head";

export default function Meta({ title, description }) {
  const ogImageUrl = `https://${
    process.env.NEXT_PUBLIC_VERCEL_URL
  }/ogimage/?${new URLSearchParams({ title, description }).toString()}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:site_name" content="neurodiversity.wiki"></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={ogImageUrl}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@alvarlagerlof"></meta>
      <meta name="twitter:creator" content="@alvarlagerlof"></meta>
    </Head>
  );
}
