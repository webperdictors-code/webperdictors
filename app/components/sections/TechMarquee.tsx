import { techStack } from "@/lib/data";
import Marquee from "@/app/components/animations/Marquee";
import FadeIn from "@/app/components/animations/FadeIn";

export default function TechMarquee() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-10">
      <FadeIn className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/40">
          Powering products built on
        </p>
      </FadeIn>
      <Marquee>
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/60"
          >
            {tech.name}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
