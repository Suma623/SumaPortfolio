import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import {
  
  Laptop2,
  MapPin,
  Rocket,
} from "lucide-react";

const cards = [
  {
    icon: Brain,
  title: "Core Strengths",
    color: "text-violet-400",
    glow: "hover:border-violet-500",
    description: [
      "Problem Solving",
    "Creative Thinking",
    "Team Collaboration",
    "Continuous Learning",
    ],
  },

  {
    icon: Laptop2,
    title: "Interests",
    color: "text-cyan-400",
    glow: "hover:border-cyan-400",
    description: [
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "Computer Vision",
    ],
  },

  {
    icon: MapPin,
    title: "Location",
    color: "text-fuchsia-400",
    glow: "hover:border-fuchsia-400",
    description: [
       "Andhra Pradesh, India",
  "Flexible to Relocate",
  "Open to New Opportunities",
    ],
  },

  {
    icon: Rocket,
    title: "Career Goal",
    color: "text-violet-400",
    glow: "hover:border-violet-500",
    description: [
      "Build smart applications",
      "Transform ideas into solutions",
      "Deliver seamless user experiences",
      "Keep growing as an engineer",
    ],
  },
];

export default function AboutCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8">

      {cards.map((card, index) => {

        const Icon = card.icon;

        return (

          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`
            group
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            transition-all
            duration-500
            shadow-[0_0_25px_rgba(255,255,255,.05)]
            ${card.glow}
            `}
          >

            {/* Glow */}

            <div
              className="
              absolute
              -top-16
              -right-16
              w-40
              h-40
              rounded-full
              bg-violet-500/10
              blur-[80px]
              group-hover:bg-violet-500/20
              transition-all
              duration-500
              "
            />

            {/* Icon */}

            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.15,
              }}
              className={`
              w-16
              h-16
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              text-3xl
              mb-7
              ${card.color}
              `}
            >
              <Icon size={34} />
            </motion.div>

            {/* Title */}

            {/* Title */}

<h3 className={`text-2xl font-bold mb-6 ${card.color}`}>
  {card.title}
</h3>

            {/* Content */}

            <div className="space-y-3">

              {card.description.map((text, i) => (

                <p
                  key={i}
                  className="text-gray-400 leading-7"
                >
                  {text}
                </p>

              ))}

            </div>

            {/* Bottom Gradient */}

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

    </div>
  );
}