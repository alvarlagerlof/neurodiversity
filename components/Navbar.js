import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-16 md:mb-24 w-full max-w-3xl">
      <Link href="/">
        <a className="flex flex-row space-x-4 items-center cursor-pointer">
          <img
            className="h-6"
            src="/logos/neurodiversity/logomark.svg"
            alt="Logo showing head on purple background"
          />
        </a>
      </Link>
    </nav>
  );
}
