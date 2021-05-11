import MdxWrapper from "../MdxWrapper";

export default function Section({ children }) {
  return (
    <section>
      <MdxWrapper>{children}</MdxWrapper>
    </section>
  );
}
