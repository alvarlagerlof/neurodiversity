import { useState } from "react";
import Image from "next/image";
import AnimateHeight from "react-animate-height";

import usePrefersReducedMotion from "components/usePrefersReducedMotion";

export default function DefinitionItem({ summary, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2">
      <dt>
        <button
          className="w-full flex flex-row justify-between items-center text-lg font-display font-medium rounded-md outline-none focus-visible:ring focus-visible:ring-primary"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-left">{summary}</span>
          <Image
            aria-hidden
            alt=""
            src={open ? "/icons/close.svg" : "/icons/open.svg"}
            width="24px"
            height="24px"
          />
        </button>
      </dt>
      <dd>
        <Content open={open}>{children}</Content>
      </dd>
    </div>
  );
}

function Content({ open, children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const style = "mt-2";

  if (prefersReducedMotion) {
    return <div className={style}>{(open, children)}</div>;
  }

  return (
    <AnimateHeight
      duration={300}
      height={open ? "auto" : 0} // see props documentation below
    >
      <div className={style}>{(open, children)}</div>
    </AnimateHeight>
  );
}
