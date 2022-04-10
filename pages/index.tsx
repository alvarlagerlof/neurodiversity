import Header from "components/Header";
import Typography from "components/Typography";
import Meta from "components/Meta";
import Section from "components/Section";
import PreviewBanner from "components/PreviewBanner";
import Wrapper from "components/Wrapper";
import ContentInset from "components/ContentInset";
import VerticalSpacer from "components/VerticalSpacer";
import LinkGrid from "components/LinkGrid";
import Main from "components/Main";

import { getPreviewPages, getPublishedPages } from "lib/content";
import isPreview from "lib/env";
import { Page } from "../types";

// This page cannot be .mdx because then there is no way to run getServerSideProps which are needed for redirecting from notocd.com and notautism.com

interface IndexProps {
  previewPages: Partial<Page>[];
  publishedPages: Partial<Page>[];
  isPreview: boolean;
}

export default function Index({ publishedPages, previewPages, isPreview }: IndexProps) {
  return (
    <Wrapper>
      <Meta
        appendTitle={false}
        image={{
          title: "Neurodiversity Wiki",
          description:
            "Learn about Autism, OCD, Bipolar, ADHD, Dyslexia and more on this crowdsourced guide.",
        }}
        imageLayout="start"
        tags={{
          title: "Neurodiversity Wiki: Learn about neurological conditions",
          description:
            "Learn about conditions like Autism, OCD, Bipolar, ADHD and more on this crowdsourced guide.",
        }}
      />

      <ContentInset size="normal">
        <VerticalSpacer>
          <PreviewBanner googleDocUrl="https://docs.google.com/document/d/16nOmXROsCu_IMmtXyzLHy5sMqDLuFdkbkCxQ08WzFxQ/edit?usp=sharing" />

          <Header>
            <Typography.Title>Hello there!</Typography.Title>
            <Typography.Subtitle>
              Neurodiversity is a word that refers to the ways brains differ. These
              differences are grouped into conditions. This website helps you understand
              some common ones.
            </Typography.Subtitle>
          </Header>

          <Main>
            <Section>
              <LinkGrid>
                {publishedPages.map(({ slug, frontMatter: { name, explaination } }) => {
                  return (
                    <LinkGrid.Item
                      key={slug}
                      href={`/${slug}`}
                      title={name}
                      description={explaination}
                    />
                  );
                })}
              </LinkGrid>
            </Section>

            {isPreview && (
              <Section>
                <Typography.Heading>Pages in preview</Typography.Heading>
                <Typography.Body>
                  The pages below are currently being made. Open one to find out how to
                  contribute to it.
                </Typography.Body>

                <LinkGrid>
                  {previewPages.map(({ slug, frontMatter: { name, explaination } }) => {
                    return (
                      <LinkGrid.Item
                        key={slug}
                        href={`/${slug}`}
                        title={name}
                        description={explaination}
                      />
                    );
                  })}
                </LinkGrid>
              </Section>
            )}

            <Section>
              <Typography.Heading>Why?</Typography.Heading>
              <Typography.Body>
                Neurodiversity Wiki is a crowdsourced website that aims to spread
                awareness about neurological conditions. We define neurodiversity as all
                the ways in which our brains work differently.
              </Typography.Body>
              <Typography.Body>
                There are millions of neurodiverse people in the world. Yet knowledge
                about most neurological conditions is often none or close to it. The lack
                of knowledge leads to stigmatization, insensitive jokes, misconceptions,
                and ableism. When understanding increases, there’s a chance that the
                former decreases. More people would also be comfortable telling others
                about themselves and asking for help.
              </Typography.Body>
              <Typography.Body>
                This website tackles the information problem by providing short and
                easy-to-read information. We believe that content should be short, and to
                the point. To maximize potential reach, it shouldn’t be a blog post, be
                written in medical language, be too long, be local to one country, or be
                buried deep behind marketing. We couldn’t find a website that fulfilled
                these goals, so we made one.
              </Typography.Body>
            </Section>
            <Section>
              <Typography.Heading>Who are we?</Typography.Heading>
              <Typography.Body>
                We’re a group of neurodiverse people who are collaborating on content
                aiming to spread knowledge and understanding about neurodiversity and
                various neurological conditions. We’re writing from our life experiences
                to help more people understand us.
              </Typography.Body>
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
      res.setHeader("Location", `https://neurodiversity.wiki/ocd?utm_source=notocd.com`);
      res.statusCode = 301;
  }

  return { props: { publishedPages, previewPages, preview } };
}
