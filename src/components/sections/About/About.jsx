import { motion } from "framer-motion";

import AboutProfile from "./AboutProfile";
import AboutCards from "./AboutCards";
import Stats from "./Stats";
import BackgroundEffects from "./BackgroundEffects";

export default function About() {
  return (
    <section
  id="about"
  className="
  relative
  overflow-hidden
  bg-[#050816]
  text-white
  pt-3
  pb-8
  px-6
  "
>
      {/* ================= Background ================= */}

      <BackgroundEffects />

      {/* ================= Main Container ================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Small Heading */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
          uppercase
          tracking-[6px]
          text-center
          text-violet-400
          font-semibold
          "
        >
          Get To Know Me
        </motion.p>

        {/* Main Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="
          text-center
          text-4xl
          md:text-5xl
          text font-black
          font-heading
          tracking-tight          
          text-purple-400
          mt-2
          "
        >
          About{" "}
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="
          max-w-4xl
          mx-auto
          mt-5
          text-center
          text-gray-400
          text-lg
          leading-7
          "
        >
          I'm <span className="text-violet-400 font-semibold">Ravooru Sumanaswi</span>,
          a Computer Science undergraduate at SRM University AP with a strong
          interest in Artificial Intelligence, Full Stack Development,
          Computer Vision, SAP and Enterprise Applications.
          I enjoy building software that solves real-world problems,
          continuously learning modern technologies,
          and creating impactful digital experiences.
        </motion.p>

        {/* Divider */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="
          h-[3px]
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-cyan-400
          mx-auto
          mt-4
          "
        />

        {/* ================= Content ================= */}

        <div className="grid lg:grid-cols-[38%_62%] gap-6 mt-6">

          {/* Left */}

          <AboutProfile />

          {/* Right */}

          <AboutCards />

        </div>

        {/* ================= Stats ================= */}

        <Stats />

      </div>
    </section>
  );
}