import Image from "next/image";

export function ContentImage(props) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      className="rounded-md object-cover overflow-hidden"
      width={250}
      height={170}
    />
  );
}
