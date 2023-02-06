import Image from "next/image";

export function ContentImage(props) {
  return (
    <Image
      {...props}
      className="rounded-md object-cover overflow-hidden"
      width={250}
      height={170}
    />
  );
}
