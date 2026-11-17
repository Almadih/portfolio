"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { portfolioData } from "@/lib/data";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs (WAI-ARIA tabs pattern, automatic activation)
  function onTabKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const last = projects.length - 1;
    const next =
      e.key === "ArrowRight" ? (activeTab === last ? 0 : activeTab + 1)
      : e.key === "ArrowLeft" ? (activeTab === 0 ? last : activeTab - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActiveTab(next);
    tabRefs.current[next]?.focus();
  }

  const activeProject = projects[activeTab] || projects[0];
  const isGithub = activeProject.link?.includes("github.com");

  return (
    <section id="projects" className="py-20 md:py-28 px-6 border-t border-black/[0.08]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3] mb-2 block">
            Selected Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Featured Systems & Projects
          </h2>
          <p className="text-base md:text-lg text-[#6e6e73] leading-relaxed">
            Live products, data platforms, and side projects, from a Telegram bot with 40,000+ users to a crawler handling about 100,000 websites a day.
          </p>
        </div>

        {/* Apple-style Fluid Segmented Tabs */}
        <div role="tablist" aria-label="Projects" className="flex p-1.5 rounded-2xl bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.02)] mb-8 overflow-x-auto max-w-3xl">
          {projects.map((project, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                ref={(el) => { tabRefs.current[index] = el; }}
                type="button"
                role="tab"
                id={`project-tab-${index}`}
                aria-selected={isActive}
                aria-controls="project-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(index)}
                onKeyDown={onTabKeyDown}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-150 motion-safe:active:scale-95 text-[#6e6e73] hover:text-[#1d1d1f] aria-selected:bg-[#1d1d1f] aria-selected:text-white aria-selected:shadow-sm aria-selected:hover:text-white"
              >
                {project.projectName}
              </button>
            );
          })}
        </div>

        {/* Active System Dossier Card */}
        <div
          role="tabpanel"
          id="project-panel"
          aria-labelledby={`project-tab-${activeTab}`}
          className="rounded-3xl border border-black/[0.08] bg-white p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-200 mb-12">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3] mb-1 block">
                Project 0{activeTab + 1}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.08] bg-[#fbfbfd] text-xs font-semibold text-[#1d1d1f] hover:border-[#0071e3] hover:text-[#0071e3] motion-safe:active:scale-95 transition-all self-start md:self-auto"
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
                <article
                  key={index}
                  className="relative rounded-2xl border border-black/[0.08] bg-white p-6 hover:border-black/20 hover:shadow-md transition-all group motion-safe:has-[button:active]:scale-[0.98] has-[button:focus-visible]:ring-2 has-[button:focus-visible]:ring-[#0071e3]"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
                      {/* ::after stretches the click area over the whole card */}
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab(originalIndex);
                          tabRefs.current[originalIndex]?.focus();
                        }}
                        className="text-left cursor-pointer focus-visible:outline-none after:absolute after:inset-0 after:rounded-2xl after:content-['']"
                      >
                        {project.projectName}
                      </button>
                    </h3>
                    <span className="text-xs font-mono text-[#86868b]">
                      0{originalIndex + 1}
                    </span>
                  </div>
                  <p className="text-xs text-[#6e6e73] leading-relaxed line-clamp-3 mb-4">
                    {project.projectDesc}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] hover:underline mb-4"
                    >
                      <span>{project.link.includes("github.com") ? "View Repository" : "Live Application"}</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
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
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
