export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={
        "bg-primary rounded-full py-1 px-3 text-white whitespace-nowrap " +
        className
      }
    >
      {children}
    </p>
  );
}
