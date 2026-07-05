import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  BadgeCheck,
  Star,
} from "lucide-react";

export default function AboutProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -8,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-5
      shadow-[0_0_40px_rgba(139,92,246,.15)]
      "
    >
      {/* Purple Glow */}

      <div
        className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-72
        h-72
        rounded-full
        bg-violet-600/20
        blur-[100px]
        "
      />

      {/* Image */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="relative flex justify-center"
      >
        <img
          src="/profile/about-profile1.png"
          alt="Ravooru Sumanaswi"
          className="
          w-40
          h-40
          rounded-full
          object-cover
          border-4
          border-violet-500/50
          shadow-[0_0_50px_rgba(168,85,247,.35)]
          "
        />
      </motion.div>

      {/* Name */}

      <div className="mt-4 text-center">

        <h2 className="text-2xl text-purple-400 font-bold">
          Ravooru{" "}
          <span className="text-violet-400">
            Sumanaswi
          </span>
        </h2>

        <p className="mt-2 text-cyan-300 font-medium">
          AI Engineer • Full Stack Developer
        </p>

      </div>
{/* Details */}

<div className="space-y-3">

  {/* Education */}

  <div className="flex items-start gap-4">

    <GraduationCap
      size={22}
      className="text-violet-400 mt-1"
    />

    <div>

      <h4
        className="
        font-semibold
        bg-gradient-to-r
        from-violet-400
        to-cyan-400
        bg-clip-text
        text-transparent
        "
      >
        Education
      </h4>

      <p className="text-gray-400 text-sm mt-1">
        B.Tech Computer Science Engineering
      </p>

      <p className="text-gray-500 text-sm">
        SRM University AP
      </p>

    </div>

  </div>


  {/* Timeline */}

  <div className="flex items-start gap-4">

    <CalendarDays
      size={22}
      className="text-cyan-400 mt-1"
    />

    <div>

      <h4
        className="
        font-semibold
        bg-gradient-to-r
        from-violet-400
        to-cyan-400
        bg-clip-text
        text-transparent
        "
      >
        Timeline
      </h4>

      <p className="text-gray-400 text-sm mt-1">
        2023 — Present
      </p>

    </div>

  </div>


  {/* CGPA */}

  <div className="flex items-start gap-4">

    <Star
      size={22}
      className="text-yellow-400 mt-1"
    />

    <div>

      <h4
        className="
        font-semibold
        bg-gradient-to-r
        from-violet-400
        to-cyan-400
        bg-clip-text
        text-transparent
        "
      >
        CGPA
      </h4>

      <p className="text-gray-400 text-sm mt-1">
        8.7 / 10
      </p>

    </div>

  </div>


  {/* Status */}

  <div className="flex items-start gap-4">

    <BadgeCheck
      size={22}
      className="text-green-400 mt-1"
    />

    <div>

      <h4
        className="
        font-semibold
        bg-gradient-to-r
        from-violet-400
        to-cyan-400
        bg-clip-text
        text-transparent
        "
      >
        Status
      </h4>

      <p className="text-gray-400 text-sm mt-1">
        Available for Internships & Full-Time Opportunities
      </p>

    </div>

  </div>


</div>

      {/* Bottom Glow */}

      <div
        className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2
        w-52
        h-16
        bg-violet-500/20
        blur-[60px]
        rounded-full
        "
      />
    </motion.div>
  );
}