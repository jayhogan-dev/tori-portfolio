import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Benefits />
      <Packages />
      <About />
      <Contact />
    </main>
  );
}
