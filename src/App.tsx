import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Pains } from "@/components/landing/Pains";
import { Solution } from "@/components/landing/Solution";
import { Services } from "@/components/landing/Services";
import { Cases } from "@/components/landing/Cases";
import { Why } from "@/components/landing/Why";
import { Testimonials } from "@/components/landing/Testimonials";
import { Process } from "@/components/landing/Process";
import { Contact } from "@/components/landing/Contact";
import { Blog } from "@/components/landing/Blog";
import { Footer } from "@/components/landing/Footer";

export default function App() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Nav />
      <Hero />
      <Marquee />
      <Pains />
      <Solution />
      <Services />
      <Cases />
      <Why />
      <Testimonials />
      <Process />
      <Contact />
      <Blog />
      <Footer />
    </main>
  );
}
