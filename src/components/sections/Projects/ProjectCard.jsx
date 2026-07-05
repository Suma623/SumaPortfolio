import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
} from "react-icons/fa";


export default function ProjectCard({ project,index }) {


const [open,setOpen] = useState(false);



return (

<>


{/* ================= CARD ================= */}


<motion.div


initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1
}}

viewport={{
once:true
}}

whileHover={{
y:-12
}}


className="
relative
group
overflow-hidden
rounded-[32px]
bg-[#111827]/80
border
border-white/10
backdrop-blur-xl
hover:border-violet-500
transition-all
duration-500
hover:shadow-[0_0_50px_rgba(139,92,246,.35)]
"

>


{/* Number */}

<div
className="
absolute
right-6
top-6
text-8xl
font-black
text-white/5
z-20
"
>

{String(index+1).padStart(2,"0")}

</div>



{/* IMAGE AREA */}


<div
className="
relative
h-60
overflow-hidden
"
>


<img
src={project.image}
alt=""
onError={(e)=>{
  e.currentTarget.style.display="none";
}}
className="
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"
/>


{/* dark hover overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-t
from-[#050816]
via-transparent
to-transparent
"
/>



{/* category */}

<span
className="
absolute
top-5
left-5
px-4
py-2
rounded-full
bg-black/40
backdrop-blur-xl
text-sm
text-cyan-300
border
border-white/10
"
>

{project.category}

</span>


</div>





{/* CONTENT */}


<div className="p-7">


<h3
className="
text-2xl
font-bold
mb-4
"
>

{project.title}

</h3>



<p
className="
text-gray-400
leading-7
mb-6
"
>

{project.description}

</p>





{/* TECH STACK */}

<div className="flex flex-wrap gap-3 mb-8">


{project.technologies.map((tech,i)=>(


<span

key={i}

className="
px-4
py-2
rounded-full
bg-violet-500/10
text-violet-300
text-sm
border
border-violet-500/20
"

>

{tech}

</span>


))}


</div>





{/* BUTTONS */}


<div className="flex flex-wrap gap-4">
{project.github && (

<a

href={project.github}

target="_blank"

className="
flex
items-center
gap-2
px-5
py-3
rounded-full
bg-gradient-to-r
from-violet-600
to-cyan-500
hover:scale-105
transition
"
>

<FaGithub/>

Code

</a>

)}



{project.demo && (

<a

href={project.demo}

target="_blank"

className="
flex
items-center
gap-2
px-5
py-3
rounded-full
border
border-white/20
hover:border-cyan-400
transition
"

>

<FaExternalLinkAlt/>

Live


</a>

)}


</div>




<button

onClick={()=>setOpen(true)}

className="
mt-6
text-violet-400
hover:text-cyan-400
transition
"

>

View Case Study →

</button>


</div>


</motion.div>







{/* ================= CASE STUDY POPUP ================= */}


<AnimatePresence>


{open && (


<motion.div


initial={{
opacity:0
}}

animate={{
opacity:1
}}

exit={{
opacity:0
}}


className="
fixed
inset-0
bg-black/70
backdrop-blur-md
z-[999]
flex
items-center
justify-center
px-6
"


>


<motion.div


initial={{
scale:.8
}}

animate={{
scale:1
}}


exit={{
scale:.8
}}


className="
relative
max-w-2xl
bg-[#111827]
border
border-violet-500/30
rounded-[30px]
p-10
shadow-[0_0_60px_rgba(139,92,246,.4)]
"


>


<button

onClick={()=>setOpen(false)}

className="
absolute
right-6
top-6
text-gray-400
hover:text-white
"

>

<FaTimes/>

</button>




<h2 className="text-3xl font-bold mb-6">

{project.title}

</h2>



<p className="text-gray-300 leading-8">

🎯 Problem:
<br/>

Manual or existing solutions have limitations.


<br/><br/>

💡 Solution:
<br/>

Built a modern application using advanced technologies.



<br/><br/>


⭐ Key Features:

<br/>

✓ Responsive Design

<br/>

✓ Modern Architecture

<br/>

✓ Real World Problem Solving


</p>



</motion.div>


</motion.div>


)}


</AnimatePresence>


</>

);

}