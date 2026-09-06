import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div>
            <a href="#" className="flex items-center gap-2 font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-glow-violet to-glow-cyan">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <span className="text-lg tracking-tight">Webperdictors</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Building MVPs, SaaS products, and full-stack applications for
              founders worldwide.
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
          <p>Built for founders, everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
