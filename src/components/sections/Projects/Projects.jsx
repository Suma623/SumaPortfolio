import { useState } from "react";
import projects from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {

  const [particles] = useState(() =>
    Array.from({ length: 25 }, () => ({ left: Math.random() * 100, top: Math.random() * 100 }))
  );

  return (

    <section
id="projects"
className="
relative
overflow-hidden
bg-[#050816]
text-white
pt-6
pb-10
px-6
"
>


{/* ================= PREMIUM BACKGROUND ================= */}


{/* Purple Glow */}

<motion.div

animate={{
scale:[1,1.15,1],
opacity:[0.2,0.4,0.2]
}}

transition={{
duration:8,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
top-20
left-[-150px]
w-full
w-[600px]
h-[600px]
rounded-full
bg-violet-600/30
blur-[200px]
"

/>



{/* Cyan Glow */}

<motion.div

animate={{
scale:[1.1,1,1.1],
opacity:[0.15,0.35,0.15]
}}

transition={{
duration:10,
repeat:Infinity,
ease:'easeInOut'
}}

className="
absolute
bottom-10
right-[-150px]
w-[550px]
h-[550px]
rounded-full
bg-cyan-500/25
blur-[200px]
"

/>





{/* Grid Background */}

<div

className="
absolute
inset-0
opacity-[0.04]
"

style={{

backgroundImage:
"linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",

backgroundSize:"70px 70px"

}}

/>





{/* Small Floating Particles */}


<div className="absolute inset-0 overflow-hidden">


{particles.map((p,i)=>(


<motion.span

key={i}


animate={{

y:[0,-30,0],

opacity:[0.2,0.8,0.2]

}}


transition={{

duration:4+i%5,

repeat:Infinity

}}


className="
absolute
w-1
h-1
rounded-full
bg-violet-400
"


style={{

left:`${p.left}%`,

top:`${p.top}%`

}}


/>


))}


</div>





{/* Section Fade */}

<div
className="
absolute
top-0
left-0
w-full
h-32
bg-gradient-to-b
from-[#050816]
to-transparent
"
/>


<div
className="
absolute
bottom-0
left-0
w-full
h-32
bg-gradient-to-t
from-[#050816]
to-transparent
"
/>

      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-0
        w-96
        h-96
        bg-violet-600/20
        blur-[150px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-20
        right-0
        w-96
        h-96
        bg-cyan-500/20
        blur-[150px]
        rounded-full
        "
      />



<div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div

          initial={{opacity:0,y:40}}

          whileInView={{opacity:1,y:0}}

          viewport={{once:true}}

        >

          <h2
          className="
          text-5xl
          font-black
          text-center
          mb-5
          "
          >

            Things

            <span
            className="
            bg-gradient-to-r
            from-violet-400
            to-cyan-400
            bg-clip-text
            text-transparent
            "
            >

              {" "}I’ve Built 

            </span>

          </h2>


          <p
          className="
          text-center
          text-gray-400
          max-w-3xl
          mx-auto
          mb-10
          "
          >

          Software solutions built using AI, Full Stack,
          Computer Vision and Enterprise technologies.

          </p>


        </motion.div>




        {/* PROJECT GRID ONLY */}

{/* PROJECT GRID ONLY */}

<div
className="
grid
md:grid-cols-2
xl:grid-cols-6
gap-6
max-w-6xl
mx-auto
"
>

{projects.map((project,index)=>(

<div
key={project.id}
className={`
xl:col-span-2

${index === 6 ? "xl:col-start-2" : ""}
`}
>

<ProjectCard
project={project}
index={index}
/>

</div>

))}

</div>

      </div>


    </section>


  );

}