import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RightContent({ onEnter }) {
  const name = "ராவூர்";
//ராவூர்
  const [text, setText] = useState("");
  const [showSurname, setShowSurname] = useState(false);
  const [showLine, setShowLine] = useState(false);
  const [showRole1, setShowRole1] = useState(false);
  const [showRole2, setShowRole2] = useState(false);
  const [showRole3, setShowRole3] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let i = 0;

    const typing = setInterval(() => {
      setText(name.slice(0, i + 1));
      i++;

      if (i === name.length) {
        clearInterval(typing);

        setTimeout(() => {
          setShowSurname(true);

          setTimeout(() => {
            setShowLine(true);

            setTimeout(() => {
              setShowRole1(true);

              setTimeout(() => {
                setShowRole2(true);

                setTimeout(() => {
                  setShowRole3(true);

                  setTimeout(() => {
                    setShowButton(true);
                  }, 500);

                }, 300);

              }, 300);

            }, 500);

          }, 400);

        }, 300);
      }
    }, 140);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className="flex items-center pl-8 lg:pl-16">

      <div>

        {/* Name */}

        <div className="flex items-center">

<h1 className="text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent">
            {text}

          </h1>

          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
            }}
            className="text-violet-500 text-7xl"
          >
            |
          </motion.span>

        </div>

        {showSurname && (

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 via-white to-violet-400 bg-clip-text text-transparent"
          >
            Sumanaswi
          </motion.h1>

        )}

        {/* Line */}

        {showLine && (

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: 260,
            }}
            transition={{
              duration: .7,
            }}
            className="h-[3px] rounded-full mt-8 bg-gradient-to-r from-violet-500 to-cyan-400"
          />

        )}

        {/* Roles */}

        <div className="mt-10 space-y-4 text-gray-300">

  {showRole1 && (
    <motion.p
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="text-2xl tracking-wide"
    >
      Software Engineer
    </motion.p>
  )}

  {showRole2 && (
    <motion.p
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="text-2xl tracking-wide"
    >
      AI Developer
    </motion.p>
  )}

  {showRole3 && (
    <motion.p
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="text-2xl tracking-wide"
    >
      Full Stack Developer
    </motion.p>
  )}

</div>
        {/* Button */}

        {showButton && (
  <motion.button
    initial={{
      opacity: 0,
      scale: 0.8,
      y: 30,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    transition={{
      duration: 0.8,
      ease: "easeOut",
    }}
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.96,
    }}
    onClick={onEnter}
    className="group relative mt-16 overflow-hidden rounded-full p-[2px]"
  >

    {/* Animated Border */}

    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
      className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500"
    />

    {/* Button */}

    <div className="relative flex items-center gap-4 rounded-full bg-[#0A0A14]/90 backdrop-blur-xl px-10 py-5 border border-white/10">

      <motion.span
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-xl"
      >
        
      </motion.span> 
<span className="font-semibold text-lg tracking-wide bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
  Explore My Journey 
</span>
🤗
      <motion.span
        className="text-xl"
        whileHover={{
          x: 8,
        }}
      >
        →
      </motion.span>

    </div>

    {/* Glow */}

    <div className="absolute inset-0 rounded-full bg-violet-500 blur-3xl opacity-0 group-hover:opacity-30 transition duration-500 -z-10" />

  </motion.button>
)}

      </div>

    </div>
  );
}