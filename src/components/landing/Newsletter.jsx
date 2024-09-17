import React from 'react';
import Airplane from '../icons/Airplane';
import Arrow from '../icons/Arrow';
import ButtonCTA from '../ui/ButtonCTA';


export default function Newsletter() {
    return (
        <article className='relative w-fit mx-auto flex flex-col justify-center items-center bg-secondary text-white rounded-xl mt-20 px-32 py-14 gap-4  shadow-black'>
            <div className='relative'>
                <h3 className='uppercase font-bold text-lg'>¡Suscríbete a nuestra newsletter!</h3>
                <Airplane className='size-10 absolute top-1/2 -translate-y-1/2 -right-20' />
            </div>
            <p className='text-sm lg:w-3/4 lg:text-center font-light'>Recibe actualizaciones exclusivas, noticias y nuevos proyectos directamente en tu bandeja de entrada.</p>
            <p className='text-sm font-light'>¡Suscríbete a nuestra newsletter!</p>
            <div className='space-x-2 mt-8'>

                <input type='email' placeholder='Tu correo electrónico' className='outline-none bg-transparent border-b placeholder:text-sm text-sm w-60 focus:border-primary transition duration-200' />
                <ButtonCTA cta='Suscribirme' link="#" className="text-sm shadow-lg"/>
            </div>

            <Arrow className='h-52 -rotate-12 absolute top-1/2 -translate-y-1/2 left-6' />
        </article>
    )
}   