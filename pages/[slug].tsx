import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

import Header from "components/Header";
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
import DocLinkBanner from "components/DocLinkBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "components/ContentInset";
import VerticalSpacer from "components/VerticalSpacer";
import Main from "components/Main";
import Typography from "components/Typography";

import { getPageBySlug, getAllPages } from "lib/content";

const components = {
  h1: Typography.Title,
  h2: Typography.Heading,
  ul: List.Unordered,
  ol: List.Ordered,
  a: ExternalLink,
  p: Text,
  blockquote: Quote,
  img: Image,
  Quote,
  Section,
  Header,
  Main,
  Meta,
  QuoteGroup,
  WrongRight,
  Definition,
  DefinitionItem,
  DocLinkBanner,
};

export default function Doc({ frontMatter: { meta }, source }) {
  return (
    <Wrapper>
      <Meta
        image={{
          title: meta.title,
          description: meta.description,
        }}
        tags={{
          title: `${meta.title}`,
          description: meta.description,
        }}
      />
      <ContentInset size="normal">
        <VerticalSpacer>
          <MDXRemote components={components} {...source} />
        </VerticalSpacer>
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
  const pages = await getAllPages();

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
