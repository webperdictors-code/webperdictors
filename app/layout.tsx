import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webperdictors — We Build & Launch Your SaaS MVP in 14 Days",
  description:
    "Webperdictors is a global web development agency building MVPs, SaaS products, and full-stack web applications for international founders. Ship in 14 days.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-base-950 font-sans">{children}</body>
    </html>
  );
}
