"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-foreground/60">Some of the startups and companies I've helped build.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass rounded-3xl overflow-hidden flex flex-col h-full hover:border-primary/30 transition-colors"
                        >
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                        <ExternalLink size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/40 hover:text-primary transition-colors"
                                            >
                                                {project.link.includes("github.com") ? <Github size={20} /> : <ExternalLink size={20} />}
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                    {project.projectName}
                                </h3>
                                <p className="text-foreground/60 text-sm mb-6 flex-grow">
                                    {project.projectDesc}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-foreground/40"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-10"
                                    aria-label={`View ${project.projectName}`}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
