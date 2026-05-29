"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Eye, ShoppingCart, Tag } from "lucide-react"
import { Product } from "@/types"

const PRODUCT_EMOJIS: Record<string, string> = {
  "1": "☀️",
  "2": "🔋",
  "3": "💧",
  "4": "⚙️",
  "5": "⚡",
  "6": "🥚",
}

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-3xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(11,61,46,0.18)] transition-shadow duration-300 flex flex-col"
    >
      {/* Image area */}
      <div className="relative h-44 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient}`} />

        {/* Grain */}
        <div className="absolute inset-0 grain opacity-40 pointer-events-none" />

        {/* Emoji icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-4xl shadow-xl">
            {PRODUCT_EMOJIS[product.id] ?? "🌿"}
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1 bg-[#F4B740] text-[#0F172A] text-xs font-bold rounded-full px-3 py-1 shadow-md">
            <Tag className="w-3 h-3" />
            {product.badge}
          </div>
        )}

        {/* Discount */}
        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2.5 py-1">
          -{discount}%
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="inline-flex items-center gap-2 bg-white text-[#0B3D2E] text-sm font-semibold rounded-2xl px-4 py-2.5 shadow-lg hover:scale-105 transition-transform">
            <Eye className="w-4 h-4" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <p className="text-[#22C55E] text-xs font-semibold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <h3
          className="text-[#0F172A] font-bold text-base md:text-lg mb-1.5 leading-tight"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {product.name}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-4 flex-1">{product.description}</p>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-[#0B3D2E] text-xl font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>
            KSh {product.price.toLocaleString()}
          </span>
          <span className="text-[#475569] text-sm line-through">
            KSh {product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <a
            href={`https://wa.me/254707686192?text=Hi, I'm interested in the ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white text-sm font-semibold rounded-2xl py-3 transition-all btn-lift"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button className="w-11 h-11 flex items-center justify-center bg-[#F7F7F5] hover:bg-[#0B3D2E] hover:text-white text-[#0B3D2E] rounded-2xl transition-all">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* See more in category */}
        <Link
          href={`/products#${product.category.toLowerCase()}`}
          className="mt-3 text-xs text-[#0B3D2E]/60 hover:text-[#0B3D2E] font-medium transition-colors text-center block"
        >
          See more {product.category} →
        </Link>
      </div>
    </motion.div>
  )
}
