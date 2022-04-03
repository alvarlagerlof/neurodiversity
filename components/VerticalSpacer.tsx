interface VerticalSpacerProps {
  children?: React.ReactNode;
}

export default function VerticalSpacer({ children }: VerticalSpacerProps) {
  return <div className="space-y-12">{children}</div>;
}
