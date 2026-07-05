import { motion } from "framer-motion";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

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

w-[260px]
h-[260px]

md:w-[550px]
md:h-[550px]

rounded-full
bg-violet-500

blur-[120px]
md:blur-[220px]
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
className="
absolute

-top-20
left-0

w-[250px]
h-[250px]

md:w-[500px]
md:h-[500px]

rounded-full
bg-violet-600

blur-[100px]
md:blur-[180px]
"     />

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
className="
absolute

bottom-[-80px]
right-[-50px]

w-[250px]
h-[250px]

md:w-[500px]
md:h-[500px]

rounded-full
bg-cyan-500

blur-[100px]
md:blur-[180px]
"      />

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

<div className="relative z-10 max-w-7xl mx-auto min-h-screen px-8 lg:px-12 pt-20">
<div
className="
grid
lg:grid-cols-2
min-h-[calc(100vh-80px)]
items-center
gap-10
"
>
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

        


      </div>

    </section>
  );
}