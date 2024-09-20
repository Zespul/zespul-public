'use client'

import React from 'react';
import Airplane from '../icons/Airplane';
import Arrow from '../icons/Arrow';
import ButtonCTA from '../ui/ButtonCTA';

import { addSubscriber } from '@/actions/newsletter';

import { useState } from 'react';

export default function Newsletter() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <article className='px-28 py-16 w-2/5 mx-auto border border-black rounded-md flex flex-col gap-4'>
            <div>
                <h3 className='text-2xl font-bold'>Manténte actualizado</h3>
                <p className='text-sm text-grayText mb-2'>Recibe actualizaciones exclusivas, noticias y nuevos proyectos directamente en tu bandeja de entrada.</p>
            </div>
            <div className='flex flex-col gap-3'>
                <input className='placeholder:text-[#7B7B7B] border border-black rounded-md py-2 px-4 text-sm outline-none focus:border-primary transition duration-100 text-grayText' type="email" placeholder='email@example.com' />
                <button className='bg-black py-2 text-white font-semibold rounded-md'>Confirmar</button>
            </div>
        </article>
    )
}   