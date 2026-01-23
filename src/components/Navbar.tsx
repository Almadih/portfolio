"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/lib/data";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <div className="glass px-8 py-3 rounded-full flex items-center gap-8">
                <Link href="/" className="text-xl font-bold text-gradient">
                    {portfolioData.greeting.username}
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#experience" className="hover:text-primary transition-colors">Experience</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
