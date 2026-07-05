import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollDown from "./ScrollDown";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >

      {/* Background */}

      <div className="absolute inset-0">
{/* Center Ambient Glow */}

<motion.div
  animate={{
    opacity: [0.12, 0.2, 0.12],
    scale: [1, 1.08, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 9,
    ease: "easeInOut",
  }}
  className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-[650px]
    h-[650px]
    rounded-full
    bg-violet-500
    blur-[220px]
  "
/>
{/* Stars */}

<div
  className="absolute inset-0 opacity-[0.15]"
  style={{
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
    backgroundSize: "90px 90px",
  }}
/>
        {/* Purple */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [.2, .35, .2],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="absolute -top-52 left-0 w-[700px] h-[700px] rounded-full bg-violet-600 blur-[220px]"
        />

        {/* Blue */}

        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [.18, .3, .18],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
          className="absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] rounded-full bg-cyan-500 blur-[220px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* Main */}

<div className="relative z-10 max-w-[1700px] mx-auto min-h-screen px-8 lg:px-12 pt-24">
  <div className="grid lg:grid-cols-[47%_53%] min-h-[calc(100vh-96px)] items-center gap-8 lg:gap-0">         {/* LEFT */}

          <HeroContent />

          {/* RIGHT */}

          <HeroImage />

        </div>

      </div>

       <div
        className="
        hidden
        lg:block
        "
      >

        <ScrollDown />

      </div>

    </section>
  );
}