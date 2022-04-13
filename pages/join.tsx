import Link from "next/link";

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
import Button from "components/Button";

export default function Join() {
  return (
    <Wrapper>
      <Meta
        image={{
          title: "Join us",
          description:
            "We're a small team working to educate the public through our crowd-sourced wiki. Join us to help contribute.",
        }}
        imageLayout="join"
        tags={{
          title: "Join us",
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
                way, we need the perspective of many. Together, we can make a wiki that
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
              <div className="bg-primary p-8 lg:-mx-4 mb-8 rounded-xl md:bg-discord bg-right bg-no-repeat bg-contain	">
                <img
                  className="h-10 mb-2"
                  src="/icons/discord-logotype.svg"
                  alt="Discord logo"
                />
                <Typography.Body className="!text-white !mb-8 md:max-w-[35ch] lg:max-w-[52ch]">
                  Our Discord server is the place where we organize and collaborate.
                  Discord is free to use for anyone, and provides an easy to use app for
                  computers and phones.
                </Typography.Body>
                <Link href="https://discord.gg/48kqk6KcZ8" passHref>
                  <Button
                    as="a"
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Discord server
                  </Button>
                </Link>
              </div>

              <Typography.Body>
                If you do not want to do that yet or have questions you want answered
                before joining, you can reach out these channels.
              </Typography.Body>
              <LinkGrid>
                <LinkGrid.Item
                  href="mailto:contact@neurodiversity.wiki"
                  title="Email"
                  description="Send an email"
                />
                <LinkGrid.Item
                  href="https://twitter.com/neurodiversityw"
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
