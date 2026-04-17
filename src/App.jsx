
import { useState } from "react";
import {Navbar} from "@/components/Navbar"
import {Hero} from "@/sections/Hero"
import {About} from "@/sections/About"
import {Projects} from "@/sections/Projects"
import {Experience} from "@/sections/Experience"
import {Contact} from "@/sections/Contact"
import {Skills} from "@/sections/Skills"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
