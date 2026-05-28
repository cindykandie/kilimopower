"use client"
import { motion } from "framer-motion"
import { Star, MapPin, TrendingDown, Quote, Package } from "lucide-react"
import { caseStudies } from "@/data/solutions"
import { testimonials } from "@/data/testimonials"
import { fadeUp, stagger, scaleIn } from "@/lib/animations"

export default function SuccessStories() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Farmer Stories</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Real Farmers.{" "}
            <span className="text-[#0B3D2E]">Real Savings.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            These aren&apos;t demos. These are real outcomes from Kenyan farmers who made the switch.
          </p>
        </motion.div>

        {/* Case study cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-5 mb-12"
        >
          {caseStudies.map((cs) => (
            <motion.div
              key={cs.id}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cs.gradient}`} />
              <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

              <div className="relative z-10 p-6 flex flex-col h-full min-h-[420px]">
                {/* County + emoji */}
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-xs rounded-xl px-3 py-1.5">
                    <MapPin className="w-3 h-3" />
                    {cs.county}
                  </div>
                  <span className="text-3xl">{cs.emoji}</span>
                </div>

                <h3
                  className="text-white text-xl font-bold mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {cs.title}
                </h3>

                {/* Problem → Solution → Result */}
                <div className="space-y-3 mb-5 flex-1">
                  {[
                    { label: "Problem", value: cs.problem, color: "rgba(239,68,68,0.2)", border: "rgba(239,68,68,0.25)", dot: "#ef4444" },
                    { label: "Solution", value: cs.solution, color: "rgba(244,183,64,0.15)", border: "rgba(244,183,64,0.25)", dot: "#F4B740" },
                    { label: "Result", value: cs.result, color: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.25)", dot: "#22C55E" },
                  ].map(({ label, value, color, border, dot }) => (
                    <div
                      key={label}
                      className="rounded-2xl p-3.5"
                      style={{ background: color, border: `1px solid ${border}` }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: dot }} />
                        <span className="text-white/50 text-[10px] font-bold uppercase tracking-wider">{label}</span>
                      </div>
                      <p className="text-white text-xs leading-relaxed">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Products */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.products.map((p) => (
                    <span key={p} className="inline-flex items-center gap-1 bg-white/10 text-white/70 text-[10px] rounded-full px-2.5 py-1">
                      <Package className="w-2.5 h-2.5" />
                      {p}
                    </span>
                  ))}
                </div>

                {/* Savings + timeline */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="inline-flex items-center gap-1.5 bg-[#22C55E]/20 text-white text-xs rounded-xl px-3 py-1.5">
                    <TrendingDown className="w-3 h-3 text-[#22C55E]" />
                    {cs.savings}
                  </div>
                  <span className="text-white/40 text-xs">{cs.timeline}</span>
                </div>

                {/* Quote */}
                <div className="mt-4 bg-white/8 rounded-2xl p-3.5">
                  <Quote className="w-3.5 h-3.5 text-white/30 mb-1.5" />
                  <p className="text-white/70 text-xs italic leading-relaxed line-clamp-3">{cs.quote}</p>
                  <p className="text-white font-semibold text-xs mt-2">— {cs.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial quote strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="bg-[#F7F7F5] rounded-3xl p-5 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < t.rating ? "fill-[#F4B740] text-[#F4B740]" : "text-[#475569]/30"}`} />
                ))}
              </div>

              <p className="text-[#0F172A] text-sm leading-relaxed flex-1 line-clamp-4">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-3 border-t border-black/[0.06]">
                <div
                  className="w-9 h-9 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#0F172A] font-semibold text-sm">{t.name}</div>
                  <div className="flex items-center gap-1 text-[#475569] text-xs">
                    <MapPin className="w-3 h-3" />
                    {t.county}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
