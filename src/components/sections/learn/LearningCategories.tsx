"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { learningCategories } from "@/data/learn"
import { fadeUp, stagger, scaleIn } from "@/lib/animations"

export default function LearningCategories() {
  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12 md:mb-14"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Browse By Topic</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            What Do You Want{" "}
            <span className="text-[#0B3D2E]">To Learn?</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {learningCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} transition-transform duration-500 group-hover:scale-[1.04]`} />
              <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

              {/* Animated glow orb */}
              <motion.div
                className="absolute top-[-30%] right-[-20%] w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: `radial-gradient(circle, ${cat.accentColor}25 0%, transparent 70%)` }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Content */}
              <div className="relative z-10 p-5 flex flex-col gap-3 min-h-[180px]">
                {/* Emoji + count */}
                <div className="flex items-start justify-between">
                  <motion.div
                    className="text-3xl"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    {cat.emoji}
                  </motion.div>
                  <span
                    className="text-[10px] font-bold rounded-full px-2 py-0.5"
                    style={{ background: `${cat.accentColor}20`, color: cat.accentColor }}
                  >
                    {cat.articleCount} articles
                  </span>
                </div>

                {/* Title + description */}
                <div className="mt-auto">
                  <h3
                    className="text-white font-bold text-base mb-1 leading-tight"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="text-white/55 text-xs leading-relaxed">{cat.description}</p>
                </div>

                {/* Arrow on hover */}
                <motion.div
                  className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: cat.accentColor }}
                >
                  <span className="text-xs font-semibold">Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
