import { allPages } from "contentlayer/generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { MDX } from "./components/Mdx";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = allPages.find((page) => page.slug === params.slug);

  if (!page || !page.meta) notFound();

  return {
    title: `${page.meta.title} - Neurodiversity.wiki`,
    description: `${page.meta.description} Learn more here.`,
    openGraph: {
      title: `${page.meta.title} - Neurodiversity.wiki`,
      description: `${page.meta.description} Learn more here.`,
      images: `https://${
        process.env.NEXT_PUBLIC_VERCEL_URL
      }/api/og/default?title=${encodeURIComponent(
        `${page.meta.title}`
      )}&description=${encodeURIComponent(
        `${page.meta.description} Learn more here.`
      )}`,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page = allPages.find((page) => page.slug === params.slug);

  if (!page) notFound();

  return (
    // @ts-ignore Async component
    <MDX source={page.body.raw} />
  );
}

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug,
  }));
}
