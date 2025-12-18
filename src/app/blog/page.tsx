"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Clock, Calendar, Search, X, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const categories = ["All", "Development", "Tutorial", "Trends", "Design", "Career"];

const posts = [
  {
    id: 1,
    title: "Building Scalable React Applications in 2024",
    excerpt: "Discover the latest patterns and best practices for building large-scale React apps that perform well under heavy load.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    date: "Dec 15, 2024",
    readTime: "8 min",
    category: "Development",
    tags: ["React", "Performance", "Architecture"],
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Web Development: 2025 Edition",
    excerpt: "Exploring cutting-edge trends and technologies that will define the next era of web development.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop",
    date: "Dec 10, 2024",
    readTime: "12 min",
    category: "Trends",
    tags: ["Web Dev", "AI", "Future"],
    featured: true,
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Patterns",
    excerpt: "A deep dive into advanced TypeScript patterns including generics, utility types, and conditional types.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    date: "Dec 5, 2024",
    readTime: "15 min",
    category: "Tutorial",
    tags: ["TypeScript", "JavaScript"],
    featured: true,
  },
  {
    id: 4,
    title: "Creating Beautiful UI with Tailwind CSS",
    excerpt: "Learn how to craft stunning, responsive interfaces using Tailwind's utility-first approach.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    date: "Nov 28, 2024",
    readTime: "10 min",
    category: "Design",
    tags: ["CSS", "Tailwind", "UI/UX"],
    featured: false,
  },
  {
    id: 5,
    title: "Getting Started with Next.js 15",
    excerpt: "Everything you need to know about the latest Next.js release and its powerful new features.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=600&fit=crop",
    date: "Nov 20, 2024",
    readTime: "6 min",
    category: "Tutorial",
    tags: ["Next.js", "React"],
    featured: false,
  },
  {
    id: 6,
    title: "From Junior to Senior Developer",
    excerpt: "Practical advice and strategies for advancing your career in software development.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    date: "Nov 15, 2024",
    readTime: "14 min",
    category: "Career",
    tags: ["Career", "Growth"],
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter((p) => p.featured);
  const regularPosts = filteredPosts.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#050505] noise-overlay">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#ffd93d] blur-blob opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b35]">
              Blog
            </span>
            <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Insights & Thoughts
            </h1>
            <p className="mt-6 text-lg text-white/50 leading-relaxed">
              Deep dives into web development, design patterns, and career growth in tech.
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
                placeholder="Search articles..."
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

          {featuredPosts.length > 0 && activeCategory === "All" && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16"
            >
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
                Featured Articles
              </h2>
              <div className="grid gap-6 lg:grid-cols-3">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`group relative rounded-2xl overflow-hidden border border-white/5 bg-[#0a0a0a] card-hover ${
                      index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                    }`}
                  >
                    <div className={`${index === 0 ? "aspect-[16/9]" : "aspect-video"} overflow-hidden`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
                    </div>

                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#ff6b35] text-[#050505]">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className={`font-bold text-white group-hover:text-[#ff6b35] transition-colors ${
                        index === 0 ? "text-3xl" : "text-xl"
                      }`}>
                        {post.title}
                      </h3>

                      {index === 0 && (
                        <p className="mt-3 text-white/50 line-clamp-2">{post.excerpt}</p>
                      )}

                      <div className="mt-4 flex items-center gap-2 text-xs text-white/30">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            {activeCategory === "All" && !searchQuery && (
              <h2 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-6">
                All Articles
              </h2>
            )}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(activeCategory === "All" && !searchQuery ? regularPosts : filteredPosts).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden card-hover"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/40">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#ff6b35] transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-3 text-sm text-white/50 line-clamp-2">{post.excerpt}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-white/30">
                          <Tag className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-white/30">{post.date}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-[#ff6b35] opacity-0 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 text-center py-20"
            >
              <Search className="mx-auto h-12 w-12 text-white/10" />
              <h3 className="mt-6 text-xl font-semibold text-white">No articles found</h3>
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

      <Footer />
    </main>
  );
}
