"use client"
import { motion } from "framer-motion"
import { FileText, MessageCircle, TrendingDown, ChevronRight, BookOpen } from "lucide-react"
import { farmerGuides } from "@/data/learn"
import { fadeUp, stagger } from "@/lib/animations"

const levelColors = {
  Beginner: { bg: "bg-[#22C55E]/15", text: "text-[#22C55E]", border: "border-[#22C55E]/20" },
  Intermediate: { bg: "bg-[#F4B740]/15", text: "text-[#F4B740]", border: "border-[#F4B740]/20" },
  Advanced: { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-400/20" },
}

export default function FarmerGuides() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-2">Step-By-Step</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Practical Farmer{" "}
              <span className="text-[#0B3D2E]">Guides</span>
            </h2>
          </div>
          <p className="text-[#475569] text-sm max-w-xs">
            In-depth guides built for real Kenyan farm conditions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {farmerGuides.map((guide, i) => {
            const lc = levelColors[guide.level]
            return (
              <motion.div
                key={guide.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-black/[0.06] hover:shadow-[0_12px_40px_rgba(11,61,46,0.12)] transition-all cursor-pointer"
              >
                {/* Top gradient panel */}
                <div className={`relative h-32 bg-gradient-to-br ${guide.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

                  {/* Animated glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: "radial-gradient(circle at 80% 20%, rgba(244,183,64,0.2) 0%, transparent 65%)" }}
                  />

                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <motion.span
                      className="text-4xl"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                    >
                      {guide.emoji}
                    </motion.span>

                    {/* PDF icon */}
                    <div className="w-9 h-9 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-white p-5 flex flex-col gap-3">
                  {/* Level + category */}
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold rounded-full px-2.5 py-1 border ${lc.bg} ${lc.text} ${lc.border}`}>
                      {guide.level}
                    </span>
                    <span className="text-[#475569] text-[10px]">{guide.category}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[#0F172A] font-bold text-sm leading-snug"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {guide.title}
                  </h3>

                  <p className="text-[#475569] text-xs leading-relaxed line-clamp-2">{guide.description}</p>

                  {/* Meta */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#475569] text-xs flex items-center gap-1">
                      <BookOpen className="w-3 h-3" />
                      {guide.pages} pages
                    </span>
                    {guide.savings && (
                      <span className="inline-flex items-center gap-1 text-[#0B3D2E] text-[10px] font-semibold bg-[#22C55E]/10 rounded-full px-2 py-0.5">
                        <TrendingDown className="w-2.5 h-2.5" />
                        {guide.savings}
                      </span>
                    )}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0B3D2E] text-white text-xs font-semibold rounded-xl py-2.5 hover:bg-[#14532D] transition-colors">
                      <FileText className="w-3.5 h-3.5" />
                      Read Guide
                    </button>
                    <a
                      href={`https://wa.me/254707768619?text=Hi, I'd like help with: ${encodeURIComponent(guide.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-[#22C55E]/10 hover:bg-[#22C55E] rounded-xl transition-all group/wa"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#22C55E] group-hover/wa:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
