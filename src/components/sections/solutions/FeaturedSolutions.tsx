"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, Check, Zap, MapPin } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"
import { featuredSolutions } from "@/data/solutions"
import { fadeUp, stagger, slideLeft, slideRight } from "@/lib/animations"

function MetricCounter({ value, unit, label }: { value: string; unit?: string; label: string }) {
  const isNumeric = /^\d+/.test(value)
  const numericPart = isNumeric ? parseInt(value.replace(/[^0-9]/g, ""), 10) : 0
  const prefix = isNumeric ? value.replace(/[0-9,]+.*/, "") : ""
  const suffix = isNumeric ? value.replace(/^[0-9,]+/, "") : ""
  const count = useCountUp(numericPart, 1800, true)

  return (
    <div className="text-center p-3 bg-white/8 rounded-2xl border border-white/10">
      <div className="text-white font-bold text-lg leading-none mb-0.5" style={{ fontFamily: "var(--font-satoshi)" }}>
        {isNumeric ? `${prefix}${count.toLocaleString()}${suffix}` : value}
        {unit && <span className="text-white/50 text-xs font-normal ml-0.5">{unit}</span>}
      </div>
      <div className="text-white/45 text-[10px]">{label}</div>
    </div>
  )
}

export default function FeaturedSolutions() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-18"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Complete Solutions</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Don&apos;t Buy Products.{" "}
            <span className="text-[#0B3D2E]">Buy Results.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Each solution is pre-bundled, pre-tested, and ready to transform your farm from day one.
          </p>
        </motion.div>

        {/* Solution cards */}
        <div className="space-y-8">
          {featuredSolutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} transition-transform duration-700 group-hover:scale-[1.01]`} />
              <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

              {/* Animated orb */}
              <motion.div
                className="absolute top-[-20%] right-[-5%] w-96 h-96 rounded-full pointer-events-none opacity-60"
                style={{ background: "radial-gradient(circle, rgba(244,183,64,0.15) 0%, transparent 60%)" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 md:p-10">
                <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
                  {/* Left: main content */}
                  <div>
                    {/* Badge + tag */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 bg-[#F4B740] text-[#0F172A] text-xs font-bold rounded-full px-3 py-1.5">
                        {solution.badge}
                      </span>
                      <span className="text-white/50 text-xs font-semibold uppercase tracking-wider">{solution.tag}</span>
                    </div>

                    <p className="text-white/50 text-sm mb-1">{solution.subtitle}</p>
                    <h3
                      className="text-white text-2xl md:text-4xl font-bold mb-3 leading-tight tracking-tight"
                      style={{ fontFamily: "var(--font-satoshi)" }}
                    >
                      {solution.title}
                    </h3>
                    <p className="text-white/65 text-base leading-relaxed mb-6 max-w-xl">{solution.description}</p>

                    {/* Includes */}
                    <div className="mb-6">
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-3">What&apos;s Included</p>
                      <div className="flex flex-wrap gap-2">
                        {solution.includes.map((item) => (
                          <div key={item.name} className="inline-flex items-center gap-2 bg-white/12 border border-white/15 rounded-2xl px-3.5 py-2">
                            <span>{item.emoji}</span>
                            <span className="text-white text-sm font-medium">{item.name}</span>
                            <Check className="w-3.5 h-3.5 text-[#22C55E]" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3">
                      {solution.acreage && (
                        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-xs rounded-xl px-3 py-2">
                          <MapPin className="w-3 h-3" />
                          {solution.acreage}
                        </div>
                      )}
                      <div className="inline-flex items-center gap-1.5 bg-[#22C55E]/20 border border-[#22C55E]/25 text-white text-xs rounded-xl px-3 py-2">
                        <Zap className="w-3 h-3 text-[#22C55E]" />
                        {solution.savings}
                      </div>
                    </div>
                  </div>

                  {/* Right: metrics + price + CTA */}
                  <div className="lg:w-72 flex flex-col gap-4">
                    {/* Metrics grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {solution.metrics.map((metric) => (
                        <MetricCounter key={metric.label} value={metric.value} unit={metric.unit} label={metric.label} />
                      ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-5">
                      <div className="text-white/50 text-xs mb-1">Starting from</div>
                      <div
                        className="text-white text-2xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {solution.price}
                      </div>
                      <a
                        href={`https://wa.me/254700000000?text=Hi, I'm interested in the ${encodeURIComponent(solution.title)} solution`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl py-3.5 text-sm transition-all btn-lift shadow-[0_4px_20px_rgba(34,197,94,0.35)]"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Get This Solution
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <p className="text-white/40 text-[10px] text-center mt-2.5">Pay after delivery • M-Pesa accepted</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
