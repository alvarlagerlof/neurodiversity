import Typography from "components/Typography";
import Bounce from "components/Bounce";

function LinkGrid({ children }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:-mx-4">
      {children}
    </ul>
  );
}

function Item({ href, title, description }) {
  return (
    <Bounce amount="1.04">
      <li className="h-full">
        <a
          href={href}
          className={`
            h-full flex flex-row items-start space-x-2 rounded-xl p-4 bg-white ring-primary transition 
            shadow
            hover:shadow-md 
            outline-none focus-visible:ring`}
        >
          <img src="/icons/arrow.svg" className="w-6 md:w-7" alt="" aria-hidden />
          <div>
            <Typography.Heading margin="1">{title}</Typography.Heading>
            <Typography.Body margin="0">{description}</Typography.Body>
          </div>
        </a>
      </li>
    </Bounce>
  );
}

LinkGrid.Item = Item;

export default LinkGrid;
