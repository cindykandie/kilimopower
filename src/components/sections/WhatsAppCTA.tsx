"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, ChevronRight } from "lucide-react"
import { fadeUp, stagger, slideLeft, slideRight } from "@/lib/animations"

const steps = [
  { number: "01", title: "Tell us your farm size", desc: "Acres, hectares, or just rough size — we'll work it out." },
  { number: "02", title: "Describe your needs", desc: "Water source, power issues, crop type — anything relevant." },
  { number: "03", title: "Get instant recommendations", desc: "Our experts respond with a personalised solution in minutes." },
]

export default function WhatsAppCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#091f14] via-[#0B3D2E] to-[#14532D]" />

      {/* Gold orb */}
      <motion.div
        className="absolute bottom-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.15) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text + steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-[#22C55E]" />
              <span className="text-[#22C55E] text-sm font-semibold">Free Expert Consultation</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Not Sure What{" "}
              <span className="text-[#F4B740]">Your Farm Needs?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/65 text-lg mb-10 leading-relaxed">
              Our experts will guide you for free on WhatsApp. Tell us about your farm — we&apos;ll do the rest.
            </motion.p>

            {/* Steps */}
            <motion.div variants={stagger} className="space-y-5 mb-10">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#F4B740]/20 border border-[#F4B740]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#F4B740] text-sm font-bold">{step.number}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-0.5">{step.title}</div>
                    <div className="text-white/55 text-sm leading-relaxed">{step.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="https://wa.me/254707686192?text=Hi! I'd like to get a free farm consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-8 py-4 text-lg shadow-[0_4px_32px_rgba(34,197,94,0.4)] transition-all btn-lift"
            >
              <MessageCircle className="w-5 h-5" />
              Chat With Us Now
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Right: mascot + floating cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative flex items-center justify-center h-[420px] md:h-[520px]"
          >
            {/* Glow ring */}
            <div className="absolute inset-[10%] rounded-full border border-[#22C55E]/20" />
            <div className="absolute inset-[20%] rounded-full border border-[#F4B740]/15" />

            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/femalembuzi.png"
                alt="Kilimo Power assistant"
                width={260}
                height={360}
                className="object-contain drop-shadow-2xl"
                style={{ height: "280px", width: "auto" }}
              />
            </motion.div>

            {/* Floating info card — top left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              animate={{ y: [0, -6, 0] }}
              className="absolute top-8 left-0 md:left-[-20px] bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] min-w-[160px] z-20"
            >
              <div className="text-[#0B3D2E] font-bold text-sm mb-0.5">Solar Pump Kit</div>
              <div className="text-[#22C55E] font-semibold text-xs">✓ Perfect for 2 acres</div>
              <div className="text-[#475569] text-xs mt-1">Recommended for you</div>
            </motion.div>

            {/* Floating info card — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              animate={{ y: [0, -8, 0] }}
              className="absolute bottom-10 right-0 md:right-[-10px] bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] min-w-[150px] z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-xl bg-[#22C55E]/10 flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                </div>
                <span className="text-[#0F172A] font-semibold text-xs">Expert Reply</span>
              </div>
              <div className="text-[#475569] text-xs">Avg. 3 min response</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
