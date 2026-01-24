"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions/contact";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
    const { contactInfo } = portfolioData;
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsPending(true);
        const result = await sendEmail(formData);
        setIsPending(false);

        if (result.error) {
            toast.error(result.error);
        } else {
            toast.success("Message sent successfully!");
            (document.getElementById("contact-form") as HTMLFormElement).reset();
        }
    }

    return (
        <section id="contact" className="py-24 px-6 bg-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{contactInfo.title}</h2>
                        <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
                            {contactInfo.subtitle}
                        </p>

                        <div className="space-y-8">
                            <ContactItem
                                icon={<Mail className="text-primary" />}
                                label="Email"
                                value={contactInfo.email}
                                href={`mailto:${contactInfo.email}`}
                            />
                            <ContactItem
                                icon={<Phone className="text-secondary" />}
                                label="Phone"
                                value={contactInfo.number}
                                href={`tel:${contactInfo.number}`}
                            />
                            <ContactItem
                                icon={<MapPin className="text-accent" />}
                                label="Location"
                                value={contactInfo.location || "Remote"}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-[2rem]"
                    >
                        <form id="contact-form" className="space-y-6" action={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/60 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        disabled={isPending}
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/60 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        disabled={isPending}
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/60 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    disabled={isPending}
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 group"
                            >
                                {isPending ? (
                                    <>
                                        Sending...
                                        <Loader2 size={18} className="animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => {
    const Content = (
        <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-foreground/40 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-lg font-bold">{value}</p>
            </div>
        </div>
    );

    if (href) {
        return <a href={href} className="block">{Content}</a>;
    }

    return Content;
};

export default Contact;
