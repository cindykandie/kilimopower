"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, MessageCircle } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const faqs = [
  {
    q: "Do you deliver nationwide?",
    a: "Yes — we deliver to all 47 counties in Kenya. Whether you're in Nairobi, Turkana, or Kwale, we'll get your order to you. Delivery takes 1–5 business days depending on your location.",
  },
  {
    q: "Can I pay after delivery?",
    a: "Absolutely. This is one of our most loved policies. We deliver first, you inspect and test the product, and only pay when you're fully satisfied. We accept M-Pesa, cash on delivery, and bank transfer.",
  },
  {
    q: "How long is the warranty?",
    a: "All products come with a minimum 1-year warranty. Solar pumps and incubators often carry 2-year warranties. Our team provides full technical support for any warranty claims.",
  },
  {
    q: "Do you offer installation services?",
    a: "Yes! We offer professional installation for solar pumps, irrigation systems, backup kits, and incubators. Installation is available in most counties at an additional fee. Chat with us to get a quote for your area.",
  },
  {
    q: "Can I order directly via WhatsApp?",
    a: "Yes, and it's the fastest way. Just send us a message, tell us what you need or describe your farm challenge, and our team will guide you to the right product and process your order — all over WhatsApp.",
  },
  {
    q: "Do you support SACCO or group orders?",
    a: "Yes! We have special pricing and bulk order programmes for SACCOs, farmer groups, NGOs, and distributors. If you're buying for 5 or more farmers, contact us for a group discount.",
  },
  {
    q: "Can I get a custom recommendation for my farm?",
    a: "Definitely. Just tell us your farm size, water source, crop type, and current challenges — our agricultural consultants will recommend the right products for free, no commitment needed.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight" style={{ fontFamily: "var(--font-satoshi)" }}>
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="space-y-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-[#0B3D2E]/25 shadow-[0_4px_20px_rgba(11,61,46,0.08)]" : "border-black/[0.07]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#F7F7F5] transition-colors"
                >
                  <span className={`font-semibold text-base transition-colors ${isOpen ? "text-[#0B3D2E]" : "text-[#0F172A]"}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-xl transition-all ${
                      isOpen ? "bg-[#0B3D2E] text-white" : "bg-[#F7F7F5] text-[#475569]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-5 pb-5 pt-1 text-[#475569] text-sm leading-relaxed border-t border-black/[0.05]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <p className="text-[#475569] mb-4">Still have a question?</p>
          <a
            href="https://wa.me/254700000000?text=Hi, I have a question about Kilimo Power products"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold rounded-2xl px-7 py-3.5 transition-all btn-lift shadow-[0_4px_16px_rgba(34,197,94,0.3)]"
          >
            <MessageCircle className="w-4 h-4" />
            Ask us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
