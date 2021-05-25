import ExternalLink from "../ExternalLink";

export default function Link({ href, children }) {
  return <ExternalLink href={href}>{children}</ExternalLink>;
}
