import { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

import useHeight from "lib/useHeight";

export default function DefinitionItem({ summary, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <dt>
        <button
          className="w-full flex flex-row justify-between items-center space-x-4 text-lg font-display font-medium rounded-md outline-none focus-visible:ring focus-visible:ring-primary"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="text-left">{summary}</span>
          <Icon open={isOpen} />
        </button>
      </dt>
      <dd>
        <Content open={isOpen}>{children}</Content>
      </dd>
    </div>
  );
}

function Icon({ open: isOpen }) {
  const styles = useSpring({
    config: { mass: 1, tension: 180, friction: 12 },
    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
  });

  return (
    <animated.img
      aria-hidden
      alt=""
      src="/icons/plus.svg"
      width="24px"
      height="24px"
      style={styles}
    />
  );
}

function Content({ open: isOpen, children }) {
  const ref = useRef(null);
  const height = useHeight(ref);

  const styles = useSpring({
    config: { mass: 1, tension: 200, friction: 26 },
    height: isOpen ? height : 0,
    opacity: isOpen ? 1 : 0,
  });

  return (
    <animated.div
      style={{
        overflow: "clip",
        ...styles,
      }}
    >
      <div className="pt-2" ref={ref}>
        {children}
      </div>
    </animated.div>
  );
}
