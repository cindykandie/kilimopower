"use client"
import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, ChevronRight, Truck, Shield, Phone, CreditCard } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"
import { fadeUp, stagger, slideLeft, slideRight } from "@/lib/animations"

const trustBadges = [
  { icon: Truck, label: "Nationwide Delivery" },
  { icon: CreditCard, label: "Pay After Delivery" },
  { icon: Phone, label: "Expert Support" },
  { icon: Shield, label: "M-Pesa Accepted" },
]

const stats = [
  { target: 500, suffix: "+", label: "Farmers Served" },
  { target: 47, suffix: "", label: "Counties Covered" },
  { target: 1200, suffix: "+", label: "Deliveries Made" },
  { target: 8, suffix: "M+", label: "KES Saved" },
]

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(target, 2000, true)
  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-satoshi)" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/55 text-xs mt-0.5">{label}</div>
    </div>
  )
}

const solutionCards = [
  { emoji: "☀️", label: "Solar Irrigation", sub: "Zero fuel costs", gradient: "from-[#0B3D2E] to-[#14532D]" },
  { emoji: "🔋", label: "Backup Power", sub: "No more blackouts", gradient: "from-[#1e1b4b] to-[#2e2875]" },
  { emoji: "🚜", label: "Farm Machinery", sub: "Reduce labour 70%", gradient: "from-[#78350f] to-[#92400e]" },
  { emoji: "🐔", label: "Poultry Systems", sub: "95%+ hatch rate", gradient: "from-[#7f1d1d] to-[#991b1b]" },
]

export default function SolutionsHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(11,61,46,0.3) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            style={{ y: contentY }}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#22C55E]/15 border border-[#22C55E]/25 rounded-full px-4 py-2 mb-6 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[#22C55E] text-sm font-semibold">Farm Solutions for Modern Kenya</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Smart Farm Power{" "}
              <span className="text-[#F4B740]">Solutions</span>{" "}
              For Modern Kenya.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/65 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              We help farmers, homes and businesses reduce costs, increase productivity and stay powered — delivered to all 47 counties.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
              <a
                href="https://wa.me/254707686192?text=Hi! I'd like a free farm solutions consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 shadow-[0_4px_32px_rgba(34,197,94,0.4)] transition-all btn-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Get Free Consultation
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl px-7 py-4 transition-all"
              >
                Browse Products
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={stagger} className="flex flex-wrap gap-2.5 mb-10">
              {trustBadges.map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 bg-white/8 border border-white/12 backdrop-blur-sm rounded-2xl px-3.5 py-2"
                >
                  <Icon className="w-3.5 h-3.5 text-[#22C55E]" />
                  <span className="text-white/80 text-xs font-medium">{label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Solution cards + mascot */}
          <motion.div
            style={{ y: mascotY }}
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="relative hidden lg:flex items-end justify-center h-[580px]"
          >
            {/* Glow ring */}
            <div className="absolute inset-[15%] rounded-full border border-[#22C55E]/15 pointer-events-none" />
            <div className="absolute inset-[25%] rounded-full border border-[#F4B740]/10 pointer-events-none" />

            {/* Solution cards grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6">
              {solutionCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${card.gradient} p-5 flex flex-col justify-end cursor-pointer border border-white/10`}
                >
                  <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
                  <motion.div
                    className="text-4xl mb-2"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    {card.emoji}
                  </motion.div>
                  <div className="relative z-10">
                    <div className="text-white font-bold text-sm mb-0.5">{card.label}</div>
                    <div className="text-white/55 text-xs">{card.sub}</div>
                  </div>
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                </motion.div>
              ))}
            </div>

            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-4 z-20"
            >
              <Image
                src="/malembuzi.png"
                alt="Kilimo Power Solutions Guide"
                width={200}
                height={280}
                className="object-contain drop-shadow-2xl"
                style={{ height: "240px", width: "auto" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
