import Card from '../ui/CardHowItWorks'
import Arrow from '../ui/Arrow'

export default function HowItWorkds() {
    return (
        <div className='py-10'>
            <h2 className='text-center text-3xl font-medium my-10'>COMO FUNCIONA</h2>
            <div className='w-2/3 mx-auto parent'>
                <Card
                    className="div1"
                    title="Crea y publica la idea de tu proyecto"
                    description="Describe tu proyecto con claridad y detalle. Comparte tus objetivos, necesidades y visión para atraer a los colaboradores perfectos que te ayudarán a llevar tu idea al éxito."
                    cta="Crear"
                    image="Writing.png"
                />

                <Arrow className="text-secondary div2" />

                <Card
                    className="div3"
                    title="Calificar a las personas inscritas"
                    description="Revisa los perfiles de los colaboradores interesados en tu proyecto. Evalúa sus habilidades, experiencias y compatibilidad con tu visión para asegurarte de elegir a los miembros más adecuados para tu equipo."
                    cta="Mis proyectos"
                    image="Detective.png"
                />

                <Arrow className="text-secondary rotate-90 div4" />

                <Card
                    className="div5"
                    title="Empieza a trabajar con tu equipo"
                    description="Inicia la colaboración con los miembros seleccionados y comienza a desarrollar tu proyecto."
                    cta="Mis proyectos"
                    image="Laptop.png"
                />

                <Arrow className="text-secondary div6" />


                <Card
                    className="div7"
                    title="Comprueba el ranking"
                    description="Revisa el ranking de tu proyecto para evaluar su visibilidad y popularidad en la plataforma."
                    cta="Ver ranking"
                    image="Trophy.png"
                />

                
            </div>
        </div>
    )
}