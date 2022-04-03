import { useState } from "react";
import { useSpring, animated } from "react-spring";

interface BounceProps {
  amount: number;
  children: React.ReactNode;
}

export default function Bounce({ amount, children }: BounceProps) {
  const [isHovering, setIsHovering] = useState(false);

  const styles = useSpring({
    config: { mass: 1, tension: 180, friction: 12 },
    transform: isHovering ? `scale(${amount})` : "scale(1)",
    display: "inline-block",
  });

  return (
    <animated.div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={styles}
    >
      {children}
    </animated.div>
  );
}
