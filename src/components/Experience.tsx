"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
    const { workExperiences } = portfolioData;

    return (
        <section id="experience" className="py-24 px-6 bg-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="space-y-8">
                    {workExperiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0"
                        >
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                            <div className="glass p-8 rounded-3xl">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                                            <p className="text-primary font-medium flex items-center gap-2">
                                                <Briefcase size={16} />
                                                {exp.company}
                                            </p>
                                            {exp.location && (
                                                <p className="text-foreground/40 text-sm flex items-center gap-2">
                                                    <MapPin size={14} />
                                                    {exp.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-foreground/50 text-sm bg-white/5 px-4 py-2 rounded-full">
                                        <Calendar size={14} />
                                        {exp.date}
                                    </div>
                                </div>
                                <p className="text-foreground/70 leading-relaxed">
                                    {exp.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
