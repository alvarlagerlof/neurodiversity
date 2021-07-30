import VerticalSpacer from "components/VerticalSpacer";

export default function Main({ children }) {
  return (
    <main>
      <VerticalSpacer>{children}</VerticalSpacer>
    </main>
  );
}
