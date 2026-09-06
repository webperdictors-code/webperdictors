"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/lib/data";
import FadeIn from "@/app/components/animations/FadeIn";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.4"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-glow-amber">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From kickoff call to production launch
          </h2>
          <p className="mt-4 text-white/60">
            A transparent, fixed-timeline process — no scope creep, no
            guessing games.
          </p>
        </div>

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-glow-violet via-glow-cyan to-glow-pink shadow-glow sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-14">
            {processSteps.map((step, i) => (
              <FadeIn
                key={step.step}
                delay={i * 0.05}
                className={`relative flex items-start gap-6 sm:w-1/2 ${
                  i % 2 === 0
                    ? "sm:pr-12 sm:text-right sm:ml-0"
                    : "sm:pl-12 sm:ml-auto sm:flex-row-reverse sm:text-left"
                }`}
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-base-950 text-sm font-bold text-white shadow-glow">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
