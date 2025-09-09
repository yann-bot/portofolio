"use client"

import Link from "next/link";
import Sidebar from "../ui/verticalSideBar";
import { MdTranslate } from "react-icons/md";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const linkKeys = [
    { id: "./", key: "home" },
    { id: "./works", key: "works" },
    { id: "./about", key: "about-me" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  

   
    return (
        <header className="sticky top-0 w-full z-50 flex  justify-between items-center p-6 md:p-10 bg-[rgba(40,44,51,1)]">
            <Sidebar />
            <div className="font-bold text-lg md:text-2xl lg:text-3xl">Yann D</div>
            {/* Menu desktop */}
            <nav className="hidden md:flex gap-10 mr-20">
                {linkKeys.map((link) => (
                    <Link key={link.id} href={`${link.id}`} className="text-base md:text-lg lg:text-xl font-semibold">
                        <span className="text-blue-500">#</span>{(link.key)}
                    </Link>
                ))}
                <button><MdTranslate size={24} className="md:text-xl lg:text-2xl" /></button>
            </nav>
            {/* Menu hamburger mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>
            {/* Menu mobile déroulant */}
            {menuOpen && (
                <nav className="fixed inset-0 bg-[rgba(40,44,51,1)] bg-opacity-90 shadow-md flex flex-col items-center justify-center z-[100] md:hidden animate-slideDown backdrop-blur-md">
                    <button onClick={() => setMenuOpen(false)} aria-label="Fermer le menu" className="absolute top-6 right-6 text-white">
                        <FiX size={36} />
                    </button>
                    {linkKeys.map((link) => (
                        <Link key={link.id} href={`${link.id}`} className="py-4 text-xl font-bold" onClick={() => setMenuOpen(false)}>
                            <span className="text-blue-500">#</span>{(link.key)}
                        </Link>
                    ))}
                    <button className="mt-8" ><MdTranslate size={32} className="text-lg" /></button>
                </nav>
            )}
        </header>
    );
}