import Link from "next/link";

import ContentInset from "components/ContentInset";
import JoinBanner from "components/JoinBanner";

export default function Footer() {
  return (
    <footer className="w-full">
      <JoinBanner />

      <div className="w-full bg-black text-white flex flex-col items-center py-16">
        <ContentInset size="wide">
          <div className="space-y-4">
            <Link href="/" passHref>
              <a>
                <img
                  className="h-6"
                  src="/logos/neurodiversity/logomark-light.svg"
                  alt="Neurodiversity"
                />
              </a>
            </Link>
            <p>For better understanding</p>
          </div>
          <hr className="border-secondary mt-16 mb-2" />
          <div className="flex flex-row justify-between">
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
      </div>
    </footer>
  );
}
