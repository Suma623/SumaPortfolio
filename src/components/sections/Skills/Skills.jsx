import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
   FaBrain,
} from "react-icons/fa";


import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiOpencv,
  SiPostman,
  SiSap,
  
  SiC,
  SiCplusplus,
} from "react-icons/si";


import { VscVscode } from "react-icons/vsc";
// ===============================
// SKILLS DATA
// ===============================
const floatingIcons = [

{
 icon:<FaReact />,
 position:"top-28 left-20",
 color:"text-cyan-400",
},

{
 icon:<FaPython />,
 position:"top-36 right-28",
 color:"text-blue-400",
},

{
 icon:<FaJava />,
 position:"top-[35%] left-5",
 color:"text-orange-400",
},

{
 icon:<FaNodeJs />,
 position:"top-[45%] right-20",
 color:"text-green-400",
},

{
 icon:<SiMongodb />,
 position:"bottom-115 left-24",
 color:"text-green-500",
},

{
 icon:<FaBrain />,
 position:"bottom-210 right-18",
 color:"text-purple-400",
},

{
 icon:<SiJavascript />,
 position:"top-230 right-[5%]",
 color:"text-yellow-400",
},

{
 icon:<FaHtml5 />,
 position:"bottom-32 left[40%]",
 color:"text-orange-500",
},

{
 icon:<FaCss3Alt />,
 position:"top-310 right-[73%]",
 color:"text-blue-500",
},

{
 icon:<FaGitAlt />,
 position:"bottom-350 left-[90%]",
 color:"text-red-400",
},

{
 icon:<SiSap />,
 position:"bottom-20 right-24",
 color:"text-cyan-300",
},

{
 icon:<SiPostman />,
 position:"top-7 left-[70%]",
 color:"text-orange-400",
},



{
 icon:"</>",
 position:"top-[55%] left-[100%]",
 color:"text-white",
},

];
const skillCategories = [

{
title:"Programming Languages",
icon:"💻",
color:"from-blue-400 to-cyan-500",

desc:"Strong foundation in programming and problem solving.",

skills:[

{
icon:<SiC />,
name:"C"
},

{
icon:<SiCplusplus />,
name:"C++"
},

{
icon:<FaJava />,
name:"Java"
},

{
icon:<FaPython />,
name:"Python"
},

],

},


{
title:"Frontend Development",
icon:"🎨",
color:"from-cyan-400 to-blue-500",

desc:"Building modern responsive user interfaces.",

skills:[

{
icon:<FaHtml5 />,
name:"HTML5"
},

{
icon:<FaCss3Alt />,
name:"CSS3"
},

{
icon:<SiJavascript />,
name:"JavaScript"
},

{
icon:<FaReact />,
name:"React.js"
},

{
icon:<SiTailwindcss />,
name:"Tailwind CSS"
},

],

},


{
title:"Backend Development",
icon:"⚙️",
color:"from-violet-400 to-purple-500",

desc:"Creating APIs and server side applications.",

skills:[

{
icon:<FaNodeJs />,
name:"Node.js"
},

{
icon:<SiExpress />,
name:"Express.js"
},

{
icon:"🌐",
name:"REST APIs"
},

{
icon:<SiMongodb />,
name:"MongoDB"
},

],

},


{
title:"AI & Data Intelligence",
icon:"🤖",
color:"from-green-400 to-emerald-500",

desc:"Building intelligent AI powered applications.",

skills:[

{
icon:<SiOpencv />,
name:"OpenCV"
},
{
icon:"🤖",
name:"Machine Learning"
},
{
icon:"🧠",
name:"Deep Learning"
},

{
icon:<FaBrain />,
name:"Generative AI"
},
{
icon:"📊",
name:"Data Analysis"
},

],

},


{
title:"Tools & Platforms",
icon:"🛠",
color:"from-orange-400 to-pink-500",

desc:"Developer tools and enterprise platforms.",

skills:[

{
icon:<FaGitAlt />,
name:"Git"
},

{
icon:<FaGithub />,
name:"GitHub"
},

{
icon:<VscVscode />,
name:"VS Code"
},

{
icon:<SiPostman />,
name:"Postman"
},

{
icon:<SiSap />,
name:"SAP S/4HANA"
},

],

},

];

