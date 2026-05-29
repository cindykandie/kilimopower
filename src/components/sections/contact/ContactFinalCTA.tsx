"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, Package, ChevronRight, Truck, CreditCard } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

export default function ContactFinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute top-[-20%] left-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
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
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#F4B740]/15 border border-[#F4B740]/25 rounded-full px-4 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] animate-pulse" />
              <span className="text-[#F4B740] text-sm font-semibold">Pay After Delivery · All 47 Counties</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Ready To Power{" "}
              <span className="text-[#F4B740]">Your Farm?</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
              Kenya&apos;s best farm equipment, delivered to your door. Start a free WhatsApp conversation or browse our full product catalogue.
            </motion.p>

            {/* Trust row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-8">
              {[
                { icon: CreditCard, label: "Pay After Delivery" },
                { icon: Truck, label: "All 47 Counties" },
                { icon: MessageCircle, label: "Reply in 3 min" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-2xl px-3.5 py-2">
                  <Icon className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span className="text-white/75 text-xs font-medium">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/254707686192?text=Hi! I'm ready to power my farm. Can you help me get started?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 shadow-[0_4px_32px_rgba(34,197,94,0.4)] transition-all btn-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Chat On WhatsApp
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-2xl px-7 py-4 transition-all"
              >
                <Package className="w-4 h-4" />
                Browse Products
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: mascots */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] hidden lg:flex items-end justify-center"
          >
            <div className="absolute inset-[15%] rounded-full border border-[#22C55E]/15 pointer-events-none" />
            <div className="absolute inset-[28%] rounded-full border border-[#F4B740]/10 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 flex items-end"
            >
              <Image src="/femalembuzi.png" alt="Kilimo Power" width={170} height={230} className="object-contain drop-shadow-2xl" style={{ height: "210px", width: "auto" }} />
              <Image src="/malembuzi.png" alt="Kilimo Power" width={150} height={210} className="object-contain drop-shadow-2xl -ml-5" style={{ transform: "scaleX(-1)", height: "190px", width: "auto" }} />
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              animate={{ y: [0, -6, 0] }}
              className="absolute bottom-8 left-0 bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] z-20"
            >
              <div className="text-[#0B3D2E] font-bold text-sm mb-0.5">500+ Active Farmers</div>
              <div className="text-[#22C55E] text-xs font-medium">✓ All 47 counties covered</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
