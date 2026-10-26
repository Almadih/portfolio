"use client";

import Link from "next/link";
import { portfolioData } from "@/lib/data";
import { ArrowUpRight, Github, Linkedin, Mail, Globe } from "lucide-react";

const Hero = () => {
  const { greeting, socialMediaLinks } = portfolioData;

  return (
    <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071e3]/10 text-[#0071e3] text-xs font-semibold tracking-wide uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
          <span>Available for senior roles & consulting</span>
          <span className="text-[#86868b] font-normal normal-case hidden sm:inline">
            • Riyadh / Remote
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] leading-[1.08] mb-8">
          Engineering software systems with precision and scale.
        </h1>

        {/* Supporting Narrative */}
        <p className="text-lg md:text-xl text-[#6e6e73] font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Senior Software Engineer with 7+ years architecting resilient backend infrastructure, distributed scrapers ingesting 500GB+ daily data, and high-throughput microservices using Python, Laravel, PostgreSQL, and Docker.
        </p>

        {/* Primary Actions with Apple Fluid Spring Feel */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href={greeting.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-[#0071e3] text-white text-sm font-semibold hover:bg-[#0077ed] active:scale-[0.96] transition-all duration-150 flex items-center gap-2 shadow-sm"
          >
            <span>Download Resume</span>
            <ArrowUpRight size={16} />
          </Link>

          <Link
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-white text-[#1d1d1f] border border-black/[0.08] text-sm font-semibold hover:bg-[#f5f5f7] active:scale-[0.96] transition-all duration-150"
          >
            Get in Touch
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:ml-2">
            <SocialLink
              href={socialMediaLinks.github}
              icon={<Github size={18} />}
              label="GitHub"
            />
            <SocialLink
              href={socialMediaLinks.linkedin}
              icon={<Linkedin size={18} />}
              label="LinkedIn"
            />
            <SocialLink
              href={`mailto:${socialMediaLinks.gmail}`}
              icon={<Mail size={18} />}
              label="Email"
            />
          </div>
        </div>

        {/* Apple Hardware/Spec Sheet Bar */}
        <div className="rounded-3xl border border-black/[0.08] bg-white p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-black/[0.06]">
            <div className="pt-2 md:pt-0">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-1">
                7+ <span className="text-sm font-normal text-[#86868b]">years</span>
              </div>
              <div className="text-xs font-medium text-[#86868b]">
                Production Engineering
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#0071e3] mb-1">
                500GB+
              </div>
              <div className="text-xs font-medium text-[#86868b]">
                Daily Scraped Data
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-1">
                99.95%
              </div>
              <div className="text-xs font-medium text-[#86868b]">
                Service Availability
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-1">
                10+
              </div>
              <div className="text-xs font-medium text-[#86868b]">
                Production Apps Shipped
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 rounded-full border border-black/[0.08] bg-white text-[#6e6e73] hover:text-[#1d1d1f] hover:border-black/20 flex items-center justify-center active:scale-[0.95] transition-all duration-150"
  >
    {icon}
  </a>
);

export default Hero;
