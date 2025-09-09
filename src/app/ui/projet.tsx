import Image from "next/image"
import Link from "next/link";


interface ProjectProps {
    ImageSrc: string;
    stack: string[];
    title: string;
    description: string;
    link: string,
}
 

export default function Project(props: ProjectProps) {

    return (
        <div className="flex flex-col border border-white rounded-lg overflow-hidden bg-black/80 shadow-lg max-w-full sm:max-w-md mx-auto">
            <div className="w-full">
                <Image 
                   src={props.ImageSrc}
                   alt={"Project Image"}
                   width={500}
                   height={300}
                   className="object-cover w-full h-48 sm:h-64"
                />
            </div>
            <div className="border-t border-white p-2 flex flex-wrap gap-2 justify-start">
                {props.stack.map((techno, index) => (
                    <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs sm:text-sm"
                    >
                        {techno}
                    </span>
                ))}
            </div>
            <div className="flex flex-col p-2 gap-1">
                <h1 className="text-xl sm:text-2xl font-bold">{props.title}</h1>
                <p className="text-xs sm:text-sm text-gray-300">{props.description}</p>
            </div>
            <Link
                className="bg-blue-500 text-white text-center rounded px-4 py-2 m-2 w-full sm:w-fit hover:bg-blue-600 transition"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Live Demo!
            </Link>
        </div>
    )
}