import { motion } from "framer-motion";

const badges = [
  {
    name: "⚛ React",
    top: "12%",
    left: "-25%",
    delay: 0,
  },

  {
    name: "🐍 Python",
    top: "18%",
    right: "-25%",
    delay: 0.4,
  },

  {
    name: "🤖 AI",
    top: "45%",
    left: "-25%",
    delay: 0.8,
  },

  {
    name: "🍃 MongoDB",
    top: "55%",
    right: "-28%",
    delay: 1.2,
  },

  {
    name: "⚡ FastAPI",
    bottom: "18%",
    left: "-25%",
    delay: 1.6,
  },

  {
    name: "🟣 SAP",
    bottom: "12%",
    right: "-25%",
    delay: 2,
  },
];

export default function FloatingBadges() {
  return (
    <>
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: [0, -12, 0],
            scale: 1,
          }}
          transition={{
            delay: badge.delay,
            duration: 3.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute z-20"
          style={{
            top: badge.top,
            left: badge.left,
            right: badge.right,
            bottom: badge.bottom,
          }}
        >
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-5 py-3 shadow-[0_0_30px_rgba(255,255,255,.08)]">

            <span className="text-sm font-medium tracking-wide">
              {badge.name}
            </span>

          </div>
        </motion.div>
      ))}
    </>
  );
}