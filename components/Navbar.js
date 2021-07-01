import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="max-w-3xl mb-16 md:mb-24 w-full">
      <Link href="/">
        <a className="flex flex-row space-x-4 items-center cursor-pointer">
          <Image
            className="w-8 md:w-10 "
            src="/logos/neurodiversity.svg"
            alt="Logo showing head on purple background"
            width="32px"
            height="32px"
          />
          <h1 className="font-display font-semibold text-xl md:text-2xl cursor-pointer">
            neurodiversity.wiki
          </h1>
        </a>
      </Link>
    </nav>
  );
}
