"use client"
import { motion } from "framer-motion"
import { Truck, CreditCard, Shield, Phone, Award, Wrench } from "lucide-react"
import { stagger, fadeUp } from "@/lib/animations"

const items = [
  { icon: CreditCard, label: "Pay After Delivery", sub: "Zero risk — pay when satisfied", color: "#22C55E" },
  { icon: Truck, label: "Nationwide Delivery", sub: "All 47 counties covered", color: "#0B3D2E" },
  { icon: Award, label: "M-Pesa Accepted", sub: "Fast, familiar, trusted", color: "#F4B740" },
  { icon: Phone, label: "Expert Support", sub: "Call or WhatsApp anytime", color: "#14532D" },
  { icon: Shield, label: "Genuine Products", sub: "Direct from manufacturers", color: "#0B3D2E" },
  { icon: Wrench, label: "1-Year Warranty", sub: "Covered parts & labour", color: "#22C55E" },
]

export default function TrustStrip() {
  return (
    <section className="bg-[#F7F7F5] py-14 md:py-20 border-y border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {items.map(({ icon: Icon, label, sub, color }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="flex flex-col items-center text-center p-4 bg-white rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(11,61,46,0.1)] transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: `${color}18` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div className="text-[#0F172A] font-semibold text-sm mb-0.5">{label}</div>
              <div className="text-[#475569] text-xs leading-tight">{sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
