import Link from "next/link";

export default function ButtonCTA({ cta, link, className }) {
    return (
        <Link href={link} className={`bg-primary text-white font-bold px-4 py-3 rounded-md ${className}`}>
            {cta}
        </Link>
    )
}