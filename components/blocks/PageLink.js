export default function PageLink({ title, description, href, disabled }) {
  return (
    <li className="h-full">
      <a
        href={disabled ? null : href}
        className={`${
          disabled
            ? "text-gray-500"
            : "hover:ring hover:ring-primary-light focus:outline-none focus:ring focus:ring-primary-light"
        } flex flex-col items-center h-full justify-center bg-gray-200 rounded-xl p-4 space-y-1`}
      >
        <h2 className="text-center font-display font-semibold text-xl">
          {title}
        </h2>
        <p className="text-center">{disabled ? "Cooming soon" : description}</p>
      </a>
    </li>
  );
}
