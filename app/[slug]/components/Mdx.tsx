"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { List } from "../../components/List";
import { Meta } from "../../components/Meta";
import { Image } from "../../components/Image";
import { ExternalLink } from "../../components/ExternalLink";
import { DocLinkBanner } from "../../components/DocLinkBanner";
import { Main } from "../../components/Main";
import { Typography } from "../../components/Typography";

import { Quote } from "./Quote";
import { QuoteGroup } from "./QuoteGroup";
import { WrongRight } from "./WrongRight";
import { Definition } from "./Definition";
import { DefinitionItem } from "./DefinitionItem";

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
