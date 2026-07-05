import { motion } from "framer-motion";

const particles = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  size: Math.random() * 5 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 12 + 8,
  delay: Math.random() * 5,
}));

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle) => (

        <motion.div
          key={particle.id}

          initial={{
            opacity: 0,
            y: 0,
          }}

          animate={{
            opacity: [0.1, 0.8, 0.1],
            y: [-20, 20, -20],
            x: [-10, 10, -10],
          }}

          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="absolute rounded-full"

          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            background: "white",
            boxShadow: "0 0 10px rgba(255,255,255,.8)",
          }}

        />

      ))}

    </div>
  );
}