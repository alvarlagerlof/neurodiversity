function Ordered({ children }) {
  return <ol className="list-decimal	ml-4 space-y-1">{children}</ol>;
}

function Unordered({ children }) {
  return <ul className="list-disc ml-4 space-y-1">{children}</ul>;
}

const List = {
  Ordered,
  Unordered,
};

export default List;
