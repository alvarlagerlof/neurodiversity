"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logomarkSecondary from "../../public/logos/logomark-secondary.svg";
import { Button } from "./Button";
import { ContentInset } from "./ContentInset";
import { Typography } from "./Typography";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full">
      {pathname != "/join" && <JoinBanner />}
      <Bottom />
    </footer>
  );
}

function JoinBanner() {
  return (
    <section className="w-full bg-primary bg-join-mobile sm:bg-join bg-cover bg-center py-16 sm:py-28 ">
      <ContentInset size="wide">
        <div className="flex flex-col items-center">
          <Typography.Title as="h2" className="text-center text-white">
            Want to help out?
          </Typography.Title>
          <Typography.Body
            as="h2"
            className="text-center max-w-xl text-white! mb-8"
          >
            We're a community looking for awesome people to join us.
            Neurodiverse people, writers, developers, designers and more are all
            welcome.
          </Typography.Body>
          <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-4">
            <Button
              as={Link}
              href="https://discord.gg/48kqk6KcZ8"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord server
            </Button>
            <Button as={Link} href="/join" variant="secondary">
              Find out more
            </Button>
          </div>
        </div>
      </ContentInset>
    </section>
  );
}

function SocialIcon({ name, link, icon }) {
  return (
    <li>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <Image
          aria-hidden
          tabIndex={-1}
          src={icon}
          alt=""
          width={24}
          height={24}
        />
        <span className="sr-only">{name}</span>
      </Link>
    </li>
  );
}

function Bottom() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center py-16">
      <ContentInset size="wide">
        <section className="space-y-4">
          <Link href="/">
            <Image
              className="h-6 sm:h-8 max-w-[80%] w-auto"
              src={logomarkSecondary}
              alt="Neurodiversity Wiki Logo"
            />
          </Link>
          <Typography.Heading as="h2" className="max-w-[10ch]">
            For better understanding
          </Typography.Heading>
        </section>

        <hr className="border-divider-light dark:border-divider-dark mt-16 mb-2 border-dashed" />

        <section className="flex flex-col mb-4 space-y-4 sm:space-y-0 sm:flex-row justify-between text-neutral-400">
          <div className="space-y-4">
            <p>
              Made by{" "}
              <a
                href="https://twitter.com/alvarlagerlof"
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:underline"
              >
                Alvar Lagerlöf
              </a>{" "}
              and contributors
            </p>

            <ul className="flex flex-row space-x-4">
              <SocialIcon
                name="Twitter"
                link="https://twitter.com/neurodiversityw"
                icon="/icons/twitter.svg"
              />

              <SocialIcon
                name="GitHub"
                link="https://github.com/alvarlagerlof/neurodiversity"
                icon="/icons/github.svg"
              />

              <SocialIcon
                name="Discord"
                link="https://discord.gg/48kqk6KcZ8"
                icon="/icons/discord.svg"
              />

              <SocialIcon
                name="Email"
                link="mailto:contact@neurodiversity.wiki"
                icon="/icons/email.svg"
              />
            </ul>
          </div>

          {/* <ul className="flex flex-row">
            <li>
              <Link href="#" passHref>
                <a className="hover:underline">Terms & Conditions</a>
              </Link>
            </li>
            <span className="px-1" aria-hidden>
              •
            </span>
            <li>
              <Link href="#" passHref>
                <a className="hover:underline">Privacy Policy</a>
              </Link>
            </li>
          </ul> */}
        </section>
      </ContentInset>
    </section>
  );
}
