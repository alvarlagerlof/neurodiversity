import { Metadata } from "next";

import { DocLinkBanner } from "./components/DocLinkBanner";
import { Header } from "./components/Header";
import { LinkGrid } from "./components/LinkGrid";
import { LinkGridItem } from "./components/LinkGridItem";
import { Main } from "./components/Main";
import { Typography } from "./components/Typography";
import { allPages } from ".contentlayer/generated";

export const metadata: Metadata = {
  title: "Neurodiversity Wiki: Learn about neurological conditions",
  description:
    "Learn about conditions like Autism, OCD, Bipolar, ADHD and more on this crowdsourced guide.",
  openGraph: {
    title: "Neurodiversity Wiki",
    description:
      "Learn about Autism, OCD, Bipolar, ADHD, Dyslexia and more on this crowdsourced guide.",
    images: `https://${
      process.env.NEXT_PUBLIC_VERCEL_URL
    }/api/og/start?title=${encodeURIComponent(
      "Neurodiversity Wiki"
    )}&description=${encodeURIComponent(
      "Learn about Autism, OCD, Bipolar, ADHD, Dyslexia and more on this crowdsourced guide."
    )}`,
  },
};

export default async function IndexPage() {
  return (
    <>
      <Header>
        <Typography.Subtitle as="h1">
          Neurodiversity is a word that refers to the ways brains differ. These
          differences are grouped into conditions. This website helps you
          understand some common ones.
        </Typography.Subtitle>
      </Header>

      <Main>
        <section>
          <LinkGrid>
            {allPages.map(({ slug, name, explaination }) => {
              return (
                <LinkGridItem
                  key={slug}
                  href={`/${slug}`}
                  title={name}
                  description={explaination}
                />
              );
            })}
          </LinkGrid>
        </section>

        <section>
          <Typography.Heading>Why?</Typography.Heading>
          <Typography.Body>
            Neurodiversity Wiki is a crowdsourced website that aims to spread
            awareness about neurological conditions. We define neurodiversity as
            all the ways in which our brains work differently.
          </Typography.Body>
          <Typography.Body>
            There are millions of neurodiverse people in the world. Yet
            knowledge about most neurological conditions is often none or close
            to it. The lack of knowledge leads to stigmatisation, insensitive
            jokes, misconceptions, and ableism. When understanding increases,
            there’s a chance that the former decreases. More people would also
            be comfortable telling others about themselves and asking for help.
          </Typography.Body>
          <Typography.Body>
            This website tackles the information problem by providing short and
            easy-to-read information. We believe that content should be short,
            and to the point. To maximise potential reach, it shouldn’t be a
            blog post, be written in medical language, be too long, be local to
            one country, or be buried deep behind marketing. We couldn’t find a
            website that fulfilled these goals, so we made one.
          </Typography.Body>
        </section>
        <section>
          <Typography.Heading>Who are we?</Typography.Heading>
          <Typography.Body>
            We’re a group of neurodiverse people who are collaborating on
            content aiming to spread knowledge and understanding about
            neurodiversity and various neurological conditions. We’re writing
            from our life experiences to help more people understand us.
          </Typography.Body>
        </section>

        <DocLinkBanner url="https://docs.google.com/document/d/16nOmXROsCu_IMmtXyzLHy5sMqDLuFdkbkCxQ08WzFxQ/edit?usp=sharing" />
      </Main>
    </>
  );
}
