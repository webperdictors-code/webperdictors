"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, CheckCircle2, Users, Zap } from "lucide-react";
import MagneticButton from "@/app/components/animations/MagneticButton";
import TiltCard from "@/app/components/animations/TiltCard";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-glow"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-fade bg-grid opacity-40"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
          >
            <Users className="h-3.5 w-3.5 text-glow-cyan" />
            Trusted by 20+ Global Founders
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            We Build &amp; Launch Your{" "}
            <span className="text-gradient">SaaS MVP</span> in 14 Days
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-white/60"
          >
            Webperdictors partners with international founders and solo
            builders to turn ideas into production-ready SaaS products —
            without agency bloat, timezone friction, or six-month timelines.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <MagneticButton
              href="#contact"
              className="group rounded-full bg-gradient-to-r from-glow-violet to-glow-cyan px-7 py-3.5 text-sm font-semibold text-white shadow-glow"
            >
              Schedule Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="#portfolio"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm hover:bg-white/[0.08]"
            >
              <PlayCircle className="h-4 w-4" />
              Explore Case Studies
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-glow-cyan" /> Fixed-scope
              14-day sprints
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-glow-cyan" /> Async-first,
              global timezones
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative"
        >
          <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-aurora opacity-20 blur-3xl animate-spin-slow" />

          <TiltCard className="mx-auto max-w-md p-2 shadow-glow" maxTilt={8}>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs text-white/40">app.yourstartup.com</span>
              </div>
              <div className="space-y-3 p-5">
                <div className="h-3 w-2/3 rounded-full bg-white/10" />
                <div className="h-3 w-1/2 rounded-full bg-white/10" />
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-glow-violet/40 to-transparent" />
                  <div className="h-16 rounded-lg bg-gradient-to-br from-glow-cyan/40 to-transparent" />
                  <div className="h-16 rounded-lg bg-gradient-to-br from-glow-pink/40 to-transparent" />
                </div>
                <div className="h-24 rounded-lg border border-white/10 bg-white/[0.03]" />
              </div>
            </div>
          </TiltCard>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 top-10 hidden items-center gap-2 rounded-xl border border-white/10 bg-base-950/90 px-4 py-2.5 shadow-glow backdrop-blur-md sm:flex"
          >
            <Zap className="h-4 w-4 text-glow-amber" />
            <span className="text-xs font-medium text-white">Deployed in 14 days</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-6 bottom-8 hidden items-center gap-2 rounded-xl border border-white/10 bg-base-950/90 px-4 py-2.5 shadow-glow-cyan backdrop-blur-md sm:flex"
          >
            <CheckCircle2 className="h-4 w-4 text-glow-cyan" />
            <span className="text-xs font-medium text-white">99.9% uptime</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
