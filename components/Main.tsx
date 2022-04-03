import VerticalSpacer from "components/VerticalSpacer";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <VerticalSpacer>{children}</VerticalSpacer>
    </main>
  );
}
