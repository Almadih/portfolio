"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Github, Mail, Globe, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
    const { greeting, socialMediaLinks } = portfolioData;
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Spotlight effect */}
                <div
                    className="pointer-events-none absolute -inset-[100px] opacity-50 transition duration-300"
                    style={{
                        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.15), transparent 80%)`,
                    }}
                />

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-secondary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[120px]"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary font-medium mb-4 tracking-widest uppercase"
                >
                    Welcome to my portfolio
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold mb-2"
                >
                    {greeting.title}
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl md:text-3xl font-medium text-primary mb-6"
                >
                    Full-Stack Software Engineer
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed"
                >
                    {greeting.subTitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Link
                        href={greeting.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/80 transition-all transform hover:scale-105"
                    >
                        Download CV
                    </Link>
                    <div className="flex items-center gap-4 ml-4">
                        <SocialLink href={socialMediaLinks.github} icon={<Github size={20} />} />
                        <SocialLink href={socialMediaLinks.linkedin} icon={<Linkedin size={20} />} />
                        <SocialLink href={socialMediaLinks.website} icon={<Globe size={20} />} />
                        <SocialLink href={`mailto:${socialMediaLinks.gmail}`} icon={<Mail size={20} />} />
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
    >
        {icon}
    </a>
);

export default Hero;
