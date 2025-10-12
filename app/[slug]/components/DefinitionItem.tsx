"use client";

import { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";

import { useHeight } from "../useHeight";

interface DefinitionItem {
  summary: string;
  children: React.ReactNode;
}

export function DefinitionItem({ summary, children }: DefinitionItem) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="py-2">
      <dt>
        <button
          className="w-full flex flex-row justify-between items-center space-x-4 text-lg  font-medium rounded-md outline-hidden focus-visible:ring-3 focus-visible:ring-primary"
          aria-expanded={isOpen}
          onClick={() => toggle()}
        >
          <span className="text-left">{summary}</span>
          <Icon isOpen={isOpen} />
        </button>
      </dt>
      <dd>
        <Content isOpen={isOpen}>{children}</Content>
      </dd>
    </div>
  );
}

function Icon({ isOpen: isOpen }: { isOpen: boolean }) {
  const styles = useSpring({
    config: { mass: 1, tension: 180, friction: 12 },
    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
  });

  return (
    <>
      <animated.img
        aria-hidden
        alt=""
        src="/icons/plus-outline-light.svg"
        width="24px"
        height="24px"
        style={styles}
        className="dark:hidden"
      />
      <animated.img
        aria-hidden
        alt=""
        src="/icons/plus-outline-dark.svg"
        width="24px"
        height="24px"
        style={styles}
        className="hidden dark:block"
      />
    </>
  );
}

interface ContentProps {
  isOpen: boolean;
  children: React.ReactNode;
}

function Content({ isOpen, children }: ContentProps) {
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
