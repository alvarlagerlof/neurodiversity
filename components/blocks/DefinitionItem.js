import { useState } from "react";

export default function DefinitionItem({ summary, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-2">
      <dt>
        <button
          className="w-full flex flex-row justify-between items-center text-lg font-display rounded-md focus:outline-none focus:ring focus:ring-primary-light"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-left">{summary}</span>
          <img
            aria-hidden
            src={open ? "/icons/close.svg" : "/icons/open.svg"}
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
