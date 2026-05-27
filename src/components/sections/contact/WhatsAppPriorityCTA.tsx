"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, Clock, Shield, ChevronRight } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const PHONE = "+254 707 768 6192"
const WA_LINK = "https://wa.me/254707768619?text=Hi! I need help choosing the right farm solution"

const messageExamples = [
  { msg: "I need a pump for 3 acres near a river 🌊", from: "farmer", delay: 0 },
  { msg: "Hi! A 1.5HP solar pump is perfect for that. KES 45,000, delivered in 2 days. Shall I book it for you?", from: "kilimo", delay: 0.6 },
  { msg: "What's the warranty on the incubator?", from: "farmer", delay: 1.4 },
  { msg: "Full 2-year warranty, and we install it for you free in Nairobi 🙌", from: "kilimo", delay: 2.0 },
]

export default function WhatsAppPriorityCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute bottom-[-20%] left-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: CTA content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#22C55E]/15 border border-[#22C55E]/25 rounded-full px-4 py-2 mb-6">
              <Clock className="w-3.5 h-3.5 text-[#22C55E]" />
              <span className="text-[#22C55E] text-sm font-semibold">Usually replies in under 3 minutes</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Need Help{" "}
              <span className="text-[#F4B740]">Fast?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-6 leading-relaxed max-w-md">
              Our experts are on WhatsApp every day helping farmers across Kenya choose the right setup.
            </motion.p>

            {/* Phone */}
            <motion.a
              variants={fadeUp}
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 text-white mb-8 hover:text-[#22C55E] transition-colors"
            >
              <span className="text-2xl font-bold tracking-wide" style={{ fontFamily: "var(--font-satoshi)" }}>{PHONE}</span>
            </motion.a>

            {/* WhatsApp button */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-8 py-5 text-lg shadow-[0_4px_40px_rgba(34,197,94,0.5)] transition-all btn-lift"
              >
                <MessageCircle className="w-6 h-6" />
                Chat With Us On WhatsApp
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {[
                { icon: Clock, text: "Avg. 3 min response" },
                { icon: Shield, text: "100% free consultation" },
                { icon: MessageCircle, text: "No commitments needed" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2">
                  <Icon className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span className="text-white/70 text-xs">{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: chat preview + mascot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Chat UI */}
            <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-3xl overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10 bg-white/5">
                <div className="w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Kilimo Power Support</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                    <span className="text-white/50 text-xs">Online now</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 min-h-[260px]">
                {messageExamples.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: m.delay * 0.5, duration: 0.4 }}
                    className={`flex ${m.from === "farmer" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                        m.from === "farmer"
                          ? "bg-white/15 text-white rounded-tl-sm"
                          : "bg-[#22C55E] text-white rounded-tr-sm shadow-[0_4px_16px_rgba(34,197,94,0.3)]"
                      }`}
                    >
                      {m.msg}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="flex items-center gap-3 p-4 border-t border-white/10 bg-white/5">
                <div className="flex-1 bg-white/10 rounded-2xl px-4 py-2.5 text-white/40 text-sm">
                  Type your farm question...
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl bg-[#22C55E] flex items-center justify-center shadow-[0_4px_16px_rgba(34,197,94,0.4)] hover:bg-[#16a34a] transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-40px] right-[-20px] z-10"
            >
              <Image
                src="/femalembuzi.png"
                alt="Kilimo Power support guide"
                width={160}
                height={220}
                className="object-contain drop-shadow-2xl"
                style={{ height: "180px", width: "auto" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
