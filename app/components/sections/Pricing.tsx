"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { pricingTiers } from "@/lib/data";
import { Stagger, StaggerItem } from "@/app/components/animations/FadeIn";
import MagneticButton from "@/app/components/animations/MagneticButton";
import clsx from "clsx";

type Billing = "onetime" | "retainer";

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("onetime");

  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-glow-violet">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Transparent packages, no hidden retainers
          </h2>
          <p className="mt-4 text-white/60">
            Pick a one-time sprint to launch fast, or a monthly retainer to
            keep shipping.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
            {(["onetime", "retainer"] as Billing[]).map((option) => (
              <button
                key={option}
                onClick={() => setBilling(option)}
                className="relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors"
              >
                {billing === option && (
                  <motion.span
                    layoutId="pricing-toggle"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-glow-violet to-glow-cyan"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span
                  className={
                    billing === option ? "text-white" : "text-white/50"
                  }
                >
                  {option === "onetime"
                    ? "One-Time MVP Sprint"
                    : "Monthly Retainer"}
                </span>
              </button>
            ))}
          </div>
        </div>

        <Stagger className="mt-14 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.id}>
              <div
                className={clsx(
                  "relative flex h-full flex-col rounded-2xl border p-8 backdrop-blur-sm transition-transform hover:-translate-y-1",
                  tier.popular
                    ? "border-glow-cyan/50 bg-gradient-to-b from-glow-violet/10 to-transparent shadow-glow"
                    : "border-white/10 bg-white/[0.02]"
                )}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-glow-violet to-glow-cyan px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-white">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-white/55">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={billing}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-3xl font-bold text-white"
                    >
                      {billing === "onetime"
                        ? tier.oneTimePrice
                        : tier.retainerPrice}
                    </motion.span>
                  </AnimatePresence>
                  {billing === "onetime" && (
                    <span className="text-sm text-white/40">/ project</span>
                  )}
                </div>

                <ul className="mt-8 flex-1 space-y-3.5">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-white/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-glow-cyan" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href="#contact"
                  className={clsx(
                    "mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition-colors",
                    tier.popular
                      ? "bg-gradient-to-r from-glow-violet to-glow-cyan text-white"
                      : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  )}
                >
                  Get Started
                </MagneticButton>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
