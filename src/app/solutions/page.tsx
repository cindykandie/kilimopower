import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import MobileCTABar from "@/components/shared/MobileCTABar"
import SolutionsHero from "@/components/sections/solutions/SolutionsHero"
import ProblemPathways from "@/components/sections/solutions/ProblemPathways"
import FeaturedSolutions from "@/components/sections/solutions/FeaturedSolutions"
import ROISavingsSection from "@/components/sections/solutions/ROISavingsSection"
import HowItWorks from "@/components/sections/solutions/HowItWorks"
import SuccessStories from "@/components/sections/solutions/SuccessStories"
import WhatsAppCTA from "@/components/sections/WhatsAppCTA"
import SolutionsFAQ from "@/components/sections/solutions/SolutionsFAQ"

export const metadata: Metadata = {
  title: "Farm Solutions — Kilimo Power | Irrigation, Backup Power & Machinery",
  description:
    "Solar irrigation, backup power, farm machinery and poultry solutions for Kenyan farmers. Save up to KES 8,000/month. Delivered to all 47 counties. Pay after delivery.",
  openGraph: {
    title: "Farm Solutions — Kilimo Power",
    description:
      "We solve your farm's biggest challenges — irrigation, power, labour, and poultry. Real outcomes for real Kenyan farmers.",
    type: "website",
  },
}

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <SolutionsHero />
        <ProblemPathways />
        <FeaturedSolutions />
        <ROISavingsSection />
        <HowItWorks />
        <SuccessStories />
        <WhatsAppCTA />
        <SolutionsFAQ />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
