"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, MessageCircle } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const faqs = [
  { q: "Do you install the equipment?", a: "Yes — we offer professional installation for solar pumps, irrigation systems, backup kits, and incubators. Installation is available across most counties at an additional fee. Chat with us to get a quote for your area." },
  { q: "Can I pay after delivery?", a: "Absolutely. We deliver first. You inspect, test, and only pay when fully satisfied. We accept M-Pesa, cash on delivery, and bank transfer. Zero risk to you." },
  { q: "Which counties do you deliver to?", a: "All 47 counties in Kenya. From Nairobi to Turkana, Mombasa to Kisumu — we cover every county, with delivery in 1–5 business days." },
  { q: "How long is the warranty?", a: "All products carry a minimum 1-year warranty. Solar pumps and incubators often carry 2-year warranties. Our team provides full technical support for all warranty claims." },
  { q: "Can I order directly via WhatsApp?", a: "Yes — it's actually the fastest way. Send us a message describing your challenge, and our team will guide you to the right solution and process your order entirely over WhatsApp." },
  { q: "Do you support SACCO or group orders?", a: "Yes! We have special pricing for SACCOs, farmer groups, NGOs, and distributors. Buying for 5 or more farmers? Contact us for a group discount and flexible payment arrangements." },
]

export default function SolutionsFAQ() {
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
            Common Questions
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
          <p className="text-[#475569] mb-4">Still have a question?</p>
          <a
            href="https://wa.me/254700000000?text=Hi, I have a question about Kilimo Power solutions"
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
