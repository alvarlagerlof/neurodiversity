import { MDXRemote } from "next-mdx-remote/rsc";

import { ContentImage } from "../../components/ContentImage";
import { DocLinkBanner } from "../../components/DocLinkBanner";
import { ExternalLink } from "../../components/ExternalLink";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { Main } from "../../components/Main";
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
  img: ContentImage,
  Quote,
  Header,
  Main,
  QuoteGroup,
  WrongRight,
  Definition,
  DefinitionItem,
  DocLinkBanner,
  ContentImage,
};

export async function MDX({ source }: { source: string }) {
  /// @ts-ignore Async component
  return <MDXRemote components={components} source={source} />;
}
