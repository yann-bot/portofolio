import Link from "next/link"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Project from "../ui/projet";


const projectData = [
        {image: "/techno.png", title:"nzonizo", stack: ['Nextjs, React, Tailwinds'], description: "Simple relationnal Plateforme", link:"Demo"},
         {image: "/techno.png", title:"nzonizo", stack: ['Nextjs, React, Tailwinds'], description: "Simple relationnal PLateforme", link:"Demo"},
          {image: "/techno.png", title:"nzonizo", stack: ['Nextjs, React, Tailwinds'], description: "Simple relationnal Plateforme", link:"Demo"},
    ];

export default function Work() {
    return (
        <div className="flex flex-col w-full px-4 sm:px-10 md:px-20 mt-10" id="projects">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-6">
                <div className="flex items-center gap-2 w-full">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold"> <span className="text-blue-500">#</span>projects</h1>
                    <div className="h-1 w-10 sm:w-20 md:w-1/2 bg-blue-500"></div>
                </div>
                <Link href="/" className="hidden md:flex items-center gap-2 text-sm md:text-base lg:text-lg whitespace-nowrap font-semibold">ViewAll <MdOutlineKeyboardDoubleArrowRight /> </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {projectData.map((projet, index) => (
                    <Project
                        ImageSrc={projet.image}
                        title={projet.title}
                        stack={projet.stack}
                        description={projet.description}
                        key={index}
                        link={projet.link}
                    />
                ))}
            </div>
            
        </div>
    );
}