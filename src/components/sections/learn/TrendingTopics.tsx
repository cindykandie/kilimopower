"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Flame, TrendingUp } from "lucide-react"
import { trendingTopics } from "@/data/learn"
import { fadeUp } from "@/lib/animations"

export default function TrendingTopics() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-white py-14 md:py-20 border-y border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex items-center gap-4 mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-3.5 py-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 text-sm font-semibold">Trending Now</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#475569] text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>What farmers are reading this week</span>
          </div>
        </motion.div>

        {/* Scrollable pill row */}
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trendingTopics.map((topic, i) => (
            <motion.button
              key={topic.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F7F7F5] hover:bg-[#0B3D2E] hover:text-white border border-black/[0.07] hover:border-transparent text-[#0F172A] rounded-2xl px-4 py-2.5 text-sm font-medium transition-all"
            >
              {topic.hot && <Flame className="w-3.5 h-3.5 text-orange-400" />}
              {topic.label}
              <span className="text-[10px] opacity-60 font-normal">
                {topic.count >= 1000 ? `${(topic.count / 1000).toFixed(1)}k` : topic.count}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
