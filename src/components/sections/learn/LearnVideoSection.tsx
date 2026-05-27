"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Clock, Tag, ChevronRight } from "lucide-react"
import { learnVideos } from "@/data/learn"
import { fadeUp, stagger } from "@/lib/animations"

export default function LearnVideoSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="videos" className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-2">Video Library</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Watch &amp; Learn
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#0B3D2E] font-semibold text-sm hover:gap-3 transition-all"
          >
            View all videos
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {learnVideos.map((video, i) => (
            <motion.div
              key={video.id}
              variants={fadeUp}
              onHoverStart={() => setHovered(video.id)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} transition-transform duration-500 group-hover:scale-[1.04]`} />
              <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: hovered === video.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(244,183,64,0.18) 0%, transparent 65%)" }}
              />

              <div className="relative z-10 p-5 flex flex-col min-h-[240px]">
                {/* Top: category + duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-sm text-white text-[10px] font-bold rounded-full px-2.5 py-1">
                    <Tag className="w-2.5 h-2.5" />
                    {video.category}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-black/25 backdrop-blur-sm text-white text-[10px] rounded-full px-2.5 py-1">
                    <Clock className="w-2.5 h-2.5" />
                    {video.duration}
                  </span>
                </div>

                {/* Emoji */}
                <motion.div
                  className="flex items-center justify-center flex-1"
                  animate={{ y: hovered === video.id ? -8 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-5xl">{video.emoji}</span>
                </motion.div>

                {/* Play button */}
                <div className="flex justify-center my-3">
                  <motion.div
                    className="w-14 h-14 rounded-full"
                    style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}
                    animate={{ scale: hovered === video.id ? 1.12 : 1, boxShadow: hovered === video.id ? "0 0 32px rgba(244,183,64,0.35)" : "0 0 0px transparent" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </motion.div>
                </div>

                {/* Title */}
                <div>
                  <div className="text-white font-bold text-sm leading-snug mb-0.5">{video.title}</div>
                  <div className="text-white/50 text-xs">{video.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
