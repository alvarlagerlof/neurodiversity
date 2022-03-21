import Typography from "components/Typography";
import Bounce from "components/Bounce";
import { useRef } from "react";
import Link from "next/link";

function LinkGrid({ children }) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:-mx-4">
      {children}
    </ul>
  );
}

function Item({ href, title, description }) {
  const link = useRef(null);

  return (
    <Bounce amount="1.04">
      <li
        onClick={(e) => {
          if (link.current !== e.target) {
            link.current.click();
          }
        }}
        className={`
              h-full flex flex-row items-start space-x-2 rounded-xl p-4 bg-white ring-primary transition 
              shadow
              hover:shadow-md 
              outline-none focus-visible:ring cursor-pointer`}
      >
        <img src="/icons/arrow.svg" className="w-6 md:w-7" alt="" aria-hidden />
        <div>
          <Typography.Heading margin="1">
            <a href={href} ref={link}>
              {title}
            </a>
          </Typography.Heading>
          <Typography.Body margin="0">{description}</Typography.Body>
        </div>
      </li>
    </Bounce>
  );
}

LinkGrid.Item = Item;

export default LinkGrid;
