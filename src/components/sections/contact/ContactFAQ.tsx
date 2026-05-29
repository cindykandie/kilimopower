"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, MessageCircle } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const PHONE = "+254 707 768 6192"

const faqs = [
  { q: "Do you deliver nationwide?", a: "Yes — we deliver to all 47 counties in Kenya. Whether you're in Nairobi, Turkana, or Kwale, we'll get your order to you in 1–5 business days depending on location." },
  { q: "Can I pay after delivery?", a: "Absolutely. We deliver first. You inspect and test the product, then pay when you're fully satisfied. We accept M-Pesa, cash on delivery, and bank transfer. Zero risk to you." },
  { q: "Do you install the equipment?", a: "Yes — professional installation is available for solar pumps, irrigation systems, backup kits, and incubators across most counties. Chat with us to get a quote for your area." },
  { q: "How fast do you respond on WhatsApp?", a: "Our average response time is 30 minutes during operating hours (8am–6pm, Mon–Sat). Outside those hours we typically reply within the morning." },
  { q: "Can distributors partner with Kilimo Power?", a: "Yes! We welcome partnerships with agrovets, retailers, and rural distributors. If you're interested in distributing our products, message us with 'Distributor Inquiry' and we'll share our partnership terms." },
  { q: "Do you support SACCO or group orders?", a: "Yes! We have special pricing for SACCOs, farmer groups, NGOs, and bulk buyers. If you're buying for 5 or more farmers, contact us for group discounts and flexible payment options." },
]

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Answers Before You Ask
          </h2>
        </motion.div>

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
                  <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-xl transition-all ${isOpen ? "bg-[#0B3D2E] text-white" : "bg-[#F7F7F5] text-[#475569]"}`}>
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <p className="text-[#475569] mb-2">Still have questions?</p>
          <p className="text-[#0B3D2E] font-semibold text-sm mb-5">{PHONE}</p>
          <a
            href={`https://wa.me/254707686192?text=Hi, I have a question before ordering`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold rounded-2xl px-7 py-3.5 transition-all btn-lift shadow-[0_4px_16px_rgba(34,197,94,0.3)]"
          >
            <MessageCircle className="w-4 h-4" />
            Ask Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
