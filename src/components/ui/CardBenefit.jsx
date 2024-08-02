import Image from 'next/image';


export default function CardBenefit({ image, title, description }) {
    return (
        <div className="flex flex-col items-center justify-center gap-2 w-60">
            <Image
                className="size-14"
                src={`/img/${image}`}
                alt={`Emoji de ${title}`}
                width={72}
                height={72}
            />
            <h3 className="font font-semibold text-center">{title}</h3>
            <p className="text-xs text-grayText text-center">{description}</p>
        </div>
    );
}