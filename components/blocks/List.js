const List = {
  Ordered: ({ children }) => (
    <ol className="list-decimal	ml-4 space-y-1">{children}</ol>
  ),
  Unordered: ({ children }) => (
    <ul className="list-disc ml-4 space-y-1">{children}</ul>
  ),
};

export default List;
