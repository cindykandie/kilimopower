"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { MapPin } from "lucide-react"
import { useCountUp } from "@/hooks/useCountUp"
import { fadeUp, stagger } from "@/lib/animations"

const countyTags = ["Nakuru", "Kisumu", "Meru", "Eldoret", "Nyeri", "Kakamega", "Machakos", "Nairobi", "Garissa", "Mombasa", "Kiambu", "Embu"]

const stats = [
  { target: 1200, suffix: "+", label: "Systems Installed" },
  { target: 47, suffix: "", label: "Counties Served" },
  { target: 500, suffix: "+", label: "Active Farmers" },
  { target: 98, suffix: "%", label: "Satisfaction Rate" },
]

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const count = useCountUp(target, 2200, true)
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-satoshi)" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/50 text-xs mt-0.5">{label}</div>
    </div>
  )
}

const collageItems = [
  { emoji: "☀️", label: "Solar Pump", county: "Nakuru", gradient: "from-[#0B3D2E] to-[#14532D]", delay: 0 },
  { emoji: "🔋", label: "Backup Kit", county: "Kisumu", gradient: "from-[#1e1b4b] to-[#2e2875]", delay: 0.15 },
  { emoji: "💧", label: "Drip System", county: "Meru", gradient: "from-[#14532D] to-[#15803d]", delay: 0.3 },
  { emoji: "🐔", label: "Incubator", county: "Kiambu", gradient: "from-[#7f1d1d] to-[#991b1b]", delay: 0.1 },
  { emoji: "🚜", label: "Farm Tiller", county: "Eldoret", gradient: "from-[#78350f] to-[#92400e]", delay: 0.25 },
  { emoji: "🌊", label: "Rain Gun", county: "Machakos", gradient: "from-[#1e3a5f] to-[#1e4d82]", delay: 0.4 },
]

export default function InstallationsHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating county tags (background decoration) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {countyTags.map((county, i) => (
          <motion.div
            key={county}
            className="absolute inline-flex items-center gap-1.5 bg-white/6 border border-white/10 rounded-full px-3 py-1.5 text-white/40 text-xs"
            style={{
              top: `${10 + (i * 73) % 80}%`,
              left: `${(i * 97) % 100}%`,
              transform: "translateX(-50%)",
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          >
            <MapPin className="w-2.5 h-2.5" />
            {county}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            style={{ y: contentY }}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#F4B740]/15 border border-[#F4B740]/25 rounded-full px-4 py-2 mb-6 self-start">
              <MapPin className="w-3.5 h-3.5 text-[#F4B740]" />
              <span className="text-[#F4B740] text-sm font-semibold">Real Installations Across Kenya</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Trusted by Farmers{" "}
              <span className="text-[#F4B740]">Across Kenya.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              From Nakuru to Kisumu to Meru — 1,200+ installations and counting. Every system backed by our full support team.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Installation collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:grid grid-cols-3 gap-3 h-[480px]"
          >
            {collageItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.03 }}
                className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} flex flex-col justify-between p-4 border border-white/10 cursor-pointer`}
              >
                <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1 bg-white/15 border border-white/20 text-white text-[9px] rounded-full px-2 py-0.5 mb-3">
                    <MapPin className="w-2 h-2" />
                    {item.county}
                  </div>
                </div>
                <motion.div
                  className="text-3xl relative z-10"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  {item.emoji}
                </motion.div>
                <div className="relative z-10">
                  <div className="text-white font-semibold text-xs">{item.label}</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
