function LinkGrid({ children }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:-mx-4">
      {children}
    </ul>
  );
}

function Item({ href, title, description }) {
  return (
    <li className="h-full">
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
          <h2 className="font-display font-semibold text-2xl">{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}

LinkGrid.Item = Item;

export default LinkGrid;
