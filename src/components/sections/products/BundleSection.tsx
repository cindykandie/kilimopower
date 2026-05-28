"use client"
import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, Check, MapPin, Leaf, TrendingDown } from "lucide-react"
import { bundles } from "@/data/bundles"
import { stagger, fadeUp, scaleIn } from "@/lib/animations"

export default function BundleSection() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">
            Solution Bundles
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4" style={{ fontFamily: "var(--font-satoshi)" }}>
            Built Around Your{" "}
            <span className="text-[#0B3D2E]">Farm Challenge</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Don&apos;t shop for parts — shop for solutions. Each bundle solves a real problem.
          </p>
        </motion.div>

        {/* Bundle cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-5 md:gap-6"
        >
          {bundles.map((bundle, i) => {
            const discount = Math.round(((bundle.originalPrice - bundle.price) / bundle.originalPrice) * 100)
            return (
              <motion.div
                key={bundle.id}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-b ${bundle.gradient} transition-transform duration-500 group-hover:scale-[1.02]`} />

                {/* Animated orb on hover */}
                <motion.div
                  className="absolute top-[-20%] right-[-10%] w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(244,183,64,0.18) 0%, transparent 65%)" }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 5 + i * 1.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grain */}
                <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-[#F4B740]/40 shadow-[0_0_40px_rgba(244,183,64,0.1)]" />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-7 flex flex-col h-full min-h-[500px]">
                  {/* Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 bg-[#F4B740] text-[#0F172A] text-xs font-bold rounded-full px-3 py-1.5">
                      {bundle.badge}
                    </span>
                    <span className="bg-white/20 text-white text-xs font-bold rounded-full px-2.5 py-1">
                      -{discount}% off
                    </span>
                  </div>

                  {/* Problem */}
                  <p className="text-white/60 text-xs italic mb-2 leading-relaxed">&ldquo;{bundle.problem}&rdquo;</p>

                  {/* Title */}
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 leading-tight tracking-tight" style={{ fontFamily: "var(--font-satoshi)" }}>
                    {bundle.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-5">{bundle.description}</p>

                  {/* What&apos;s included */}
                  <div className="mb-5">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-3">What&apos;s Included</p>
                    <div className="space-y-2">
                      {bundle.includes.map((item) => (
                        <div key={item.name} className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-sm flex-shrink-0">
                            {item.emoji}
                          </div>
                          <span className="text-white/80 text-sm">{item.name}</span>
                          <Check className="w-3.5 h-3.5 text-[#22C55E] ml-auto flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Meta badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {bundle.acreage && (
                      <div className="inline-flex items-center gap-1.5 bg-white/12 border border-white/15 text-white text-xs rounded-xl px-3 py-1.5">
                        <Leaf className="w-3 h-3" />
                        {bundle.acreage}
                      </div>
                    )}
                    {bundle.savings && (
                      <div className="inline-flex items-center gap-1.5 bg-[#22C55E]/20 border border-[#22C55E]/25 text-white text-xs rounded-xl px-3 py-1.5">
                        <TrendingDown className="w-3 h-3" />
                        {bundle.savings}
                      </div>
                    )}
                    {bundle.counties && (
                      <div className="inline-flex items-center gap-1.5 bg-white/12 border border-white/15 text-white text-xs rounded-xl px-3 py-1.5">
                        <MapPin className="w-3 h-3" />
                        {bundle.counties}
                      </div>
                    )}
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-auto">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>
                        KSh {bundle.price.toLocaleString()}
                      </span>
                      <span className="text-white/45 text-sm line-through">
                        KSh {bundle.originalPrice.toLocaleString()}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/254700000000?text=Hi, I'm interested in the "${encodeURIComponent(bundle.title)}" bundle`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-white text-[#0B3D2E] hover:bg-[#F4B740] font-bold rounded-2xl py-3.5 text-sm transition-all group-hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Get This Bundle
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center text-[#475569] text-sm mt-8"
        >
          All bundles include delivery, installation guide, and 1-year warranty.{" "}
          <a href="https://wa.me/254700000000" className="text-[#0B3D2E] font-semibold hover:underline">
            Need a custom bundle?
          </a>
        </motion.p>
      </div>
    </section>
  )
}
