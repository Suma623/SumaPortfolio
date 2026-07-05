import { motion } from "framer-motion";

import {
  FaBriefcase,
  FaRobot,
  FaCode,
  FaFlask,
} from "react-icons/fa";


const experiences = [
  {
    icon: <FaBriefcase />,
    role: "GenAI Intern",
    company: "Edubot Tech",
    duration: "June 2025 - July 2025",

    skills: [
      "Generative AI",
      "Prompt Engineering",
      "LLMs",
      "Gemini AI",
    ],

    description: [
      "Completed 11 technical learning modules on Generative AI.",
      "Successfully finished 15 hands-on AI assignments.",
      "Built a GenAI Capstone project integrating multiple AI domains.",
      "Worked with Prompt Engineering, LLMs and AI workflows.",
    ],
  },


  {
    icon: <FaFlask />,
    role: "AI Research Developer",
    company: "Academic Research",
    duration: "2025 - Present",

    skills: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "Data Analysis",
    ],

    description: [
      "Developed AI-based solutions using Machine Learning models.",
      "Worked on dataset preprocessing and model evaluation.",
      "Implemented intelligent systems for real-world problems.",
      "Prepared research documentation and experimental analysis.",
    ],
  },


  {
    icon: <FaCode />,
    role: "Full Stack Developer",
    company: "Personal Projects",
    duration: "2024 - Present",

    skills: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    description: [
      "Designed and developed responsive web applications.",
      "Built modern user interfaces using React and Tailwind CSS.",
      "Created REST APIs and backend services.",
      "Integrated databases and authentication systems.",
    ],
  },


  {
    icon: <FaRobot />,
    role: "AI Application Developer",
    company: "AI Projects",
    duration: "2025",

    skills: [
      "AI Integration",
      "Gemini API",
      "Python",
      "Automation",
    ],

    description: [
      "Built AI-powered applications for practical use cases.",
      "Integrated AI APIs into web platforms.",
      "Designed intelligent automation workflows.",
      "Developed user-friendly AI solutions.",
    ],
  },
];



export default function Experience() {

return (

<section
id="experience"
className="
relative overflow-hidden
bg-[#050816]
text-white
pt-3
pb-8
px-6
"
>

{/* ================= PREMIUM EXPERIENCE BACKGROUND ================= */}


{/* Big faded EXPERIENCE text */}

<div
className="
absolute
top-8
left-1/2
-translate-x-1/2
text-[110px]
font-black
text-white/[0.03]
select-none
pointer-events-none
"
>

EXPERIENCE

</div>


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
top-40
left-[-180px]
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
bottom-20
right-[-180px]
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


{/* YOUR CONTENT */}

<div className="relative z-10 max-w-6xl mx-auto">


{/* Heading */}

<h2
className="
text-center
text-5xl
font-black
mb-3
"
>

💼 Experience

<span
className="
bg-gradient-to-r
from-violet-400
to-cyan-400
bg-clip-text
text-transparent
"
>
{" "}Journey
</span>

</h2>


<p
className="
text-center
text-gray-400
mb-8
"
>
My learning, development and project experience.
</p>



{/* ================= Timeline ================= */}


<div
className="
relative
max-w-3xl
mx-auto
"
>


{/* Vertical Line */}

<div
className="
absolute
left-5
top-0
h-full
w-1
rounded-full
bg-gradient-to-b
from-violet-500
to-cyan-500
"
/>



{experiences.map((exp,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:index*.1
}}

viewport={{once:true}}

className={`
relative
pl-16

${
index === experiences.length-1
? "pb-0"
: "pb-7"
}

`}

>


{/* ICON */}

<div
className="
absolute
left-0
top-1

w-11
h-11

rounded-full

bg-gradient-to-r
from-violet-600
to-cyan-500

flex
items-center
justify-center

text-lg

shadow-[0_0_25px_rgba(139,92,246,.8)]
"
>

{exp.icon}

</div>




{/* CARD */}

<div
className="
w-full

bg-[#111827]/80
backdrop-blur-xl

rounded-3xl

border
border-white/10

p-5

hover:border-violet-500
hover:-translate-y-2
hover:shadow-[0_0_40px_rgba(139,92,246,.3)]

transition-all
duration-500
"
>


<h3
className="
text-xl
font-bold
"
>
{exp.role}
</h3>



<p
className="
text-violet-400
mt-1
"
>
{exp.company}
</p>



<p
className="
text-gray-400
text-sm
mb-4
"
>
{exp.duration}
</p>




{/* Skills */}

<div
className="
flex
flex-wrap
gap-2
mb-4
"
>


{exp.skills.map((skill,i)=>(

<span

key={i}

className="
px-3
py-1

rounded-full

bg-violet-500/10

text-violet-300
text-sm
"

>

{skill}

</span>


))}


</div>





<ul
className="
space-y-2
"
>

{exp.description.map((point,i)=>(


<li

key={i}

className="
flex
gap-2

text-sm
text-gray-300
"

>

<span className="text-cyan-400">
✓
</span>

{point}

</li>


))}

</ul>


</div>


</motion.div>


))}


</div>


</div>

</section>


);

}