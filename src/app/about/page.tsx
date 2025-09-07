import Image from "next/image"
import DotGrid from "../ui/dotGird"
import skillData from "../data/skillsData"
import SkillsCard from "../ui/skillsCard"
import FunFact from "../ui/funFact"
import funFactData from "../data/funFactData"

export default function About() {
    return(
        <div className="min-h-screen ml-30 mr-30 mt-20 ">
            <div className="flex flex-col gap-20">
                <h1 className="text-2xl font-bold"><span className="text-blue-500">/</span>about-me</h1>
                <h2 className="text-sm">Who I am ?</h2>
                <div className="flex justify-between w-full">
                    <p className="w-1/2">
                    Hi, I’m Yann Dubois Ouafete, a Full-Stack Developer and Software Engineer with a passion for building both polished applications and experimental software.<br/>
                    <br/>
                    I love turning ideas into real, functional projects—whether it’s a web app, a small utility, or a cutting-edge tool. Beyond building apps for users, I spend my free time exploring the edges of technology: creating CLI tools, text editors, mini operating systems, and experimenting with AI algorithms.<br/>
                    <br/>
                    My work is driven by curiosity, creativity, and a love for problem-solving. I enjoy tackling challenging projects that push my skills and the code itself to the limits.<br/>
                      <br/>
                    When I’m not coding, I enjoy learning new technologies, optimizing workflows, and sharing knowledge with others in the tech community.<br/>
                     <br/>
                    Let’s create something amazing together!
                  </p>
                  <div className="flex flex-col gap-10">
                      <Image
                        src={"/yann2.jpeg"}
                        alt="me"
                        width={400}
                        height={50}
                      />
                      <div className="flex flex-col">
                         <div><DotGrid /></div> 
                        <div className="flex self-end mt-16"><DotGrid /></div>
                      </div>
                  </div>

                </div>
                <div className=" flex flex-col gap-10">
                    <h1 className="text-2xl font-bold flex gap-1"><span className="text-blue-500">/</span>my skills area</h1>
                
                    <div className="grid grid-cols-3 gap-5">
                        {
                                skillData.map((skill, index) => (
                                    <SkillsCard key={index} title={skill.title} techno={skill.techno}/>
                                ))
                          }
                    </div>
                </div>

                <div className=" flex flex-col gap-10 mb-10">
                    <h1 className="text-2xl font-bold flex gap-1"><span className="text-blue-500">/</span>my-fun-facts</h1>
                   <div className="grid grid-cols-3 gap-2 w-fit">

                      {
                      funFactData.map((fact, index) => (
                        <div key={index}><FunFact fact={fact } /></div>
                      ))
                    }
                  
                  </div> 
                    
                </div>
                
            </div>
        </div>
    )
}