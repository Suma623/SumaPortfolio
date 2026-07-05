import { motion } from "framer-motion";

// Generate stars only once
const stars = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 5,
}));

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* ================= Purple Glow ================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -top-40
        -left-40
        w-[700px]
        h-[700px]
        rounded-full
        bg-violet-600
        blur-[180px]
        "
      />

      {/* ================= Cyan Glow ================= */}

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-250px]
        right-[-150px]
        w-[650px]
        h-[650px]
        rounded-full
        bg-cyan-500
        blur-[180px]
        "
      />

      {/* ================= Grid ================= */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ================= Stars ================= */}

      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* ================= Floating Orb 1 ================= */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-32
        right-40
        w-56
        h-56
        rounded-full
        bg-violet-500/10
        blur-[120px]
        "
      />

      {/* ================= Floating Orb 2 ================= */}

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-32
        left-24
        w-64
        h-64
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        "
      />

      {/* ================= Center Light ================= */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(139,92,246,.10),transparent_70%)]
        "
      />

    </div>
  );
}