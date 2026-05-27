"use client"
import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, Phone, ChevronRight, Truck, CreditCard, Shield } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const PHONE = "+254 707 768 6192"
const WA_LINK = "https://wa.me/254707768619?text=Hi! I'd like to talk to a farm power expert"

const trust = [
  { icon: MessageCircle, label: "Reply in 3 min", color: "#22C55E" },
  { icon: Truck, label: "Nationwide Delivery", color: "#22C55E" },
  { icon: CreditCard, label: "Pay After Delivery", color: "#F4B740" },
  { icon: Shield, label: "M-Pesa Accepted", color: "#22C55E" },
]

export default function ContactHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={sectionRef} className="relative min-h-[90svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <motion.div style={{ y: contentY }} initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#22C55E]/15 border border-[#22C55E]/25 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[#22C55E] text-sm font-semibold">Kenya&apos;s Farm Power Experts</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Talk To Kenya&apos;s{" "}
              <span className="text-[#F4B740]">Farm Power Experts.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/65 text-lg md:text-xl leading-relaxed mb-6 max-w-lg">
              We help farmers across Kenya choose the right irrigation, backup and machinery solutions — every day, on WhatsApp.
            </motion.p>

            {/* Phone number */}
            <motion.a
              variants={fadeUp}
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-5 py-3.5 mb-8 hover:bg-white/15 transition-all group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#22C55E]/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div>
                <div className="text-white/50 text-xs">Call or WhatsApp</div>
                <div className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: "var(--font-satoshi)" }}>
                  {PHONE}
                </div>
              </div>
            </motion.a>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 shadow-[0_4px_32px_rgba(34,197,94,0.4)] transition-all btn-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="#form"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-2xl px-7 py-4 transition-all"
              >
                Request Consultation
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5">
              {trust.map(({ icon: Icon, label, color }) => (
                <div key={label} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2">
                  <Icon className="w-3.5 h-3.5" style={{ color }} />
                  <span className="text-white/75 text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: mascots + message preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[480px] hidden lg:flex items-end justify-center"
          >
            {/* Glow rings */}
            <div className="absolute inset-[15%] rounded-full border border-[#22C55E]/15 pointer-events-none" />
            <div className="absolute inset-[28%] rounded-full border border-[#F4B740]/10 pointer-events-none" />

            {/* Mascots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex items-end gap-0"
            >
              <Image src="/femalembuzi.png" alt="Kilimo Power support" width={180} height={250} className="object-contain drop-shadow-2xl" style={{ height: "230px", width: "auto" }} />
              <Image src="/malembuzi.png" alt="Kilimo Power expert" width={160} height={220} className="object-contain drop-shadow-2xl -ml-6" style={{ transform: "scaleX(-1)", height: "210px", width: "auto" }} />
            </motion.div>

            {/* WhatsApp message bubbles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute top-8 left-0 space-y-2 max-w-[200px] z-20"
            >
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-2xl rounded-tl-sm p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className="text-[#0F172A] text-xs font-medium">Hi, I need a pump for 3 acres 🌱</div>
                <div className="text-[#475569] text-[10px] mt-1 text-right">10:24 AM ✓✓</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="bg-[#22C55E] rounded-2xl rounded-tr-sm p-3.5 shadow-[0_8px_32px_rgba(34,197,94,0.3)] ml-4"
              >
                <div className="text-white text-xs font-medium">Perfect! A 1.5HP solar pump covers 3 acres. I can get it to you in 2 days 🚀</div>
                <div className="text-white/70 text-[10px] mt-1 text-right">10:26 AM ✓✓</div>
              </motion.div>
            </motion.div>

            {/* Response time card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-10 right-0 bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[#0F172A] font-bold text-sm">Usually online</span>
              </div>
              <div className="text-[#475569] text-xs mt-0.5">Avg response: 3 minutes</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
