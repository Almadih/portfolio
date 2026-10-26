"use client";

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);

  const activeProject = projects[activeTab] || projects[0];
  const isGithub = activeProject.link?.includes("github.com");

  return (
    <section id="projects" className="py-20 md:py-28 px-6 border-t border-black/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3] mb-2 block">
            Architectural Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Featured Systems & Production Engineering
          </h2>
          <p className="text-base md:text-lg text-[#6e6e73] leading-relaxed">
            High-throughput distributed pipelines, geospatial query engines, and fault-tolerant financial architectures built for real scale.
          </p>
        </div>

        {/* Apple-style Fluid Segmented Tabs */}
        <div className="flex p-1.5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-8 overflow-x-auto max-w-3xl">
          {projects.map((project, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 active:scale-95 ${
                  isActive
                    ? "bg-[#1d1d1f] text-white shadow-sm"
                    : "text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                {project.projectName}
              </button>
            );
          })}
        </div>

        {/* Active System Dossier Card */}
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-200 mb-12">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3] mb-1 block">
                Production Case Study 0{activeTab + 1}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-[#1d1d1f]">
                {activeProject.projectName}
              </h3>
            </div>

            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.08] bg-[#fbfbfd] text-xs font-semibold text-[#1d1d1f] hover:border-[#0071e3] hover:text-[#0071e3] active:scale-95 transition-all self-start md:self-auto"
              >
                {isGithub ? <Github size={15} /> : <ExternalLink size={15} />}
                <span>{isGithub ? "View Repository" : "Live Application"}</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          <p className="text-base md:text-lg text-[#6e6e73] leading-relaxed max-w-3xl mb-10">
            {activeProject.projectDesc}
          </p>

          {/* Technology & Architectural Tags */}
          <div>
            <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block mb-3">
              Technologies & Infrastructure
            </span>
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#f5f5f7] text-[#1d1d1f] border border-black/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Grid View for Fast Scanning */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects
            .filter((_, idx) => idx !== activeTab)
            .map((project, index) => {
              const originalIndex = projects.findIndex((p) => p.projectName === project.projectName);
              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(originalIndex)}
                  className="rounded-2xl border border-black/[0.08] bg-white p-6 cursor-pointer hover:border-black/20 hover:shadow-md transition-all group active:scale-[0.98]"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                      {project.projectName}
                    </h4>
                    <span className="text-xs font-mono text-[#86868b]">
                      0{originalIndex + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#6e6e73] leading-relaxed line-clamp-3 mb-4">
                    {project.projectDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-[#f5f5f7] text-[#6e6e73]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full text-[#86868b]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
