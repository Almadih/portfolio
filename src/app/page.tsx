import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-10 text-center text-foreground/40 text-sm">
        <p>© {new Date().getFullYear()} Mohamed Almadih. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
