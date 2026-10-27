import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] antialiased selection:bg-[#0071e3]/15 selection:text-[#0071e3]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="py-12 border-t border-black/[0.08] bg-[#fbfbfd] text-xs text-[#86868b]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} Mohamed Almadih.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#projects" className="hover:text-[#1d1d1f] transition-colors">
              Systems
            </Link>
            <Link href="#experience" className="hover:text-[#1d1d1f] transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-[#1d1d1f] transition-colors">
              Disciplines
            </Link>
            <a
              href="https://blog.almadih.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1d1d1f] transition-colors"
            >
              Blog
            </a>
            <Link href="#contact" className="hover:text-[#1d1d1f] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
