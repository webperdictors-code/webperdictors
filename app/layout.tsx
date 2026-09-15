import type { Metadata } from "next";
import "./globals.css";
import { faqs } from "@/lib/data";

const siteUrl = "https://webperdictors.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Webperdictors — Build & Launch Your SaaS MVP in 14 Days",
    template: "%s | Webperdictors",
  },
  description:
    "Webperdictors is a digital product studio building production-ready SaaS MVPs, web applications, and AI integrations for founders across the USA, UK, France & worldwide. Ship in 14 days.",
  keywords: [
    "SaaS MVP development",
    "SaaS development agency USA",
    "MVP builders UK",
    "Agence développement web France",
    "Bubble no-code agency",
    "AI integration agency",
    "Next.js MVP development",
    "Full-stack web developers",
    "Sialkot web development agency",
    "hire SaaS developer",
    "Webperdictors",
  ],
  authors: [{ name: "Webperdictors", url: siteUrl }],
  creator: "Webperdictors",
  publisher: "Webperdictors",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "en-GB": siteUrl,
      "fr-FR": siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Webperdictors",
    title: "Webperdictors — Build & Launch Your SaaS MVP in 14 Days",
    description:
      "Digital product studio building production-ready SaaS MVPs, web applications, and AI integrations for founders in the US, UK, France & worldwide.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webperdictors — SaaS MVP Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webperdictors — Build & Launch Your SaaS MVP in 14 Days",
    description:
      "Digital product studio building production-ready SaaS MVPs, web applications, and AI integrations for founders in the US, UK, France & worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${siteUrl}/#organization`,
        name: "Webperdictors",
        alternateName: ["Web Perdictors", "Webperdictors Studio"],
        url: siteUrl,
        logo: `${siteUrl}/logo-badge.png`,
        image: `${siteUrl}/og-image.png`,
        description:
          "Webperdictors is a digital product studio headquartered in Sialkot, Pakistan, building production-ready SaaS MVPs, web applications, and AI integrations for founders in the United States, United Kingdom, France, and worldwide.",
        email: "webperdictors@gmail.com",
        priceRange: "$400 - $1000+",
        currenciesAccepted: "USD, EUR, GBP",
        paymentAccepted: "Stripe, Credit Card, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sialkot",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.4945,
          longitude: 74.5229,
        },
        areaServed: [
          { "@type": "Country", name: "United States", identifier: "US" },
          { "@type": "Country", name: "United Kingdom", identifier: "GB" },
          { "@type": "Country", name: "France", identifier: "FR" },
          { "@type": "Country", name: "Pakistan", identifier: "PK" },
          { "@type": "AdministrativeArea", name: "Worldwide" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Webperdictors Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full-Stack SaaS MVP Development",
                description:
                  "Design, build, and deploy complete SaaS applications with authentication, billing, database architecture, and CI/CD.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Rapid Design-to-Code Prototyping",
                description:
                  "Figma-to-production handoff with Framer Motion animations and custom design systems.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI & OpenAI Integration",
                description:
                  "Embed LLM features, copilots, RAG vector pipelines, and agentic workflows into production web apps.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bubble No-Code Development",
                description:
                  "Rapid MVP and marketplace application development on Bubble.io.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Scale & Architecture Optimization",
                description:
                  "Performance audits, zero-downtime migrations, and infrastructure cost optimization.",
              },
            },
          ],
        },
        knowsAbout: [
          "SaaS Development",
          "Next.js",
          "React",
          "Bubble.io",
          "OpenAI Integration",
          "Supabase",
          "Stripe",
          "MVP Prototyping",
          "Full-Stack Development",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Webperdictors",
        description: "We Build & Launch Your SaaS MVP in 14 Days",
      },
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-base-950 font-sans">{children}</body>
    </html>
  );
}
