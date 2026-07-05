import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "10+",
    title: "Projects",
    color: "text-violet-400",
  },
  {
    icon: Award,
    number: "4",
    title: "Certifications",
    color: "text-cyan-400",
  },
  
  {
    icon: GraduationCap,
    number: "2027",
    title: "Graduate",
    color: "text-violet-400",
  },
];

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
className="
grid
grid-cols-1
md:grid-cols-3
gap-10
mt-8
max-w-4xl
mx-auto
"   >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
              scale: 1.04,
            }}
            transition={{ duration: 0.3 }}
            className="
group
relative
overflow-hidden
rounded-2xl
border
border-white/10
bg-white/5
backdrop-blur-xl
w-[300px]
h-[170px]
mx-auto
p-5
text-center
shadow-[0_0_25px_rgba(255,255,255,.05)]
hover:border-violet-500/40
transition-all
duration-500
"
          >
            {/* Background Glow */}

            <div
              className="
              absolute
              -top-10
              left-1/2
              -translate-x-1/2
              w-36
              h-36
              rounded-full
              bg-violet-500/10
              blur-[70px]
              group-hover:bg-violet-500/20
              transition-all
              duration-500
              "
            />

            {/* Icon */}

            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.15,
              }}
              className={`relative flex justify-center mb-3 ${item.color}`}
            >
              <Icon size={28} />
            </motion.div>

            {/* Number */}

            <motion.h3
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              className="text-5xl text-mauve-400 font-extrabold mb-2 "
            >
              {item.number}
            </motion.h3>

            {/* Title */}

            <p className="text-indigo-400 tracking-wide">
              {item.title}
            </p>

            {/* Bottom Line */}

            <div
              className="
              absolute
              left-0
              bottom-0
              h-[3px]
              w-0
              bg-gradient-to-r
              from-violet-500
              via-fuchsia-500
              to-cyan-400
              group-hover:w-full
              transition-all
              duration-500
              "
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}