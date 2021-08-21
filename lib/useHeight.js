import { useState, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function useHeight(ref) {
  const [height, setHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
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
