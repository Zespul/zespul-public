import Image from "next/image";
import Link from "next/link";

export default function NavbarPage() {
    return (
        <section className="flex justify-between items-center py-6">
            <Image
                className="size-16"
                src="/img/logo.png"
                alt="Logo de la empresa"
                width={100}
                height={100}
            />

            <nav className="space-x-12 text-sm font-medium">
                <Link href="/">Inicio</Link>
                <Link href="/proyectos">Proyectos</Link>
                <Link href="/ranking">Ranking</Link>
                <Link href="/blog">Blog</Link>
            </nav>

            <Link href="/login" className="bg-black text-white font-semibold px-6 py-2 rounded-md text-sm">Log In</Link>
        </section>
    )
}
