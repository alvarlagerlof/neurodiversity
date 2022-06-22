import Link from "next/link";

import ContentInset from "components/ContentInset";
import DonateDropdown from "components/DonateDropdown";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Navbar() {
  const { asPath } = useRouter();

  return (
    <ContentInset size="wide">
      <nav className="mt-8 w-full flex flex-row justify-between items-center">
        <ClickableLogo />

        {/* <DonateDropdown /> */}

        {asPath !== "/join" && (
          <Link href="/join" passHref>
            <Button as="a" variant="primary">
              Contribute
            </Button>
          </Link>
        )}
      </nav>
    </ContentInset>
  );
}

function ClickableLogo() {
  return (
    <Link href="/" passHref>
      <a className="cursor-pointer">
        <div className="sm:hidden">
          <img
            src="/logos/logo-primary.svg"
            alt="Neurodiversity Wiki logo"
            width="40px"
            height="40px"
          />
        </div>
        <div className="hidden sm:block">
          <img
            className="h-6"
            src="/logos/logomark-primary.svg"
            alt="Neurodiversity Wiki logo"
          />
        </div>
      </a>
    </Link>
  );
}
