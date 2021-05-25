export default function IconHeading({ url, alt, children }) {
  return (
    <div className="flex flex-row space-x-2 mb-0">
      <img src={url} alt={alt} />
      <h3 className="font-display text-xl md:text-2xl">{children}</h3>
    </div>
  );
}
