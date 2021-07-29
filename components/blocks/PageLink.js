export default function PageLink({ title, description, href, clickable }) {
  return (
    <li className="rounded-xl">
      <h2 className="font-display font-semibold text-xl">{title}</h2>
    </li>
  );

  return (
    <li className="h-full">
      {clickable ? (
        <a
          href={href}
          className="flex flex-col items-center h-full justify-center bg-white rounded-xl p-4 space-y-1 hover:ring hover:ring-primary-light focus:outline-none focus:ring focus:ring-primary-light"
        >
          <h2 className="text-center font-display font-semibold text-xl">
            {title}
          </h2>
          <p className="text-center">{description}</p>
        </a>
      ) : (
        <div className="text-gray-600 flex flex-col items-center h-full justify-center bg-white rounded-xl p-4 space-y-1">
          <h2 className="text-center font-display font-semibold text-xl">
            {title}
          </h2>
          <p className="text-center">{description}</p>
        </div>
      )}
    </li>
  );
}
