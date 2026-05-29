"use client"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, MessageCircle, Check, ChevronRight } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

export default function NewsletterCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.12) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.1) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#22C55E]/15 border border-[#22C55E]/25 rounded-full px-4 py-2 mb-6">
              <Mail className="w-3.5 h-3.5 text-[#22C55E]" />
              <span className="text-[#22C55E] text-sm font-semibold">Weekly Farm Tips</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Get Weekly Farming{" "}
              <span className="text-[#F4B740]">&amp; Power Tips.</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
              Join Kenya&apos;s growing community of smarter farmers. One useful email per week — no fluff.
            </motion.p>

            {/* Email form */}
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  variants={fadeUp}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 mb-6"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full bg-white/10 border border-white/20 backdrop-blur-sm text-white placeholder:text-white/40 rounded-2xl pl-11 pr-4 py-4 text-sm outline-none focus:border-[#22C55E]/50 focus:ring-2 focus:ring-[#22C55E]/20 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 shadow-[0_4px_24px_rgba(34,197,94,0.4)] transition-all btn-lift whitespace-nowrap"
                  >
                    Subscribe
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 bg-[#22C55E]/20 border border-[#22C55E]/30 rounded-2xl px-5 py-4 mb-6"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#22C55E] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">You&apos;re in!</div>
                    <div className="text-white/60 text-sm">First tip lands in your inbox this week.</div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* WhatsApp alternative */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-white/40 text-xs">or</span>
              <div className="flex-1 h-px bg-white/10" />
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="https://wa.me/254707686192?text=Hi, I'd like to get weekly farm tips from Kilimo Power"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-2xl px-6 py-3.5 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#22C55E]" />
              Get Tips on WhatsApp Instead
            </motion.a>
          </motion.div>

          {/* Right: mascot + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[380px] hidden lg:flex items-end justify-center"
          >
            <div className="absolute inset-[10%] rounded-full border border-[#22C55E]/15 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/femalembuzi.png"
                alt="Kilimo Power learning companion"
                width={200}
                height={280}
                className="object-contain drop-shadow-2xl"
                style={{ height: "260px", width: "auto" }}
              />
            </motion.div>

            {/* Floating card: latest article */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              animate={{ y: [0, -6, 0] }}
              className="absolute top-8 left-0 bg-white rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] max-w-[180px] z-20"
            >
              <div className="text-[#22C55E] text-xs font-bold mb-0.5">This Week</div>
              <div className="text-[#0B3D2E] font-bold text-sm leading-snug">5 Signs Your Pump Needs Upgrading</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              animate={{ y: [0, -7, 0] }}
              className="absolute bottom-10 right-0 bg-white rounded-2xl p-3.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20 flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-xl bg-[#22C55E]/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-[#22C55E]" />
              </div>
              <div>
                <div className="text-[#0F172A] font-semibold text-xs">12,000+ readers</div>
                <div className="text-[#475569] text-[10px]">Weekly newsletter</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
