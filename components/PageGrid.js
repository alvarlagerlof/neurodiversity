export default function PageGrid({ pages }) {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:-mx-4">
      {pages.map(({ href, name, explaination }) => {
        return (
          <li key={href} className="h-full">
            <a
              href={href}
              className="h-full flex flex-row items-start space-x-2 bg-white shadow transition hover:shadow-md rounded-xl p-4 focus:outline-none focus:ring focus:ring-primary"
            >
              <img
                src="/icons/arrow.svg"
                width="30px"
                height="30px"
                alt=""
                aria-hidden
              />
              <div>
                <h2 className="font-display font-semibold text-2xl">{name}</h2>
                <p>{explaination}</p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
