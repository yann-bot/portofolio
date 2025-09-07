

import Hero from "./component/hero"
import Work from "./component/work"
import Skills from "./component/skils"
import About from "./component/about"
import Contact from "./component/contact"


export default function Home() {
  return (
    <div >
    
       <Hero/>
       <Work/>
       <Skills/>
       <About />
       <Contact/>
      
    </div>
  )
}