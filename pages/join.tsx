import ContentInset from "components/ContentInset";
import Wrapper from "components/Wrapper";
import Main from "components/Main";
import PreviewBanner from "components/PreviewBanner";
import VerticalSpacer from "components/VerticalSpacer";
import Heading from "components/Heading";
import Header from "components/Header";
import Meta from "components/Meta";
import Section from "components/Section";
import Text from "components/Text";
import LinkGrid from "components/LinkGrid";

export default function Join() {
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
            <Heading.H1>Join us</Heading.H1>
            <Heading.H2>
              First of all, thank you! We're a small but awesome team of writers
              and developers.
            </Heading.H2>
          </Header>

          <Main>
            <Section>
              <Text>
                The goal of this website is to be as clear as possible. We
                believe that readability and ease of use are crucial to not
                "lose" people before they've read a page. We're sacrificing some
                accuracy, but since the current level of knowledge is so low, it
                is worth it.
              </Text>
              <Text>
                With that said, any help is appreciated! You do not need to be a
                computer expert or coder. Everything from writers, designers,
                and people knowledgeable about this stuff would be helpful.
              </Text>
            </Section>
            <Section>
              <Heading.H3>Channels</Heading.H3>
              <Text>
                Reach out on any of these channels and we can find out where you
                fit in!
              </Text>
              <LinkGrid>
                <LinkGrid.Item
                  href="https://discord.gg/EcEyW9Xz3M"
                  title="Discord"
                  description="Join the Discord server"
                />
                <LinkGrid.Item
                  href="mailto:contact@neurodiversity.wiki"
                  title="Email"
                  description="Send an email"
                />
                <LinkGrid.Item
                  href="https://twitter.com/n12ywiki"
                  title="Twitter"
                  description="Send a DM"
                />
              </LinkGrid>
            </Section>
          </Main>
        </VerticalSpacer>
      </ContentInset>
    </Wrapper>
  );
}
