"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Clock, Tag } from "lucide-react"
import { videoCards } from "@/data/solutions"
import { fadeUp, stagger } from "@/lib/animations"

export default function VideoSection() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">See It In Action</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Watch Real{" "}
            <span className="text-[#0B3D2E]">Installations</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Walkthroughs, product demos, customer interviews, and before-and-after comparisons.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {videoCards.map((video, i) => (
            <motion.div
              key={video.id}
              variants={fadeUp}
              onHoverStart={() => setHovered(video.id)}
              onHoverEnd={() => setHovered(null)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient} transition-transform duration-500 group-hover:scale-[1.04]`} />
              <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: hovered === video.id ? 1 : 0 }}
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(244,183,64,0.15) 0%, transparent 70%)" }}
              />

              <div className="relative z-10 p-5 min-h-[220px] flex flex-col">
                {/* Category tag */}
                <div className="flex items-center justify-between mb-auto">
                  <span className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-sm text-white text-[10px] font-bold rounded-full px-2.5 py-1">
                    <Tag className="w-2.5 h-2.5" />
                    {video.category}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-black/25 backdrop-blur-sm text-white text-[10px] rounded-full px-2 py-1">
                    <Clock className="w-2.5 h-2.5" />
                    {video.duration}
                  </span>
                </div>

                {/* Emoji */}
                <motion.div
                  className="flex items-center justify-center my-4"
                  animate={{ y: hovered === video.id ? -6 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-4xl">{video.emoji}</span>
                </motion.div>

                {/* Play button */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-[0_0_30px_rgba(244,183,64,0.3)]"
                    animate={{ scale: hovered === video.id ? 1.1 : 1 }}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={{ opacity: hovered === video.id ? 1 : 0.7 }}
                      className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                    >
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Title */}
                <div>
                  <div className="text-white font-bold text-sm leading-snug mb-0.5">{video.title}</div>
                  <div className="text-white/55 text-xs">{video.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Subscription note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#475569] text-sm mt-8"
        >
          More installation videos available on our{" "}
          <a href="#" className="text-[#0B3D2E] font-semibold hover:underline">YouTube channel</a>
        </motion.p>
      </div>
    </section>
  )
}
