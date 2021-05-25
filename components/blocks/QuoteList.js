import Quote from "../Quote";

export default function QuoteList({ quotes }) {
  return (
    <ul className="mb-4 flex flex-row flex-wrap gap-2">
      {quotes &&
        quotes.map((content) => (
          <li key={content}>
            <Quote>{content}</Quote>
          </li>
        ))}
    </ul>
  );
}
