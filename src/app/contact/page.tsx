"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  MessageSquare,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@genzowais.com", href: "mailto:hello@genzowais.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Location", value: "Remote / Worldwide", href: "#" },
  { icon: Clock, label: "Response", value: "Within 24 hours", href: "#" },
];

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "API Development",
  "Consulting",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", service: "", budget: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen bg-[#050505] noise-overlay">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#ff6b35] blur-blob opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#ffd93d] blur-blob opacity-15" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35]">
              Contact
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Let&apos;s Talk
            </h1>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#0a0a0a] p-5 transition-all hover:border-[#ff6b35]/30 card-hover"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6b35]/10">
                      <info.icon className="h-5 w-5 text-[#ff6b35]" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase tracking-wider">{info.label}</p>
                      <p className="font-medium text-white group-hover:text-[#ff6b35] transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-6"
              >
                <h3 className="font-semibold text-white mb-4">Connect with me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 hover:text-[#ff6b35] hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="rounded-2xl border border-[#ff6b35]/20 bg-gradient-to-br from-[#ff6b35]/10 via-[#0a0a0a] to-[#ffd93d]/10 p-6"
              >
                <MessageSquare className="h-8 w-8 text-[#ff6b35] mb-4" />
                <h3 className="font-semibold text-white mb-2">Free Consultation</h3>
                <p className="text-sm text-white/50 mb-4">
                  Book a free 30-minute call to discuss your project requirements.
                </p>
                <button className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/20">
                  Schedule a Call
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 lg:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="mx-auto h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-white/50 mb-8">
                      Thank you for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-4 rounded-xl bg-[#ff6b35] text-sm font-semibold text-[#050505] transition-all hover:bg-[#ff8555]"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:outline-none focus:ring-1 focus:ring-[#ff6b35]/50 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:outline-none focus:ring-1 focus:ring-[#ff6b35]/50 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-white/60 mb-2">
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white focus:border-[#ff6b35]/50 focus:outline-none focus:ring-1 focus:ring-[#ff6b35]/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0a0a0a]">
                            Select a service
                          </option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-[#0a0a0a]">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-white/60 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white focus:border-[#ff6b35]/50 focus:outline-none focus:ring-1 focus:ring-[#ff6b35]/50 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-[#0a0a0a]">Select budget</option>
                          <option value="less-5k" className="bg-[#0a0a0a]">Less than $5,000</option>
                          <option value="5k-10k" className="bg-[#0a0a0a]">$5,000 - $10,000</option>
                          <option value="10k-25k" className="bg-[#0a0a0a]">$10,000 - $25,000</option>
                          <option value="25k-50k" className="bg-[#0a0a0a]">$25,000 - $50,000</option>
                          <option value="50k-plus" className="bg-[#0a0a0a]">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:outline-none focus:ring-1 focus:ring-[#ff6b35]/50 transition-all resize-none"
                        placeholder="Tell me about your project, goals, and timeline..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-[#ff6b35] px-8 py-4 text-base font-semibold text-[#050505] transition-all hover:bg-[#ff8555] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
