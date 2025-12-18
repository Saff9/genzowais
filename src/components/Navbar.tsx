"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${
              scrolled
                ? "glass-effect border border-white/5 px-6 py-3"
                : "px-2 py-2"
            }`}
          >
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-[#ff6b35]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#050505]">GO</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-white tracking-tight">
                  GenZ<span className="text-[#ff6b35]">Owais</span>
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl ${
                        isActive
                          ? "text-[#ff6b35]"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 rounded-xl bg-[#ff6b35]/10 border border-[#ff6b35]/20"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff6b35] text-sm font-semibold text-[#050505] transition-all duration-300 hover:bg-[#ff8555] hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b35]/25"
              >
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0a0a0a] border-l border-white/5"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between py-4 px-4 rounded-xl text-2xl font-semibold transition-all ${
                            isActive
                              ? "text-[#ff6b35] bg-[#ff6b35]/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.label}
                          <ArrowUpRight className={`h-5 w-5 transition-transform ${isActive ? "rotate-45" : ""}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto pt-8 border-t border-white/10"
                >
                  <p className="text-sm text-white/40 mb-4">Ready to collaborate?</p>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#ff6b35] text-base font-semibold text-[#050505] transition-all hover:bg-[#ff8555]"
                  >
                    Start a Project
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
