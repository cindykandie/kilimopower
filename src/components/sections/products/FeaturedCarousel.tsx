"use client"
import { useRef } from "react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { MessageCircle, Star, ArrowLeft, ArrowRight, Zap, Tag } from "lucide-react"
import { allProducts } from "@/data/allProducts"
import { Product } from "@/types"
import { fadeUp } from "@/lib/animations"

function TiltCard({ product }: { product: Product }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
    glowOpacity.set(1)
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
    glowOpacity.set(0)
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="relative flex-shrink-0 w-[300px] md:w-[340px] bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.08)] cursor-pointer snap-start"
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-10"
        style={{
          opacity: glowOpacity,
          background: "radial-gradient(circle at 50% 0%, rgba(244,183,64,0.12) 0%, transparent 60%)",
          boxShadow: "0 0 40px rgba(11,61,46,0.15), inset 0 0 0 1px rgba(11,61,46,0.1)"
        }}
      />

      {/* Image area */}
      <div className="relative h-52 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-5xl shadow-2xl">
            {product.emoji ?? "🌿"}
          </div>
        </div>

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-[#F4B740] text-[#0F172A] text-xs font-bold rounded-full px-3 py-1 shadow-md z-20">
            <Tag className="w-3 h-3" />
            {product.badge}
          </div>
        )}
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2.5 py-1 z-20">
          -{discount}%
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category + rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-widest">{product.category}</span>
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#F4B740] text-[#F4B740]" />
              <span className="text-[#0F172A] text-xs font-semibold">{product.rating}</span>
              <span className="text-[#475569] text-xs">({product.reviews})</span>
            </div>
          )}
        </div>

        <h3 className="text-[#0F172A] font-bold text-lg mb-1.5 leading-tight" style={{ fontFamily: "var(--font-satoshi)" }}>
          {product.name}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-3 line-clamp-2">{product.description}</p>

        {/* Savings badge */}
        {product.savings && (
          <div className="inline-flex items-center gap-1.5 bg-[#22C55E]/10 text-[#0B3D2E] text-xs font-semibold rounded-xl px-3 py-1.5 mb-4">
            <Zap className="w-3 h-3" />
            {product.savings}
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-[#0B3D2E] text-2xl font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>
            KSh {product.price.toLocaleString()}
          </span>
          <span className="text-[#475569] text-sm line-through">KSh {product.originalPrice.toLocaleString()}</span>
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/254707686192?text=Hi, I'm interested in the ${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold rounded-2xl py-3 text-sm transition-all btn-lift shadow-[0_3px_12px_rgba(34,197,94,0.3)]"
        >
          <MessageCircle className="w-4 h-4" />
          Order on WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

export default function FeaturedCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const featured = allProducts.filter(p => p.featured)

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" })
  }

  return (
    <section className="bg-[#F7F7F5] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-[#22C55E] text-sm font-semibold uppercase tracking-widest mb-3">Featured</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight" style={{ fontFamily: "var(--font-satoshi)" }}>
              Top Picks For <span className="text-[#0B3D2E]">Your Farm</span>
            </h2>
          </div>

          {/* Desktop nav arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white border border-black/[0.08] hover:bg-[#0B3D2E] hover:text-white hover:border-[#0B3D2E] text-[#475569] transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white border border-black/[0.08] hover:bg-[#0B3D2E] hover:text-white hover:border-[#0B3D2E] text-[#475569] transition-all shadow-sm"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ perspective: 800 }}
            >
              <TiltCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
