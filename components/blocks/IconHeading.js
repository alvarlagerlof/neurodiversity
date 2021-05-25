export default function IconHeading({ url, children }) {
  return (
    <div className="flex flex-row space-x-2 mb-0">
      <img src={url} alt="Cross icon" />
      <h3 className="font-display text-xl md:text-2xl">{children}</h3>
    </div>
  );
}
