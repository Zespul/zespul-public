import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <Navbar />
      <section className="w-[80%] mx-auto">
        <Hero />

        <article>
          
        </article>

      </section>
    </>
  );
}
