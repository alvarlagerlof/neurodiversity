import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row space-x-4 items-center max-w-3xl mb-16 md:mb-24 w-full">
      <img
        className="w-8 md:w-10"
        src="/logo.svg"
        alt="Logo showing head on purple background"
      />
      <Link href="/">
        <h1 className="font-display font-semibold text-xl md:text-2xl cursor-pointer">
          neurodiversity.wiki
        </h1>
      </Link>
    </nav>
  );
}
