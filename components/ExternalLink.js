export default function ExternalLink({ href, children }) {
  return (
    <a
      className="text-primary-dark underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
