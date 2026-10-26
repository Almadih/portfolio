"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-foreground/60 max-w-xl mx-auto">
                        High-impact systems, distributed scrapers, and platforms engineered for reliability and scale.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const isGithub = project.link?.includes("github.com");

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative glass rounded-3xl p-8 flex flex-col justify-between hover:border-primary/40 transition-all duration-300"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                                            <FolderGit2 size={24} />
                                        </div>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Visit ${project.projectName} ${isGithub ? "repository on GitHub" : "live application"}`}
                                                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary flex items-center justify-center text-foreground/60 transition-colors"
                                            >
                                                {isGithub ? <Github size={20} /> : <ExternalLink size={20} />}
                                            </a>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {project.projectName}
                                    </h3>

                                    <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-normal">
                                        {project.projectDesc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                    {project.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-foreground/60 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
