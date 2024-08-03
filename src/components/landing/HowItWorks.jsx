import Card from '../ui/CardHowItWorks'


export default function HowItWorkds() {
    return (
        <div>
            <h2 className='text-center text-2xl font-medium'>COMO FUNCIONA</h2>
            <Card
                title="Colaboracion sin costes"
                description="Encuentra colaboradores para tus proyectos sin incurrir en ningún costo adicional."
                cta="Crear"
                image="Money-Bag.png"
            />
        </div>
    )
}