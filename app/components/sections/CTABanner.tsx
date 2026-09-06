"use client";

import { ArrowRight } from "lucide-react";
import FadeIn from "@/app/components/animations/FadeIn";
import MagneticButton from "@/app/components/animations/MagneticButton";
import { CALENDLY_URL } from "@/lib/data";

export default function CTABanner() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-glow-violet/20 via-base-950 to-glow-cyan/10 px-8 py-16 text-center shadow-glow sm:px-16">
            <div
              aria-hidden
              className="absolute inset-0 bg-aurora opacity-10 blur-3xl animate-spin-slow"
            />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your MVP could be live in 14 days.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Book a free discovery call and we&apos;ll scope your product,
                timeline, and price — no obligation, no fluff.
              </p>
              <div className="mt-10 flex justify-center">
                <MagneticButton
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-base-950 shadow-glow"
                >
                  Book a Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
