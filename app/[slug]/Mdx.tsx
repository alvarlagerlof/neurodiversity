"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Header from "../../components/Header";
import Text from "../../components/Text";
import Section from "../../components/Section";
import List from "../../components/List";
import Meta from "../../components/Meta";
import Quote from "../../components/Quote";
import QuoteGroup from "../../components/QuoteGroup";
import WrongRight from "../../components/WrongRight";
import Definition from "../../components/Definition";
import DefinitionItem from "../../components/DefinitionItem";
import Image from "../../components/Image";
import ExternalLink from "../../components/ExternalLink";
import DocLinkBanner from "../../components/DocLinkBanner";
import Main from "../../components/Main";
import Typography from "../../components/Typography";

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

export function MDX({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXRemote components={components} {...source} />;
}
