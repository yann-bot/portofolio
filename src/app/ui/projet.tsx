
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
        <div className="flex flex-col border border-white">
            <div>
                <Image 
                   src={props.ImageSrc}
                   alt={"Project Image"}
                   width={300}
                   height={300}
                />
            </div>
            <div className="border border-white p-2">
                {
                    props.stack.map((techno, index) => (
                        <h1 key={index}>{techno}</h1>
                    ))
                }
            </div>
            <div className="flex flex-col p-2">
                 <h1 className="text-2xl font-bold">{props.title}</h1>
                 <p className="text-sm">{props.description}</p>

            </div>
            <Link  className="border border-blue-500 w-fit p-1 pl-4 pr-4 m-2" href={props.link}> Live !</Link>

        </div>
    )
}