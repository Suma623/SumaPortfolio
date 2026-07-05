import { useState } from "react";

import Landing from "./pages/Landing/Landing";
import Portfolio from "./pages/Portfolio/Portfolio";

export default function App() {

const [entered,setEntered] = useState(false);


return (

<div
className="
w-full
min-h-screen
overflow-x-hidden
bg-[#050816]
"
>

{
!entered
?
<Landing onEnter={()=>setEntered(true)} />
:
<Portfolio />
}


</div>

);

}