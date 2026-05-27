"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingDown, TrendingUp, Zap, Fuel, Clock, Users } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"
import { fadeUp, stagger } from "@/lib/animations"

const roiCards = [
  {
    icon: Fuel,
    headline: "Irrigation Fuel Savings",
    before: { label: "Diesel pump cost", value: "KES 8,000", sub: "per month" },
    after: { label: "Solar pump cost", value: "KES 0", sub: "per month" },
    saving: "100% fuel eliminated",
    accentColor: "#22C55E",
    gradient: "from-[#0B3D2E] to-[#14532D]",
  },
  {
    icon: Zap,
    headline: "Backup Power ROI",
    before: { label: "Generator fuel + loss", value: "KES 12,000", sub: "per month" },
    after: { label: "Solar backup cost", value: "KES 0", sub: "ongoing" },
    saving: "Full payback in 8 months",
    accentColor: "#F4B740",
    gradient: "from-[#1e1b4b] to-[#2e2875]",
  },
  {
    icon: Users,
    headline: "Labour Cost Reduction",
    before: { label: "Manual labour (6 workers)", value: "KES 15,000", sub: "per month" },
    after: { label: "With tiller + sprayer", value: "KES 4,500", sub: "per month" },
    saving: "70% labour cost reduction",
    accentColor: "#F4B740",
    gradient: "from-[#78350f] to-[#92400e]",
  },
]

const metrics = [
  { value: 8000, suffix: "+", prefix: "KES ", label: "Average monthly savings per farmer", color: "#22C55E" },
  { value: 70, suffix: "%", prefix: "", label: "Labour cost reduction", color: "#F4B740" },
  { value: 6, suffix: " mo", prefix: "", label: "Average payback period", color: "#22C55E" },
  { value: 98, suffix: "%", prefix: "", label: "Customer satisfaction", color: "#F4B740" },
]

function AnimatedMetric({ value, suffix, prefix, label, color }: typeof metrics[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useCountUp(value, 2000, inView)

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ color, fontFamily: "var(--font-satoshi)" }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-[#475569] text-sm">{label}</div>
    </div>
  )
}

export default function ROISavingsSection() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Real Returns</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            What You Actually{" "}
            <span className="text-[#0B3D2E]">Save</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            We don&apos;t just sell equipment — we track the transformation. Here&apos;s what our farmers save every month.
          </p>
        </motion.div>

        {/* Before / After cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-5 mb-14"
        >
          {roiCards.map((card, i) => (
            <motion.div
              key={card.headline}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Card bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`} />
              <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

              <div className="relative z-10 p-6 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-white font-bold text-sm">{card.headline}</div>
                </div>

                {/* Before */}
                <div className="bg-red-500/20 border border-red-400/25 rounded-2xl p-4">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-red-300" />
                    <span className="text-red-300 text-[10px] font-bold uppercase tracking-wider">Before</span>
                  </div>
                  <div className="text-white text-xs mb-0.5">{card.before.label}</div>
                  <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-satoshi)" }}>
                    {card.before.value}
                    <span className="text-white/50 text-xs font-normal ml-1">{card.before.sub}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <motion.div
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-0.5 h-6"
                      style={{ background: `linear-gradient(to bottom, transparent, ${card.accentColor})` }}
                    />
                    <TrendingDown className="w-5 h-5" style={{ color: card.accentColor }} />
                  </div>
                </div>

                {/* After */}
                <div className="rounded-2xl p-4" style={{ background: `${card.accentColor}20`, borderColor: `${card.accentColor}30`, borderWidth: 1, borderStyle: "solid" }}>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <TrendingDown className="w-3.5 h-3.5" style={{ color: card.accentColor }} />
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: card.accentColor }}>After Kilimo Power</span>
                  </div>
                  <div className="text-white text-xs mb-0.5">{card.after.label}</div>
                  <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-satoshi)" }}>
                    {card.after.value}
                    <span className="text-white/50 text-xs font-normal ml-1">{card.after.sub}</span>
                  </div>
                </div>

                {/* Savings badge */}
                <div className="flex items-center justify-center gap-2 bg-white/12 rounded-2xl py-2.5 px-4">
                  <Zap className="w-4 h-4" style={{ color: card.accentColor }} />
                  <span className="text-white text-sm font-semibold">{card.saving}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Large metrics strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {metrics.map((metric) => (
            <AnimatedMetric key={metric.label} {...metric} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
