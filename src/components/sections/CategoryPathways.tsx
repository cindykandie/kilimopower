"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { categories } from "@/data/categories"
import { stagger, fadeUp } from "@/lib/animations"

export default function CategoryPathways() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-12 md:mb-16"
        >
          <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">
            What Are You Looking For?
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            Solutions Built{" "}
            <span className="text-[#0B3D2E]">For Your Farm</span>
          </h2>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, 4-col then 3-col wrapping on desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:overflow-visible md:pb-0 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={fadeUp} className="snap-start flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto">
              <Link href={cat.href} className="block group">
                <div
                  className={`relative h-[280px] md:h-[300px] rounded-3xl overflow-hidden border ${cat.border} transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]`}
                >
                  {/* Gradient bg */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${cat.gradient}`} />

                  {/* Grain */}
                  <div className="absolute inset-0 grain opacity-60 pointer-events-none" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                    {/* Emoji bubble */}
                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl shadow-lg">
                      {cat.emoji}
                    </div>

                    <div>
                      <h3
                        className="text-white text-xl font-bold mb-2 leading-tight tracking-tight"
                        style={{ fontFamily: "var(--font-satoshi)" }}
                      >
                        {cat.title}
                      </h3>
                      {cat.subcategories && (
                        <ul className="space-y-0.5 mb-3">
                          {cat.subcategories.slice(0, 3).map((sub) => (
                            <li key={sub} className="text-white/55 text-xs flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0" />
                              {sub}
                            </li>
                          ))}
                          {cat.subcategories.length > 3 && (
                            <li className="text-white/40 text-xs pl-2.5">+{cat.subcategories.length - 3} more</li>
                          )}
                        </ul>
                      )}
                      <div className="flex items-center gap-2 text-[#F4B740] text-xs font-semibold group-hover:gap-3 transition-all">
                        Shop now <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Single CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#14532D] text-white font-semibold rounded-2xl px-8 py-4 text-base transition-all"
          >
            Browse All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
