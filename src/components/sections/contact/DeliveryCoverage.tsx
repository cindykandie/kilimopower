"use client"
import { motion } from "framer-motion"
import { MapPin, Clock, Wrench, Package } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const allCounties = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Meru", "Nyeri", "Kiambu",
  "Machakos", "Kakamega", "Kisii", "Garissa", "Embu", "Muranga", "Laikipia",
  "Nyandarua", "Kirinyaga", "Tharaka-Nithi", "Isiolo", "Marsabit", "Mandera",
  "Wajir", "Turkana", "West Pokot", "Samburu", "Trans-Nzoia", "Uasin Gishu",
  "Elgeyo-Marakwet", "Nandi", "Baringo", "Siaya", "Homa Bay", "Migori",
  "Nyamira", "Kericho", "Bomet", "Vihiga", "Bungoma", "Busia",
  "Kajiado", "Makueni", "Kitui", "Taita-Taveta", "Kwale", "Kilifi", "Tana River", "Lamu",
]

const deliveryZones = [
  { zone: "Nairobi & Central", counties: ["Nairobi", "Kiambu", "Muranga", "Nyeri", "Kirinyaga"], eta: "1–2 days", install: true },
  { zone: "Rift Valley", counties: ["Nakuru", "Eldoret", "Laikipia", "Baringo"], eta: "1–3 days", install: true },
  { zone: "Nyanza & Western", counties: ["Kisumu", "Kakamega", "Kisii", "Homa Bay"], eta: "2–4 days", install: true },
  { zone: "Eastern & Coast", counties: ["Meru", "Machakos", "Mombasa", "Garissa"], eta: "2–5 days", install: false },
]

const coverageStats = [
  { icon: MapPin, value: "47", label: "Counties Covered", color: "#22C55E" },
  { icon: Clock, value: "1–5", label: "Days Delivery", color: "#F4B740" },
  { icon: Wrench, value: "30+", label: "Install Counties", color: "#22C55E" },
  { icon: Package, value: "1,200+", label: "Orders Delivered", color: "#F4B740" },
]

export default function DeliveryCoverage() {
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
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Delivery Coverage</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Nationwide Delivery Across{" "}
            <span className="text-[#0B3D2E]">All 47 Counties</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            No county is too far. We&apos;ve delivered to Turkana, Mandera, Lamu, and everywhere in between.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {coverageStats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex items-center gap-4 bg-[#F7F7F5] rounded-3xl p-5"
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}15` }}>
                <s.icon className="w-6 h-6" style={{ color: s.color }} />
              </div>
              <div>
                <div className="text-[#0F172A] font-bold text-xl" style={{ fontFamily: "var(--font-satoshi)" }}>{s.value}</div>
                <div className="text-[#475569] text-xs">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Delivery zones */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 gap-4"
          >
            {deliveryZones.map((zone) => (
              <motion.div
                key={zone.zone}
                variants={fadeUp}
                className="bg-[#F7F7F5] rounded-3xl p-5 hover:shadow-[0_8px_32px_rgba(11,61,46,0.08)] transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#0F172A] font-bold text-sm">{zone.zone}</h3>
                  <span className={`text-[10px] font-bold rounded-full px-2.5 py-1 ${zone.install ? "bg-[#22C55E]/10 text-[#22C55E]" : "bg-[#F7F7F5] border border-black/[0.08] text-[#475569]"}`}>
                    {zone.install ? "Install Available" : "Delivery Only"}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#F4B740]" />
                  <span className="text-[#0B3D2E] font-semibold text-sm">{zone.eta}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {zone.counties.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1 bg-white border border-black/[0.06] text-[#475569] text-[10px] rounded-full px-2 py-0.5">
                      <MapPin className="w-2 h-2" />
                      {c}
                    </span>
                  ))}
                  <span className="text-[#475569] text-[10px] self-center">+ more</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* All counties grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F7F7F5] rounded-3xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-[#22C55E]" />
              <h3 className="text-[#0F172A] font-bold text-sm">All 47 Counties</h3>
            </div>
            <div className="flex flex-wrap gap-1.5 max-h-[320px] overflow-y-auto">
              {allCounties.map((county, idx) => (
                <span
                  key={`${county}-${idx}`}
                  className="text-[10px] bg-white border border-black/[0.06] text-[#475569] rounded-full px-2.5 py-1 hover:bg-[#0B3D2E] hover:text-white hover:border-transparent transition-all cursor-default"
                >
                  {county}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-black/[0.06]">
              <p className="text-[#475569] text-xs leading-relaxed">
                Don&apos;t see your county? We still deliver there. Message us to confirm.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
