import React from "react";

export default function QuoteGroup({ children }) {
  return <ul className="mb-4 flex flex-row flex-wrap gap-2">{children}</ul>;
}
