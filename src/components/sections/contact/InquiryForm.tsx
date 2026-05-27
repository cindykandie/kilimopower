"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Phone, MapPin, Layers, MessageSquare, ChevronDown, Check, Send } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const COUNTIES = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Meru", "Nyeri", "Kiambu",
  "Machakos", "Kakamega", "Kisii", "Garissa", "Embu", "Thika", "Nakuru",
  "Other"
]

const INTERESTS = [
  "Solar Irrigation Pump", "Drip / Rain Gun Irrigation", "Backup Solar Kit",
  "Solar Egg Incubator", "Farm Tiller / Sprayer", "Generator", "Full Farm Setup", "Other"
]

const BUDGETS = [
  "Under KES 30,000", "KES 30,000 – 60,000", "KES 60,000 – 100,000",
  "KES 100,000 – 200,000", "Over KES 200,000", "Not sure yet"
]

const CHALLENGES = [
  "Irrigation & Water Access", "Power Outages (KPLC)", "High Labour Costs",
  "Poultry Power Issues", "Farm Mechanization", "Other"
]

interface FormState {
  name: string
  phone: string
  county: string
  farmSize: string
  challenge: string
  interest: string
  budget: string
  notes: string
}

function FloatingInput({ id, label, icon: Icon, type = "text", value, onChange, placeholder }: {
  id: string; label: string; icon: React.ElementType; type?: string; value: string;
  onChange: (v: string) => void; placeholder?: string
}) {
  const [focused, setFocused] = useState(false)
  const active = focused || value.length > 0

  return (
    <div className="relative">
      <div className={`relative flex items-center gap-3 bg-white border-2 rounded-2xl px-4 py-3.5 transition-all ${
        active ? "border-[#0B3D2E] shadow-[0_0_0_4px_rgba(11,61,46,0.08)]" : "border-black/[0.08] hover:border-black/20"
      }`}>
        <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${active ? "text-[#0B3D2E]" : "text-[#475569]"}`} />
        <div className="relative flex-1 pt-4">
          <label
            htmlFor={id}
            className={`absolute transition-all duration-200 pointer-events-none font-medium ${
              active
                ? "text-[10px] top-0 text-[#0B3D2E]"
                : "text-sm top-1/2 -translate-y-1/2 text-[#475569]"
            }`}
          >
            {label}
          </label>
          <input
            id={id}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={active ? placeholder : ""}
            className="w-full bg-transparent text-[#0F172A] text-sm outline-none leading-none pt-0.5"
          />
        </div>
      </div>
    </div>
  )
}

function FloatingSelect({ id, label, icon: Icon, options, value, onChange }: {
  id: string; label: string; icon: React.ElementType; options: string[]; value: string; onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const active = open || value.length > 0

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center gap-3 bg-white border-2 rounded-2xl px-4 py-3.5 transition-all text-left ${
          active ? "border-[#0B3D2E] shadow-[0_0_0_4px_rgba(11,61,46,0.08)]" : "border-black/[0.08] hover:border-black/20"
        }`}
      >
        <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${active ? "text-[#0B3D2E]" : "text-[#475569]"}`} />
        <div className="relative flex-1 pt-4">
          <span className={`absolute transition-all duration-200 font-medium ${
            active ? "text-[10px] top-0 text-[#0B3D2E]" : "text-sm top-1/2 -translate-y-1/2 text-[#475569]"
          }`}>
            {label}
          </span>
          <span className={`block text-sm pt-0.5 ${value ? "text-[#0F172A]" : "text-transparent"}`}>{value || "·"}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-[#475569] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-2xl border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden z-20"
          >
            <div className="max-h-52 overflow-y-auto">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { onChange(opt); setOpen(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-[#F7F7F5] transition-colors ${
                    value === opt ? "bg-[#0B3D2E]/8 text-[#0B3D2E] font-semibold" : "text-[#0F172A]"
                  }`}
                >
                  {value === opt && <Check className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />}
                  {value !== opt && <div className="w-3.5 h-3.5 flex-shrink-0" />}
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", county: "", farmSize: "",
    challenge: "", interest: "", budget: "", notes: ""
  })
  const [submitted, setSubmitted] = useState(false)

  function set(key: keyof FormState) {
    return (value: string) => setForm(f => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Hi! New inquiry from Kilimo Power website:\n\nName: ${form.name}\nPhone: ${form.phone}\nCounty: ${form.county}\nFarm Size: ${form.farmSize}\nChallenge: ${form.challenge}\nInterested In: ${form.interest}\nBudget: ${form.budget}\nNotes: ${form.notes}`
    window.open(`https://wa.me/254707768619?text=${encodeURIComponent(msg)}`, "_blank")
    setSubmitted(true)
  }

  return (
    <section id="form" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          {/* Left: context */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Send An Inquiry</p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight mb-5"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Tell Us About{" "}
                <span className="text-[#0B3D2E]">Your Farm</span>
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-8 max-w-md">
                Fill out this form and we&apos;ll send a tailored recommendation via WhatsApp — usually within 3 minutes.
              </p>
            </motion.div>

            {/* Process steps */}
            <motion.div variants={stagger} className="space-y-4">
              {[
                { n: "01", t: "You fill out the form", d: "Takes under 2 minutes." },
                { n: "02", t: "We review your needs", d: "Our team analyses your farm setup." },
                { n: "03", t: "You get a WhatsApp reply", d: "With exact product recommendations and pricing." },
              ].map((s) => (
                <motion.div key={s.n} variants={fadeUp} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-2xl bg-[#0B3D2E]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#0B3D2E] text-xs font-bold">{s.n}</span>
                  </div>
                  <div>
                    <div className="text-[#0F172A] font-semibold text-sm">{s.t}</div>
                    <div className="text-[#475569] text-sm">{s.d}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#F7F7F5] rounded-3xl p-6 md:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-3xl bg-[#22C55E] flex items-center justify-center mb-5 shadow-[0_8px_32px_rgba(34,197,94,0.3)]">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#0F172A] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-satoshi)" }}>
                    Inquiry Sent!
                  </h3>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    Your message was opened on WhatsApp. Our team will reply within minutes.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h3 className="text-[#0F172A] font-bold text-lg mb-2">Your Farm Details</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingInput id="name" label="Full Name" icon={User} value={form.name} onChange={set("name")} placeholder="John Mwangi" />
                    <FloatingInput id="phone" label="Phone Number" icon={Phone} type="tel" value={form.phone} onChange={set("phone")} placeholder="07xx xxx xxx" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingSelect id="county" label="Your County" icon={MapPin} options={COUNTIES} value={form.county} onChange={set("county")} />
                    <FloatingInput id="farmSize" label="Farm Size (acres)" icon={Layers} value={form.farmSize} onChange={set("farmSize")} placeholder="e.g. 2 acres" />
                  </div>

                  <FloatingSelect id="challenge" label="What challenge are you facing?" icon={MessageSquare} options={CHALLENGES} value={form.challenge} onChange={set("challenge")} />
                  <FloatingSelect id="interest" label="I'm interested in..." icon={Layers} options={INTERESTS} value={form.interest} onChange={set("interest")} />
                  <FloatingSelect id="budget" label="Budget Range" icon={Layers} options={BUDGETS} value={form.budget} onChange={set("budget")} />

                  {/* Notes textarea */}
                  <div className={`flex gap-3 bg-white border-2 rounded-2xl px-4 py-3.5 transition-all border-black/[0.08] hover:border-black/20`}>
                    <MessageSquare className="w-4 h-4 text-[#475569] flex-shrink-0 mt-0.5" />
                    <textarea
                      value={form.notes}
                      onChange={(e) => set("notes")(e.target.value)}
                      placeholder="Any additional notes... (optional)"
                      rows={3}
                      className="flex-1 bg-transparent text-[#0F172A] text-sm outline-none resize-none leading-relaxed placeholder:text-[#475569]/60"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl py-4 shadow-[0_4px_24px_rgba(34,197,94,0.3)] transition-all btn-lift"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-[#475569] text-xs">
                    This will open WhatsApp with your inquiry pre-filled
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
