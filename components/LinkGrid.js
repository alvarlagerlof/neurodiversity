import Typography from "components/Typography";

function LinkGrid({ children }) {
  return <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:-mx-4">{children}</ul>;
}

function Item({ href, title, description }) {
  return (
    <li className="h-full">
      <a
        href={href}
        className="h-full flex flex-row items-start space-x-2 bg-white shadow transition hover:shadow-md rounded-xl p-4 focus:outline-none focus:ring focus:ring-primary"
      >
        <img src="/icons/arrow.svg" className="w-6 md:w-7" alt="" aria-hidden />
        <div>
          <Typography.Heading margin="1">{title}</Typography.Heading>
          <Typography.Body margin="0">{description}</Typography.Body>
        </div>
      </a>
    </li>
  );
}

LinkGrid.Item = Item;

export default LinkGrid;
