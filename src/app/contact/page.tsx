import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import MobileCTABar from "@/components/shared/MobileCTABar"
import ContactHero from "@/components/sections/contact/ContactHero"
import ContactOptions from "@/components/sections/contact/ContactOptions"
import InquiryForm from "@/components/sections/contact/InquiryForm"
import WhatsAppPriorityCTA from "@/components/sections/contact/WhatsAppPriorityCTA"
import DeliveryCoverage from "@/components/sections/contact/DeliveryCoverage"
import ContactFAQ from "@/components/sections/contact/ContactFAQ"
import ContactFinalCTA from "@/components/sections/contact/ContactFinalCTA"

export const metadata: Metadata = {
  title: "Contact — Kilimo Power | Talk To Our Farm Power Experts",
  description:
    "Get expert help choosing the right farm irrigation, backup power, or machinery solution. Call or WhatsApp +254 707 768 6192. Pay after delivery. All 47 counties.",
  openGraph: {
    title: "Contact Kilimo Power — Farm Power Experts",
    description:
      "Speak with Kenya's farm power experts. Free consultation, pay after delivery, nationwide coverage.",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <ContactOptions />
        <InquiryForm />
        <WhatsAppPriorityCTA />
        <DeliveryCoverage />
        <ContactFAQ />
        <ContactFinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  )
}
