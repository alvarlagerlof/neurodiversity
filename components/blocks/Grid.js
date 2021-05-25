export default function Grid({ children }) {
  return (
    <div className="grid grid-cols-3 gap-4 items-center lg:-m-4">
      {children}
    </div>
  );
}
