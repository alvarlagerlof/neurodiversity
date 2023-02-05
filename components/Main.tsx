import VerticalSpacer from "./VerticalSpacer";

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <VerticalSpacer>{children}</VerticalSpacer>
    </main>
  );
}
