import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <article className="flex justify-between items-center">
            <article className="w-1/2 space-y-2">
                <h1 className="text-4xl font-semibold">Encuentra el equipo que buscas, <span className="text-primary bg-secondary uppercase px-2">gratis</span></h1>
                <p className="text-xs 2xl:text-sm">Busca equipo con el que propulsar tus ideas al éxito. Conéctate con expertos y creativos sin costes adicionales, publica tus proyectos y encuentra los colaboradores ideales.</p>

                <div className="text-xs 2xl:text-sm flex gap-8 justify-start">
                    <Link href="/proyectos" className="bg-primary text-white font-bold px-6 py-4 rounded-md">Explorar proyectos</Link>
                    <Link href="/proyectos" className="border-2 border-black primary text-black font-bold px-6 py-4 rounded-md">Sube tu idea de proyecto</Link>
                </div>
            </article>

            <Image
                className="w-1/2"
                src="/img/hero.png"
                alt="Imagen de dos personas hablando"
                width={1200}
                height={733}
            />
        </article>
    )
}
