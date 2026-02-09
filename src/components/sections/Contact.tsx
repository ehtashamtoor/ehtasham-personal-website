"use client";

import { useState, type FormEvent } from "react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { FadeIn } from "@/components/motion/FadeIn";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const inputClasses = cn(
  "w-full px-4 py-3 rounded-xl glass text-[var(--text-primary)] placeholder:text-[var(--text-muted)]",
  "focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50",
  "transition-all duration-200"
);

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mjvqgzdn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn direction="up">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={inputClasses}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className={inputClasses}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className={inputClasses}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className={cn(inputClasses, "resize-none")}
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === "sending"}
              >
                {status === "sending" && <Loader2 size={18} className="animate-spin" />}
                {status === "sent" && <CheckCircle size={18} />}
                {status === "idle" && <Send size={18} />}
                {status === "error" && <Send size={18} />}
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent!"
                    : status === "error"
                      ? "Try Again"
                      : "Send Message"}
              </Button>
            </form>
          </FadeIn>

          {/* Contact info */}
          <FadeIn direction="up" delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 shrink-0">
                    <Mail size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)]">
                      Email
                    </h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-[var(--text-secondary)] hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 shrink-0">
                    <Phone size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)]">
                      Phone / WhatsApp
                    </h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm text-[var(--text-secondary)] hover:text-primary-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 shrink-0">
                    <MapPin size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)]">
                      Location
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[var(--border-subtle)]">
                <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-4">
                  Connect With Me
                </h4>
                <SocialLinks links={socialLinks} />
              </div>

              <div className="glass rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {personalInfo.availability}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
