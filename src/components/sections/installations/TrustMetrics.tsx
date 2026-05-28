"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { useCountUp } from "@/hooks/useCountUp"
import { fadeUp, stagger } from "@/lib/animations"

const metrics = [
  { value: 1200, suffix: "+", label: "Systems Delivered", sub: "Across all 47 counties", color: "#22C55E", gradient: "from-[#0B3D2E] to-[#14532D]", emoji: "📦" },
  { value: 500, suffix: "+", label: "Farmers Powered", sub: "From smallholders to cooperatives", color: "#F4B740", gradient: "from-[#1e1b4b] to-[#2e2875]", emoji: "👨‍🌾" },
  { value: 47, suffix: "", label: "Counties Served", sub: "Complete Kenya coverage", color: "#22C55E", gradient: "from-[#78350f] to-[#92400e]", emoji: "🗺️" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", sub: "From verified customer surveys", color: "#F4B740", gradient: "from-[#7f1d1d] to-[#991b1b]", emoji: "⭐" },
  { value: 8, suffix: "M+", label: "KES Saved Total", sub: "In fuel, labour & losses", color: "#22C55E", gradient: "from-[#14532D] to-[#15803d]", emoji: "💰" },
]

function MetricCard({ value, suffix, label, sub, color, gradient, emoji }: typeof metrics[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const count = useCountUp(value, 2200, inView)

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 group-hover:scale-[1.03]`} />
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

      {/* Glow orb */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${color}20 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 p-6 md:p-7 flex flex-col gap-3">
        <div className="text-3xl">{emoji}</div>

        <div>
          <div
            className="text-4xl md:text-5xl font-bold leading-none mb-1"
            style={{ color, fontFamily: "var(--font-satoshi)" }}
          >
            {count.toLocaleString()}{suffix}
          </div>
          <div className="text-white font-bold text-base">{label}</div>
        </div>

        <div className="text-white/50 text-xs leading-relaxed">{sub}</div>

        {/* Subtle progress bar */}
        <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: color }}
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function TrustMetrics() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">By The Numbers</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            The{" "}
            <span className="text-[#0B3D2E]">Proof</span>{" "}
            Is In The Data
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
