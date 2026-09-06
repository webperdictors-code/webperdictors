"use client";

import { Layers, Wand2, BrainCircuit, Gauge, LucideIcon } from "lucide-react";
import { services, Service } from "@/lib/data";
import { Stagger, StaggerItem } from "@/app/components/animations/FadeIn";
import TiltCard from "@/app/components/animations/TiltCard";

const icons: Record<Service["icon"], LucideIcon> = {
  layers: Layers,
  wand: Wand2,
  brain: BrainCircuit,
  gauge: Gauge,
};

const accentMap: Record<string, string> = {
  violet: "from-glow-violet/30 text-glow-violet",
  cyan: "from-glow-cyan/30 text-glow-cyan",
  pink: "from-glow-pink/30 text-glow-pink",
  amber: "from-glow-amber/30 text-glow-amber",
};

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-glow-cyan">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to go from idea to launched product
          </h2>
          <p className="mt-4 text-white/60">
            One team, four specialties — no handoffs between design,
            engineering, and AI.
          </p>
        </div>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            const accent = accentMap[service.accent];
            return (
              <StaggerItem key={service.id}>
                <TiltCard
                  className="h-full p-8"
                  glowColor="rgba(139,92,246,0.25)"
                  maxTilt={5}
                >
                  <div
                    className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} to-transparent`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-white/70"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-glow-cyan shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
