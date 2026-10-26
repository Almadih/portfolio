"use client";

import { portfolioData } from "@/lib/data";
import { Server, Database, Cloud, Terminal, Check } from "lucide-react";

const Skills = () => {
  const { skillsSection } = portfolioData;

  const disciplines = [
    {
      title: "Backend & Distributed Systems",
      icon: <Server size={22} className="text-[#0071e3]" />,
      summary: "Architecting high-throughput RESTful APIs, distributed scrapers, and asynchronous queue pipelines.",
      technologies: ["Python", "Laravel", "PHP", "FastAPI", "Node.js", "Celery", "Microservices", "REST APIs"],
    },
    {
      title: "Databases, Spatial & Caching",
      icon: <Database size={22} className="text-[#0071e3]" />,
      summary: "Designing performant relational schemas, geospatial queries, and low-latency cache layers.",
      technologies: ["PostgreSQL", "PostGIS", "Redis", "Query Tuning", "Composite Indexing", "Data Partitioning"],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      icon: <Cloud size={22} className="text-[#0071e3]" />,
      summary: "Automating deployment velocity, containerization, and reliable infrastructure monitoring.",
      technologies: ["Docker", "AWS (EC2, S3, RDS)", "Linux (Ubuntu/Debian)", "GitHub Actions", "CI/CD", "Pytest"],
    },
    {
      title: "Frontend Engineering & Craft",
      icon: <Terminal size={22} className="text-[#0071e3]" />,
      summary: "Building fast, fluid, accessible client interfaces with 95+ Lighthouse performance scores.",
      technologies: ["Vue 3 (Composition API)", "React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 px-6 border-t border-black/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3] mb-2 block">
            Technical Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Disciplines & Core Stack
          </h2>
          <p className="text-base md:text-lg text-[#6e6e73] leading-relaxed">
            Technologies and architectural patterns battle-tested in high-availability production environments.
          </p>
        </div>

        {/* 4 Discipline Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {disciplines.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-black/[0.08] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all hover:border-black/20"
            >
              <div className="w-11 h-11 rounded-2xl bg-[#0071e3]/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                {item.summary}
              </p>

              <div>
                <span className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider block mb-2.5">
                  Applied Stack & Tools
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#f5f5f7] text-[#1d1d1f] border border-black/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Principles Strip */}
        <div className="rounded-3xl border border-black/[0.08] bg-[#f5f5f7] p-8 md:p-10">
          <h3 className="text-base font-bold text-[#1d1d1f] mb-6">
            Engineering Principles in Production
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {skillsSection.skills.map((skill, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0071e3] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} strokeWidth={3} />
                </div>
                <span className="text-sm text-[#1d1d1f] font-medium leading-relaxed">
                  {skill.replace("⚡ ", "")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
