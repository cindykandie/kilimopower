"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, ChevronRight, Truck, CreditCard, Shield } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const trustItems = [
  { icon: CreditCard, label: "Pay After Delivery" },
  { icon: Truck, label: "All 47 Counties" },
  { icon: Shield, label: "1-Year Warranty" },
]

export default function InstallationsCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#22C55E]/15 border border-[#22C55E]/25 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[#22C55E] text-sm font-semibold">Join 500+ Powered Farmers</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Ready To Power{" "}
              <span className="text-[#F4B740]">Your Farm?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
              Join over 500 Kenyan farmers who&apos;ve transformed their operations with Kilimo Power. Start with a free consultation today.
            </motion.p>

            {/* Trust row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2">
                  <Icon className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span className="text-white/75 text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/254700000000?text=Hi! I'd like to get started on powering my farm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 shadow-[0_4px_32px_rgba(34,197,94,0.4)] transition-all btn-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              <a
                href="/solutions"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-2xl px-7 py-4 transition-all"
              >
                Browse Solutions
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: mascots + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] hidden lg:flex items-end justify-center"
          >
            {/* Glow rings */}
            <div className="absolute inset-[10%] rounded-full border border-[#22C55E]/15 pointer-events-none" />
            <div className="absolute inset-[22%] rounded-full border border-[#F4B740]/10 pointer-events-none" />

            {/* Mascots */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex items-end gap-0"
            >
              <Image
                src="/femalembuzi.png"
                alt="Kilimo Power"
                width={170}
                height={240}
                className="object-contain drop-shadow-2xl"
                style={{ height: "220px", width: "auto" }}
              />
              <Image
                src="/malembuzi.png"
                alt="Kilimo Power"
                width={150}
                height={210}
                className="object-contain drop-shadow-2xl -ml-4"
                style={{ transform: "scaleX(-1)", height: "200px", width: "auto" }}
              />
            </motion.div>

            {/* Floating trust cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              animate={{ y: [0, -6, 0] }}
              className="absolute top-10 left-0 bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20"
            >
              <div className="text-[#0B3D2E] font-bold text-sm mb-0.5">1,200+ Installations</div>
              <div className="text-[#22C55E] font-semibold text-xs">✓ Kenya-wide coverage</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              animate={{ y: [0, -7, 0] }}
              className="absolute bottom-14 right-0 bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 rounded-xl bg-[#22C55E]/10 flex items-center justify-center">
                  <MessageCircle className="w-3.5 h-3.5 text-[#22C55E]" />
                </div>
                <span className="text-[#0F172A] font-semibold text-xs">Free Consultation</span>
              </div>
              <div className="text-[#475569] text-xs">3-min WhatsApp response</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
