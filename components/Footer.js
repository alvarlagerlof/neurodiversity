import Link from "next/link";
import { useRouter } from "next/router";

import ContentInset from "components/ContentInset";
import Typography from "components/Typography";
import Button from "./Button";

export default function Footer() {
  const { pathname } = useRouter();

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
            className="text-center max-w-xl !text-white"
            margin="8"
          >
            We’re a community looking for awesome people to join us. Neurodiverse people,
            writers, developers, designers and more are all welcome.
          </Typography.Body>
          <Link href="/join" passHref>
            <Button as="a" variant="secondary">
              Find out how
            </Button>
          </Link>
        </div>
      </ContentInset>
    </section>
  );
}

function Bottom() {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center py-16">
      <ContentInset size="wide">
        <section className="space-y-4">
          <Link href="/" passHref>
            <a>
              <img
                className="h-6 sm:h-8 max-w-[80%]"
                src="/logos/logomark-secondary.svg"
                alt="Neurodiversity Wiki Logo"
              />
            </a>
          </Link>
          <Typography.Heading as="h2" className="max-w-[10ch]">
            For better understanding
          </Typography.Heading>
        </section>

        <hr className="border-gray mt-16 mb-2 border-dashed" />

        <section className="flex flex-col mb-4 space-y-4 sm:space-y-0 sm:flex-row justify-between text-gray">
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

            <div className="flex flex-row space-x-4">
              <a href="https://twitter.com/n12ywiki" target="_blank" rel="noreferrer">
                <img src="/icons/twitter.svg" alt="Twitter logo" />
              </a>
              <a href="https://discord.gg/EcEyW9Xz3M" target="_blank" rel="noreferrer">
                <img src="/icons/discord.svg" alt="Discord logo" />
              </a>
              <a href="mailto:contact@neurodiversity.wiki">
                <img src="/icons/email.svg" alt="Email logo" />
              </a>
            </div>
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
