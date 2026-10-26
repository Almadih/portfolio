"use client";

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
    <section id="contact" className="py-20 md:py-28 px-6 border-t border-black/[0.08] bg-[#f5f5f7]/40">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Direct Inquiries */}
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#0071e3] mb-2 block">
              Direct Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">
              Let&apos;s build together.
            </h2>
            <p className="text-base md:text-lg text-[#6e6e73] leading-relaxed mb-10 max-w-lg">
              Available for senior engineering roles, architectural consulting, and high-impact distributed systems projects.
            </p>

            <div className="space-y-4">
              <ContactCard
                icon={<Mail size={20} className="text-[#0071e3]" />}
                label="Direct Email"
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactCard
                icon={<Phone size={20} className="text-[#0071e3]" />}
                label="Phone"
                value={contactInfo.number}
                href={`tel:${contactInfo.number}`}
              />
              <ContactCard
                icon={<MapPin size={20} className="text-[#0071e3]" />}
                label="Location"
                value={contactInfo.location || "Remote"}
              />
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl border border-black/[0.08] bg-white p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">Send a Message</h3>
            <p className="text-xs text-[#6e6e73] mb-8">
              Typically responding within 24 hours.
            </p>

            <form id="contact-form" className="space-y-5" action={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-[#1d1d1f]">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    disabled={isPending}
                    placeholder="John Doe"
                    className="w-full bg-[#fbfbfd] border border-black/[0.1] rounded-2xl px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/10 transition-all disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-[#1d1d1f]">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    disabled={isPending}
                    placeholder="john@example.com"
                    className="w-full bg-[#fbfbfd] border border-black/[0.1] rounded-2xl px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/10 transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-semibold text-[#1d1d1f]">
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  disabled={isPending}
                  rows={4}
                  placeholder="Tell me about your system requirements, timeline, and goals..."
                  className="w-full bg-[#fbfbfd] border border-black/[0.1] rounded-2xl px-4 py-3 text-sm text-[#1d1d1f] focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/10 transition-all resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#0071e3] hover:bg-[#0077ed] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-full transition-all duration-150 active:scale-[0.97] flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                {isPending ? (
                  <>
                    <span>Sending...</span>
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-black/[0.06] bg-white hover:border-black/20 hover:shadow-sm transition-all group active:scale-[0.98]">
      <div className="w-11 h-11 rounded-xl bg-[#0071e3]/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-0.5">
          {label}
        </p>
        <p className="text-sm font-bold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default Contact;
