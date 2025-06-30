import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Image from "next/image";

export default function Home() {
  return (
    <main className="items-center justify-between p-6">
     <Hero />
     <Projects />
     <Contact />
    </main>
  )
}
