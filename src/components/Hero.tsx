"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Github, Mail, Globe, Linkedin, ArrowDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Hero = () => {
    const { greeting, socialMediaLinks } = portfolioData;
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        let rafId: number;
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                if (heroRef.current) {
                    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
                    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
                }
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 overflow-hidden"
            style={
                {
                    "--mouse-x": "50%",
                    "--mouse-y": "40%",
                } as React.CSSProperties
            }
        >
            {/* Background Effects */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Hardware-accelerated Spotlight effect via CSS custom properties */}
                <div
                    className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-300"
                    style={{
                        background:
                            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.18), transparent 80%)",
                    }}
                />

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 80, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.25, 1],
                        x: [0, -80, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, 40, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-accent/20 rounded-full blur-[120px] pointer-events-none"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl z-10"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-widest text-primary mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for senior roles & consulting
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl font-bold mb-3 tracking-tight font-[family-name:var(--font-outfit)]"
                >
                    {greeting.title}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl font-semibold text-gradient mb-6"
                >
                    Senior Backend & Full-Stack Engineer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-lg md:text-xl text-foreground/75 mb-10 leading-relaxed max-w-3xl mx-auto font-normal"
                >
                    {greeting.subTitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center items-center gap-4"
                >
                    <Link
                        href={greeting.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Download Resume
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3.5 rounded-full glass text-foreground font-medium hover:bg-white/10 transition-all transform hover:scale-105"
                    >
                        Get in Touch
                    </Link>

                    <div className="flex items-center gap-3 sm:ml-4">
                        <SocialLink
                            href={socialMediaLinks.github}
                            icon={<Github size={20} />}
                            label="Mohamed Almadih GitHub Profile"
                        />
                        <SocialLink
                            href={socialMediaLinks.linkedin}
                            icon={<Linkedin size={20} />}
                            label="Mohamed Almadih LinkedIn Profile"
                        />
                        <SocialLink
                            href={socialMediaLinks.website}
                            icon={<Globe size={20} />}
                            label="Mohamed Almadih Website"
                        />
                        <SocialLink
                            href={`mailto:${socialMediaLinks.gmail}`}
                            icon={<Mail size={20} />}
                            label="Email Mohamed Almadih"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-16 text-foreground/40 hover:text-foreground/80 transition-colors"
            >
                <Link href="#skills" aria-label="Scroll down to Skills section" className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest">Explore</span>
                    <ArrowDown size={18} className="animate-bounce" />
                </Link>
            </motion.div>
        </section>
    );
};

const SocialLink = ({
    href,
    icon,
    label,
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-colors"
    >
        {icon}
    </a>
);

export default Hero;
