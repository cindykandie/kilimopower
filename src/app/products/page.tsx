import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import MobileCTABar from "@/components/shared/MobileCTABar"
import ProductsPageContent from "@/components/sections/products/ProductsPageContent"

export const metadata: Metadata = {
  title: "Products — Kilimo Power | Farm Equipment & Solar Solutions",
  description:
    "Browse solar pumps, irrigation systems, backup kits, incubators, and more. Pay after delivery. Nationwide delivery across all 47 counties in Kenya.",
  openGraph: {
    title: "Farm Products — Kilimo Power",
    description:
      "Solar irrigation, backup power, tilling & poultry equipment. Delivered to all 47 counties in Kenya. Pay after delivery.",
    type: "website",
  },
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsPageContent />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
