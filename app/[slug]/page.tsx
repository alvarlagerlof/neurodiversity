import { allPages } from "contentlayer/generated";
import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";

import { MDX } from "./components/Mdx";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = allPages.find((page) => page.slug === params.slug);

  if (!page) notFound();

  const mdxSource = await serialize(page.body.raw);

  return (
    <div>
      <MDX source={mdxSource} />
    </div>
  );
}

export async function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.slug,
  }));
}
