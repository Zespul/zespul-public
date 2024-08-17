import Image from 'next/image';
import ButtonCTA from './ButtonCTA';

export default function Card({ title, description, cta, image, className }) {
  return (
    <div className={`w-96 bg-terciary rounded-md shadow-md py-4 px-6 grid grid-rows-4 ${className}`}>
      <h3 className="row-span-1 text-lg text-secondary font-bold my-auto">{ title }</h3>
      <p className="row-span-2 text-xs ">{ description }</p>
      <div className="row-span-1 w-full flex justify-between items-center">
        <ButtonCTA cta={cta} link="/signup" className="text-xs" />
        <Image
                className="size-11"
                src={`/img/${image}`}
                alt={`Emoji de ${title}`}
                width={72}
                height={72}
            />
      </div>
    </div>    
  )
}