export default function Skills(){


return(


<section
id="skills"
className="relative overflow-hidden bg-[#050816] text-white py-8 px-6"
>
{/* Floating Icons */}

{floatingIcons.map((item,index)=>(

<motion.div
key={index}
className={`
absolute 
hidden 
lg:flex
z-30
pointer-events-none
${item.position}
${item.color}
text-5xl
opacity-70
drop-shadow-[0_0_25px_currentColor]
`}
animate={{
 y:[0,-25,0],
 rotate:[0,10,-10,0]
}}
transition={{
 duration:5 + index,
 repeat:Infinity,
 ease:"easeInOut"
}}
>

{item.icon}

</motion.div>

))}

{/* BACKGROUND GLOW */}


<div className="
absolute top-20 left-0
w-[400px]
h-[400px]
bg-violet-600/20
blur-[160px]
rounded-full"
/>


<div className="
absolute bottom-10 right-0
w-[400px]
h-[400px]
bg-cyan-500/20
blur-[160px]
rounded-full"
/>



<div className="relative max-w-7xl mx-auto">


{/* HEADING */}


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="text-center"

>


<h2 className="
text-5xl font-black
">

Skills &

<span className="
bg-gradient-to-r
from-violet-400
to-cyan-400
bg-clip-text
text-transparent
">

{" "}Technologies

</span>

</h2>



<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

Technologies I use to transform ideas into
real-world applications.

</p>


</motion.div>



{/* STATS */}

<div
className="
grid
md:grid-cols-3
gap-5
my-8
max-w-5xl
mx-auto
"
>


{[
"15+ Technologies",
"10+ Projects Built",
"4+ Tech Domains"

].map((item,index)=>(


<motion.div

key={index}

whileHover={{
scale:1.05
}}

className="
text-center
rounded-xl
bg-white/5
border
border-white/10
px-5
py-4
backdrop-blur-xl
shadow-[0_0_20px_rgba(139,92,246,.12)]
"

>


<h3
className="
text-xl
font-bold
text-cyan-400
"
>

{item}

</h3>


</motion.div>


))}


</div>

{/* SKILL CARDS */}

<div
className="
grid
lg:grid-cols-2
gap-6
max-w-6xl
mx-auto
"
>

{skillCategories.map((category,index)=>(

<motion.div

key={index}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.12
}}

whileHover={{
y:-8
}}

viewport={{
once:true
}}

className={`
rounded-[24px]
border
border-white/10
bg-white/5
p-5
backdrop-blur-xl
hover:border-violet-500
transition-all
duration-500
shadow-[0_0_30px_rgba(124,58,237,.12)]

${
category.title === "Tools & Platforms"
? "lg:col-span-2 max-w-3xl mx-auto w-full"
: ""
}

`}
>


<h3
className="
text-2xl
font-bold
mb-1
"
>

<span>{category.icon}</span>


<span
className={`
ml-3
bg-gradient-to-r
${category.color}
bg-clip-text
text-transparent
`}
>

{category.title}

</span>

</h3>



<p
className="
text-gray-400
text-sm
mb-4
"
>

{category.desc}

</p>




<div
className="
grid
grid-cols-2
gap-3
"
>


{category.skills.map((skill,i)=>(


<div

key={i}

className="
flex
items-center
gap-3
rounded-xl
bg-[#111827]
px-4
py-3
w-3/4
hover:bg-violet-500/20
transition
"

>


<span
className="
text-xl
text-violet-400
"
>

{skill.icon}

</span>



<span
className="
text-sm
"
>

{skill.name}

</span>


</div>


))}


</div>


</motion.div>


))}

</div>


{/* CURRENT */}


<div className="
mt-16
text-center
">


<p className="
text-violet-400
tracking-widest
mb-5
">

CURRENTLY EXPLORING 🚀

</p>


<div className="
flex
justify-center
gap-5
flex-wrap
">


{[
"Gen AI",
"Cloud",
"DevOps",
"Advanced ML"

].map((x)=>(


<span
className="
px-6 py-3
rounded-full
bg-white/10
border
border-white/10
"

>

{x}

</span>


))}


</div>


</div>



</div>


</section>


)

}