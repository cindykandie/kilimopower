"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, MessageCircle, Check, TrendingDown } from "lucide-react"
import { problemPathways } from "@/data/solutions"
import { fadeUp, stagger, scaleIn } from "@/lib/animations"

export default function ProblemPathways() {
  const [activeCard, setActiveCard] = useState<string | null>(null)

  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Find Your Solution</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            What Problem Are You{" "}
            <span className="text-[#0B3D2E]">Trying To Solve?</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Every farm has a different challenge. We&apos;ve built solutions for each one.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-2 gap-5 md:gap-6"
        >
          {problemPathways.map((pathway, i) => {
            const isActive = activeCard === pathway.id
            return (
              <motion.div
                key={pathway.id}
                variants={scaleIn}
                onHoverStart={() => setActiveCard(pathway.id)}
                onHoverEnd={() => setActiveCard(null)}
                onTapStart={() => setActiveCard(isActive ? null : pathway.id)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pathway.gradient} transition-transform duration-700 group-hover:scale-[1.03]`} />
                <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

                {/* Animated glow orb */}
                <motion.div
                  className="absolute top-[-30%] right-[-20%] w-80 h-80 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${pathway.accentColor}25 0%, transparent 65%)` }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ boxShadow: `inset 0 0 0 1px ${pathway.accentColor}30, 0 0 40px ${pathway.accentColor}15` }}
                />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 flex flex-col min-h-[320px]">
                  {/* Top row: tag + savings */}
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1.5"
                      style={{ background: `${pathway.accentColor}25`, color: pathway.accentColor }}
                    >
                      {pathway.tag}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="inline-flex items-center gap-1.5 bg-white/15 border border-white/20 text-white text-xs font-semibold rounded-xl px-3 py-1.5"
                    >
                      <TrendingDown className="w-3 h-3" style={{ color: pathway.accentColor }} />
                      {pathway.savings}
                    </motion.div>
                  </div>

                  {/* Emoji + headline */}
                  <motion.div
                    className="text-5xl mb-3"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  >
                    {pathway.emoji}
                  </motion.div>
                  <h3
                    className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight tracking-tight"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {pathway.headline}
                  </h3>

                  {/* Problems + solutions in 2 columns */}
                  <div className="grid grid-cols-2 gap-4 mb-6 flex-1">
                    {/* Problems */}
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2.5">Challenges</p>
                      <div className="space-y-2">
                        {pathway.problem.map((p) => (
                          <div key={p} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                            <span className="text-white/65 text-xs leading-relaxed">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions */}
                    <div>
                      <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2.5">Our Solution</p>
                      <div className="space-y-2">
                        {pathway.solution.map((s) => (
                          <div key={s} className="flex items-start gap-2">
                            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${pathway.accentColor}30` }}>
                              <Check className="w-2.5 h-2.5" style={{ color: pathway.accentColor }} />
                            </div>
                            <span className="text-white/80 text-xs leading-relaxed">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <AnimatePresence>
                    <motion.a
                      href={`https://wa.me/254707686192?text=Hi, I need help with: ${encodeURIComponent(pathway.headline)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ y: 4, opacity: 0.85 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold rounded-2xl px-5 py-3 transition-all self-start group/btn"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {pathway.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </motion.a>
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
