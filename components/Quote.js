export default function Quote({ children }) {
  return (
    <blockquote className="flex flex-row space-x-2 bg-gray-200 px-2 py-1 rounded-lg">
      <div aria-hidden className="text-3xl h-0 font-display">
        “
      </div>
      <span>{children}</span>
    </blockquote>
  );
}
