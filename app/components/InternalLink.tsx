import Link from "next/link";

interface InternalLinkProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

export function InternalLink({ href, external = false, children }: InternalLinkProps) {
  return (
    <Link
      href={href}
      className="text-primary font-medium hover:underline focus:underline cursor-pointer"
      target={external ? "_blank" : ""}
      rel={external ? "noopener noreferrer" : ""}
    >
      {children}
    </Link>
  );
}
