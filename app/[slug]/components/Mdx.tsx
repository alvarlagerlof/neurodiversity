"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import { DocLinkBanner } from "../../components/DocLinkBanner";
import { ExternalLink } from "../../components/ExternalLink";
import { Header } from "../../components/Header";
import { Image } from "../../components/Image";
import { List } from "../../components/List";
import { Main } from "../../components/Main";
import { Meta } from "../../components/Meta";
import { Text } from "../../components/Text";
import { Typography } from "../../components/Typography";
import { Definition } from "./Definition";
import { DefinitionItem } from "./DefinitionItem";
import { Quote } from "./Quote";
import { QuoteGroup } from "./QuoteGroup";
import { WrongRight } from "./WrongRight";

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
