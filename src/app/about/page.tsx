import Image from "next/image"
import DotGrid from "../ui/dotGird"
import skillData from "../data/skillsData"
import SkillsCard from "../ui/skillsCard"
import FunFact from "../ui/funFact"
import funFactData from "../data/funFactData"

export default function About() {
  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-20 mt-10">
      <div className="flex flex-col gap-12">
        <h1 className="text-2xl font-bold"><span className="text-blue-500">/</span>about-me</h1>
        <h2 className="text-sm">Who I am ?</h2>
        {/* Image en haut sur mobile, à droite sur desktop */}
        <div className="block md:hidden w-full mb-6">
          <Image
            src={"/yann2.jpeg"}
            alt="me"
            width={320}
            height={320}
            className="rounded-lg object-cover w-full max-w-xs mx-auto"
          />
        </div>
  <div className="flex flex-col  md:flex-row justify-between  w-full gap-4 ">
          <p className="w-full  md:w-1/2 text-base sm:text-lg text-gray-200">
            Hi, I’m Yann Dubois Ouafete, a Full-Stack Developer and Software Engineer with a passion for building both polished applications and experimental software.<br />
            <br />
            I love turning ideas into real, functional projects—whether it’s a web app, a small utility, or a cutting-edge tool. Beyond building apps for users, I spend my free time exploring the edges of technology: creating CLI tools, text editors, mini operating systems, and experimenting with AI algorithms.<br />
            <br />
            My work is driven by curiosity, creativity, and a love for problem-solving. I enjoy tackling challenging projects that push my skills and the code itself to the limits.<br />
            <br />
            When I’m not coding, I enjoy learning new technologies, optimizing workflows, and sharing knowledge with others in the tech community.<br />
            <br />
            Let’s create something amazing together!
          </p>
          <div className="hidden  md:flex md:mr-30 flex-col gap-6 items-center md:items-start">
            <Image
              src={"/yann2.jpeg"}
              alt="me"
              width={320}
              height={320}
              className="rounded-lg object-cover w-full max-w-xs"
            />
            <div className="flex flex-col w-full">
              <div><DotGrid /></div>
              <div className="flex self-end mt-8"><DotGrid /></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold flex gap-1"><span className="text-blue-500">/</span>my skills area</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {skillData.map((skill, index) => (
              <SkillsCard key={index} title={skill.title} techno={skill.techno} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-10">
          <h1 className="text-2xl font-bold flex gap-1"><span className="text-blue-500">/</span>my-fun-facts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {funFactData.map((fact, index) => (
              <div key={index}><FunFact fact={fact} /></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}