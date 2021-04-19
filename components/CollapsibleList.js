import { useState } from "react";

export default function CollapsibleList({ content, ringOffsetColor }) {
  return (
    <dl className="divide-y-2 divide-opacity-10 divide-black">
      {content.map(({ summary, details }) => {
        return (
          <Item
            summary={summary}
            details={details}
            ringOffsetColor={ringOffsetColor}
            key={details}
          />
        );
      })}
    </dl>
  );
}

function Item({ summary, details, ringOffsetColor }) {
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
          <img aria-hidden src={open ? "/close.svg" : "/open.svg"} />
        </button>
      </dt>
      <dd
        className="mt-2"
        style={{
          display: open ? "block" : "none",
        }}
      >
        {details}
      </dd>
    </div>
  );
}
