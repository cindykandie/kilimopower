"use client"
import { motion } from "framer-motion"
import { MapPin, ArrowRight } from "lucide-react"
import { installations } from "@/data/installations"
import { stagger, fadeUp } from "@/lib/animations"

export default function InstallationShowcase() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-14"
        >
          <div>
            <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">
              Installations
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Real Installations{" "}
              <span className="text-[#0B3D2E]">Across Kenya</span>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-[#0B3D2E] font-semibold hover:gap-3 transition-all whitespace-nowrap self-start">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[200px]"
        >
          {installations.map((inst) => (
            <motion.div
              key={inst.id}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                inst.span === "wide"
                  ? "col-span-2"
                  : inst.span === "tall"
                  ? "row-span-2"
                  : ""
              }`}
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${inst.gradient} transition-transform duration-500 group-hover:scale-105`} />

              {/* Grain */}
              <div className="absolute inset-0 grain opacity-60 pointer-events-none" />

              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 z-10">
                <div className="flex items-center gap-1.5 text-white/80 text-xs mb-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {inst.county}
                </div>
                <div className="text-white font-semibold text-sm md:text-base leading-tight">
                  {inst.type}
                </div>
              </div>

              {/* Top badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-[#F4B740] text-[#0F172A] text-xs font-bold rounded-full px-2.5 py-1">
                  View →
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <p className="text-[#475569] mb-4 text-sm">
            We&apos;ve installed systems in 47 counties. Yours could be next.
          </p>
          <a
            href="https://wa.me/254700000000?text=Hi, I'd like to get an installation for my farm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#0B3D2E] text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white font-semibold rounded-2xl px-7 py-3.5 transition-all"
          >
            Get an Installation Quote
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
