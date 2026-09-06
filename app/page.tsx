import Header from "@/app/components/sections/Header";
import Hero from "@/app/components/sections/Hero";
import TechMarquee from "@/app/components/sections/TechMarquee";
import Services from "@/app/components/sections/Services";
import Portfolio from "@/app/components/sections/Portfolio";
import Process from "@/app/components/sections/Process";
import Pricing from "@/app/components/sections/Pricing";
import Testimonials from "@/app/components/sections/Testimonials";
import CTABanner from "@/app/components/sections/CTABanner";
import Footer from "@/app/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
