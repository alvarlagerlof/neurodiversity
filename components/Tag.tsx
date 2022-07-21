export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={
        "inline-block bg-primary rounded-full py-1 px-3 text-xs text-white " + className
      }
    >
      {children}
    </p>
  );
}
