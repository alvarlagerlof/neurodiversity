import { useState, useLayoutEffect } from "react";

export default function useHeight(ref) {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const measure = () => {
        window.requestAnimationFrame(() => {
          setHeight(ref.current.getBoundingClientRect().height);
        });
      };

      measure();

      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);

      return () => {
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      };
    }
  }, [ref]);

  return height;
}
