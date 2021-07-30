type HeadingProps = {
  children: React.ReactNode | string;
  id?: string;
};

function H1({ children, id }: HeadingProps) {
  return (
    <h1
      id={id}
      className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4"
    >
      {children}
    </h1>
  );
}

function H2({ children, id }: HeadingProps) {
  return (
    <h2 id={id} className="font-display font-medium text-xl md:text-2xl mb-2">
      {children}
    </h2>
  );
}

function H3({ children, id }: HeadingProps) {
  return (
    <h3 id={id} className="font-display font-bold text-xl md:text-2xl mb-2">
      {children}
    </h3>
  );
}

const Heading = {
  H1,
  H2,
  H3,
};

export default Heading;
