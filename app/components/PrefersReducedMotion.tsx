"use client";

import { useReducedMotion } from "app/useReducedMotion";
import { useEffect } from "react";
import { Globals } from "react-spring";

export function PrefersReducedMotion() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    Globals.assign({
      skipAnimation: prefersReducedMotion,
    });
  }, [prefersReducedMotion]);

  return null;
}
