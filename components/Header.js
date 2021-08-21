export default function Header({ children }) {
  return (
    <header className="flex flex-col justify-center sm:text-center">
      {children}
    </header>
  );
}
