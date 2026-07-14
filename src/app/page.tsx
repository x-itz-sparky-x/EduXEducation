import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustIndicators } from "@/components/landing/trust-indicators";
import { Features } from "@/components/landing/features";
import { LearningJourney } from "@/components/landing/learning-journey";
import { Courses } from "@/components/landing/courses";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CTA } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <Features />
      <LearningJourney />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
