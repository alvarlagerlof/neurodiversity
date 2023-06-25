export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="flex flex-row space-x-2 bg-red px-2 py-1 rounded-md bg-highlight">
      <span aria-hidden className="text-3xl h-0 ">
        “
      </span>
      {/* Needed because mdx parses content as p, adding mb-4 */}
      <span className="clear-margin">{children}</span>
    </blockquote>
  );
}
