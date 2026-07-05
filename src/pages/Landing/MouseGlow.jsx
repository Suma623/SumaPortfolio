import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const x = useSpring(mouseX, {
    stiffness: 60,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 60,
    damping: 25,
  });

  useEffect(() => {

    const move = (e) => {

      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (

    <motion.div

      style={{
        x,
        y,
      }}

      className="pointer-events-none fixed top-0 left-0 z-0 w-[500px] h-[500px] rounded-full"

    >

      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.18), rgba(139,92,246,.08), transparent 70%)",
          filter: "blur(70px)",
        }}
      />

    </motion.div>

  );

}