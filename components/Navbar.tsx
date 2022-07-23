import Link from "next/link";

import ContentInset from "components/ContentInset";
import DonateDropdown from "components/DonateDropdown";
import Button from "./Button";
import { useRouter } from "next/router";
import InternalLink from "./InternalLink";
import IconButton from "./IconButton";

export default function Navbar() {
  const { asPath } = useRouter();

  return (
    <ContentInset size="wide">
      <nav className="mt-8 w-full flex flex-row justify-between items-center">
        <ClickableLogo />

        {/* <DonateDropdown /> */}

        <div className="flex flex-row space-x-3 items-center">
          {asPath !== "/calendar" && (
            <Link href="/calendar" passHref>
              <IconButton
                as="a"
                variant="secondary"
                src="/icons/calendar.svg"
                alt="Calendar"
                badge="true"
              />
            </Link>
          )}

          {asPath !== "/join" && (
            <Link href="/join" passHref>
              <Button as="a" variant="primary">
                Contribute
              </Button>
            </Link>
          )}
        </div>
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
