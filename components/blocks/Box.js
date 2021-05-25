export default function Box({ children }) {
  return (
    <section className="space-y-8 rounded-xl bg-secondary-light p-4 lg:-m-4 border-4 border-secondary-dark">
      {children}
    </section>
  );
}
