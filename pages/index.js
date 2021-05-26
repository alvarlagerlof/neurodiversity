import Header from "../components/blocks/Header";
import Heading from "../components/blocks/Heading";
import PageGrid from "../components/blocks/PageGrid";
import PageLink from "../components/blocks/PageLink";
import Section from "../components/blocks/Section";
import Text from "../components/blocks/Text";
import ExternalLink from "../components/ExternalLink";

// This page cannot be .mdx because then there is no way to run getServerSideProps which are needed for redirecting from notocd.com and notautism.com

export default function Index({ context }) {
  return (
    <>
      <Header>
        <Heading.H1>Welcome!</Heading.H1>
        <Text>
          Welcome to neurodiversity.wiki! If you've come here because you've
          been sent a link, this is a page about different mental illnesses.
        </Text>
        <Text>Please click on one of the below listed.</Text>
      </Header>

      <Section>
        <PageGrid>
          <PageLink
            href="/ocd"
            title="OCD"
            description="Obsessive-compulsive disorder"
          />
          <PageLink href="/dyslexia" title="Dyslexia" description="Dyslexia" />
          <PageLink href="/bipolar" title="BP" description="Bipolar disorder" />
          <PageLink
            href="/autism"
            title="ASD"
            description="Autism spectrum disorder"
          />
          <PageLink
            href="/adhd"
            title="ADHD"
            description="Attention deficit hyperactivity disorder"
          />
          <PageLink
            href="/did"
            title="DID"
            description="Dissociative identity disorder"
          />
          <PageLink
            href="/gad"
            title="GAD"
            description="Generalized anxiety disorder"
          />
        </PageGrid>
      </Section>

      <Section>
        <Heading.H2>Why?</Heading.H2>
        <Text>
          People often mention mental illnesses or make a joke without realizing
          how. By doing that they are hurting those who have the mental illness.
          By joking about it, you slowly change what people think when they hear
          the word, and that hurts the people who actually have the illness.
        </Text>
        <Text>
          Misinformation or little information is the cause. This site aims to
          combat this using easy-to-understand pages about various illnesses.
          With understanding, the hope is that that language can become more
          inclusive.
        </Text>
        <Text>
          The goal isn't medical accuracy. That would work inverserly to lose
          people reading beause of the complexity. The goal is to get people to
          rethink their definitions and consider how their languange is hurtful.
        </Text>
      </Section>

      <Section>
        <Heading.H2>How can I help?</Heading.H2>
        <Text>
          The list above is not complete, nor is it perfect. If you're familiar
          with any of the above (personally of via relatives) and want to help
          making this site even better, please do reach out.
        </Text>
        <Text>
          You do not need to be a coder to be able to contribute.. We have a
          <ExternalLink href="https://discord.gg/EcEyW9Xz3M">
            Discord server
          </ExternalLink>
          that you can join to participate in discussion. You can also{" "}
          <ExternalLink href="https://twitter.com/alvarlagerlof">
            DM me
          </ExternalLink>
          on Twitter or open an issue on
          <ExternalLink href="https://github.com/alvarlagerlof/not-ocd">
            GitHub
          </ExternalLink>
        </Text>
      </Section>
    </>
  );
}

export async function getServerSideProps({ res, req }) {
  console.log(req.headers.host);
  console.log("test");

  switch (req.headers.host) {
    case "notautism.com":
      res.setHeader("Location", `/autism`); // Replace <link> with your url link
      res.statusCode = 301;
      return { props: {} };

    case "notocd.com":
      res.setHeader("Location", `/ocd`); // Replace <link> with your url link
      res.statusCode = 301;
      return { props: {} };
  }

  return { props: {} };
}
