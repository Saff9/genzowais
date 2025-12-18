"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, Search, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = ["All", "Web App", "Mobile", "AI/ML", "E-Commerce", "SaaS"];

const projects = [
  {
    id: 1,
    title: "Nexus Analytics",
    description: "Enterprise analytics dashboard with real-time data visualization, AI-powered predictions, and custom reporting tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "Python", "TensorFlow", "PostgreSQL"],
    category: "AI/ML",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    year: "2024",
  },
  {
    id: 2,
    title: "Commerce Flow",
    description: "Headless e-commerce platform with multi-vendor support, real-time inventory, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "E-Commerce",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    year: "2024",
  },
  {
    id: 3,
    title: "Pulse Social",
    description: "Next-generation social platform with real-time messaging, stories, and AI content moderation.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Firebase", "Redux"],
    category: "Mobile",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
    year: "2023",
  },
  {
    id: 4,
    title: "TaskFlow Pro",
    description: "Enterprise project management with Kanban boards, time tracking, resource allocation, and team analytics.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Laravel", "MySQL", "Redis"],
    category: "SaaS",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    year: "2023",
  },
  {
    id: 5,
    title: "FitTrack AI",
    description: "Intelligent fitness app with personalized workout plans, nutrition tracking, and progress analytics.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    tags: ["Flutter", "Dart", "Firebase", "ML Kit"],
    category: "Mobile",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    year: "2023",
  },
  {
    id: 6,
    title: "PropertyHub",
    description: "Real estate platform with virtual tours, mortgage calculator, and AI-powered property recommendations.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Mapbox"],
    category: "Web App",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    year: "2023",
  },
  {
    id: 7,
    title: "ContentGenius",
    description: "AI-powered content generation platform for marketing copy, blog posts, and social media content.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "Vercel AI", "Tailwind"],
    category: "AI/ML",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    year: "2024",
  },
  {
    id: 8,
    title: "CryptoTrade Bot",
    description: "Automated trading bot with backtesting, strategy builder, portfolio management, and real-time alerts.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    tags: ["Python", "FastAPI", "PostgreSQL", "WebSocket"],
    category: "Web App",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
    year: "2023",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#050505] noise-overlay">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#ff6b35] blur-blob opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35]">
              Portfolio
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              My Projects
            </h1>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              A curated collection of my work spanning web applications, mobile apps, and AI-powered solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-12 flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between"
          >
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeCategory === category
                      ? "bg-[#ff6b35] text-[#050505]"
                      : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-72 rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#ff6b35]/50 focus:outline-none focus:ring-1 focus:ring-[#ff6b35]/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] card-hover"
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-medium bg-[#ff6b35] text-[#050505]">
                    Featured
                  </div>
                )}

                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="text-xs text-white/30 font-mono">{project.year}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-[#ff6b35] transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-white/50 text-sm line-clamp-2 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-white/40">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6b35] px-4 py-2.5 text-sm font-semibold text-[#050505] transition-all hover:bg-[#ff8555]"
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 text-center py-20"
            >
              <Search className="mx-auto h-12 w-12 text-white/10" />
              <h3 className="mt-6 text-xl font-semibold text-white">No projects found</h3>
              <p className="mt-2 text-white/50">Try adjusting your search or filter</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-6 px-6 py-3 rounded-xl bg-[#ff6b35] text-sm font-medium text-[#050505] transition-all hover:bg-[#ff8555]"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
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
              Interested in working together?
            </h2>
            <p className="mt-4 text-white/50">
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#ff6b35] text-base font-semibold text-[#050505] transition-all hover:bg-[#ff8555] hover:scale-105"
            >
              Get in Touch
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
