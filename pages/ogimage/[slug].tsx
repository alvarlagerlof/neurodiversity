import { getPageBySlug, getAllPages, getPublishedPages } from "lib/content";
import { isPreview } from "lib/env";

export default function OgImage({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug);

  return {
    props: {
      ...page.frontMatter.meta,
    },
  };
}

export async function getStaticPaths() {
  const pages = (await isPreview())
    ? await getAllPages()
    : await getPublishedPages();

  return {
    paths: pages.map((page) => {
      return {
        params: {
          slug: page.slug,
        },
      };
    }),
    fallback: false,
  };
}
