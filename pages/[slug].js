import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Header from "components/Header";
import Heading from "components/Heading";
import Text from "components/Text";
import Section from "components/Section";
import List from "components/List";
import Meta from "components/Meta";
import Quote from "components/Quote";
import QuoteGroup from "components/QuoteGroup";
import WrongRight from "components/WrongRight";
import Definition from "components/Definition";
import DefinitionItem from "components/DefinitionItem";
import Image from "components/Image";
import ExternalLink from "components/ExternalLink";
import PreviewBanner from "components/PreviewBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "../components/ContentInset";
import Spacer from "../components/Spacer";
import Main from "../components/Main";

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
  Main,
  Meta,
  QuoteGroup,
  WrongRight,
  Definition,
  DefinitionItem,
  PreviewBanner,
};

export default function Doc({ frontMatter: { meta }, source }) {
  return (
    <Wrapper>
      <Meta {...meta} />
      <ContentInset size="normal">
        <Spacer>
          <MDXRemote components={components} {...source} />
        </Spacer>
      </ContentInset>
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
