"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Clock, Bookmark, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { featuredArticles } from "@/data/learn"
import { fadeUp, stagger } from "@/lib/animations"

function ArticleCard({ article, large = false }: { article: typeof featuredArticles[0]; large?: boolean }) {
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer flex flex-col ${large ? "min-h-[440px]" : "min-h-[320px]"}`}
    >
      {/* Gradient bg */}
      <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} transition-transform duration-500 group-hover:scale-[1.03]`} />
      <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(244,183,64,0.12) 0%, transparent 60%)" }}
      />

      {/* Content */}
      <div className="relative z-10 p-5 md:p-6 flex flex-col h-full">
        {/* Top row */}
        <div className="flex items-start justify-between mb-auto">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1">
              {article.category}
            </span>
            {article.tag && (
              <span className="inline-flex items-center gap-1 bg-[#F4B740] text-[#0F172A] text-[10px] font-bold rounded-full px-2.5 py-1">
                {article.tag}
              </span>
            )}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); setBookmarked(b => !b) }}
            className="w-8 h-8 flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-xl transition-all"
          >
            <Bookmark className={`w-3.5 h-3.5 transition-colors ${bookmarked ? "fill-[#F4B740] text-[#F4B740]" : "text-white"}`} />
          </button>
        </div>

        {/* Emoji */}
        <motion.div
          className="text-5xl my-4"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {article.emoji}
        </motion.div>

        {/* Article meta */}
        <div className="mt-auto">
          <h3
            className={`text-white font-bold leading-tight mb-2 ${large ? "text-xl md:text-2xl" : "text-base md:text-lg"}`}
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {article.title}
          </h3>

          {large && (
            <p className="text-white/60 text-sm leading-relaxed mb-3 line-clamp-2">{article.excerpt}</p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-white/50 text-xs">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </div>
              {article.county && (
                <div className="flex items-center gap-1 text-white/40 text-xs">
                  <MapPin className="w-3 h-3" />
                  {article.county}
                </div>
              )}
            </div>
            <motion.div
              className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedArticles() {
  const [page, setPage] = useState(0)
  const perPage = 4
  const pages = Math.ceil(featuredArticles.length / perPage)
  const visible = featuredArticles.slice(page * perPage, (page + 1) * perPage)

  return (
    <section id="articles" className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-2">Featured Reading</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Essential Farm{" "}
              <span className="text-[#0B3D2E]">Guides</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center hover:bg-[#0B3D2E] hover:text-white hover:border-transparent disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[#475569] text-sm font-medium px-2">{page + 1} / {pages}</span>
            <button
              onClick={() => setPage(p => Math.min(pages - 1, p + 1))}
              disabled={page === pages - 1}
              className="w-10 h-10 rounded-2xl bg-white border border-black/[0.08] flex items-center justify-center hover:bg-[#0B3D2E] hover:text-white hover:border-transparent disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Cards grid — first card large, rest standard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {visible.map((article, i) => (
              <div key={article.id} className={i === 0 && page === 0 ? "md:col-span-2" : ""}>
                <ArticleCard article={article} large={i === 0 && page === 0} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          <a
            href="#editorial"
            className="inline-flex items-center gap-2 bg-white border border-black/[0.08] text-[#0B3D2E] font-semibold rounded-2xl px-7 py-3.5 hover:bg-[#0B3D2E] hover:text-white hover:border-transparent transition-all shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          >
            <BookOpen className="w-4 h-4" />
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
