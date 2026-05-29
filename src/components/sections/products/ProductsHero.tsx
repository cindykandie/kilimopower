"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, ChevronRight, Star, Package } from "lucide-react"
import { fadeUp, stagger, scaleIn } from "@/lib/animations"

const metrics = [
  { value: "1,200+", label: "Products Delivered", emoji: "📦" },
  { value: "500+", label: "Happy Farmers", emoji: "👨‍🌾" },
  { value: "47", label: "Counties Served", emoji: "📍" },
  { value: "1 Year", label: "Warranty", emoji: "🛡️" },
]

const floatingCards = [
  { name: "Solar Pump", category: "Solar Irrigation", price: "KSh 45,000", emoji: "☀️", gradient: "from-[#0B3D2E] to-[#14532D]", delay: 0 },
  { name: "Egg Incubator", category: "Poultry", price: "KSh 32,000", emoji: "🥚", gradient: "from-[#7f1d1d] to-[#991b1b]", delay: 0.15 },
  { name: "Farm Tiller", category: "Machinery", price: "KSh 65,000", emoji: "⚙️", gradient: "from-[#78350f] to-[#92400e]", delay: 0.3 },
  { name: "Backup Kit", category: "Solar Backup", price: "KSh 28,000", emoji: "🔋", gradient: "from-[#1e3a5f] to-[#1e4d82]", delay: 0.45 },
]

export default function ProductsHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#091f14] via-[#0B3D2E] to-[#0d4a34]" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-[-15%] right-[5%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.14) 0%, transparent 60%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Grain */}
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT: Content */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse inline-block" />
              <span className="text-white/90 text-sm font-medium">Farm-Tested. Kenya-Ready.</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.06] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Farm Power Solutions{" "}
              <span className="text-[#F4B740]" style={{ textShadow: "0 0 40px rgba(244,183,64,0.35)" }}>
                Built For Kenya.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-white/65 text-lg max-w-lg mb-9 leading-relaxed">
              Solar pumps, generators, farm machinery and backup systems delivered nationwide. Pay after delivery.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-[#F4B740] hover:bg-[#e6a830] text-[#0F172A] font-bold rounded-2xl px-7 py-4 text-base shadow-[0_4px_24px_rgba(244,183,64,0.35)] transition-all btn-lift"
              >
                <Package className="w-5 h-5" />
                Browse Products
              </a>
              <a
                href="https://wa.me/254707686192"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl px-7 py-4 text-base transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </motion.div>

            {/* Trust pill */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-[#F4B740] text-[#F4B740]" />
                ))}
              </div>
              <span className="text-white/60 text-sm">Rated 4.9/5 by 500+ Kenyan farmers</span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating product cards collage */}
          <div className="relative h-[420px] lg:h-[480px] hidden md:flex items-center justify-center">
            {/* Glow ring */}
            <div className="absolute w-72 h-72 rounded-full border border-[#22C55E]/15" />
            <div className="absolute w-56 h-56 rounded-full border border-[#F4B740]/10" />

            {/* Mascot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-[10%] z-10 pointer-events-none"
            >
              <Image
                src="/malembuzi.png"
                alt="Kilimo Power Mascot"
                width={180}
                height={260}
                className="object-contain drop-shadow-2xl"
                style={{ height: "200px", width: "auto" }}
              />
            </motion.div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-3 z-20 relative">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.4 + card.delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={{ y: [0, i % 2 === 0 ? -8 : -5, 0] }}
                    transition={{ duration: 3.5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className={`relative overflow-hidden rounded-2xl p-4 bg-gradient-to-br ${card.gradient} border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-w-[150px]`}
                  >
                    <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
                    <div className="relative z-10">
                      <div className="text-2xl mb-2">{card.emoji}</div>
                      <div className="text-white text-xs font-semibold leading-tight mb-0.5">{card.name}</div>
                      <div className="text-white/55 text-[10px]">{card.category}</div>
                      <div className="text-[#F4B740] text-sm font-bold mt-2">{card.price}</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics strip */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 md:mt-16"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={scaleIn}
              className="flex items-center gap-3 bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl px-4 py-3.5"
            >
              <span className="text-xl">{m.emoji}</span>
              <div>
                <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: "var(--font-satoshi)" }}>
                  {m.value}
                </div>
                <div className="text-white/50 text-xs mt-0.5">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
        <svg viewBox="0 0 1440 64" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" fill="#F7F7F5" />
        </svg>
      </div>
    </section>
  )
}
