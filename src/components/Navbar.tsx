"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { ArrowUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#fbfbfd]/85 border-b border-black/[0.08] transition-all duration-200">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand Identity */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-sm font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
            {portfolioData.greeting.username}
          </span>
          <span className="text-xs text-[#86868b] hidden sm:inline font-normal">
            / Senior Backend & Systems Engineer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#6e6e73]">
          <Link
            href="#projects"
            className="hover:text-[#1d1d1f] transition-colors duration-150"
          >
            Systems & Work
          </Link>
          <Link
            href="#experience"
            className="hover:text-[#1d1d1f] transition-colors duration-150"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            className="hover:text-[#1d1d1f] transition-colors duration-150"
          >
            Disciplines
          </Link>
          <Link
            href="#contact"
            className="hover:text-[#1d1d1f] transition-colors duration-150"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href={portfolioData.greeting.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#1d1d1f] text-white hover:bg-[#0071e3] active:scale-95 transition-all duration-150 flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#1d1d1f] hover:text-[#0071e3] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/[0.08] bg-[#fbfbfd] px-6 py-4 space-y-3">
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#1d1d1f] py-1.5"
          >
            Systems & Work
          </Link>
          <Link
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#1d1d1f] py-1.5"
          >
            Experience
          </Link>
          <Link
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#1d1d1f] py-1.5"
          >
            Disciplines
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-[#1d1d1f] py-1.5"
          >
            Contact
          </Link>
          <div className="pt-2">
            <Link
              href={portfolioData.greeting.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#0071e3] text-white"
            >
              <span>Download Resume</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
