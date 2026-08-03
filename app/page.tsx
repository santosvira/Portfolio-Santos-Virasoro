import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <div className="hairline max-w-container mx-6 md:mx-12 lg:mx-[7.5rem]" />
      <About />
      <div className="hairline max-w-container mx-6 md:mx-12 lg:mx-[7.5rem]" />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
