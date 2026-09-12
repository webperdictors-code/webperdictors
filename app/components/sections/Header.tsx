"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navLinks, CALENDLY_URL } from "@/lib/data";
import MagneticButton from "@/app/components/animations/MagneticButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-base-950/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="relative block h-10 w-10 overflow-hidden rounded-xl shadow-glow">
            <Image
              src="/logo-badge.png"
              alt="Webperdictors"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white leading-none">
              Webperdictors
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-white/50 uppercase mt-0.5">
              Digital Product Studio
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-base-950 shadow-glow transition-transform hover:scale-[1.03]"
          >
            Book a Call
          </MagneticButton>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-white/10 bg-base-950/95 px-6 py-6 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-base-950"
            >
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

