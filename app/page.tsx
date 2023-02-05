import Typography from "../components/Typography";
import Section from "../components/Section";
import DocLinkBanner from "../components/DocLinkBanner";
import LinkGrid, { LinkGridItem } from "../components/LinkGrid";
import Main from "../components/Main";
import { allPages } from ".contentlayer/generated";
import Header from "../components/Header";

export default async function IndexPage() {
  return (
    <>
      <Header>
        <Typography.Title>Hello there!</Typography.Title>
        <Typography.Subtitle>
          Neurodiversity is a word that refers to the ways brains differ. These
          differences are grouped into conditions. This website helps you understand some
          common ones.
        </Typography.Subtitle>
      </Header>

      <Main>
        <Section>
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
        </Section>

        <Section>
          <Typography.Heading>Why?</Typography.Heading>
          <Typography.Body>
            Neurodiversity Wiki is a crowdsourced website that aims to spread awareness
            about neurological conditions. We define neurodiversity as all the ways in
            which our brains work differently.
          </Typography.Body>
          <Typography.Body>
            There are millions of neurodiverse people in the world. Yet knowledge about
            most neurological conditions is often none or close to it. The lack of
            knowledge leads to stigmatisation, insensitive jokes, misconceptions, and
            ableism. When understanding increases, there’s a chance that the former
            decreases. More people would also be comfortable telling others about
            themselves and asking for help.
          </Typography.Body>
          <Typography.Body>
            This website tackles the information problem by providing short and
            easy-to-read information. We believe that content should be short, and to the
            point. To maximise potential reach, it shouldn’t be a blog post, be written in
            medical language, be too long, be local to one country, or be buried deep
            behind marketing. We couldn’t find a website that fulfilled these goals, so we
            made one.
          </Typography.Body>
        </Section>
        <Section>
          <Typography.Heading>Who are we?</Typography.Heading>
          <Typography.Body>
            We’re a group of neurodiverse people who are collaborating on content aiming
            to spread knowledge and understanding about neurodiversity and various
            neurological conditions. We’re writing from our life experiences to help more
            people understand us.
          </Typography.Body>
        </Section>

        <DocLinkBanner url="https://docs.google.com/document/d/16nOmXROsCu_IMmtXyzLHy5sMqDLuFdkbkCxQ08WzFxQ/edit?usp=sharing" />
      </Main>
    </>
  );
}
