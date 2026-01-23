"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Code2, Cpu, Globe, Smartphone, Database, Terminal, Server, Layers, Box, Monitor } from "lucide-react";

const Skills = () => {
    const { skillsSection } = portfolioData;

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{skillsSection.title}</h2>
                    <p className="text-primary font-medium tracking-widest uppercase">{skillsSection.subTitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {skillsSection.skills.map((skill, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-2xl glass">
                                <div className="mt-1 text-primary">
                                    <Terminal size={20} />
                                </div>
                                <p className="text-lg">{skill}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                    >
                        {skillsSection.softwareSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 rounded-2xl glass hover:border-primary/50 transition-colors group"
                            >
                                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                                    {getIcon(skill.icon)}
                                </div>
                                <span className="text-xs font-medium text-foreground/60">{skill.skillName}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const getIcon = (icon: string) => {
    switch (icon) {
        case "php": return <Server className="text-indigo-400" />;
        case "laravel": return <Globe className="text-red-500" />;
        case "js": return <Terminal className="text-yellow-400" />;
        case "vue": return <Layers className="text-emerald-400" />;
        case "react": return <Cpu className="text-cyan-400" />;
        case "node": return <Terminal className="text-green-500" />;
        case "python": return <Code2 className="text-blue-400" />;
        case "database": return <Database className="text-blue-400" />;
        case "docker": return <Box className="text-blue-500" />;
        case "linux": return <Monitor className="text-zinc-400" />;
        case "flutter": return <Smartphone className="text-cyan-500" />;
        default: return <Code2 />;
    }
};

export default Skills;
