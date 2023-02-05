import { allPages } from ".contentlayer/generated";
import Meta from "components/Meta";

export default function PageHead({ params }: { params: { slug: string } }) {
  const page = allPages.find((page) => page.slug == params.slug);

  if (!page) return null;

  return (
    <>
      <Meta
        image={{
          title: page.meta.title,
          description: `${page.meta.description} Learn more here.`,
        }}
        tags={{
          title: page.meta.title,
          description: `${page.meta.description} Learn more here.`,
        }}
      />
    </>
  );
}
