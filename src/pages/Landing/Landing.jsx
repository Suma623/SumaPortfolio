import { motion } from "framer-motion";
import MouseGlow from "./MouseGlow";
import Background from "./Background";
import LeftPhoto from "./LeftPhoto";
import RightContent from "./RightContent";
import FloatingParticles from "./FloatingParticles";
import FloatingBadges from "./FloatingBadges";
export default function Landing({ onEnter }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* Animated Background */}
      <Background />
      <MouseGlow />
      <FloatingParticles />
      <FloatingBadges />

      {/* Main Content */}
      <div className="relative z-10 max-w-[1700px] mx-auto min-h-screen">

        <div className="grid min-h-screen lg:grid-cols-[42%_58%]">

          {/* Left Photo */}

          <div className="flex items-center justify-end pr-4 xl:pr-10">
            <LeftPhoto />
          </div>

          {/* Right Content */}

          <div className="flex items-center justify-start pl-8 xl:pl-16">
            <RightContent onEnter={onEnter} />
          </div>

        </div>

      </div>

      {/* Bottom Glow */}

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050816] to-transparent pointer-events-none" />
    </motion.section>
  );
}