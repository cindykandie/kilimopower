"use client"
import { motion } from "framer-motion"
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react"
import { stagger, fadeUp } from "@/lib/animations"

const contacts = [
  {
    id: "whatsapp",
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: "Fastest response",
    value: "+254 707 686 192",
    href: "https://wa.me/254707686192?text=Hi! I'd like to talk to a farm power expert",
    external: true,
    accent: "#22C55E",
    bg: "bg-[#22C55E]/10",
    iconBg: "bg-[#22C55E]",
  },
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    sublabel: "Call us directly",
    value: "+254 707 686 192",
    href: "tel:+254707686192",
    external: false,
    accent: "#F4B740",
    bg: "bg-[#F4B740]/10",
    iconBg: "bg-[#F4B740]",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    sublabel: "We reply within 24hrs",
    value: "morkaenterprises@gmail.com",
    href: "mailto:morkaenterprises@gmail.com",
    external: false,
    accent: "#3b82f6",
    bg: "bg-blue-500/10",
    iconBg: "bg-blue-500",
  },
  {
    id: "showroom",
    icon: MapPin,
    label: "Showroom",
    sublabel: "Visit us in person",
    value: "Nairobi, Kenya",
    detail: "Mon – Sat: 8:00am – 6:00pm",
    href: null,
    external: false,
    accent: "#0B3D2E",
    bg: "bg-[#0B3D2E]/8",
    iconBg: "bg-[#0B3D2E]",
  },
]

export default function ReachDirectly() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-[#F0F0EE]">
      <div className="max-w-5xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">
            Direct Contact
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Reach Us{" "}
            <span className="text-[#0B3D2E]">Directly</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid sm:grid-cols-2 gap-4"
        >
          {contacts.map((c) => {
            const Inner = (
              <motion.div
                key={c.id}
                variants={fadeUp}
                className={`flex items-start gap-4 p-5 rounded-2xl border border-[#E8E8E5] hover:border-[#0B3D2E]/20 hover:shadow-[0_4px_24px_rgba(11,61,46,0.08)] transition-all duration-300 ${c.bg} group`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${c.iconBg}`}>
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#475569] text-xs font-medium mb-0.5">{c.label}</p>
                  <p
                    className="text-[#0F172A] font-bold text-base break-all leading-snug"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    {c.value}
                  </p>
                  {c.detail && (
                    <p className="flex items-center gap-1.5 text-[#475569] text-xs mt-1.5">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                      {c.detail}
                    </p>
                  )}
                  {!c.detail && (
                    <p className="text-[#475569] text-xs mt-1">{c.sublabel}</p>
                  )}
                </div>
              </motion.div>
            )

            return c.href ? (
              <a
                key={c.id}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="block"
              >
                {Inner}
              </a>
            ) : (
              <div key={c.id}>{Inner}</div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
