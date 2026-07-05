import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";


export default function HeroContent() {


  // ================= TYPEWRITER ROLES =================

  const roles = [
    "SOFTWARE ENGINEER",
    "FULL STACK DEVELOPER",
    "AI/ML ENTHUSIAST",
    "PROBLEM SOLVER",
  ];


  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);



  useEffect(() => {


    const currentRole = roles[roleIndex];


    const typingSpeed = isDeleting ? 60 : 120;



    const timer = setTimeout(() => {


      if (!isDeleting) {


        setText(
          currentRole.substring(0, text.length + 1)
        );


        if (text === currentRole) {

          setTimeout(() => {

            setIsDeleting(true);

          }, 1000);

        }


      } 
      
      
      else {


        setText(
          currentRole.substring(0, text.length - 1)
        );


        if (text === "") {


          setIsDeleting(false);


          setRoleIndex(
            (previous) =>
              (previous + 1) % roles.length
          );


        }


      }



    }, typingSpeed);



    return () => clearTimeout(timer);



  }, [text, isDeleting, roleIndex]);





  return (

    <div className="max-w-2xl">



      {/* ================= HELLO BADGE ================= */}


      <motion.div

        initial={{ opacity: 0, y: -20 }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.6
        }}

        className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-violet-500/40
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_35px_rgba(139,92,246,.18)]
        px-6
        py-3
        mb-2
        "

      >


        <motion.span

        animate={{
          rotate:[0,18,-8,0]
        }}

        transition={{
          repeat:Infinity,
          duration:2
        }}

        className="text-xl"

        >

        👋

        </motion.span>


        <span className="text-gray-200 font-medium tracking-wide">

          Hello, I'm

        </span>


      </motion.div>






      {/* ================= NAME ================= */}



      <motion.h1

      initial={{
        opacity:0,
        x:-40
      }}

      animate={{
        opacity:1,
        x:0
      }}

      transition={{
        duration:.7
      }}

      className="
      text-5xl
md:text-6xl
xl:text-7xl
      font-black
      leading-none
      bg-gradient-to-r
      from-violet-400
      via-fuchsia-400
      to-cyan-400
      bg-clip-text
      text-transparent
      "

      >

      Ravooru

      </motion.h1>




      <motion.h1

      initial={{
        opacity:0,
        x:-40
      }}

      animate={{
        opacity:1,
        x:0
      }}

      transition={{
        delay:.2
      }}

      className="
      text-5xl
      md:text-6xl
      xl:text-7xl
      font-black
      text-white
      leading-none
      mt-1
      "

      >

      Sumanaswi

      </motion.h1>







      {/* ================= TYPEWRITER ROLE ================= */}



      <motion.div

      initial={{
        opacity:0
      }}

      animate={{
        opacity:1
      }}

      transition={{
        delay:.45
      }}


      className="
      mt-5
      flex
      items-center
      gap-1
      uppercase
      tracking-[4px]
      text-sm
      text-gray-300
      h-6
      "

      >



      <span>

      {text}

      </span>




      <motion.span


      animate={{
        opacity:[0,1,0]
      }}


      transition={{
        duration:.8,
        repeat:Infinity
      }}


      className="
      text-violet-400
      font-bold
      text-lg
      "

      >

      |

      </motion.span>



      </motion.div>





      {/* ================= LINE ================= */}


      <motion.div

      initial={{
        width:0
      }}

      animate={{
        width:160
      }}

      transition={{
        delay:.7
      }}

      className="
      h-[3px]
      rounded-full
      mt-5
      bg-gradient-to-r
      from-violet-500
      to-cyan-400
      "

      />

      {/* ================= DESCRIPTION ================= */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .8 }}
        className="mt-4
        text-gray-300
        text-lg
        leading-8"
      >
        I design and build{" "}

        <span className="font-semibold text-violet-400">
          AI-powered software
        </span>

        , modern web applications and enterprise solutions
        that solve real-world problems with scalable technology.
      </motion.p>

      {/* ================= BUTTONS ================= */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-wrap gap-4 mt-3"
      >

        
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="flex gap-3"
>

<button
  onClick={() =>
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth" })
  }
  className="group relative overflow-hidden rounded-full p-[2px]"
>

  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-fuchsia-500" />

  <div className="relative px-10 py-5 rounded-full bg-[#0A0A14] text-cyan-300">
    View Projects →
  </div>

</button>

</motion.div>
      </motion.div>

      {/* ================= SOCIAL ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="flex gap-5 mt-6"
      >

        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/Suma623",
            color: "hover:text-violet-400",
          },

          {
            icon: <FaLinkedin />,
            link: "https://linkedin.com/in/sumanaswi-srm-7b353228a",
            color: "hover:text-cyan-400",
          },

          {
            icon: <SiLeetcode />,
            link: "https://leetcode.com/u/Suma0019/",
            color: "hover:text-[#FFA116]",
          },

          {
            icon: <HiOutlineMail />,
            link: "mailto:sumanaswiravooru0931@gmail.com",
            color: "hover:text-pink-400",
          },

        ].map((item, index) => (

          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.12,
              rotate: 8,
            }}
            whileTap={{ scale: .95 }}
            className={`w-12 h-12
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            flex items-center justify-center
            text-2xl
            text-white
            shadow-lg
            transition-all
            duration-300
            ${item.color}`}
          >
            {item.icon}
          </motion.a>

        ))}

      </motion.div>

    </div>
  );
}