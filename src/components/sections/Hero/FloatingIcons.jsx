import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiMongodb,
  SiGoogle,
} from "react-icons/si";

const icons = [
  {
    icon: <FaReact />,
    top:"10%",
left:"8%",
    color: "#61DAFB",
  },
  {
    icon: <FaPython />,
    top: "2%",
    right: "28%",
    color: "#FFD43B",
  },
  {
    icon: <FaNodeJs />,
    bottom:"40%",
left:"8%",
    color: "#68A063",
  },
  {
    icon: <SiMongodb />,
    bottom:"60%",
right:"2%",
    color: "#4DB33D",
  },
  
  {
    icon: <SiGoogle />,
    bottom:"28%",
right:"10%",
    color: "#EA4335",
  },
  {
    icon: <FaJava />,
    top: "1%",
    left: "30%",
    color: "#F89820",
  },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
opacity:1,
y:[0,-18,0],
rotate:[0,2,-2,0],
scale:[1,1.08,1]
}}
          transition={{
            delay: index * 0.2,
            duration:5+index,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{
scale:1.15,
rotate:10,
y:-8
}}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            color: item.color,
          }}
          className="absolute w-20
h-20
flex
items-center
justify-center
text-[38px] backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-[0_0_45px_rgba(139,92,246,.25)]"
        >
          {item.icon}
        </motion.div>
      ))}
    </>
  );
}