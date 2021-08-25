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

            {preview && (
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
                Neurodiversity Wiki is a crowd-sourced website that aims to spread
                awareness about neurological conditions. We define neurodiversity as all
                the ways that our brains work differently from each other. There are
                millions of people around the world living with conditions such as the
                ones above. Still, the knowledge level about this is often almost zero.
                This is understandable as talking about mental health is stigmatized.
              </Typography.Body>
              <Typography.Body>
                The effect of this lack of knowledge can be devastating. Without
                knowledge, misconceptions and insensitive jokes tend to be common. These
                make it harder for people to tell others about their conditions. They fear
                how they'll be perceived or treated.
              </Typography.Body>
              <Typography.Body>
                As the knowledge level of the general population increases, so does
                compassion and understanding. More people would feel comfortable telling
                others who they are and how others can help them.
              </Typography.Body>
              <Typography.Body>
                This website tackles the information problem by providing short and
                easy-to-read information. We believe that this content should not be
                buried in articles on a blog, or written in complex medical language. Nor
                should it be local to one country, or on a website with too much focus on
                marketing its achievements. It's also common to only focus on one
                condition, even though knowledge about most of them is lacking. All these
                things would work against our goal of educating as many people as
                possible. We couldn't find a website that fulfilled all of these things,
                so we made one.
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
