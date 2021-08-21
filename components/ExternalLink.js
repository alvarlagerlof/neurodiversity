export default function ExternalLink({ href, children }) {
  return (
    <a
      className="text-primary font-medium hover:underline focus:underline cursor-pointer"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
