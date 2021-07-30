import Link from "next/link";
import { useRouter } from "next/router";

import ContentInset from "components/ContentInset";
import Heading from "components/Heading";

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
    <section className="w-full bg-primary bg-join-mobile sm:bg-join bg-cover bg-center text-white py-16 sm:py-28 ">
      <ContentInset size="wide">
        <div className="flex flex-col items-center">
          <Heading.H1>Want to help out?</Heading.H1>
          <p className="mb-8 max-w-lg text-center">
            We’re looking for awesome people to join us. Writers, developers,
            designers and neurodiverse people all welcome.
          </p>
          <Link href="/join" passHref>
            <a className="bg-secondary text-black py-2 px-5 rounded-full font-medium">
              Find out how
            </a>
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
        <div className="space-y-4">
          <Link href="/" passHref>
            <a>
              <img
                className="h-6"
                src="/logos/logomark-secondary.svg"
                alt="Neurodiversity"
              />
            </a>
          </Link>
          <p>For better understanding</p>
        </div>
        <hr className="border-secondary mt-16 mb-2" />
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between">
          <p>
            Made by{" "}
            <a
              href="https://alvar.dev?utm_source=neurodiversity.wiki"
              target="_blank"
              rel="noreferrer"
              className="text-secondary hover:underline"
            >
              Alvar Lagerlöf
            </a>{" "}
            and contributors
          </p>
          <ul className="flex flex-row">
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
          </ul>
        </div>
      </ContentInset>
    </section>
  );
}
