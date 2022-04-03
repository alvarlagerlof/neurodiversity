export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex flex-col justify-center sm:text-center">{children}</header>
  );
}
