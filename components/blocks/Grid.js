export default function Grid({ children }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center lg:-mx-4">
      {children}
    </div>
  );
}
