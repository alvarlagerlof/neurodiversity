import { MDXProvider } from "@mdx-js/react";

import Heading from "../components/blocks/Heading";
import Text from "../components/blocks/Text";
import Section from "../components/blocks/Section";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  Section,
};

export default function MdxWrapper({ children }) {
  return (
    <div
      style={{
        background: "pink",
      }}
    >
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  );
}
