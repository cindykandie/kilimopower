import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import MobileCTABar from "@/components/shared/MobileCTABar"
import InstallationsHero from "@/components/sections/installations/InstallationsHero"
import KenyaMapSection from "@/components/sections/installations/KenyaMapSection"
import InstallationGallery from "@/components/sections/installations/InstallationGallery"
import CaseStudies from "@/components/sections/installations/CaseStudies"
import VideoSection from "@/components/sections/installations/VideoSection"
import InstallationTestimonials from "@/components/sections/installations/InstallationTestimonials"
import TrustMetrics from "@/components/sections/installations/TrustMetrics"
import InstallationsCTA from "@/components/sections/installations/InstallationsCTA"

export const metadata: Metadata = {
  title: "Installations — Kilimo Power | Real Farm Systems Across Kenya",
  description:
    "1,200+ systems installed across all 47 counties in Kenya. See real solar pumps, irrigation systems, and backup power installations with verified customer savings.",
  openGraph: {
    title: "Real Installations — Kilimo Power",
    description:
      "From Nakuru to Kisumu to Meru — see real Kilimo Power installations and the savings they deliver for Kenyan farmers.",
    type: "website",
  },
}

export default function InstallationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <InstallationsHero />
        <KenyaMapSection />
        <InstallationGallery />
        <CaseStudies />
        <VideoSection />
        <InstallationTestimonials />
        <TrustMetrics />
        <InstallationsCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
