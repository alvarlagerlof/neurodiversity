import Header from "components/Header";
import Heading from "components/Heading";
import Meta from "components/Meta";
import Section from "components/Section";
import Text from "components/Text";
import PreviewBanner from "components/PreviewBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "components/ContentInset";
import VerticalSpacer from "components/VerticalSpacer";
import LinkGrid from "components/LinkGrid";
import Main from "components/Main";

import { getPreviewPages, getPublishedPages } from "lib/content";
import { isPreview } from "lib/env";

// This page cannot be .mdx because then there is no way to run getServerSideProps which are needed for redirecting from notocd.com and notautism.com

export default function Index({ publishedPages, previewPages, preview }) {
  return (
    <Wrapper>
      <Meta
        title="Neurodiversity Wiki"
        description="Learn about OCD, Autism, Bipolar, Anxiety, Depression and more."
      />

      <ContentInset size="normal">
        <VerticalSpacer>
          <PreviewBanner googleDocUrl="https://docs.google.com/document/d/16nOmXROsCu_IMmtXyzLHy5sMqDLuFdkbkCxQ08WzFxQ/edit?usp=sharing" />

          <Header>
            <Heading.H1>Hello there!</Heading.H1>
            <Heading.H2>
              Neurodiversity is a word that refers to the ways brains differ.
              These differences are grouped into conditions. This website helps
              you understand some common ones.
            </Heading.H2>
          </Header>

          <Main>
            <Section>
              <LinkGrid>
                {publishedPages.map(
                  ({ slug, frontMatter: { name, explaination } }) => {
                    return (
                      <LinkGrid.Item
                        key={slug}
                        href={`/${slug}`}
                        title={name}
                        description={explaination}
                      />
                    );
                  }
                )}
              </LinkGrid>
            </Section>

            {preview && (
              <Section>
                <Heading.H3>Pages in preview</Heading.H3>
                <Text>
                  The pages below are currently being made. Open one to find out
                  how to contribute to it.
                </Text>

                <LinkGrid>
                  {previewPages.map(
                    ({ slug, frontMatter: { name, explaination } }) => {
                      return (
                        <LinkGrid.Item
                          key={slug}
                          href={`/${slug}`}
                          title={name}
                          description={explaination}
                        />
                      );
                    }
                  )}
                </LinkGrid>
              </Section>
            )}

            <Section>
              <Heading.H3>Why?</Heading.H3>
              <Text>
                In some environments, these conditions are joked about. Imagine
                then being a neurodiverse person in there. They will likely feel
                uncomfortable sharing their condition. Even if it isn't jokes,
                being misunderstood also makes life harder.
              </Text>
              <Text>
                Lack of knowledge and misinformation lead to unfortunate
                situations. With knowledge comes understanding and compassion.
                Then language improves.
              </Text>
            </Section>
          </Main>
        </VerticalSpacer>
      </ContentInset>
    </Wrapper>
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
