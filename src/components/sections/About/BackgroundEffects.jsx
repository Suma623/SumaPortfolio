import { motion } from "framer-motion";


// Generate stars only once

const stars = Array.from({ length: 35 }, (_, i) => ({

  id:i,

  size:Math.random()*2+1,

  top:`${Math.random()*100}%`,

  left:`${Math.random()*100}%`,

  duration:Math.random()*4+3,

  delay:Math.random()*5,

}));



export default function BackgroundEffects() {


return (

<div className="absolute inset-0 overflow-hidden pointer-events-none">


{/* Purple Glow */}


<motion.div

animate={{

scale:[1,1.12,1],

opacity:[0.10,0.25,0.10],

}}

transition={{

duration:10,

repeat:Infinity,

ease:"easeInOut",

}}

className="
absolute

-top-20
-left-20

w-[230px]
h-[230px]

md:w-[550px]
md:h-[550px]

rounded-full

bg-violet-600

blur-[90px]
md:blur-[180px]
"

/>




{/* Cyan Glow */}


<motion.div

animate={{

scale:[1.08,1,1.08],

opacity:[0.10,0.22,0.10],

}}

transition={{

duration:12,

repeat:Infinity,

ease:'easeInOut'

}}

className="
absolute

bottom-[-80px]
right-[-50px]

w-[220px]
h-[220px]

md:w-[520px]
md:h-[520px]

rounded-full

bg-cyan-500

blur-[90px]
md:blur-[180px]
"

/>




{/* Grid */}


<div

className="
absolute
inset-0
opacity-[0.03]
"

style={{

backgroundImage:
`
linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)
`,

backgroundSize:"60px 60px",

}}

/>





{/* Stars */}


{stars.map((star)=>(


<motion.span

key={star.id}

className="
absolute
rounded-full
bg-white
"

style={{

width:`${star.size}px`,

height:`${star.size}px`,

top:star.top,

left:star.left,

}}

animate={{

opacity:[0.15,0.7,0.15],

scale:[1,1.5,1],

}}

transition={{

duration:star.duration,

delay:star.delay,

repeat:Infinity,

}}


/>


))}





{/* Floating Orb 1 */}


<motion.div

animate={{

x:[0,25,0],

y:[0,-25,0],

}}

transition={{

duration:16,

repeat:Infinity,

ease:"easeInOut",

}}

className="
absolute

top-32
right-10

w-32
h-32

md:w-56
md:h-56

rounded-full

bg-violet-500/10

blur-[70px]
md:blur-[120px]
"

/>






{/* Floating Orb 2 */}


<motion.div

animate={{

x:[0,-25,0],

y:[0,25,0],

}}

transition={{

duration:18,

repeat:Infinity,

ease:'easeInOut',

}}

className="
absolute

bottom-32
left-10

w-32
h-32

md:w-64
md:h-64

rounded-full

bg-cyan-500/10

blur-[70px]
md:blur-[120px]
"

/>





{/* Center Light */}


<div

className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(139,92,246,.06),transparent_70%)]
"

/>


</div>


);


}