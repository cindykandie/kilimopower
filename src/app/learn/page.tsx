import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import MobileCTABar from "@/components/shared/MobileCTABar"
import LearnHero from "@/components/sections/learn/LearnHero"
import FeaturedArticles from "@/components/sections/learn/FeaturedArticles"
import LearningCategories from "@/components/sections/learn/LearningCategories"
import EditorialGrid from "@/components/sections/learn/EditorialGrid"
import FarmerGuides from "@/components/sections/learn/FarmerGuides"
import LearnVideoSection from "@/components/sections/learn/LearnVideoSection"
import TrendingTopics from "@/components/sections/learn/TrendingTopics"
import NewsletterCTA from "@/components/sections/learn/NewsletterCTA"

export const metadata: Metadata = {
  title: "Learn — Kilimo Power | Farm Guides, Solar Tips & Power Solutions",
  description:
    "Free farming guides, solar irrigation advice, backup power tips and practical machinery knowledge for Kenyan farmers. Trusted by 12,000+ farmers.",
  openGraph: {
    title: "Kilimo Power Learning Hub — Smarter Farming Starts Here",
    description:
      "Practical guides for Kenyan farmers on solar irrigation, backup power, farm machinery and poultry systems. Always free.",
    type: "website",
  },
}

export default function LearnPage() {
  return (
    <>
      <Navbar />
      <main>
        <LearnHero />
        <TrendingTopics />
        <FeaturedArticles />
        <LearningCategories />
        <EditorialGrid />
        <FarmerGuides />
        <LearnVideoSection />
        <NewsletterCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
