import Navbar from "../../components/layout/Navbar";

import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Skills from "../../components/sections/Skills/Skills";
import Projects from "../../components/sections/Projects/Projects";
import Experience from "../../components/sections/Experience/Experience";

import Certifications from "../../components/sections/Certifications/Certifications";
import Github from "../../components/sections/Github/Github";
import Contact from "../../components/sections/Contact/Contact";


export default function Portfolio() {

  return (

    <>

      <Navbar />


      <Hero />


      <About />


      <Skills />


      <Projects />


      <section id="experience">

        <Experience />

        <Certifications />

        <Github />

      </section>


      <Contact />


    </>

  );

}