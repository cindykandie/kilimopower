"use client"
import { motion } from "framer-motion"
import { MessageCircle, Phone, Package, Handshake, ArrowRight } from "lucide-react"
import { fadeUp, stagger, scaleIn } from "@/lib/animations"

const PHONE = "+254 707 768 6192"
const WA_BASE = "https://wa.me/254707686192"

const options = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    title: "WhatsApp Support",
    subtitle: "Fastest response",
    description: "Message our team directly and get answers about products, delivery, pricing, and installation within minutes.",
    badge: "Most Popular",
    badgeColor: "#22C55E",
    gradient: "from-[#0B3D2E] to-[#14532D]",
    accentColor: "#22C55E",
    cta: "Chat Now",
    href: `${WA_BASE}?text=Hi! I need help with a farm power solution`,
    external: true,
  },
  {
    id: "phone",
    icon: Phone,
    title: "Phone Consultation",
    subtitle: "Speak directly with our team",
    description: "Prefer talking? Call us on +254 707 768 6192. Our agricultural consultants are available weekdays 8am–6pm.",
    badge: undefined,
    badgeColor: "#F4B740",
    gradient: "from-[#1e3a5f] to-[#1e4d82]",
    accentColor: "#F4B740",
    cta: "Call Now",
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    external: false,
  },
  {
    id: "distributor",
    icon: Handshake,
    title: "Distributor Requests",
    subtitle: "Become a Kilimo Power partner",
    description: "Interested in distributing our products? We partner with retailers, agrovets, and distributors across Kenya.",
    badge: "Now Open",
    badgeColor: "#F4B740",
    gradient: "from-[#78350f] to-[#92400e]",
    accentColor: "#F4B740",
    cta: "Become a Partner",
    href: `${WA_BASE}?text=Hi, I'm interested in becoming a Kilimo Power distributor`,
    external: true,
  },
  {
    id: "recommendation",
    icon: Package,
    title: "Product Recommendations",
    subtitle: "Get help choosing the right setup",
    description: "Tell us your farm size, crop type, water source, and challenges — we'll recommend the exact solution for free.",
    badge: undefined,
    badgeColor: "#22C55E",
    gradient: "from-[#14532D] to-[#15803d]",
    accentColor: "#22C55E",
    cta: "Get Recommendation",
    href: `${WA_BASE}?text=Hi, I'd like a free farm product recommendation`,
    external: true,
  },
]

export default function ContactOptions() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">How To Reach Us</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Choose How You{" "}
            <span className="text-[#0B3D2E]">Want To Connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {options.map((opt, i) => (
            <motion.a
              key={opt.id}
              href={opt.href}
              target={opt.external ? "_blank" : undefined}
              rel={opt.external ? "noopener noreferrer" : undefined}
              variants={scaleIn}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl flex flex-col"
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${opt.gradient} transition-transform duration-500 group-hover:scale-[1.03]`} />
              <div className="absolute inset-0 grain opacity-35 pointer-events-none" />

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${opt.accentColor}18 0%, transparent 65%)` }}
              />

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col gap-4 min-h-[280px]">
                {/* Badge */}
                {opt.badge && (
                  <div className="self-start">
                    <span
                      className="text-[10px] font-bold rounded-full px-2.5 py-1"
                      style={{ background: `${opt.badgeColor}25`, color: opt.badgeColor }}
                    >
                      {opt.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${opt.accentColor}20`, border: `1px solid ${opt.accentColor}25` }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  <opt.icon className="w-6 h-6" style={{ color: opt.accentColor }} />
                </motion.div>

                {/* Title */}
                <div className="flex-1">
                  <p className="text-white/50 text-xs mb-1">{opt.subtitle}</p>
                  <h3
                    className="text-white font-bold text-lg leading-snug mb-2"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {opt.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{opt.description}</p>
                </div>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3"
                  style={{ color: opt.accentColor }}
                >
                  {opt.cta}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
