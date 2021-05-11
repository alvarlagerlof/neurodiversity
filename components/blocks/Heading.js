const Heading = {
  H1: ({ children }) => (
    <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl mb-4">
      {children}
    </h2>
  ),
  H2: ({ children }) => (
    <h3 className="font-display text-xl md:text-2xl">{children}</h3>
  ),
};

export default Heading;
