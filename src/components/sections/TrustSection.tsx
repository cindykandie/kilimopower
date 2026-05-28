"use client"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, CheckCircle, Shield, Truck, Clock } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { useCountUp } from "@/hooks/useCountUp"
import { stagger, fadeUp, scaleIn } from "@/lib/animations"

const stats = [
  { target: 500, suffix: "+", label: "Happy Farmers", icon: "👨‍🌾" },
  { target: 47, suffix: "", label: "Counties Served", icon: "📍" },
  { target: 1200, suffix: "+", label: "Products Delivered", icon: "📦" },
  { target: 5, suffix: " Yrs", label: "Trusted Experience", icon: "⭐" },
]

const badges = [
  { icon: Truck, label: "Free Nationwide Delivery", sub: "We deliver to all 47 counties" },
  { icon: CheckCircle, label: "Pay After Delivery", sub: "Zero risk — pay when satisfied" },
  { icon: Shield, label: "1-Year Warranty", sub: "Full support on all products" },
  { icon: Clock, label: "Same-Day WhatsApp Support", sub: "Experts respond in minutes" },
]

function StatCounter({ target, suffix, label, icon }: (typeof stats)[0]) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const count = useCountUp(target, 1800, inView)

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      className="text-center bg-white rounded-3xl p-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div
        className="text-4xl md:text-5xl font-bold text-[#0B3D2E] mb-1"
        style={{ fontFamily: "var(--font-satoshi)" }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-[#475569] text-sm font-medium">{label}</div>
    </motion.div>
  )
}

export default function TrustSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">
            Why Farmers Choose Us
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Real Farmers.{" "}
            <span className="text-[#0B3D2E]">Real Results.</span>
          </h2>
        </motion.div>

        {/* Stats counters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 md:mb-20"
        >
          {stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </motion.div>

        {/* PAD Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B3D2E] to-[#14532D] p-8 md:p-12 mb-16 md:mb-20 grain"
        >
          <div
            className="absolute top-[-40%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(244,183,64,0.2) 0%, transparent 65%)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F4B740]/20 border border-[#F4B740]/30 rounded-full px-4 py-1.5 mb-4">
                <Shield className="w-4 h-4 text-[#F4B740]" />
                <span className="text-[#F4B740] text-sm font-semibold">Zero-Risk Guarantee</span>
              </div>
              <h3
                className="text-white text-3xl md:text-4xl font-bold mb-3 tracking-tight"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Payment After Delivery
              </h3>
              <p className="text-white/70 text-lg max-w-lg">
                We deliver first. You inspect, test, and confirm your product works — then you pay. No risk, no regret.
              </p>
            </div>
            <a
              href="https://wa.me/254700000000?text=Hi, I'd like to order with payment after delivery"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#F4B740] hover:bg-[#e6a830] text-[#0F172A] font-bold rounded-2xl px-7 py-4 text-base shadow-[0_4px_24px_rgba(244,183,64,0.4)] transition-all btn-lift"
            >
              Order Now — Pay Later
            </a>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-20"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.label}
              variants={fadeUp}
              className="flex items-start gap-4 bg-[#F7F7F5] rounded-3xl p-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0B3D2E]/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-[#0B3D2E]" />
              </div>
              <div>
                <div className="text-[#0F172A] font-semibold text-sm mb-0.5">{badge.label}</div>
                <div className="text-[#475569] text-xs">{badge.sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-[#F7F7F5] rounded-3xl p-6 md:p-8 hover:shadow-[0_8px_32px_rgba(11,61,46,0.1)] transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F4B740] text-[#F4B740]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#0F172A] text-base leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Farmer */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#0F172A] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#475569] text-xs">{t.county}</div>
                </div>
                <div className="ml-auto">
                  <div className="bg-[#0B3D2E]/10 text-[#0B3D2E] text-xs font-medium rounded-full px-3 py-1">
                    {t.product}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
