function H1({ children, id }) {
  return (
    <h2
      id={id}
      className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4"
    >
      {children}
    </h2>
  );
}

function H2({ children, id }) {
  return (
    <h3 id={id} className="font-display text-xl md:text-2xl mb-2">
      {children}
    </h3>
  );
}

const Heading = {
  H1,
  H2,
};

export default Heading;
