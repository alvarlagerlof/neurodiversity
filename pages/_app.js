import { MDXProvider } from "@mdx-js/react";

import Header from "../components/blocks/Header";
import Heading from "../components/blocks/Heading";
import Text from "../components/blocks/Text";
import Section from "../components/blocks/Section";
import Link from "../components/blocks/Link";
import List from "../components/blocks/List";
import Meta from "../components/blocks/Meta";
import QuoteList from "../components/blocks/QuoteList";
import Box from "../components/blocks/Box";
import Definition from "../components/blocks/Definition";
import DefinitionItem from "../components/blocks/DefinitionItem";
import IconHeading from "../components/blocks/IconHeading";
import Grid from "../components/blocks/Grid";
import PageLink from "../components/blocks/PageLink";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../globals.css";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  ul: List.Unordered,
  ol: List.Ordered,
  a: Link,
  p: Text,
  Section,
  Header,
  IconHeading,
  Meta,
  QuoteList,
  Box,
  Definition,
  DefinitionItem,
  Grid,
  PageLink,
};

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <Navbar />

        <main className="max-w-3xl w-full">
          <article className="space-y-12">
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>

            <Footer />
          </article>
        </main>
      </div>
    </div>
  );
}

export default MyApp;
