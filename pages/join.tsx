import ContentInset from "components/ContentInset";
import Wrapper from "components/Wrapper";
import Main from "components/Main";
import PreviewBanner from "components/PreviewBanner";
import VerticalSpacer from "components/VerticalSpacer";
import Header from "components/Header";
import Meta from "components/Meta";
import Section from "components/Section";
import Text from "components/Text";
import LinkGrid from "components/LinkGrid";
import Typography from "components/Typography";

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
            <Typography.Title>Join us</Typography.Title>
            <Typography.Subtitle>
              First of all, thank you! We're a small but awesome team of writers and
              developers.
            </Typography.Subtitle>
          </Header>

          <Main>
            <Section>
              <Typography.Body>
                The goal of this website is to be as clear as possible. We believe that
                readability and ease of use are crucial to not "lose" people before
                they've read a page. We're sacrificing some accuracy, but since the
                current level of knowledge is so low, it is worth it.
              </Typography.Body>
              <Typography.Body>
                With that said, any help is appreciated! You do not need to be a computer
                expert or coder. Everything from writers, designers, and people
                knowledgeable about this stuff would be helpful.
              </Typography.Body>
            </Section>
            <Section>
              <Typography.Heading>Channels</Typography.Heading>
              <Typography.Body>
                Reach out on any of these channels and we can find out where you fit in!
              </Typography.Body>
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
