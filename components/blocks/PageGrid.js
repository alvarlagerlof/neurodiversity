export default function PageGrid({ children }) {
  return <ul className="space-y-4">{children}</ul>;

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center lg:-mx-4">
      {children}
    </ul>
  );
}
