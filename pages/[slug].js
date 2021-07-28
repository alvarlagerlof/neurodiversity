import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Header from "components/blocks/Header";
import Heading from "components/blocks/Heading";
import Text from "components/blocks/Text";
import Section from "components/blocks/Section";
import List from "components/blocks/List";
import Meta from "components/blocks/Meta";
import Quote from "components/blocks/Quote";
import QuoteGroup from "components/blocks/QuoteGroup";
import Box from "components/blocks/Box";
import Definition from "components/blocks/Definition";
import DefinitionItem from "components/blocks/DefinitionItem";
import IconHeading from "components/blocks/IconHeading";
import PageGrid from "components/blocks/PageGrid";
import PageLink from "components/blocks/PageLink";
import Image from "components/blocks/Image";
import ExternalLink from "components/ExternalLink";
import PreviewBanner from "components/PreviewBanner";
import Wrapper from "components/Wrapper";

import { getPageBySlug, getAllPages, getPublishedPages } from "lib/content";
import { isPreview } from "lib/env";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  ul: List.Unordered,
  ol: List.Ordered,
  a: ExternalLink,
  p: Text,
  blockquote: Quote,
  img: Image,
  Section,
  Header,
  IconHeading,
  Meta,
  QuoteGroup,
  Box,
  Definition,
  DefinitionItem,
  PageGrid,
  PageLink,
  PreviewBanner,
};

export default function Doc({ frontMatter: { meta }, source }) {
  return (
    <Wrapper>
      <Meta {...meta} />
      <MDXRemote components={components} {...source} />
    </Wrapper>
  );
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params.slug);
  const source = await serialize(page.content);

  return {
    props: {
      ...page,
      source,
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
