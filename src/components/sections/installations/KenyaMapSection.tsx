"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X, Package, TrendingDown } from "lucide-react"
import { mapPins } from "@/data/solutions"
import { fadeUp } from "@/lib/animations"

export default function KenyaMapSection() {
  const [activePin, setActivePin] = useState<string | null>("nairobi")

  const active = mapPins.find((p) => p.id === activePin)

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Nationwide Coverage</p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            We&apos;ve Installed Across{" "}
            <span className="text-[#0B3D2E]">Every Region</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Click any county to see installations, products deployed, and average savings.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Map container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Map background */}
            <div className="relative bg-gradient-to-br from-[#F7F7F5] to-[#eef2ee] rounded-3xl border border-black/[0.06] overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(#0B3D2E 1px, transparent 1px), linear-gradient(90deg, #0B3D2E 1px, transparent 1px)",
                  backgroundSize: "40px 40px"
                }}
              />

              {/* Subtle Kenya outline shape */}
              <svg
                viewBox="0 0 500 460"
                className="absolute inset-0 w-full h-full"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Simplified Kenya silhouette */}
                <path
                  d="M 175 35 L 195 18 L 260 12 L 330 22 L 390 80 L 415 145 L 425 210 L 415 270 L 395 325 L 365 385 L 325 430 L 280 445 L 245 440 L 210 425 L 175 400 L 145 365 L 110 330 L 85 285 L 72 240 L 68 200 L 75 162 L 90 135 L 115 112 L 130 82 L 155 52 Z"
                  fill="#0B3D2E"
                  fillOpacity="0.06"
                  stroke="#0B3D2E"
                  strokeOpacity="0.15"
                  strokeWidth="1.5"
                />
                {/* Lake Victoria notch */}
                <path
                  d="M 68 200 L 72 240 L 85 285 L 110 330 L 80 310 L 60 270 L 55 235 L 62 205 Z"
                  fill="#1e3a5f"
                  fillOpacity="0.12"
                  stroke="#1e3a5f"
                  strokeOpacity="0.2"
                  strokeWidth="1"
                />
              </svg>

              {/* Glow center */}
              <div
                className="absolute inset-[20%] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(11,61,46,0.05) 0%, transparent 70%)" }}
              />

              {/* Connection lines between featured pins */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {mapPins.filter(p => p.featured).map((pin, i, arr) => {
                  const next = arr[(i + 1) % arr.length]
                  return (
                    <motion.line
                      key={pin.id}
                      x1={`${pin.x}%`} y1={`${pin.y}%`}
                      x2={`${next.x}%`} y2={`${next.y}%`}
                      stroke="#22C55E"
                      strokeOpacity="0.15"
                      strokeWidth="0.3"
                      strokeDasharray="1 2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: i * 0.3 }}
                    />
                  )
                })}
              </svg>

              {/* Map pins */}
              {mapPins.map((pin) => {
                const isActive = activePin === pin.id
                return (
                  <motion.button
                    key={pin.id}
                    onClick={() => setActivePin(isActive ? null : pin.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Pulse ring for featured */}
                    {pin.featured && (
                      <motion.div
                        className="absolute inset-0 -m-3 rounded-full"
                        style={{ background: "rgba(34,197,94,0.15)" }}
                        animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                      />
                    )}

                    <div
                      className={`relative w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
                        isActive ? "scale-125 shadow-[0_0_0_3px_rgba(34,197,94,0.4)]" : "shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
                      }`}
                      style={{
                        background: isActive ? "#22C55E" : "white",
                      }}
                    >
                      <MapPin
                        className="w-4 h-4 transition-colors"
                        style={{ color: isActive ? "white" : "#0B3D2E" }}
                      />
                    </div>

                    {/* County label */}
                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span
                        className={`text-[9px] font-bold rounded-full px-1.5 py-0.5 transition-all ${
                          isActive ? "bg-[#0B3D2E] text-white" : "bg-white/80 text-[#0B3D2E]"
                        }`}
                        style={{ backdropFilter: "blur(4px)" }}
                      >
                        {pin.county}
                      </span>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-4 justify-center">
              <div className="flex items-center gap-1.5 text-[#475569] text-xs">
                <div className="w-3 h-3 rounded-full bg-white border-2 border-[#0B3D2E]" />
                Installation point
              </div>
              <div className="flex items-center gap-1.5 text-[#475569] text-xs">
                <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
                High activity
              </div>
            </div>
          </motion.div>

          {/* Info panel */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-3xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${active.gradient}`} />
                  <div className="absolute inset-0 grain opacity-30 pointer-events-none" />

                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-bold">{active.county}</div>
                          <div className="text-white/50 text-xs">{active.installations} installations</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setActivePin(null)}
                        className="w-7 h-7 flex items-center justify-center bg-white/15 hover:bg-white/25 rounded-xl transition-colors"
                      >
                        <X className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="bg-white/10 border border-white/15 rounded-2xl p-4">
                        <div className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2">Products Deployed</div>
                        <div className="space-y-1.5">
                          {active.products.map((p) => (
                            <div key={p} className="flex items-center gap-2">
                              <Package className="w-3 h-3 text-white/50" />
                              <span className="text-white text-sm">{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-[#22C55E]/20 border border-[#22C55E]/25 rounded-2xl p-4">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-4 h-4 text-[#22C55E]" />
                          <div>
                            <div className="text-white/50 text-[10px]">Average Monthly Savings</div>
                            <div className="text-white font-bold">{active.savings}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-[#F7F7F5] rounded-3xl p-6 text-center"
                >
                  <MapPin className="w-8 h-8 text-[#475569]/40 mx-auto mb-3" />
                  <p className="text-[#475569] text-sm">Select a county on the map to view installation details</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* All counties list */}
            <div className="grid grid-cols-2 gap-2">
              {mapPins.map((pin) => (
                <button
                  key={pin.id}
                  onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                  className={`flex items-center gap-2 rounded-2xl px-3 py-2.5 text-left transition-all ${
                    activePin === pin.id
                      ? "bg-[#0B3D2E] text-white"
                      : "bg-[#F7F7F5] text-[#0F172A] hover:bg-[#0B3D2E]/8"
                  }`}
                >
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-xs">{pin.county}</div>
                    <div className={`text-[10px] ${activePin === pin.id ? "text-white/60" : "text-[#475569]"}`}>
                      {pin.installations} installs
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
