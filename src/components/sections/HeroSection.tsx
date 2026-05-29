"use client"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { MessageCircle, ChevronRight, ShoppingBag } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const stats = [
  { value: "500+", label: "Farmers Served" },
  { value: "47", label: "Counties" },
  { value: "1,200+", label: "Products Delivered" },
  { value: "5 Yrs", label: "Experience" },
]

const trustItems = [
  { emoji: "💚", label: "M-Pesa Accepted" },
  { emoji: "🚚", label: "Nationwide Delivery" },
  { emoji: "🤝", label: "Pay After Delivery" },
  { emoji: "🛡️", label: "1-Year Warranty" },
  { emoji: "📞", label: "Expert Support" },
]

const floatingCards = [
  { label: "Solar Pump", price: "KSh 45,000", emoji: "☀️", color: "#0B3D2E", delay: 0 },
  { label: "Rain Gun", price: "KSh 18,500", emoji: "💧", color: "#14532D", delay: 0.2 },
  { label: "Incubator", price: "KSh 32,000", emoji: "🥚", color: "#78350f", delay: 0.4 },
]

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const mascotsY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#091f14] via-[#0B3D2E] to-[#14532D]" />

      {/* Animated gold orbs */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.18) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.08) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Grain */}
      <div className="absolute inset-0 grain pointer-events-none opacity-50" />

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 pt-8 md:pt-6 pb-8 text-center"
      >
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-7"
        >
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse inline-block" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Kenya&apos;s #1 Farm Technology Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6 max-w-4xl"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
         
          Harvest The Future.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-white/65 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
        >
          Solar pumps, backup systems and farm machinery delivered anywhere in Kenya.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-3 mb-14"
        >
          <a
            href="https://wa.me/254707686192"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 text-base shadow-[0_4px_24px_rgba(34,197,94,0.35)] transition-all btn-lift"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/18 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl px-7 py-4 text-base transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Products
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mb-0"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-[#F4B740] mb-1"
                style={{ fontFamily: "var(--font-satoshi)", textShadow: "0 0 20px rgba(244,183,64,0.3)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/55 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating product cards — desktop only */}
      <div className="absolute top-1/3 right-6 hidden lg:flex flex-col gap-3 z-20">
        {floatingCards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + card.delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
              className="flex items-center gap-3 bg-white/12 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] min-w-[170px]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: card.color }}
              >
                {card.emoji}
              </div>
              <div>
                <div className="text-white text-xs font-semibold">{card.label}</div>
                <div className="text-[#F4B740] text-sm font-bold">{card.price}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mascots anchored above trust strip */}
      <div className="relative z-10">
        <motion.div
          style={{ y: mascotsY }}
          className="absolute bottom-full left-0 w-28 md:w-44 pointer-events-none"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/femalembuzi.png"
            alt="Kilimo Power mascot"
            width={180}
            height={260}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
        <motion.div
          style={{ y: mascotsY }}
          className="absolute bottom-full right-0 w-28 md:w-44 pointer-events-none scale-x-[-1]"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/malembuzi.png"
            alt="Kilimo Power mascot"
            width={180}
            height={260}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Trust strip */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-x-6 gap-y-2">
            {trustItems.map((item, i) => (
              <div key={item.label} className="flex items-center gap-1.5 text-white/75 text-sm font-medium">
                <span className="text-base">{item.emoji}</span>
                {item.label}
                {i < trustItems.length - 1 && (
                  <span className="hidden sm:inline ml-4 text-white/20">·</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
