export default function ExternalLink({ href, children }) {
  return (
    <a
      className="text-indigo-600"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
