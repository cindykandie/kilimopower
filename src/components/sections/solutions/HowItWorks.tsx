"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { MessageCircle, Package, Wrench, ChevronRight } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell Us Your Challenge",
    description: "Message us on WhatsApp with your farm size, water source, crop type, and the problem you're facing. No forms, no waiting.",
    accent: "#22C55E",
    pill: "Takes 2 minutes",
  },
  {
    number: "02",
    icon: Package,
    title: "We Recommend the Right Setup",
    description: "Our agricultural consultants analyse your situation and recommend the exact solution — products, specs, and expected ROI. Free, no commitment.",
    accent: "#F4B740",
    pill: "Response in 30 minutes",
  },
  {
    number: "03",
    icon: Wrench,
    title: "We Deliver Nationwide",
    description: "Your solution arrives in 1–5 days, anywhere in Kenya. Pay after delivery and inspection. Our team supports installation too.",
    accent: "#22C55E",
    pill: "All 47 counties",
  },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061a0f] via-[#0B3D2E] to-[#14532D]" />
      <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

      {/* Orbs */}
      <motion.div
        className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.1) 0%, transparent 65%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Getting Started Is{" "}
            <span className="text-[#F4B740]">Simple</span>
          </h2>
          <p className="text-white/55 text-lg max-w-lg mx-auto">
            Three steps from problem to powered farm — and we handle everything.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div key={step.number} variants={fadeUp} className="group relative">
                {/* Connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[22px] top-[52px] w-0.5 h-[calc(100%+8px)] pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)" }}
                  />
                )}

                <div className="flex gap-5 items-start">
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center border border-white/15"
                    style={{ background: `${step.accent}20` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.accent }} />
                  </motion.div>

                  <div className="flex-1 bg-white/6 hover:bg-white/10 border border-white/10 rounded-3xl p-5 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-white/30 text-xs font-bold">{step.number}</span>
                        <h3 className="text-white font-bold text-base">{step.title}</h3>
                      </div>
                      <span
                        className="hidden sm:block text-[10px] font-semibold rounded-full px-2.5 py-1"
                        style={{ background: `${step.accent}20`, color: step.accent }}
                      >
                        {step.pill}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA button */}
            <motion.div variants={fadeUp} className="pl-16">
              <a
                href="https://wa.me/254707686192?text=Hi! I'd like to get started with a free farm consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl px-7 py-4 shadow-[0_4px_32px_rgba(34,197,94,0.4)] transition-all btn-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Start Now — It&apos;s Free
                <ChevronRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Mascot + floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center h-[420px] hidden lg:flex"
          >
            {/* Glow rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full border border-[#22C55E]/15" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-[#F4B740]/10" />
            </div>

            {/* Mascot */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="/femalembuzi.png"
                alt="Kilimo Power guide"
                width={200}
                height={280}
                className="object-contain drop-shadow-2xl"
                style={{ height: "280px", width: "auto" }}
              />
            </motion.div>

            {/* Floating step cards */}
            {[
              { label: "Step 1 Complete", sub: "Challenge understood", delay: 0.4, pos: "top-6 left-0" },
              { label: "Recommendation Ready", sub: "Best solution found", delay: 0.7, pos: "bottom-10 right-0" },
            ].map((card) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay, duration: 0.6 }}
                animate={{ y: [0, -5, 0] }}
                className={`absolute ${card.pos} bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.25)] z-20 min-w-[160px]`}
              >
                <div className="text-[#0B3D2E] font-bold text-sm mb-0.5">{card.label}</div>
                <div className="text-[#22C55E] text-xs font-medium">{card.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
