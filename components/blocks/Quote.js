export default function Quote({ children }) {
  return (
    <li>
      <blockquote className="flex flex-row space-x-2 bg-gray-200 px-2 py-1 rounded-md">
        <span aria-hidden className="text-3xl h-0 font-display">
          “
        </span>
        <span>{children}</span>
      </blockquote>
    </li>
  );
}
