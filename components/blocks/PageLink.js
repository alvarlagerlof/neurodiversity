export default function PageLink({ title, description, href }) {
  return (
    <a
      href={href}
      className="flex flex-col h-full items-center justify-center bg-gray-200 rounded-xl p-4 space-y-1 hover:ring hover:ring-primary-light"
    >
      <h2 className="text-center font-display font-semibold text-xl">
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </a>
  );
}
