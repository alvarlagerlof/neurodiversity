"use client";

import Link from "next/link";

import ContentInset from "./ContentInset";
import DonateDropdown from "./DonateDropdown";
import Button from "./Button";
import { usePathname } from "next/navigation";
import InternalLink from "./InternalLink";
import IconButton from "./IconButton";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <ContentInset size="wide">
      <nav className="mt-8 w-full flex flex-row justify-between items-center">
        <ClickableLogo />

        {/* <DonateDropdown /> */}

        <div className="flex flex-row space-x-3 items-center">
          {pathname !== "/calendar" && (
            <Link href="/calendar">
              <IconButton
                variant="secondary"
                src="/icons/calendar-light.svg"
                alt="Calendar"
                badge="true"
                className="dark:hidden"
              />
              <IconButton
                variant="secondary"
                src="/icons/calendar-light.svg"
                alt="Calendar"
                badge="true"
                className="hidden dark:block"
              />
            </Link>
          )}

          {pathname !== "/join" && (
            <Button as={Link} href="/join" variant="primary">
              Contribute
            </Button>
          )}
        </div>
      </nav>
    </ContentInset>
  );
}

function ClickableLogo() {
  return (
    <Link href="/">
      <div className="cursor-pointer">
        <div className="sm:hidden">
          <img
            src="/logos/logo-primary.svg"
            alt="Neurodiversity Wiki logo"
            width="40px"
            height="40px"
            className="dark:hidden"
          />
          <img
            src="/logos/logo-secondary.svg"
            alt="Neurodiversity Wiki logo"
            width="40px"
            height="40px"
            className="hidden dark:block"
          />
        </div>
        <div className="hidden sm:block">
          <img
            src="/logos/logomark-primary.svg"
            alt="Neurodiversity Wiki logo"
            className="h-6 dark:hidden"
          />
          <img
            src="/logos/logomark-secondary.svg"
            alt="Neurodiversity Wiki logo"
            className="h-6 hidden dark:block"
          />
        </div>
      </div>
    </Link>
  );
}
