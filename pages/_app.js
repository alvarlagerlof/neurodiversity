import { MDXProvider } from "@mdx-js/react";

import Heading from "../components/blocks/Heading";
import Text from "../components/blocks/Text";
import Section from "../components/blocks/Section";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../globals.css";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  Section,
};

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <Navbar />

        <main className="max-w-3xl">
          <article className="space-y-12">
            <MDXProvider components={components}>
              <Component {...pageProps} />
            </MDXProvider>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

export default MyApp;
