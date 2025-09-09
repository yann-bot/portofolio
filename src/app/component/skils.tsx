
import Link from "next/link"
import DotGrid from "../ui/dotGird";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import NestedSquares from "../ui/nestedSquare";
import SkillsCard from "../ui/skillsCard";
import skillData from "../data/skillsData";

export default function Skills() {
    return (
        <div className="flex flex-col w-full" id="work">
            <div className="flex flex-col w-full px-4 sm:px-10 md:px-20 mt-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mb-6">
                    <div className="flex items-center gap-2 w-full">
                        <h1 className="text-2xl font-bold"> <span className="text-blue-500">#</span>skills</h1>
                        <div className="h-1 w-20 bg-blue-500 flex-1"></div>
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row p-4 sm:p-10 items-center md:items-start gap-8">
                    <div className="flex flex-col gap-8 w-full md:w-1/2 mb-6 md:mb-0">
                        <div className="flex justify-center gap-6 w-full">
                            <div className="mt-4"> <DotGrid /></div>
                            <div className="w-16 h-16 border border-white"></div>
                        </div>
                        <div>
                            <DotGrid />
                        </div>
                    </div>
                    {/*Skills*/}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm w-full md:w-1/2">
                        {skillData.map((skill, index) => (
                            <SkillsCard key={index} title={skill.title} techno={skill.techno} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}