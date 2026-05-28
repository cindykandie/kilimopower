"use client"
import { motion } from "framer-motion"
import { Clock, MapPin, ArrowRight, Bookmark } from "lucide-react"
import { useState } from "react"
import { editorialArticles } from "@/data/learn"
import { fadeUp, stagger } from "@/lib/animations"

function EditorialCard({
  article,
  variant = "standard",
}: {
  article: typeof editorialArticles[0]
  variant?: "standard" | "horizontal"
}) {
  const [bookmarked, setBookmarked] = useState(false)

  if (variant === "horizontal") {
    return (
      <motion.article
        whileHover={{ y: -3 }}
        className="group flex gap-4 bg-white rounded-2xl p-4 border border-black/[0.06] hover:shadow-[0_8px_32px_rgba(11,61,46,0.1)] transition-shadow cursor-pointer"
      >
        {/* Image placeholder */}
        <div className={`relative flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${article.gradient} flex items-center justify-center text-2xl overflow-hidden`}>
          <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
          <span className="relative z-10">{article.emoji}</span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[#22C55E] text-[10px] font-bold uppercase tracking-wider">{article.category}</span>
          <h4 className="text-[#0F172A] font-bold text-sm leading-snug my-1 line-clamp-2">{article.title}</h4>
          <div className="flex items-center gap-2 text-[#475569] text-xs">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer flex flex-col"
    >
      {/* Image / gradient area */}
      <div className={`relative h-44 bg-gradient-to-br ${article.gradient} overflow-hidden`}>
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.06]" style={{ background: "inherit" }} />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1">
            {article.category}
          </span>
        </div>

        {/* Bookmark */}
        <button
          onClick={(e) => { e.stopPropagation(); setBookmarked(b => !b) }}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-sm rounded-xl transition-all"
        >
          <Bookmark className={`w-3.5 h-3.5 transition-colors ${bookmarked ? "fill-[#F4B740] text-[#F4B740]" : "text-white"}`} />
        </button>

        {/* Emoji */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-4xl"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {article.emoji}
          </motion.span>
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-1 p-4 bg-white border-x border-b border-black/[0.06] rounded-b-3xl">
        <div className="flex items-center gap-2 mb-2 text-[#475569] text-xs">
          <Clock className="w-3 h-3" />
          {article.readTime}
          {article.county && (
            <>
              <span className="text-black/20">·</span>
              <MapPin className="w-3 h-3" />
              {article.county}
            </>
          )}
        </div>

        <h3
          className="text-[#0F172A] font-bold text-base leading-snug mb-2 line-clamp-2 flex-1"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {article.title}
        </h3>

        <p className="text-[#475569] text-sm leading-relaxed line-clamp-2 mb-3">{article.excerpt}</p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-black/[0.06]">
          <span className="text-[#0B3D2E] text-xs font-semibold">{article.author}</span>
          <motion.div
            className="w-8 h-8 rounded-xl bg-[#F7F7F5] group-hover:bg-[#0B3D2E] flex items-center justify-center transition-colors"
          >
            <ArrowRight className="w-4 h-4 text-[#0B3D2E] group-hover:text-white transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}

export default function EditorialGrid() {
  return (
    <section id="editorial" className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-2">All Articles</p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Practical Farm Knowledge
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Main grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {editorialArticles.map((article) => (
              <motion.div key={article.id} variants={fadeUp}>
                <EditorialCard article={article} />
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar: horizontal cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:sticky lg:top-24"
          >
            <h3 className="text-[#0F172A] font-bold text-sm uppercase tracking-wider mb-4">Recently Added</h3>
            {editorialArticles.slice(0, 4).map((article) => (
              <EditorialCard key={`s-${article.id}`} article={article} variant="horizontal" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
