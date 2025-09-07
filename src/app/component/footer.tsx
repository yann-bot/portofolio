
import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { PiCopyrightThin } from "react-icons/pi";
import Link from "next/link";

export default function Footer() {
    return (
        <div className=" flex flex-col gap-10 border border-b-0 border-l-0 border-r-0 p-10 pb-5 pl-30 pr-30">

            <div className="flex  justify-between">
                <div className="flex flex-col gap-1">
                  <div className="font-bold"> Yann Dubois Ouafete</div>
                  <div className="text-sm">FullStack Developer And Software Ingineer</div>
                </div>
                <div className="mr-10 flex flex-col gap-2">
                    <div className="font-extrabold">Media</div>
                    <div className="flex gap-2">
                       <Link href="https://www.linkedin.com/in/yann-ouafete-12475132" target="_blank"><SlSocialLinkedin /></Link> 
                       <Link href="https://github.com/yann-bot" target="_blank"><FaGithub /></Link> 
                       <Link href="https://www.instagram.com/yannduboisouafete?igsh=YzljYTk1ODg3Zg==" target="_blank"><CiInstagram /></Link> 
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-1 text-sm self-center">
                <PiCopyrightThin /> <span className="">Copyright 2025, By Yann Dubois Ouafete, Bangui    </span>      
            </div>
        </div>
    )
}