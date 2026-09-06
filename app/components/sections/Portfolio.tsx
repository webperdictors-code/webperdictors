"use client";

import { ArrowUpRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Stagger, StaggerItem } from "@/app/components/animations/FadeIn";
import TiltCard from "@/app/components/animations/TiltCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-glow-pink">
            Featured Work
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real products. Real founders. Real revenue.
          </h2>
          <p className="mt-4 text-white/60">
            A few of the MVPs we&apos;ve shipped from zero to launched.
          </p>
        </div>

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((project) => (
            <StaggerItem key={project.id}>
              <TiltCard className="h-full overflow-hidden" maxTilt={6}>
                <div
                  className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
                >
                  <div className="absolute inset-0 bg-grid-fade bg-grid opacity-30" />
                  <div className="relative flex items-center gap-2 rounded-full border border-white/15 bg-base-950/70 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                    <TrendingUp className="h-3.5 w-3.5 text-glow-cyan" />
                    {project.metric}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-2 text-sm text-white/55">{project.tagline}</p>
                  <p className="mt-1 text-xs text-white/40">{project.metricLabel}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
