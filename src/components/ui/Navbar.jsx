"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconMenu from "@/components/icons/Menu";

export default function NavbarPage() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className={`flex justify-between items-center py-6 px-[10%] ${isMenuOpen ? " bg-white" : ""}`}>
            <Link href="/">
                <Image
                    className="size-12"
                    src="/img/logo.png"
                    alt="Logo de la empresa"
                    width={100}
                    height={100}
                />
            </Link>

            <nav className="hidden lg:block space-x-12 text-sm font-medium text-gray-500 hover:[&>a]:text-black [&>a]:transition [&>a]:duration-150">
                <Link href="/" className={pathname === '/' ? 'text-black font-semibold under' : ''}>Inicio</Link>
                <Link href="/proyectos" className={pathname === '/proyectos' ? 'text-black font-semibold under' : ''}>Proyectos</Link>
                <Link href="/ranking" className={pathname === '/ranking' ? 'text-black font-semibold under' : ''}>Ranking</Link>
                <Link href="/blog" className={pathname === '/blog' ? 'text-black font-semibold under' : ''}>Blog</Link>
            </nav>

            <Link href="/login" className="bg-black text-white font-semibold px-6 py-2 rounded-md text-sm hidden lg:block">Log In</Link>

            <div className="block cursor-pointer lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IconMenu />
            </div>

            <div className={`absolute lg:hidden top-24 left-0 w-full bg-white flex flex-col justify-center items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
            >
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Inicio</li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Proyectos</li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Ranking</li>
                <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">Blog</li>

            </div>

        </section>
    );
}

