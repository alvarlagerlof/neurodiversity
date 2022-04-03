function Ordered({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal ml-5 space-y-1">{children}</ol>;
}

function Unordered({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc ml-5 space-y-1">{children}</ul>;
}

const List = {
  Ordered,
  Unordered,
};

export default List;
