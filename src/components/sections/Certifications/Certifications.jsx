import { motion } from "framer-motion";

import {
  FaAward,
  FaCertificate,
  FaGraduationCap,
  FaTrophy,
} from "react-icons/fa";


const achievements = [

{
icon:<FaCertificate />,
title:"Oracle Java Certification",
subtitle:"Oracle Academy",
certificate:"/certificates/oracle-java.pdf",
points:[
"Java Programming",
"Object Oriented Programming",
"Backend Fundamentals",
],

skills:[
"Java",
"OOP",
"Problem Solving",
],

color:"text-orange-400",
},


{
icon:<FaCertificate />,
title:"SAP S/4HANA Specialization",
subtitle:"SAP ERP",
certificate:"/certificates/sap.pdf",
points:[
"Enterprise Resource Planning",
"Business Process Understanding",
"ERP System Configuration",
],

skills:[
"SAP MM",
"SAP PP",
"SAP SD",
],

color:"text-blue-400",
},



{
icon:<FaGraduationCap />,
title:"Edubot GenAI Internship",
subtitle:"AI Internship",
certificate:"/certificates/edubot.pdf",
points:[
"Completed 11 Learning Modules",
"Finished 15 Assignments",
"Developed Capstone Project",
],

skills:[
"GenAI",
"LLMs",
"Prompt Engineering",
],

color:"text-green-400",
},



{
icon:<FaCertificate />,
title:"MongoDB Associate Developer",
subtitle:"MongoDB",
certificate:"/certificates/mongodb.pdf",
points:[
"NoSQL Database Design",
"CRUD Operations",
"Database Development",
],

skills:[
"MongoDB",
"Database",
"NoSQL",
],

color:"text-violet-400",
},



{
icon:<FaAward />,
title:"Quantum Valley Hackathon",
subtitle:"Innovation Challenge",
certificate:"/certificates/hackathon.pdf",
points:[
"Problem Solving",
"Team Collaboration",
"Prototype Development",
],

skills:[
"Innovation",
"Research",
"Development",
],

color:"text-yellow-400",
},

];





export default function Certifications(){


return(


<section
id="certifications"
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


{/* Background */}

<FaTrophy
className="
absolute
right-20
top-32
text-[180px]
text-violet-500/5
"
/>



<div className="max-w-7xl mx-auto relative">


<p
className="
text-center
tracking-[5px]
text-violet-400
mb-4
"
>

🏆 ACHIEVEMENT PROOF

</p>



<h2
className="
text-center
text-5xl
font-black
mb-5
"
>

Achievements &

<span
className="
bg-gradient-to-r
from-violet-400
to-cyan-400
bg-clip-text
text-transparent
"
>

{" "}Credentials

</span>

</h2>



<p
className="
text-center
text-gray-400
mb-16
"
>

Certifications, internships and achievements earned during my journey.

</p>




<div
className="
grid
md:grid-cols-2
gap-8
"
>


{achievements.map((item,index)=>(


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
delay:index*.1
}}

viewport={{
once:true
}}

whileHover={{
y:-10
}}


className={`
bg-[#111827]/80
rounded-[30px]
border
border-white/10
p-8
backdrop-blur-xl
hover:border-violet-500
hover:shadow-[0_0_40px_rgba(139,92,246,.25)]
transition-all
duration-500

${
index === achievements.length - 1
? "md:col-span-2 md:w-1/2 md:mx-auto"
: ""
}
`}


>


<div
className={`
text-5xl
mb-6
${item.color}
`}
>

{item.icon}

</div>



<h3
className="
text-2xl
font-bold
"
>

{item.title}

</h3>



<p
className="
text-violet-400
mt-2
"
>

{item.subtitle}

</p>




<ul
className="
mt-6
space-y-3
"
>


{item.points.map((p,i)=>(


<li
key={i}
className="
text-gray-300
flex
gap-3
"
>

<span className="text-cyan-400">

✓

</span>


{p}


</li>


))}


</ul>

<a
href={item.certificate}
target="_blank"
rel="noreferrer"
className="
mt-8
inline-flex
items-center
gap-2
text-violet-400
hover:text-cyan-400
transition
"
>

View Certificate

<span>

↗

</span>

</a>


<div
className="
flex
flex-wrap
gap-3
mt-6
"
>


{item.skills.map((skill,i)=>(


<span
key={i}

className="
px-4
py-2
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



</motion.div>


))}



</div>


</div>


</section>


);

}