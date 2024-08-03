import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/CardBenefit";

export default function Hero() {
    return (
        <>
            <article className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:mt-8">
                <article className="lg:w-1/2 space-y-4 md:space-y-6 lg:space-y-6">
                    <h1 className="text-3xl font-semibold text-center md:text-4xl md:w-2/3 md:mx-auto lg:text-left lg:w-full lg:mx-0 2xl:text-5xl 2xl:text-pretty">Encuentra el equipo que buscas, <span className="text-primary bg-secondary uppercase px-2">gratis</span></h1>
                    <p className="text-xs text-center md:text-sm md:w-2/3 md:mx-auto 2xl:text-sm md:text-pretty lg:text-left lg:w-full lg:mx-0">Busca equipo con el que propulsar tus ideas al éxito. Publica tus proyectos y encuentra los colaboradores ideales sin costes adicionales.</p>

                    <div className="text-xs 2xl:text-sm flex gap-6 justify-center items-center lg:justify-start">
                        <Link href="/proyectos" className="bg-primary border-2 border-primary text-white font-bold px-4 py-3 rounded-md">Explorar proyectos</Link>
                        <Link href="/proyectos" className="hidden md:block border-2 border-black primary text-black font-bold px-4 py-3 rounded-md">Sube tu idea de proyecto</Link>
                    </div>

                    <div className="flex items-center gap-2">
                        <Image
                            className="size-10"
                            src="/img/Man-Raising-Hand.png"
                            alt="Imagen de dos personas hablando"
                            width={49}
                            height={49}
                        />

                        <div>
                            <p className="text-grayText font-medium text-sm">Con la confianza de más de</p>
                            <h3 className="font-medium text-xl">200+ Personas</h3>
                        </div>
                    </div>
                </article>

                <Image
                    className="lg:w-1/2"
                    src="/img/hero.png"
                    alt="Imagen de dos personas hablando"
                    width={1200}
                    height={733}
                />
            </article>

            <div className="flex items-center justify-center gap-16 mt-20">
                <Card
                    image="Money-Bag.png"
                    title="Colaboracion sin costes"
                    description="Encuentra colaboradores para tus proyectos sin incurrir en ningún costo adicional."
                />

                <Card
                    image="Globe.png"
                    title="Red mundial de talentos"
                    description="Accede a una red global de diversos talentos listos para colaborar en proyectos."
                />

                <Card
                    image="Eyes.png"
                    title="Visibilidad para tus proyectos"
                    description="Publica tus ideas de proyectos y obten visibilidad ante una audiencia interesada en colaborar y contribuir en tu idea."
                />

            </div>
        </>
    )
}
