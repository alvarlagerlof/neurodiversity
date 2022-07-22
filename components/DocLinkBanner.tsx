import ExternalLink from "./ExternalLink";
import Section from "./Section";
import Typography from "./Typography";

export default function DocLinkBanner({ url }: { url: string }) {
  return (
    <>
      <hr aria-hidden className="border-highlight border-dashed" />
      <Section>
        <Typography.Body>
          The contents of this page is based on a Google doc. Feel free to{" "}
          <ExternalLink href={url}>suggest changes.</ExternalLink>
        </Typography.Body>
      </Section>
    </>
  );
}
