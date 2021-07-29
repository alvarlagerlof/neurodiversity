import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="mb-16 md:mb-24 w-full max-w-3xl">
      <Link href="/">
        <a className="flex flex-row space-x-4 items-center cursor-pointer">
          <Image
            className="h-8 md:h-10 "
            src="/logos/logomark.svg"
            alt="Logo showing head on purple background"
            width="300px"
            height="32px"
          />
        </a>
      </Link>
    </nav>
  );
}
