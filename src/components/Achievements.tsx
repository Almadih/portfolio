"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Trophy, Award, Star } from "lucide-react";

const Achievements = () => {
    const { achievementsSection } = portfolioData;

    return (
        <section id="achievements" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{achievementsSection.title}</h2>
                    <p className="text-foreground/60">{achievementsSection.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {achievementsSection.achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass p-8 rounded-[2rem] flex flex-col items-center text-center hover:border-primary/30 transition-colors"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {getIcon(index)}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                            <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                                {achievement.subtitle}
                            </p>
                            {achievement.link && (
                                <a
                                    href={achievement.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium text-sm hover:underline"
                                >
                                    View Details
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const getIcon = (index: number) => {
    switch (index) {
        case 0: return <Trophy size={32} />;
        case 1: return <Star size={32} />;
        case 2: return <Award size={32} />;
        default: return <Award size={32} />;
    }
};

export default Achievements;
