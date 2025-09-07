import Image from "next/image"
import Link from "next/link"
import Citation from "../ui/citation"

export default function Hero() {
    
    return (
       
           <div> 
            <div id="home" className="flex gap-20 justify-center items-center  mt-10">
             {/* Text */}
                <div className="flex flex-col  gap-5" >
                <h1 className="text-2xl ">Hi, I'm a Yann Dubois Ouafete. <br/>I'm <span className="text-blue-500">FullStack Developper </span>And <br/><span className="text-blue-500">Software Ingineer</span> </h1>
                <p> With me, simple, effective solutions tailored to the essential</p>
                <Link  className="border border-blue-500 w-fit p-1 pl-4 pr-4" href={"#contact"}> Contact Me !</Link>
                </div>

                {/* Image */}
                <div className="">
                    <Image 
                    src={"/yann.jpeg"}
                    alt="yann"
                    width={300}
                    height={300}
                    className="rounded-full  border-4 border-blue-500"
                    />  
                </div>
            </div>
            <Citation/>
        </div>
    )
}