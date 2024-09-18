import Link from "next/link";

export default function ButtonCTA({ cta, link, className }) {
    return (
        <button type="submit" className={`bg-primary text-white font-bold px-4 py-3 rounded-md ${className}`}>
            {cta}
        </button>
    )
}