import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

import {
  Home,
  User,
  FolderKanban,
  Code2,
  BriefcaseBusiness,
  Mail,
  Download,
} from "lucide-react";


const navItems = [
  { id: "home", name: "Home", icon: Home },
  { id: "about", name: "About", icon: User },
  { id: "skills", name: "Skills", icon: Code2 },
  { id: "projects", name: "Projects", icon: FolderKanban },
  { id: "experience", name: "Experience", icon: BriefcaseBusiness },
  { id: "contact", name: "Contact", icon: Mail },
];


export default function Navbar() {

const [activeSection,setActiveSection] = useState("home");
const [openMenu,setOpenMenu] = useState(false);



useEffect(()=>{

const handleScroll=()=>{

navItems.forEach((item)=>{

const section=document.getElementById(item.id);

if(section){

const position =
window.scrollY + 120;


if(
position >= section.offsetTop &&
position < section.offsetTop + section.offsetHeight
){

setActiveSection(item.id);

}

}

});

};


window.addEventListener("scroll",handleScroll);

handleScroll();


return()=>window.removeEventListener("scroll",handleScroll);


},[]);



const handleClick=(id)=>{

setActiveSection(id);

setOpenMenu(false);


const section=document.getElementById(id);


if(section){

window.scrollTo({

top:section.offsetTop-80,

behavior:"smooth"

});

}

};



return (

<header
className="
fixed
top-0
left-0
w-full
z-50
bg-[#050816]/80
backdrop-blur-xl
border-b
border-white/10
"
>


<nav
className="
max-w-7xl
mx-auto
h-20
px-6
flex
items-center
justify-between
"
>


{/* LOGO */}

<div className="flex items-center gap-4">


<img

src="/logo.png"

alt="logo"

className="w-12 h-12 object-contain"

/>


<h1 className="text-2xl font-bold">


<span className="text-white">

Suma's

</span>


<span
className="
bg-gradient-to-r
from-violet-400
to-cyan-400
bg-clip-text
text-transparent
"
>

{" "}Portfolio

</span>


</h1>


</div>




{/* DESKTOP MENU */}


<ul className="hidden lg:flex items-center gap-10">


{navItems.map((item)=>{

const Icon=item.icon;


return(

<li

key={item.id}

onClick={()=>handleClick(item.id)}

className="relative cursor-pointer"

>


<div

className={`

flex
items-center
gap-2
transition

${
activeSection===item.id
?
"text-violet-400"
:
"text-gray-300 hover:text-white"
}

`}

>


<Icon size={18}/>


<span className="font-medium">

{item.name}

</span>


</div>


{activeSection===item.id && (

<span
className="
absolute
left-0
-bottom-5
w-full
h-[2px]
bg-violet-500
shadow-[0_0_14px_rgba(168,85,247,.9)]
"
/>

)}


</li>

)


})}


</ul>





{/* RESUME DESKTOP */}


<a

href="/suma_resume.pdf"

download

className="
hidden
lg:flex
items-center
gap-3
px-7
py-3
rounded-2xl
border
border-violet-500/70
bg-white/5
text-white
font-semibold
hover:shadow-[0_0_30px_rgba(139,92,246,.45)]
transition
"

>

Resume

<Download size={18} className="text-violet-400"/>


</a>





{/* MOBILE BUTTON */}


<button

onClick={()=>setOpenMenu(!openMenu)}

className="
lg:hidden
text-white
text-3xl
"

>


{openMenu ? "✕" : <HiOutlineMenuAlt3/>}


</button>



</nav>






{/* MOBILE DROPDOWN */}


{openMenu && (


<motion.div

initial={{opacity:0,y:-20}}

animate={{opacity:1,y:0}}


className="
lg:hidden
absolute
top-20
left-0
w-full
bg-[#050816]/95
backdrop-blur-xl
border-b
border-violet-500/20
py-8
"

>


<div
className="
flex
flex-col
items-center
gap-7
"
>


{navItems.map((item)=>(


<button

key={item.id}

onClick={()=>handleClick(item.id)}

className={`
text-lg
font-medium

${
activeSection===item.id
?
"text-violet-400"
:
"text-gray-300"
}

`}

>

{item.name}


</button>


))}




<a

href="/suma_resume.pdf"

download


className="
mt-4
px-8
py-3
rounded-full
bg-gradient-to-r
from-violet-600
to-cyan-500
text-white
font-semibold
"

>


Download Resume


</a>


</div>


</motion.div>


)}



</header>


);

}