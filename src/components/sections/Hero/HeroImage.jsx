import { motion } from "framer-motion";
import FloatingIcons from "./FloatingIcons";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center h-full overflow-visible">
{/* 1️⃣ Purple Ambient Glow (existing) */}

  <motion.div
animate={{
scale:[1,1.08,1],
opacity:[.3,.55,.3]
}}
transition={{
repeat:Infinity,
duration:7
}}
className="
absolute
w-[520px]
h-[520px]
rounded-full
bg-violet-500
blur-[180px]
"
/>

  {/* 2️⃣ Cyan Ambient Glow (existing) */}
  <motion.div
animate={{
opacity:[.12,.25,.12]
}}
transition={{
repeat:Infinity,
duration:8
}}
className="
absolute
right-0
bottom-10
w-[450px]
h-[450px]
rounded-full
bg-cyan-400
blur-[180px]
"
/>
      {/* 3️⃣ NEW Purple Halo */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.3, 0.55, 0.3],
    }}
    transition={{
      repeat: Infinity,
      duration: 7,
      ease: "easeInOut",
    }}
    className="
absolute
w-[520px]
h-[520px]
rounded-full
bg-violet-500
blur-[180px]
"
  />

  {/* 4️⃣ NEW Glowing Ring */}
  <motion.div
    animate={{
      scale: [1, 1.03, 1],
      opacity: [0.7, 1, 0.7],
    }}
    transition={{
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    }}
    className="
      absolute
      w-[420px]
      h-[420px]
      rounded-full
      border-[6px]
      border-violet-500/70
      shadow-[0_0_90px_rgba(168,85,247,.9)]
    "
  />

  {/* 5️⃣ NEW Orbit Ring */}
  <div
    className="
      absolute
      w-[500px]
      h-[500px]
      rounded-full
      border
      border-dashed
      border-violet-400/30
    "
  />

      {/* Floating Icons */}

      <FloatingIcons />

      {/* Image */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        whileHover={{
          rotateY: -6,
          rotateX: 4,
          scale: 1.03,
        }}
        className="relative z-20"
      >
        <img
          src="/profile/profile.png"
          alt="Ravooru Sumanaswi"
          draggable={false}
          className="
relative
z-20
h-[65vh]
xl:h-[72vh]
object-contain
drop-shadow-[0_80px_120px_rgba(0,0,0,.8)]

[mask-image:radial-gradient(circle_at_center,black_72%,transparent_100%)]
[-webkit-mask-image:radial-gradient(circle_at_center,black_72%,transparent_100%)]

brightness-[1.03]
contrast-110
"
        />
      </motion.div>

      {/* Soft Dark Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#050816]
        via-transparent
        to-transparent
        pointer-events-none
        z-30
        "
      />

      {/* Bottom Glow */}

      <div
        className="
        absolute
        bottom-0
        w-[70%]
        h-40
        bg-violet-500/20
        blur-[100px]
        rounded-full
        "
      />

    </div>
  );
}