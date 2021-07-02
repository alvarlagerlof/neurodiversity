import Header from "../components/blocks/Header";
import Heading from "../components/blocks/Heading";
import Meta from "../components/blocks/Meta";
import PageGrid from "../components/blocks/PageGrid";
import PageLink from "../components/blocks/PageLink";
import Section from "../components/blocks/Section";
import Text from "../components/blocks/Text";
import ExternalLink from "../components/ExternalLink";
import PreviewBanner from "../components/PreviewBanner";

import { getPreviewPages, getPublishedPages } from "lib/content";
import { isPreview } from "lib/env";

// This page cannot be .mdx because then there is no way to run getServerSideProps which are needed for redirecting from notocd.com and notautism.com

export default function Index({ publishedPages, previewPages, preview }) {
  return (
    <>
      <Meta
        title="Neurodiversity Wiki: Learn about neurological divergencies"
        description="Learn about things like OCD, Autism, Bipolar, Anxiety, Depression and more. Euducate yourself to understand and help others around you."
        image="/social/index.jpg"
      />

      <PreviewBanner googleDocUrl="https://docs.google.com/document/d/16nOmXROsCu_IMmtXyzLHy5sMqDLuFdkbkCxQ08WzFxQ/edit?usp=sharing" />

      <Header>
        <Heading.H1>Welcome!</Heading.H1>
        <Text>
          Most people have very little knowledge about neurological
          divergencies, which is unfortunate and fixable. This page helps you
          educate yourself about them.
        </Text>
        <Text>Pages are listed below</Text>

        <PageGrid>
          {publishedPages.map(({ slug, frontMatter: { start } }) => {
            return (
              <PageLink key={slug} href={"/" + slug} {...start} clickable />
            );
          })}
        </PageGrid>
      </Header>

      <Section>
        <Heading.H2>Coming soon</Heading.H2>
        <Text>
          The pages below are currently being made. Click{" "}
          <a className="text-primary-dark" href="#howcanihelp">
            here{" "}
          </a>
          if you want to help out.
        </Text>

        <PageGrid>
          {previewPages.map(({ slug, frontMatter: { start } }) => {
            return (
              <PageLink
                key={slug}
                href={"/" + slug}
                {...start}
                clickable={preview}
              />
            );
          })}
        </PageGrid>
      </Section>

      <Section>
        <Heading.H2>Why?</Heading.H2>
        <Text>
          People often mention or joke about neurological divergencies without
          realizing how it will be interpreted. By doing that they are hurting
          those who have neurological divergencies. By joking about it, you
          slowly change what people think when they hear the word, and that
          hurts the people who actually have the divergency.
        </Text>
        <Text>
          Misinformation or the lack of information is the cause. This site aims
          to combat this using easy-to-understand pages about various
          divergencies. With understanding, the hope is that language can become
          more inclusive.
        </Text>
        <Text>
          The goal isn't medical accuracy. That would work inversely to lose
          people reading because of the complexity. The goal is to get people to
          rethink their definitions and consider how their language is hurtful.
        </Text>
      </Section>

      <Section>
        <Heading.H2 id="howcanihelp">How can I help?</Heading.H2>
        <Text>
          The list above is not complete, nor is the content perfect. If you're
          familiar with any of the above (personally or via relatives) and want
          to help making this site even better, please do reach out.
        </Text>
        <Text>
          You do not need to be a coder to be able to contribute. There is a{" "}
          <ExternalLink href="https://preview.neurodiversity.wiki">
            preview site
          </ExternalLink>{" "}
          containing links to Google Docs that you can leave suggestions on, a{" "}
          <ExternalLink href="https://discord.gg/EcEyW9Xz3M">
            Discord server
          </ExternalLink>{" "}
          that you can join to participate in discussion. You can also{" "}
          <ExternalLink href="https://twitter.com/alvarlagerlof">
            DM me
          </ExternalLink>{" "}
          on Twitter or open an issue on{" "}
          <ExternalLink href="https://github.com/alvarlagerlof/not-ocd">
            GitHub
          </ExternalLink>
          .
        </Text>
      </Section>
    </>
  );
}

export async function getServerSideProps({ res, req }) {
  const publishedPages = await getPublishedPages();
  const previewPages = await getPreviewPages();
  const preview = await isPreview();

  switch (req.headers.host) {
    case "notocd.com":
      res.setHeader(
        "Location",
        `https://neurodiversity.wiki/ocd?utm_source=notocd.com`
      );
      res.statusCode = 301;
  }

  return { props: { publishedPages, previewPages, preview } };
}
