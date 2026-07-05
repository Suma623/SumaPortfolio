import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.8 }}
      onClick={handleScroll}
className="
absolute
bottom-10
left-1/2
-translate-x-1/1
z-10
hidden
lg:flex
flex-col
items-center
cursor-pointer
group
"    >
      {/* Mouse */}

      <motion.div
        whileHover={{
          scale: 1.08,
          boxShadow: "0 0 18px rgba(168,85,247,.45)",
        }}
        className="
        w-8
        h-14
        rounded-full
        border
        border-violet-400/80
        flex
        justify-center
        pt-2
        backdrop-blur-md
        bg-white/5
        "
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
            opacity: [1, 0.3, 1],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1.5 h-1.5 rounded-full bg-violet-400"
        />
      </motion.div>

      {/* Text */}

      <motion.p
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="mt-3 text-sm tracking-wide text-gray-300"
      >
        Scroll Down
      </motion.p>

      {/* Arrow */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="mt-1 text-violet-400"
      >
        <ChevronDown size={20} />
      </motion.div>
    </motion.div>
  );
}