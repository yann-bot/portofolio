"use client"

import Link from "next/link";
import Sidebar from "../ui/verticalSideBar";
import { MdTranslate } from "react-icons/md";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { id: "./", label: "home" },
  { id: "./works", label: "works" },
  { id: "./about", label: "about-me"},
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="flex justify-between items-center p-6 md:p-10 relative">
            <Sidebar />
            <div className="font-bold">Yann D</div>
            {/* Menu desktop */}
            <nav className="hidden md:flex gap-10 mr-20">
                {links.map((link) => (
                    <Link key={link.id} href={`${link.id}`}>
                        <span className="text-blue-500">#</span>{link.label}
                    </Link>
                ))}
                <button><MdTranslate size={20} /></button>
            </nav>
            {/* Menu hamburger mobile */}
            <div className="md:hidden flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir le menu">
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>
            {/* Menu mobile déroulant */}
            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-black shadow-md flex flex-col items-center py-6 z-50 md:hidden animate-slideDown">
                    {links.map((link) => (
                        <Link key={link.id} href={`${link.id}`} className="py-2 text-lg font-semibold" onClick={() => setMenuOpen(false)}>
                            <span className="text-blue-500">#</span>{link.label}
                        </Link>
                    ))}
                    <button className="mt-4"><MdTranslate size={24} /></button>
                </nav>
            )}
        </header>
    );
}