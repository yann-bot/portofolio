import Image from "next/image"
import Link from "next/link"
import Citation from "../ui/citation"

export default function Hero() {
    
    return (
       
           <div className="flex justify-center"> 
            <div id="home" className="  md:flex gap-20 justify-center items-center  mt-10">
                {/* Text */}
                
                <div className=" p-10 flex flex-col  gap-5" >
                 <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Hi, I&apos;m  Yann Dubois Ouafete. <br/>I&apos;m <span className="text-blue-500">FullStack Developper </span>And <br/><span className="text-blue-500">Software Ingineer</span> </h1>
                 <p className="text-sm md:text-xl lg:text-2xl"> With me, simple, effective solutions tailored to the essential</p>
                 <Link  className="border border-blue-500 w-fit p-1 pl-4 pr-4" href={"#contact"}> Contact Me !</Link>
                </div>

                {/* Image */}
                
                <div className=" hidden lg:block">
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