import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function Bounce({ amount, children }) {
  const [isHovering, setIsHovering] = useState(false);

  const styles = useSpring({
    config: { mass: 1, tension: 180, friction: 12 },
    transform: isHovering ? `scale(${amount})` : "scale(1)",
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
