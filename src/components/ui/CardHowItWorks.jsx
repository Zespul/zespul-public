import Image from 'next/image';


export default function Card({ title, description, cta, image }) {
  return (
    <div className="w-96">
      <h3 className="text-lg text-secondary font-bold">{ title }</h3>
      <p className="text-sm">{ description }</p>
      <div className="w-full flex justify-between items-center">
        <button>{ cta }</button>
        <Image
                className="size-14"
                src={`/img/${image}`}
                alt={`Emoji de ${title}`}
                width={72}
                height={72}
            />
      </div>
    </div>    
  )
}