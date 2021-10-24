function Base({ children, className, margin, as, ...props }) {
  const Tag = as;
  const classNameWithMargin = `${className} mb-${margin}`;

  return (
    <Tag className={classNameWithMargin} {...props}>
      {children}
    </Tag>
  );
}

function Title({ children, className = "", margin = "4", as = "h1", ...props }) {
  return (
    <Base
      as={as}
      className={`font-display font-extrabold text-3xl sm:text-4xl md:text-5xl ${className}`}
      margin={margin}
      {...props}
    >
      {children}
    </Base>
  );
}

function Subtitle({ children, className = "", margin = "0", as = "h2", ...props }) {
  return (
    <Base
      as={as}
      className={`font-display font-medium text-xl md:text-2xl ${className}`}
      margin={margin}
      {...props}
    >
      {children}
    </Base>
  );
}

function Heading({ children, className = "", margin = "2", as = "h3", ...props }) {
  return (
    <Base
      as={as}
      className={`font-display font-semibold text-xl md:text-2xl ${className}`}
      margin={margin}
      {...props}
    >
      {children}
    </Base>
  );
}

function Body({ children, className = "", margin = "4", as = "p", ...props }) {
  return (
    <Base as={as} className={`text-body ${className}`} margin={margin} {...props}>
      {children}
    </Base>
  );
}

function LinkHeading({ children, className = "", margin = "2", href = href, as = "h3", ...props }) {
  return (
    <Base
      as={as}
      className={`font-display font-semibold text-xl md:text-2xl ${className}`}
      margin={margin}
      {...props}
    ><a href={href}>
      {children} </a>
    </Base>
  );
}

const Typography = {
  Title,
  Subtitle,
  Heading,
  Body,
  LinkHeading
};

export default Typography;
