export default function ContentInset({ size, children }) {
  const classes = {
    wide: "max-w-4xl w-full sm:w-3/4",
    normal: "max-w-3xl w-full sm:w-10/12",
  };

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8">
      <div className={classes[size]}>{children}</div>
    </div>
  );
}
