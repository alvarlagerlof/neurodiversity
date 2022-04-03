import { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import useKeypress from "react-use-keypress";

import Button from "components/Button";
import useOnClickOutside from "lib/useOnClickOutside";
import { usePlausible } from "next-plausible";

export default function DonateDropdown() {
  const plausible = usePlausible();
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const styles = useSpring({
    config: { mass: 1, tension: 180, friction: 12 },
    opacity: isOpen ? "1" : "0",
    transform: isOpen ? "scale(1)" : "scale(0.9)",
  });

  useOnClickOutside(ref, () => setIsOpen(false));

  useKeypress("Escape", () => setIsOpen(false));

  const toggle = () => {
    plausible("Donate button: Click");
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <Button
        variant="primary"
        onClick={() => toggle()}
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex flex-row items-center space-x-1"
      >
        <span>Donate</span>
        <Icon isOpen={isOpen} />
      </Button>
      <animated.div
        className="origin-top-right absolute right-0 mt-2 w-48 p-2 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
        style={styles}
      >
        <ul role="none">
          <Item href="https://github.com/sponsors/alvarlagerlof" isOpen={isOpen}>
            GitHub
          </Item>
          <Item href="https://www.buymeacoffee.com/alvar" isOpen={isOpen}>
            Buy Me a Coffee
          </Item>
        </ul>
      </animated.div>
    </div>
  );
}

interface IconProps {
  href: string;
  isOpen: boolean;
  children: React.ReactNode;
}

function Item({ href, isOpen, children }: IconProps) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block py-2 px-3 transition hover:bg-highlight rounded-md"
        tabIndex={isOpen ? 0 : -1}
      >
        {children}
      </a>
    </li>
  );
}

function Icon({ isOpen }: { isOpen: boolean }) {
  const styles = useSpring({
    config: { mass: 1, tension: 180, friction: 12 },
    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
  });

  return (
    <animated.img
      aria-hidden
      alt=""
      src="/icons/plus.svg"
      width="20px"
      height="20px"
      className="!mr-[-6px]"
      style={styles}
    />
  );
}
