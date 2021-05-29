export default function PageLink({ title, description, href, disabled }) {
  return (
    <li className="h-full">
      {disabled ? (
        <div className="text-gray-600 flex flex-col items-center h-full justify-center bg-gray-200 rounded-xl p-4 space-y-1">
          <h2 className="text-center font-display font-semibold text-xl">
            {title}
          </h2>
          <p className="text-center">
            {disabled ? "Coming soon" : description}
          </p>
        </div>
      ) : (
        <a
          href={href}
          className="flex flex-col items-center h-full justify-center bg-gray-200 rounded-xl p-4 space-y-1 hover:ring hover:ring-primary-light focus:outline-none focus:ring focus:ring-primary-light"
        >
          <h2 className="text-center font-display font-semibold text-xl">
            {title}
          </h2>
          <p className="text-center">
            {disabled ? "Coming soon" : description}
          </p>
        </a>
      )}
    </li>
  );
}
