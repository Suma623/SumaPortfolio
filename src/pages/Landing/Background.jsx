import { motion } from "framer-motion";

export default function Background() {

  return (

    <div className="absolute inset-0 overflow-hidden -z-10">


      {/* Main Background */}

      <div className="absolute inset-0 bg-[#050816]" />



      {/* Purple Glow */}

      <motion.div

        animate={{
          scale:[1,1.15,1],
          opacity:[0.12,0.25,0.12],
        }}

        transition={{
          duration:10,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
        absolute

        -top-20
        left-0

        w-[230px]
        h-[230px]

        md:w-[500px]
        md:h-[500px]

        rounded-full

        bg-violet-600

        blur-[90px]
        md:blur-[180px]
        "

      />



      {/* Blue Glow */}

      <motion.div

        animate={{
          scale:[1.1,1,1.1],
          opacity:[0.10,0.22,0.10],
        }}

        transition={{
          duration:12,
          repeat:Infinity,
          ease:"easeInOut",
        }}

        className="
        absolute

        bottom-[-70px]
        right-[-40px]

        w-[220px]
        h-[220px]

        md:w-[500px]
        md:h-[500px]

        rounded-full

        bg-cyan-500

        blur-[90px]
        md:blur-[180px]
        "

      />



      {/* Pink Glow */}

      <motion.div

        animate={{
          y:[0,-20,0],
          opacity:[0.05,0.12,0.05],
        }}

        transition={{
          duration:8,
          repeat:Infinity,
          ease:'easeInOut',
        }}

        className="
        absolute

        top-[45%]
        left-[35%]

        w-[180px]
        h-[180px]

        md:w-[350px]
        md:h-[350px]

        rounded-full

        bg-fuchsia-500

        blur-[80px]
        md:blur-[140px]
        "

      />




      {/* Grid */}

      <div

        className="
        absolute
        inset-0

        opacity-[0.03]
        "

        style={{

          backgroundImage:
          `
          linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),
          linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)
          `,

          backgroundSize:"60px 60px"

        }}

      />



      {/* Noise */}

      <div

        className="
        absolute
        inset-0

        opacity-[0.02]
        "

        style={{

          backgroundImage:
          "radial-gradient(circle,#ffffff 1px,transparent 1px)",

          backgroundSize:"24px 24px"

        }}

      />



      {/* Radial Light */}

      <div

        className="absolute inset-0"

        style={{

          background:
          "radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 65%)"

        }}

      />


    </div>

  );

}