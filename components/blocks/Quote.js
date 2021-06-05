export default function Quote({ children }) {
  return (
    <blockquote className="flex flex-row space-x-2 bg-gray-200 px-2 py-1 rounded-md mb-4">
      <span aria-hidden className="text-3xl h-0 font-display">
        “
      </span>
      {/* Needed because mdx parses content as p, adding mb-4 */}
      <span className="clear-margin">{children}</span>
    </blockquote>
  );
}
