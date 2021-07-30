import Link from "next/link";

import ContentInset from "components/ContentInset";

export default function Navbar() {
  return (
    <ContentInset size="wide">
      <nav className="mt-8 w-full flex flex-row justify-between items-center">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <img
              className="h-6"
              src="/logos/neurodiversity/logomark-dark.svg"
              alt="Neurodiversity"
            />
          </a>
        </Link>
        <a
          href="https://github.com/sponsors/alvarlagerlof"
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-white py-2 px-5 rounded-full font-medium"
        >
          Donate
        </a>
      </nav>
    </ContentInset>
  );
}
