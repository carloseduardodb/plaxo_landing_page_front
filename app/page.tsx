import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProductsSection } from "@/components/products-section"
import { UpcomingSection } from "@/components/upcoming-section"
import { FounderSection } from "@/components/founder-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <ProductsSection />
      <UpcomingSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
