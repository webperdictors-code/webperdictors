import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Stagger, StaggerItem } from "@/app/components/animations/FadeIn";
import TiltCard from "@/app/components/animations/TiltCard";

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-glow-cyan">
            Client Reviews
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Founders trust us to ship it right
          </h2>
        </div>

        <Stagger className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TiltCard className="h-full p-8" maxTilt={4}>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-glow-amber text-glow-amber"
                    />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-glow-violet to-glow-cyan text-xs font-semibold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/45">{t.title}</p>
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
