import { LinkGridItem } from "app/components/LinkGridItem";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import discordLogotype from "../../public/icons/discord-logotype.svg";
import { Button } from "../components/Button";
import { DocLinkBanner } from "../components/DocLinkBanner";
import { Header } from "../components/Header";
import { LinkGrid } from "../components/LinkGrid";
import { Main } from "../components/Main";
import { Typography } from "../components/Typography";

export const metadata: Metadata = {
  title: "Join us - Neurodiversity Wiki",
  description:
    "We're a small team working to educate the public through our crowd-sourced wiki. Join us to help contribute.",
  openGraph: {
    title: "Join us - Neurodiversity Wiki",
    description:
      "We're a small team working to educate the public through our crowd-sourced wiki. Join us to help contribute.",
    images: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/og/join`,
  },
};

export default function JoinPage() {
  return (
    <>
      <Header>
        <Typography.Title>Join us</Typography.Title>
        <Typography.Subtitle>
          First of all, thank you for considering us! We're a small community
          looking for more awesome people to join us.
        </Typography.Subtitle>
      </Header>

      <Main>
        <section>
          <Typography.Body>
            This website is created by people wanting to spread awareness about
            neurodiversity. We're everything from developers, parents, designers
            to journalists. To cover as many conditions as possible in a
            representative way, we need the perspective of many. Together, we
            can make a wiki that explains these conditions in a simple way for
            the general public.
          </Typography.Body>
          <Typography.Body>
            So with that said, any help is appreciated. While people who can
            write, code, design and organize are in need, that is not a
            requirement. Feedback and personal perspective is also very
            appreciated! If this is something that interests you, consider
            joining us.
          </Typography.Body>
        </section>
        <section>
          <div className="bg-primary-light dark:bg-primary-dark p-8 lg:-mx-4 mb-8 rounded-xl md:bg-discord bg-right bg-no-repeat bg-contain	">
            <Image
              className="h-10 mb-2 w-auto"
              src={discordLogotype}
              alt="Discord logo"
            />
            <Typography.Body className="!text-white !mb-8 md:max-w-[35ch] lg:max-w-[52ch]">
              Our Discord server is the place where we organize and collaborate.
              Discord is free to use for anyone, and provides an easy to use app
              for computers and phones.
            </Typography.Body>
            <Button
              as={Link}
              href="https://discord.gg/48kqk6KcZ8"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord server
            </Button>
          </div>

          <Typography.Body>
            If you do not want to do that yet or have questions you want
            answered before joining, you can reach out on these channels.
          </Typography.Body>
          <LinkGrid>
            <LinkGridItem
              href="mailto:contact@neurodiversity.wiki"
              title="Email"
              description="Send an email"
            />
            <LinkGridItem
              href="https://twitter.com/neurodiversityw"
              title="Twitter"
              description="Send a direct message"
            />
          </LinkGrid>
        </section>

        <DocLinkBanner url="https://docs.google.com/document/d/1dWmoI7X5U6vZdHJHNMUBSG1D3W72KuA5FaOepXmiEOQ/edit?usp=sharing" />
      </Main>
    </>
  );
}
