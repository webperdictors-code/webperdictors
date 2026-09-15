import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div>
            <a href="#" className="flex items-center gap-3 font-semibold text-white">
              <span className="relative block h-9 w-9 overflow-hidden rounded-xl shadow-glow">
                <Image
                  src="/logo-badge.png"
                  alt="Webperdictors"
                  fill
                  sizes="36px"
                  className="object-cover"
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
            <p className="mt-4 max-w-sm text-sm text-white/50 leading-relaxed">
              Global digital product studio headquartered in Sialkot, Pakistan — building MVPs, SaaS platforms, and AI applications for founders across the USA, UK, France &amp; worldwide.
            </p>
            <p className="mt-3 text-xs text-white/40">
              Direct inquiries:{" "}
              <a
                href="mailto:webperdictors@gmail.com"
                className="text-glow-cyan hover:underline"
              >
                webperdictors@gmail.com
              </a>
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="GitHub" className="text-white/40 transition-colors hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/40 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/40 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <h4 className="text-sm font-semibold text-white">Navigate</h4>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-white/50 hover:text-white">About</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white">Blog</a></li>
                <li><a href="#contact" className="text-sm text-white/50 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Legal</h4>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-white/50 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-sm text-white/50 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Webperdictors. All rights reserved.</p>
          <p>Sialkot, Pakistan • Operating across US, UK, Europe &amp; Worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
