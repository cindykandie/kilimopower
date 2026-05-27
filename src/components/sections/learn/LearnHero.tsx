"use client"
import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, Play, Flame, Clock } from "lucide-react"
import { featuredArticles, trendingTopics } from "@/data/learn"
import { fadeUp, stagger } from "@/lib/animations"

const stats = [
  { value: "50+", label: "Guides & Articles" },
  { value: "12K+", label: "Farmers Reached" },
  { value: "Free", label: "Always Free" },
]

export default function LearnHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const mascotY = useTransform(scrollYProgress, [0, 1], [0, -25])

  const topThree = trendingTopics.slice(0, 3)
  const heroArticles = featuredArticles.slice(0, 3)

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <motion.div style={{ y: contentY }} initial="hidden" animate="visible" variants={stagger}>
            {/* Label */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#F4B740]/15 border border-[#F4B740]/25 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#F4B740]" />
              <span className="text-[#F4B740] text-sm font-semibold">Kilimo Power Learning Hub</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.06] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Learn Smarter Farming{" "}
              <span className="text-[#F4B740]">&amp; Power Solutions.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Guides, insights and practical advice for modern Kenyan farmers — always free, always useful.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
              <a
                href="#articles"
                className="inline-flex items-center gap-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 shadow-[0_4px_28px_rgba(34,197,94,0.4)] transition-all btn-lift"
              >
                <BookOpen className="w-5 h-5" />
                Explore Articles
              </a>
              <a
                href="#videos"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl px-7 py-4 transition-all"
              >
                <Play className="w-4 h-4" />
                Watch Guides
              </a>
            </motion.div>

            {/* Trending topic pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {topThree.map((t) => (
                <div key={t.id} className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 rounded-full px-3.5 py-1.5">
                  {t.hot && <Flame className="w-3 h-3 text-orange-400" />}
                  <span className="text-white/70 text-xs font-medium">{t.label}</span>
                </div>
              ))}
              <div className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-white/40 text-xs">
                +7 more topics
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-satoshi)" }}>{s.value}</div>
                  <div className="text-white/50 text-xs">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: floating article cards + mascot */}
          <motion.div
            style={{ y: mascotY }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-end justify-center h-[560px]"
          >
            {/* Article cards */}
            <div className="absolute inset-0 flex flex-col gap-3 p-4">
              {heroArticles.map((article, i) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: -6, scale: 1.02 }}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${article.gradient} p-4 flex items-center gap-4 border border-white/10 flex-shrink-0`}
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  <div className="absolute inset-0 grain opacity-25 pointer-events-none" />
                  <div className="text-3xl relative z-10">{article.emoji}</div>
                  <div className="relative z-10 flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-white/50 text-[10px] font-semibold uppercase tracking-wider">{article.category}</span>
                      {article.tag && (
                        <span className="text-[#F4B740] text-[10px] font-bold">{article.tag}</span>
                      )}
                    </div>
                    <div className="text-white font-semibold text-sm leading-snug line-clamp-1">{article.title}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-white/40" />
                      <span className="text-white/40 text-xs">{article.readTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mascot overlay */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 right-[-10px] z-20"
            >
              <Image
                src="/malembuzi.png"
                alt="Kilimo Power learning guide"
                width={190}
                height={260}
                className="object-contain drop-shadow-2xl"
                style={{ height: "240px", width: "auto" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
