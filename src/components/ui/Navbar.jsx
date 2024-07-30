"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="flex justify-between items-center py-6">
            <Image
                className="size-12 lg:size-16"
                src="/img/logo.png"
                alt="Logo de la empresa"
                width={100}
                height={100}
            />

            <button
                className="block md:hidden text-black"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            <nav className={`md:space-x-12 text-sm font-medium text-gray-500 hover:[&>a]:text-black [&>a]:transition [&>a]:duration-150 ${isMenuOpen ? 'flex flex-col justify-start items-start' : 'hidden'} md:flex`}>
                <Link href="/" className={pathname === '/' ? 'text-black font-semibold' : ''}>Inicio</Link>
                <Link href="/proyectos" className={pathname === '/proyectos' ? 'text-black font-semibold' : ''}>Proyectos</Link>
                <Link href="/ranking" className={pathname === '/ranking' ? 'text-black font-semibold' : ''}>Ranking</Link>
                <Link href="/blog" className={pathname === '/blog' ? 'text-black font-semibold' : ''}>Blog</Link>
            </nav>

            <Link href="/login" className="bg-black text-white font-semibold px-6 py-2 rounded-md text-sm hidden md:block">Log In</Link>
        </section>
    );
}

