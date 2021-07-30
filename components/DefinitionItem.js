import { useState } from "react";
import Image from "next/image";

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
      <dd
        className="mt-2"
        style={{
          display: open ? "block" : "none",
        }}
      >
        {children}
      </dd>
    </div>
  );
}
