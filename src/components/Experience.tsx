"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from "lucide-react";

const Experience = () => {
    const { workExperiences, educationInfo } = portfolioData;

    return (
        <section id="experience" className="py-24 px-6 bg-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <p className="text-foreground/60 max-w-xl mx-auto mb-4">
                        Proven track record of architecting scalable backend systems, microservices, and high-velocity engineering workflows.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="space-y-10">
                    {workExperiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-primary/30 pb-4 last:pb-0"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                            <div className="glass p-8 rounded-3xl transition-all duration-300 hover:border-primary/40">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                            <p className="text-primary font-medium flex items-center gap-2">
                                                <Briefcase size={16} />
                                                {exp.company}
                                            </p>
                                            {exp.location && (
                                                <p className="text-foreground/50 text-sm flex items-center gap-2">
                                                    <MapPin size={14} />
                                                    {exp.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-foreground/60 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                        <Calendar size={14} />
                                        {exp.date}
                                    </div>
                                </div>

                                <p className="text-foreground/80 leading-relaxed mb-4 font-normal">
                                    {exp.desc}
                                </p>

                                {exp.highlights && exp.highlights.length > 0 && (
                                    <ul className="space-y-2.5 mt-4 pt-4 border-t border-white/5">
                                        {exp.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-3 text-sm text-foreground/70 leading-relaxed">
                                                <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Education Section */}
                <div className="mt-20">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Education</h3>
                        <div className="w-12 h-1 bg-primary/60 mx-auto rounded-full" />
                    </div>

                    <div className="space-y-6">
                        {educationInfo.schools.map((school, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass p-6 md:p-8 rounded-3xl flex flex-wrap justify-between items-center gap-4 hover:border-primary/40 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-foreground">{school.schoolName}</h4>
                                        <p className="text-primary font-medium text-sm">{school.subHeader}</p>
                                        <p className="text-foreground/60 text-xs mt-0.5">{school.desc}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-foreground/60 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                    <Calendar size={14} />
                                    {school.duration}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
