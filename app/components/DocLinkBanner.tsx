import { ExternalLink } from "./ExternalLink";
import { Typography } from "./Typography";

export function DocLinkBanner({ url }: { url: string }) {
  return (
    <>
      <hr
        aria-hidden
        className="border-divider-light dark:border-divider-dark border-dashed"
      />
      <section>
        <Typography.Body>
          The contents of this page is based on a Google doc. Feel free to{" "}
          <ExternalLink href={url}>suggest changes.</ExternalLink>
        </Typography.Body>
      </section>
    </>
  );
}
