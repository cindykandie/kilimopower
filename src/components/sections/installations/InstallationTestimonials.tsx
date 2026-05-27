"use client"
import { motion } from "framer-motion"
import { Star, MapPin, Package } from "lucide-react"
import { testimonials } from "@/data/testimonials"
import { fadeUp, stagger } from "@/lib/animations"

const extended = [
  ...testimonials,
  {
    id: "5",
    name: "David Kariuki",
    county: "Nyeri County",
    rating: 5,
    quote: "The farm tiller replaced 5 labourers. I now till 2 acres in a morning by myself. The ROI was under 4 months.",
    initials: "DK",
    avatarBg: "#14532D",
    product: "Farm Tiller",
  },
  {
    id: "6",
    name: "Sarah Adhiambo",
    county: "Kakamega County",
    rating: 5,
    quote: "Nationwide delivery is real — I'm in Kakamega and my pump arrived in 3 days. They even called to confirm it was working.",
    initials: "SA",
    avatarBg: "#0B3D2E",
    product: "Solar Irrigation Pump",
  },
]

export default function InstallationTestimonials() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Farmer Voices</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Heard Across{" "}
            <span className="text-[#0B3D2E]">Kenya</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-lg mx-auto">
            Every testimonial is from a verified Kilimo Power customer.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {extended.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-3xl p-6 flex flex-col gap-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_36px_rgba(11,61,46,0.12)] transition-shadow duration-300 ${
                i === 0 ? "md:col-span-1 lg:col-span-1 ring-2 ring-[#22C55E]/20" : ""
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < t.rating ? "fill-[#F4B740] text-[#F4B740]" : "text-[#475569]/20"}`} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#0F172A] text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Product badge */}
              <div className="inline-flex items-center gap-1.5 bg-[#0B3D2E]/8 text-[#0B3D2E] text-xs font-medium rounded-xl px-3 py-1.5 self-start">
                <Package className="w-3 h-3" />
                {t.product}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[#0F172A] font-semibold">{t.name}</div>
                  <div className="flex items-center gap-1 text-[#475569] text-xs">
                    <MapPin className="w-3 h-3" />
                    {t.county}
                  </div>
                </div>
                {i === 0 && (
                  <div className="ml-auto inline-flex items-center gap-1 bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-bold rounded-full px-2 py-0.5">
                    ✓ Verified
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
