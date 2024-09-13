'use client'

import React from 'react';
import Airplane from '../icons/airplane';
import Arrow from '../icons/arrow';
import ButtonCTA from '../ui/ButtonCTA';

import { addSubscriber } from '@/actions/newsletter';

import { useState } from 'react';

export default function Newsletter() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <article className='relative w-fit mx-auto flex flex-col justify-center items-center bg-secondary text-white rounded-xl mt-20 px-32 py-14 gap-4  shadow-black'>
            <div className='relative'>
                <h3 className='uppercase font-bold text-lg'>¡Suscríbete a nuestra newsletter!</h3>
                <Airplane className='size-10 absolute top-1/2 -translate-y-1/2 -right-20' />
            </div>
            <p className='text-sm lg:w-3/4 lg:text-center font-light'>Recibe actualizaciones exclusivas, noticias y nuevos proyectos directamente en tu bandeja de entrada.</p>
            <p className='text-sm font-light'>¡Suscríbete a nuestra newsletter!</p>
            <div className='space-x-2 mt-8'>
                {submitted ? (
                    <p>¡Subscrito! Te mantendremos actualizado</p>
                ) : (
                    <form action={async formData => {
                        const response = await addSubscriber(formData);
                        setSubmitted(true)
                    }}>
                        <input type='email' name='email' placeholder='Tu correo electrónico' className='outline-none bg-transparent border-b placeholder:text-sm text-sm w-60 focus:border-primary transition duration-200' />
                        <ButtonCTA cta='Suscribirme' type='submit' className="text-sm shadow-lg"/>
                    </form>
                )}
            </div>

            <Arrow className='h-52 -rotate-12 absolute top-1/2 -translate-y-1/2 left-6' />
        </article>
    )
}   