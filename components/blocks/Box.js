export default function Box({ children }) {
  return (
    <section className="space-y-8 rounded-xl bg-secondary-light p-4 lg:-mx-4 bg-primarylight">
      {children}
    </section>
  );
}
