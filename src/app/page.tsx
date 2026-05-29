import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import CategoryPathways from "@/components/sections/CategoryPathways"
import FeaturedProducts from "@/components/sections/FeaturedProducts"
import TrustSection from "@/components/sections/TrustSection"
import WhatsAppCTA from "@/components/sections/WhatsAppCTA"
import MobileCTABar from "@/components/shared/MobileCTABar"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CategoryPathways />
        <FeaturedProducts />
        <TrustSection />
        <WhatsAppCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
