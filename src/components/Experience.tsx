"use client";

import { portfolioData } from "@/lib/data";
import { MapPin, Calendar, GraduationCap, Check } from "lucide-react";

const Experience = () => {
  const { workExperiences, educationInfo } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 px-6 border-t border-black/[0.08] bg-[#f5f5f7]/50">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3] mb-2 block">
            Career & Execution History
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
            Work Experience
          </h2>
          <p className="text-base md:text-lg text-[#6e6e73] leading-relaxed">
            Proven track record architecting high-throughput backend systems, cloud microservices, and reliable engineering workflows.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 mb-20">
          {workExperiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-3xl border border-black/[0.08] bg-white p-8 md:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all hover:border-black/20"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-4 pb-4 border-b border-black/[0.06]">
                <div>
                  <h3 className="text-2xl font-bold text-[#1d1d1f]">
                    {exp.role}{" "}
                    <span className="text-[#0071e3] font-semibold">· {exp.company}</span>
                  </h3>
                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-xs text-[#86868b] mt-1">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5f5f7] border border-black/[0.04] text-xs font-mono font-medium text-[#6e6e73] self-start md:self-auto">
                  <Calendar size={13} />
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-[#1d1d1f] leading-relaxed mb-6 font-medium">
                {exp.desc}
              </p>

              {/* Measurable Highlights */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-sm text-[#6e6e73] leading-relaxed"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="pt-8 border-t border-black/[0.08]">
          <h3 className="text-2xl font-bold text-[#1d1d1f] mb-6">Education</h3>

          <div className="grid gap-6">
            {educationInfo.schools.map((school, index) => (
              <div
                key={index}
                className="rounded-3xl border border-black/[0.08] bg-white p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1d1d1f]">{school.schoolName}</h4>
                    <p className="text-sm font-semibold text-[#0071e3]">{school.subHeader}</p>
                    <p className="text-xs text-[#86868b] mt-0.5">{school.desc}</p>
                  </div>
                </div>

                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#f5f5f7] text-[#6e6e73]">
                  {school.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
