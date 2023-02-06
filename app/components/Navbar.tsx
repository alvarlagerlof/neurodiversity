import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logoPrimary from "../../public/logos/logo-primary.svg";
import logoSecondary from "../../public/logos/logo-secondary.svg";
import logoMarkPrimary from "../../public/logos/logomark-primary.svg";
import logoMarkSecondary from "../../public/logos/logomark-secondary.svg";
import { Button } from "./Button";
import { ContentInset } from "./ContentInset";
import { IconButton } from "./IconButton";

export function Navbar() {
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
          <Image
            src={logoPrimary}
            alt="Neurodiversity Wiki logo"
            width={24}
            height={24}
            className="dark:hidden h-6 w-auto"
          />
          <Image
            src={logoSecondary}
            alt="Neurodiversity Wiki logo"
            width={24}
            height={24}
            className="hidden dark:block h-6 w-auto"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src={logoMarkPrimary}
            alt="Neurodiversity Wiki logo"
            width={24}
            height={24}
            className="h-6 dark:hidden w-auto"
          />
          <Image
            src={logoMarkSecondary}
            alt="Neurodiversity Wiki logo"
            width={24}
            height={24}
            className="h-6 hidden dark:block w-auto"
          />
        </div>
      </div>
    </Link>
  );
}
