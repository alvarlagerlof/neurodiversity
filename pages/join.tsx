import ContentInset from "components/ContentInset";
import Wrapper from "components/Wrapper";
import Main from "components/Main";
import PreviewBanner from "components/PreviewBanner";
import VerticalSpacer from "components/VerticalSpacer";
import Header from "components/Header";
import Meta from "components/Meta";
import Section from "components/Section";
import LinkGrid from "components/LinkGrid";
import Typography from "components/Typography";

export default function Join() {
  return (
    <Wrapper>
      <Meta
        image={{
          title: "Join us",
          description:
            "We're a small team working to educate the public through our crowd-sourced wiki. Join us to help contribute.",
        }}
        tags={{
          title: "Join us - Neurodiversity Wiki",
          description:
            "We're a small team working to educate the public through our crowd-sourced wiki. Join us to help contribute.",
        }}
      />

      <ContentInset size="normal">
        <VerticalSpacer>
          <PreviewBanner googleDocUrl="https://docs.google.com/document/d/1dWmoI7X5U6vZdHJHNMUBSG1D3W72KuA5FaOepXmiEOQ/edit?usp=sharing" />
          <Header>
            <Typography.Title>Join us</Typography.Title>
            <Typography.Subtitle>
              First of all, thank you for considering! We're a small community looking for
              more awesome people to join us.
            </Typography.Subtitle>
          </Header>

          <Main>
            <Section>
              <Typography.Body>
                This website is created by people wanting to spread awareness about
                neurodiversity. We're everything from developers, parents, designers to
                journalists. To cover as many conditions as possible in a representative
                way, we need the perspective of many. Together, can make a wiki that
                explains these conditions in a simple way for the general public.
              </Typography.Body>
              <Typography.Body>
                So with that said, any help is appreciated. While people who can write,
                code, design and organize are in need, that is not a requirement. Feedback
                and personal perspective is also very appreciated! If this is something
                that interests you, consider joining us.
              </Typography.Body>
            </Section>
            <Section>
              <Typography.Heading>Channels</Typography.Heading>
              <Typography.Body>
                Reach out on any of these channels, and we can find out where you fit in.
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
                  description="Send a direct message"
                />
              </LinkGrid>
            </Section>
          </Main>
        </VerticalSpacer>
      </ContentInset>
    </Wrapper>
  );
}
