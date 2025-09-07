
import Link from "next/link"
import DotGrid from "../ui/dotGird";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import NestedSquares from "../ui/nestedSquare";
import SkillsCard from "../ui/skillsCard";
import skillData from "../data/skillsData";

export default function Skills() {

   
    return(
        <div className="flex flex-col w-full " id="work">
            <div className=" flex flex-col w-full  pl-30 pr-30 mt-30">
                <div className="flex items-center gap-40 ">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold "> <span className="text-blue-500">#</span>skills</h1>
                        <div className="flex-1 h-1 w-100 bg-blue-500"></div>
                    </div>
                </div>
                <div className="  w-full flex p-10 items-center">
                    <div className="flex flex-col gap-20 w-1/2">
                        <div className="flex justify-center gap-30 w-full">
                            <div className="mt-15"> <DotGrid/></div>
                            <div className="w-20 h-20 border border-white"></div>
                        </div>
                        <div>
                             <DotGrid/>
                        </div>
                    </div>
                    
                    {/*Skills*/}
                    <div className="grid grid-cols-2 gap-2 text-sm">
                         {
                            skillData.map((skill, index) => (
                                <SkillsCard key={index} title={skill.title} techno={skill.techno}/>
                            ))
                         }
                    </div>
                </div>
          </div>
     </div>
    );
}