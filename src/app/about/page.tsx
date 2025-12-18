"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Coffee,
  MapPin,
  Mail,
  Calendar,
  Download,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 82 },
  { name: "PostgreSQL", level: 85 },
  { name: "AWS / Cloud", level: 78 },
];

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise-scale applications and mentoring junior developers.",
    tech: ["React", "Node.js", "AWS"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Built and maintained multiple client projects with focus on performance optimization.",
    tech: ["Vue.js", "Python", "Docker"],
  },
  {
    title: "Frontend Developer",
    company: "Startup Hub",
    period: "2019 - 2020",
    description: "Developed responsive web applications and contributed to the company's design system.",
    tech: ["React", "TypeScript", "GraphQL"],
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Google Cloud Professional Developer",
  "Meta Front-End Developer Certificate",
  "MongoDB Certified Developer",
];

const funFacts = [
  { icon: Coffee, value: "5000+", label: "Cups of Coffee" },
  { icon: Code2, value: "1M+", label: "Lines of Code" },
  { icon: Briefcase, value: "50+", label: "Projects Done" },
  { icon: Zap, value: "99%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] noise-overlay">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#ff6b35] blur-blob opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#ffd93d] blur-blob opacity-15" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                    alt="GenZ Owais"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>

                <div className="absolute -bottom-4 -right-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                    </span>
                    <span className="text-sm font-medium text-white">Available for work</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/50">
                  <MapPin className="h-4 w-4 text-[#ff6b35]" />
                  <span className="text-sm">Remote / Worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <Mail className="h-4 w-4 text-[#ff6b35]" />
                  <span className="text-sm">hello@genzowais.com</span>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b35] px-6 py-3.5 text-sm font-semibold text-[#050505] transition-all hover:bg-[#ff8555]"
                >
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10">
                  <Download className="h-4 w-4" />
                  Resume
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35]">
                  About Me
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  Hey, I&apos;m Owais
                </h1>
                <div className="mt-8 space-y-4 text-white/60 leading-relaxed">
                  <p>
                    I&apos;m a passionate full-stack developer with 5+ years of experience crafting
                    digital experiences that matter. I specialize in building performant, scalable
                    web applications using modern technologies.
                  </p>
                  <p>
                    My journey started at 15, tinkering with HTML and CSS. Today, I work with
                    startups and enterprises, helping them bring their visions to life through
                    clean code and thoughtful design.
                  </p>
                  <p>
                    When I&apos;m not coding, I&apos;m exploring new technologies, writing technical
                    articles, or contributing to open-source projects.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {funFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 text-center"
                  >
                    <fact.icon className="mx-auto h-6 w-6 text-[#ff6b35]" />
                    <div className="mt-3 text-2xl font-bold text-white">{fact.value}</div>
                    <div className="mt-1 text-xs text-white/40">{fact.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-6">Skills & Expertise</h2>
                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-white/70">{skill.name}</span>
                        <span className="text-xs text-white/40 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-[#ff6b35] to-[#ffd93d]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold text-white mb-10">
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-white/5 bg-[#0a0a0a] p-6 transition-all hover:border-[#ff6b35]/30 card-hover"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[#ff6b35] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-[#ff6b35]">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-sm">
                      <Calendar className="h-4 w-4" />
                      {job.period}
                    </div>
                  </div>
                  <p className="text-white/50 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mt-32 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-6 w-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">B.S. Computer Science</h3>
                    <span className="text-xs text-white/40">2019</span>
                  </div>
                  <p className="text-[#ff6b35] text-sm mb-2">University of Technology</p>
                  <p className="text-sm text-white/50">Graduated with honors. Focus on software engineering.</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-[#0a0a0a] p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-white">Full Stack Bootcamp</h3>
                    <span className="text-xs text-white/40">2018</span>
                  </div>
                  <p className="text-[#ff6b35] text-sm mb-2">Code Academy</p>
                  <p className="text-sm text-white/50">12-week intensive modern web development program.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className="h-6 w-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-bold text-white">Certifications</h2>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#0a0a0a] p-4 transition-all hover:border-[#ff6b35]/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6b35]/10">
                      <Award className="h-5 w-5 text-[#ff6b35]" />
                    </div>
                    <span className="text-white/70">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-32 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-white/50">
              I&apos;m always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ff6b35] text-base font-semibold text-[#050505] transition-all hover:bg-[#ff8555] hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
