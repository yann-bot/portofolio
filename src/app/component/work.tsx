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
        <div className=" flex flex-col w-full  pl-30 pr-30 mt-30" id="projects">
            <div className="flex items-center gap-30 ">
                <div className="flex items-center gap-2 w-full">
                    <h1 className="text-2xl font-bold "> <span className="text-blue-500">#</span>projects</h1>
                    <div className=" h-1 w-100 bg-blue-500 "></div>
                </div>
                <Link href={"/"} className="flex items-center gap-2 text-sm ">ViewAll   <MdOutlineKeyboardDoubleArrowRight /> </Link>
            </div>
            <div className="flex gap-5 mt-10">
               {
                projectData.map((projet, index) => (
                    <Project
                        ImageSrc={projet.image}
                        title={projet.title}
                        stack={projet.stack}
                        description={projet.description}
                        key={index}
                        link={projet.link}
                    />
                ))
               }
            </div>
        </div>
    )
}