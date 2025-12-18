"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers,
  Zap,
  Globe,
  Database,
  Palette,
  Terminal,
  Cpu,
  Star,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const tools = [
  { icon: Code2, name: "React", desc: "UI Library" },
  { icon: Terminal, name: "Next.js", desc: "Framework" },
  { icon: Layers, name: "TypeScript", desc: "Language" },
  { icon: Database, name: "PostgreSQL", desc: "Database" },
  { icon: Palette, name: "Tailwind", desc: "Styling" },
  { icon: Globe, name: "Vercel", desc: "Deploy" },
  { icon: Cpu, name: "Node.js", desc: "Runtime" },
  { icon: Zap, name: "Prisma", desc: "ORM" },
];

const projects = [
  {
    title: "Nexus Dashboard",
    description: "Real-time analytics platform with AI-powered insights and predictive modeling.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "AI/ML", "Analytics"],
    year: "2024",
  },
  {
    title: "Commerce Flow",
    description: "Headless e-commerce solution with seamless checkout and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "Stripe", "Node.js"],
    year: "2024",
  },
  {
    title: "Pulse Social",
    description: "Next-gen social platform with real-time messaging and content sharing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase"],
    year: "2023",
  },
];

const testimonials = [
  {
    quote: "Owais delivered beyond our expectations. His attention to detail and technical expertise transformed our vision into reality.",
    author: "Sarah Chen",
    role: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "Working with GenZ Owais was a game-changer. He doesn't just code, he architects solutions that scale.",
    author: "Marcus Johnson",
    role: "CTO, InnovateCo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "The most professional developer I've worked with. Fast, reliable, and incredibly skilled.",
    author: "Emily Rodriguez",
    role: "Founder, DesignLab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const stats = [
  { value: "50+", label: "Projects" },
  { value: "5+", label: "Years" },
  { value: "30+", label: "Clients" },
  { value: "100%", label: "Dedication" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <main className="min-h-screen bg-[#050505] noise-overlay">
      <Navbar />

      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#ff6b35] blur-blob" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-[#ffd93d] blur-blob" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-20"
        >
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-[#ff6b35]/30 bg-[#ff6b35]/10 px-4 py-2 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff6b35] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff6b35]" />
              </span>
              <span className="text-sm font-medium text-[#ff6b35]">Available for Projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]"
            >
              <span className="text-white">I craft</span>
              <br />
              <span className="gradient-text">digital experiences</span>
              <br />
              <span className="text-white/40">that inspire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-xl text-lg text-white/50 leading-relaxed"
            >
              Full-stack engineer specializing in building exceptional digital products.
              I turn complex problems into elegant, performant solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#ff6b35] text-base font-semibold text-[#050505] transition-all hover:bg-[#ff8555] hover:scale-105 hover:shadow-xl hover:shadow-[#ff6b35]/20"
              >
                View Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-white/10 bg-white/5 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 flex items-center gap-10"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-[#ff6b35] to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ff6b35]/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35]">
              Tech Stack
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
              Tools I Use
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-center transition-all hover:border-[#ff6b35]/30 hover:bg-[#ff6b35]/5 card-hover"
              >
                <tool.icon className="mx-auto h-8 w-8 text-white/40 transition-colors group-hover:text-[#ff6b35]" />
                <h3 className="mt-4 font-semibold text-white text-sm">{tool.name}</h3>
                <p className="mt-1 text-xs text-white/40">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35]">
                Portfolio
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
                Featured Work
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-white/50 transition-colors hover:text-white"
            >
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/50 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/30 font-mono">{project.year}</span>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#ff6b35] opacity-0 translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff6b35]/5 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35]">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
              What Clients Say
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]/50 backdrop-blur-sm"
              >
                <Quote className="h-8 w-8 text-[#ff6b35]/30 mb-4" />
                <p className="text-white/70 leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="text-sm text-white/40">{item.role}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#ffd93d] text-[#ffd93d]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#ff6b35]/10 via-[#0a0a0a] to-[#ffd93d]/10 p-12 lg:p-16 text-center glow-box"
          >
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to build
                <br />
                <span className="gradient-text">something great?</span>
              </h2>
              <p className="mt-6 text-lg text-white/50 max-w-lg mx-auto">
                Let&apos;s collaborate and turn your ideas into reality. I&apos;m always excited to work on ambitious projects.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#ff6b35] text-base font-semibold text-[#050505] transition-all hover:bg-[#ff8555] hover:scale-105 hover:shadow-xl hover:shadow-[#ff6b35]/20"
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
