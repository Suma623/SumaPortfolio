import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";


const profiles = [

{
icon:<FaGithub />,
title:"GitHub",
username:"@Suma623",

description:
"Full Stack and AI development projects with modern technologies.",

points:[
"React Applications",
"AI Projects",
"Backend APIs",
],

link:"https://github.com/Suma623",

color:"text-white",
},


{
icon:<SiLeetcode />,
title:"LeetCode",
username:"@Suma0019",

description:
"Consistent problem solving and Data Structures practice.",

points:[
"Data Structures",
"Algorithms",
"Problem Solving",
],

link:"https://leetcode.com/u/Suma0019/",

color:"text-yellow-400",
},


{
icon:<FaLinkedin />,
title:"LinkedIn",
username:"Ravooru Sumanaswi",

description:
"Professional network showcasing projects, skills and achievements.",

points:[
"Experience",
"Certifications",
"Projects",
],

link:"https://linkedin.com/in/sumanaswi-srm-7b353228a/",

color:"text-blue-400",
},

];




export default function Github(){


return(


<section
id="profiles"
className="
relative
overflow-hidden
bg-[#050816]
text-white
pt-6
pb-8
px-6
"
>


{/* Background Effects */}


<div
className="
absolute
top-20
left-10
w-80
h-80
bg-violet-600/20
blur-[150px]
rounded-full
"
/>


<div
className="
absolute
bottom-20
right-10
w-80
h-80
bg-cyan-500/20
blur-[150px]
rounded-full
"
/>


<FaLaptopCode
className="
absolute
right-20
top-32
text-[180px]
text-white/5
"
/>



<div className="relative max-w-7xl mx-auto">


{/* Heading */}


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{once:true}}

className="text-center"

>


<p
className="
tracking-[5px]
text-violet-400
mb-5
"
>

🚀 FIND ME ONLINE

</p>


<h2
className="
text-5xl
font-black
"
>

Coding

<span
className="
bg-gradient-to-r
from-violet-400
to-cyan-400
bg-clip-text
text-transparent
"
>

{" "}Profiles

</span>


</h2>



<p
className="
text-gray-400
mt-5
"
>

Explore my development journey across platforms.

</p>


</motion.div>





{/* Profile Cards */}


<div
className="
grid
lg:grid-cols-3
gap-8
mt-16
"
>


{profiles.map((profile,index)=>(


<motion.a

key={index}

href={profile.link}

target="_blank"

rel="noreferrer"


initial={{
opacity:0,
y:60
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
delay:index*.15
}}


whileHover={{
y:-12
}}


viewport={{once:true}}


className="
group
relative
overflow-hidden
rounded-[30px]
border
border-white/10
bg-[#111827]/80
p-8
backdrop-blur-xl
hover:border-violet-500
hover:shadow-[0_0_50px_rgba(139,92,246,.3)]
transition-all
duration-500
"

>


<div
className={`
text-6xl
mb-8
${profile.color}
`}
>

{profile.icon}

</div>



<h3
className="
text-3xl
font-bold
"
>

{profile.title}

</h3>



<p
className="
text-violet-400
mt-2
"
>

{profile.username}

</p>



<p
className="
text-gray-400
mt-5
leading-7
"
>

{profile.description}

</p>



<ul
className="
mt-6
space-y-3
"
>


{profile.points.map((item,i)=>(


<li
key={i}
className="
flex
gap-3
text-gray-300
"
>

<span className="text-cyan-400">

✓

</span>

{item}

</li>


))}


</ul>



<div
className="
mt-8
flex
justify-between
items-center
"
>


<span
className="
text-gray-500
text-sm
"
>

Developer Profile

</span>



<span
className="
text-violet-400
group-hover:translate-x-2
transition
"
>

Visit →

</span>



</div>


</motion.a>


))}


</div>






{/* Stats */}


<div
className="
grid
grid-cols-2
lg:grid-cols-4
gap-6
mt-20
"
>





</div>


</div>


</section>


);

}