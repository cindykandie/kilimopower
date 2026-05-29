"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ProductCard from "@/components/shared/ProductCard"
import { products } from "@/data/products"
import { stagger, fadeUp } from "@/lib/animations"

export default function FeaturedProducts() {
  return (
    <section className="bg-[#F7F7F5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16"
        >
          <div>
            <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">
              Featured Products
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Products That{" "}
              <span className="text-[#0B3D2E]">Work as Hard</span>
              <br />
              as You Do
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#0B3D2E] font-semibold hover:gap-3 transition-all whitespace-nowrap self-start sm:self-auto"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 text-center"
        >
          <p className="text-[#475569] mb-4">Not sure which product fits your farm?</p>
          <a
            href="https://wa.me/254707686192?text=Hi, I need help choosing a product for my farm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#14532D] text-white font-semibold rounded-2xl px-7 py-3.5 transition-all btn-lift shadow-[0_4px_20px_rgba(11,61,46,0.3)]"
          >
            Ask an Expert on WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
