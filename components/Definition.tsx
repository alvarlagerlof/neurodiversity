export default function Definition({ children }: { children: React.ReactNode }) {
  return <dl className="divide-y-2 divide-opacity-10 divide-black">{children}</dl>;
}
