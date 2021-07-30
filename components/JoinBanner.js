import Link from "next/link";

import Heading from "components/Heading";

export default function JoinBanner() {
  return (
    <section className="w-full bg-primary bg-join bg-cover bg-center text-white flex flex-col items-center py-28">
      <Heading.H1>Want to help out?</Heading.H1>
      <p className="mb-8 max-w-xl text-center">
        We’re looking for awesome people to join us. Writers, developers,
        designers and neurodiverse people all welcome.
      </p>
      <Link href="/join" passHref>
        <a className="bg-secondary text-black py-2 px-5 rounded-full font-medium">
          Find out how
        </a>
      </Link>
    </section>
  );
}
