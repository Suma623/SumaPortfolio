import { motion } from "framer-motion";
import FloatingBadges from "./FloatingBadges";

const LeftPhoto = () => {
  return (

    <motion.div

      initial={{ opacity: 0, x: -100 }}

      animate={{ opacity: 1, x: 0 }}

      transition={{ duration: 1 }}

      className="
      relative
      flex
      items-center
      justify-center
      "

    >


      <motion.div

        animate={{

          y:[0,-15,0]

        }}

        transition={{

          duration:5,
          repeat:Infinity,
          ease:"easeInOut"

        }}


        className="
        relative
        flex
        items-center
        justify-center
        "

      >


        {/* OUTER ROTATING RING */}


        <motion.div

        animate={{

          rotate:360

        }}

        transition={{

          duration:20,
          repeat:Infinity,
          ease:"linear"

        }}

        className="
        absolute
        w-[520px]
        h-[520px]
        rounded-full
        border
        border-violet-500/40
        "

        />



        {/* MAIN GLOW */}

        <motion.div

          animate={{

            scale:[1,1.1,1],
            opacity:[0.4,0.8,0.4]

          }}

          transition={{

            duration:6,
            repeat:Infinity

          }}


          className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-gradient-to-r
          from-violet-600
          via-purple-500
          to-cyan-400
          blur-[120px]
          "

        />




        {/* GLASS BACK CIRCLE */}

        <div

        className="
        absolute
        w-[430px]
        h-[430px]
        rounded-full
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        "

        />




        {/* TECH FLOATING BADGES */}

        <FloatingBadges />





        {/* IMAGE */}


        <motion.div
  whileHover={{
    rotateY: -8,
    rotateX: 5,
    scale: 1.03,
  }}

  transition={{
    duration:0.4
  }}

  className="
  relative
  z-10

  w-[430px]
  h-[620px]

  rounded-[45px]

  overflow-hidden

  bg-white/10
  backdrop-blur-xl

  border
  border-white/20

  shadow-[0_0_70px_rgba(139,92,246,.45)]

  before:absolute
  before:inset-0
  before:bg-gradient-to-br
  before:from-violet-500/20
  before:to-cyan-500/20
  "
>


<img

src="/landing-photo.png"

alt="Sumanaswi"

className="
relative
z-10

w-full
h-full

object-cover

"
/>


</motion.div>


      </motion.div>


    </motion.div>

  );

};


export default LeftPhoto;