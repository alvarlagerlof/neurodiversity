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
            We’re looking for awesome people to join us. Writers, developers, designers
            and neurodiverse people all welcome.
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

        <section className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between text-gray">
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
