import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Instagram from "../icons/Instagram"
import Tiktok from "../icons/Tiktok"
import Twitter from "../icons/Twitter"


export default function Footer() {
   return (
      <section className="flex flex-col w-full bg-footerbg text-white px-[10%] py-6 mt-20 gap-6">
         <div className='flex justify-between items-start'>
            <div>
               <Link href="/">
                  <Image
                     className="size-12"
                     src="/img/logo.png"
                     alt="Logo de la empresa"
                     width={100}
                     height={100}
                  />
               </Link>
               <h1 className='font-bold text-lg'>Innovmates</h1>
               <p className='text-xs w-60'>Encuentra al equipo ideal con el que llevar tu idea al exito.</p>
            </div>
            <div className='flex items-center gap-20 text-sm'>
               <div className='flex flex-col gap-2 items-start'>
                  <h4 className='uppercase font-bold'>Company</h4>
                  <Link className='text-[#ABABAB] hover:text-white transition duration-150' href="#">Blog</Link>
                  <Link className='text-[#ABABAB] hover:text-white transition duration-150' href="#">Pricing</Link>
                  <Link className='text-[#ABABAB] hover:text-white transition duration-150' href="#">Equipo</Link>
               </div>

               <div className='flex flex-col gap-2 items-start'>
                  <h4 className='uppercase font-bold'>Legal</h4>
                  <Link className='text-[#ABABAB] hover:text-white transition duration-150' href="#">Terminos y servicios</Link>
                  <Link className='text-[#ABABAB] hover:text-white transition duration-150' href="#">Politica de privacidad</Link>
                  <Link className='text-[#ABABAB] hover:text-white transition duration-150' href="#">Politica de cookies</Link>
               </div>

            </div>
         </div>
         <div className="bg-terciary w-full h-[1px] rounded-full"></div>
         <div className='flex justify-between items-center'>
            <p className='text-xs '>© 2024 Innovmates - Todos los Derechos Reservados</p>
            <div className='flex gap-6 items-center'>
               <Link href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                  <Instagram className='size-4 hover:text-primary transition duration-150'></Instagram>
               </Link>
               <Link href="https://www.tiktok.com/" target='_blank' rel='noreferrer'>
                  <Tiktok className='size-4 hover:text-primary transition duration-150'></Tiktok>
               </Link>
               <Link href="https://x.com/" target='_blank' rel='noreferrer'>
                  <Twitter className='size-4 hover:text-primary transition duration-150'></Twitter>
               </Link>
            </div>
         </div>
      </section>
   )
}