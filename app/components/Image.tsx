import { default as NextImage } from "next/image";

export function Image(props) {
  return (
    <NextImage
      {...props}
      className="rounded-md object-cover"
      width={250}
      height={170}
    />
  );
}
