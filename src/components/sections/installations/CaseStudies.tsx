"use client"
import { motion } from "framer-motion"
import { MapPin, TrendingDown, Clock, Package, Quote, ChevronRight, MessageCircle } from "lucide-react"
import { caseStudies } from "@/data/solutions"
import { fadeUp, stagger } from "@/lib/animations"

export default function CaseStudies() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Case Studies</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            The Full Story.{" "}
            <span className="text-[#0B3D2E]">Problem to Profit.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Every case study is real, documented, and traceable.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="space-y-8"
        >
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              variants={fadeUp}
              className="group grid md:grid-cols-[280px_1fr] overflow-hidden rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(11,61,46,0.12)] transition-shadow duration-300"
            >
              {/* Left panel: visual */}
              <div className={`relative overflow-hidden bg-gradient-to-br ${cs.gradient} flex flex-col justify-between p-6 min-h-[220px]`}>
                <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-xs rounded-xl px-3 py-1.5 mb-3">
                    <MapPin className="w-3 h-3" />
                    {cs.county}
                  </div>
                  <div className="text-4xl mb-2">{cs.emoji}</div>
                  <h3
                    className="text-white font-bold text-lg leading-tight"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {cs.title}
                  </h3>
                </div>

                {/* Savings badge */}
                <div className="relative z-10 inline-flex items-center gap-2 bg-[#22C55E]/25 border border-[#22C55E]/30 rounded-2xl px-4 py-2.5 mt-4 self-start">
                  <TrendingDown className="w-4 h-4 text-[#22C55E]" />
                  <div>
                    <div className="text-white/60 text-[10px]">Monthly savings</div>
                    <div className="text-white font-bold text-sm">{cs.savings}</div>
                  </div>
                </div>
              </div>

              {/* Right panel: content */}
              <div className="bg-white p-6 md:p-8 flex flex-col">
                {/* Timeline + products */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-[#F7F7F5] text-[#475569] text-xs rounded-xl px-3 py-1.5">
                    <Clock className="w-3 h-3" />
                    {cs.timeline}
                  </div>
                  {cs.products.slice(0, 2).map((p) => (
                    <div key={p} className="hidden sm:inline-flex items-center gap-1 bg-[#0B3D2E]/8 text-[#0B3D2E] text-xs font-medium rounded-xl px-3 py-1.5">
                      <Package className="w-3 h-3" />
                      {p}
                    </div>
                  ))}
                </div>

                {/* Problem / solution / result vertical timeline */}
                <div className="relative pl-6 space-y-5 flex-1 mb-6">
                  {[
                    { label: "The Problem", value: cs.problem, color: "#ef4444", dot: "bg-red-400" },
                    { label: "Our Solution", value: cs.solution, color: "#F4B740", dot: "bg-amber-400" },
                    { label: "The Result", value: cs.result, color: "#22C55E", dot: "bg-green-500" },
                  ].map(({ label, value, color, dot }, idx, arr) => (
                    <div key={label} className="relative">
                      {idx < arr.length - 1 && (
                        <div className="absolute left-[-18px] top-5 bottom-[-20px] w-px bg-black/[0.06]" />
                      )}
                      <div className={`absolute left-[-22px] top-1 w-2 h-2 rounded-full ${dot} flex-shrink-0`} />
                      <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color }}>
                        {label}
                      </div>
                      <p className="text-[#0F172A] text-sm leading-relaxed">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-[#F7F7F5] rounded-2xl p-4 mb-5">
                  <Quote className="w-4 h-4 text-[#0B3D2E]/30 mb-2" />
                  <p className="text-[#475569] text-sm italic leading-relaxed">{cs.quote}</p>
                  <p className="text-[#0B3D2E] font-semibold text-sm mt-2">— {cs.name}</p>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/254700000000?text=Hi, I'd like a setup similar to the ${encodeURIComponent(cs.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0B3D2E] font-semibold text-sm self-start hover:gap-3 transition-all group/link"
                >
                  <MessageCircle className="w-4 h-4" />
                  Get a similar setup
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
