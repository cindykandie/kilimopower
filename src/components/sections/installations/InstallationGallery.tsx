"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MapPin, Tag, ZoomIn } from "lucide-react"
import { galleryItems } from "@/data/solutions"
import { fadeUp, stagger } from "@/lib/animations"

const categories = ["All", "Solar Irrigation", "Backup Power", "Poultry", "Irrigation", "Machinery", "Solar", "Water"]

export default function InstallationGallery() {
  const [filter, setFilter] = useState("All")
  const [lightbox, setLightbox] = useState<string | null>(null)

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter)
  const lightboxItem = galleryItems.find((g) => g.id === lightbox)

  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Installation Gallery</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            From Farm to{" "}
            <span className="text-[#0B3D2E]">Fully Powered</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            A documentary view of Kilimo Power systems across Kenya.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-2xl px-4 py-2 text-sm font-semibold transition-all ${
                filter === cat ? "text-white shadow-[0_4px_16px_rgba(11,61,46,0.3)]" : "bg-white text-[#475569] hover:text-[#0B3D2E] border border-black/[0.06]"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="galleryFilter"
                  className="absolute inset-0 rounded-2xl bg-[#0B3D2E]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </motion.button>
          ))}
        </div>

        {/* Masonry-style gallery grid */}
        <motion.div
          layout
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(item.id)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                  item.span === "wide" ? "col-span-2" : item.span === "tall" ? "row-span-2" : ""
                }`}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  {/* Top tags */}
                  <div className="flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white text-[9px] font-bold rounded-full px-2 py-0.5">
                      <MapPin className="w-2 h-2" />
                      {item.county}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-black/30 backdrop-blur-sm text-white text-[9px] font-bold rounded-full px-2 py-0.5">
                      <Tag className="w-2 h-2" />
                      {item.category}
                    </span>
                  </div>

                  {/* Bottom: emoji + title */}
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                    </div>
                    <motion.div
                      className="text-3xl"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {item.emoji}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightboxItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[560px] z-[70] overflow-hidden rounded-3xl"
            >
              <div className={`relative h-72 bg-gradient-to-br ${lightboxItem.gradient}`}>
                <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                  {lightboxItem.emoji}
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-2xl bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white p-6">
                <h3 className="text-[#0F172A] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-satoshi)" }}>
                  {lightboxItem.title}
                </h3>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 bg-[#F7F7F5] text-[#475569] text-xs rounded-full px-3 py-1.5">
                    <MapPin className="w-3 h-3" />
                    {lightboxItem.county}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#0B3D2E]/8 text-[#0B3D2E] text-xs font-semibold rounded-full px-3 py-1.5">
                    {lightboxItem.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
