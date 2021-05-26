export default function PageGrid({ children }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center lg:-mx-4">
      {children}
    </ul>
  );
}
