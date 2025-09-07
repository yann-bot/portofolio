"use client"

import Link from "next/link";
import Image from "next/image";
import Sidebar from "../ui/verticalSideBar";
import { MdTranslate } from "react-icons/md";

const links = [
  { id: "./", label: "home" },
  { id: "./works", label: "works" },
  { id: "./about", label: "about-me"},
];

export default function Header() {
    return(
        <div  className="flex justify-between p-10">
             <Sidebar />
             <div className="font-bold">
                 Yann D
             </div>
             <nav className="flex gap-10 mr-20 ">
                 {
                    links.map((link) => (
                    link.id == "contact" ? (
                         <Link key={link.id} href={`#${link.id}`}><span className="text-blue-500">#</span>{link.label}</Link>
                    ):(
                        <Link key={link.id} href={`${link.id}`}><span className="text-blue-500">#</span>{link.label}</Link>    
                )))
            }    
            <button><MdTranslate size={20} /></button>
             </nav>
        </div>
    )
}