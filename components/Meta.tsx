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
  return (
    <>
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
      <meta
        name="og:image"
        content={`https://${
          process.env.NEXT_PUBLIC_VERCEL_URL
        }/api/og/${imageLayout}?title=${encodeURIComponent(
          image.title
        )}&description=${encodeURIComponent(image.description)}`}
      ></meta>
    </>
  );

  return null;
}
