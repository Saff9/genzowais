"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ],
  resources: [
    { href: "/contact", label: "Contact" },
    { href: "/#tools", label: "Tech Stack" },
    { href: "/#testimonials", label: "Testimonials" },
  ],
};

const socialLinks = [
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#050505]">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#ff6b35] flex items-center justify-center">
                  <span className="text-xl font-bold text-[#050505]">GO</span>
                </div>
                <span className="text-2xl font-bold text-white tracking-tight">
                  GenZ<span className="text-[#ff6b35]">Owais</span>
                </span>
              </Link>
              
              <p className="text-white/50 leading-relaxed max-w-sm mb-8">
                Crafting digital experiences that matter. Building the future, one pixel at a time.
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 transition-all hover:border-[#ff6b35]/50 hover:bg-[#ff6b35]/10 hover:text-[#ff6b35]"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
                Navigation
              </h3>
              <ul className="space-y-4">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
                Resources
              </h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-white/50 text-sm mb-4">
                Got a project in mind? Drop me a line and let&apos;s make it happen.
              </p>
              <a
                href="mailto:hello@genzowais.com"
                className="group inline-flex items-center gap-2 text-[#ff6b35] font-medium transition-all hover:gap-3"
              >
                <Mail className="h-4 w-4" />
                hello@genzowais.com
              </a>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/5 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              {currentYear} GenZ Owais. Crafted with passion.
            </p>
            <div className="flex items-center gap-1 text-sm text-white/30">
              <span>Built with</span>
              <span className="text-[#ff6b35] animate-pulse">&#9829;</span>
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
