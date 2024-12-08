import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import { client } from "@/lib/contentful/client";

async function getData() {
  const data = await client.getEntries({ content_type: "testimonial" });

  return data.items;
}

export default async function Home() {
  const testimonials = await getData();

  return (
    <main className="flex flex-col">
      <Hero />
      <Benefits />
      <Packages />
      <About />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </main>
  );
}
