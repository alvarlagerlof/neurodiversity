export default function Button({ as = "button", variant, children, ...props }) {
  const Tag = as;

  const baseStyle = "py-2 px-5 rounded-full font-medium";
  const variants = {
    primary: `${baseStyle} bg-primary text-white`,
    secondary: `${baseStyle} bg-secondary`,
  };

  return (
    <Tag className={variants[variant]} {...props}>
      {children}
    </Tag>
  );
}
