function H1({ children }) {
  return (
    <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
      {children}
    </h2>
  );
}

function H2({ children }) {
  return <h3 className="font-display text-xl md:text-2xl mb-2">{children}</h3>;
}

const Heading = {
  H1,
  H2,
};

export default Heading;
