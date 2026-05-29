"use client"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Eye, Heart, Star, Tag, Zap, Truck, CreditCard, Package } from "lucide-react"
import Image from "next/image"
import { Product } from "@/types"
import QuickViewModal from "./QuickViewModal"
import { stagger, fadeUp } from "@/lib/animations"

interface Props {
  products: Product[]
}

function ProductCard({ product, onQuickView }: { product: Product; onQuickView: (p: Product) => void }) {
  const [wishlisted, setWishlisted] = useState(false)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_16px_48px_rgba(11,61,46,0.16)] transition-shadow duration-300 flex flex-col"
    >
      {/* Wishlist button */}
      <button
        onClick={() => setWishlisted(w => !w)}
        className="absolute top-4 left-4 z-20 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:scale-110 transition-transform"
      >
        <Heart className={`w-4 h-4 transition-colors ${wishlisted ? "fill-red-500 text-red-500" : "text-[#475569]"}`} />
      </button>

      {/* Badges */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-1.5">
        {product.badge && (
          <span className="inline-flex items-center gap-1 bg-[#F4B740] text-[#0F172A] text-[10px] font-bold rounded-full px-2.5 py-1">
            <Tag className="w-2.5 h-2.5" />
            {product.badge}
          </span>
        )}
        <span className="bg-red-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">
          -{discount}%
        </span>
        {product.stock === "low_stock" && (
          <span className="bg-orange-500 text-white text-[10px] font-bold rounded-full px-2 py-0.5">
            Low Stock
          </span>
        )}
      </div>

      {/* Image area */}
      <div className="relative h-48 overflow-hidden group">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} transition-transform duration-500 group-hover:scale-105`} />
        <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-4xl shadow-xl">
            {product.emoji ?? "🌿"}
          </div>
        </div>

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-10">
          <button
            onClick={() => onQuickView(product)}
            className="inline-flex items-center gap-1.5 bg-white text-[#0B3D2E] text-xs font-semibold rounded-2xl px-4 py-2.5 shadow-lg hover:scale-105 transition-transform"
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        {/* Category + Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[#22C55E] text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
          {product.rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#F4B740] text-[#F4B740]" />
              <span className="text-[#0F172A] text-xs font-semibold">{product.rating}</span>
            </div>
          )}
        </div>

        <h3 className="text-[#0F172A] font-bold text-base leading-tight mb-1.5" style={{ fontFamily: "var(--font-satoshi)" }}>
          {product.name}
        </h3>
        <p className="text-[#475569] text-sm leading-relaxed mb-3 flex-1 line-clamp-2">{product.description}</p>

        {/* Savings badge */}
        {product.savings && (
          <div className="inline-flex items-center gap-1 bg-[#22C55E]/10 text-[#0B3D2E] text-xs font-semibold rounded-xl px-2.5 py-1.5 mb-3 self-start">
            <Zap className="w-3 h-3" />
            {product.savings}
          </div>
        )}

        {/* Trust mini-badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="inline-flex items-center gap-1 text-[#475569] text-[10px] bg-[#F7F7F5] rounded-full px-2.5 py-1">
            <CreditCard className="w-2.5 h-2.5" />
            Pay After Delivery
          </span>
          <span className="inline-flex items-center gap-1 text-[#475569] text-[10px] bg-[#F7F7F5] rounded-full px-2.5 py-1">
            <Truck className="w-2.5 h-2.5" />
            {product.deliveryDays ?? 3}-day delivery
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-[#0B3D2E] text-xl font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>
            KSh {product.price.toLocaleString()}
          </span>
          <span className="text-[#475569] text-sm line-through">KSh {product.originalPrice.toLocaleString()}</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-auto">
          <a
            href={`https://wa.me/254707686192?text=Hi, I want to order the ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#22C55E] hover:bg-[#16a34a] text-white text-sm font-semibold rounded-2xl py-3 transition-all btn-lift shadow-[0_3px_12px_rgba(34,197,94,0.25)]"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <button
            onClick={() => onQuickView(product)}
            className="w-11 h-11 flex items-center justify-center bg-[#F7F7F5] hover:bg-[#0B3D2E] hover:text-white text-[#0B3D2E] rounded-2xl transition-all"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductGridSection({ products }: Props) {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  return (
    <>
      <section className="bg-[#F7F7F5] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5">
          {products.length === 0 ? (
            /* Empty state */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <Image
                src="/femalembuzi.png"
                alt="No products found"
                width={140}
                height={180}
                className="h-36 w-auto object-contain opacity-60 mb-5"
              />
              <h3 className="text-[#0F172A] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-satoshi)" }}>
                No products found
              </h3>
              <p className="text-[#475569] text-sm mb-5">Try a different category or search term.</p>
              <a
                href="https://wa.me/254707686192?text=Hi, I'm looking for a specific product. Can you help?"
                className="inline-flex items-center gap-2 bg-[#0B3D2E] text-white font-semibold rounded-2xl px-6 py-3 text-sm btn-lift"
              >
                <MessageCircle className="w-4 h-4" />
                Ask us on WhatsApp
              </a>
            </motion.div>
          ) : (
            <>
              <motion.div
                layout
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {/* Load more hint */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <p className="text-[#475569] text-sm mb-4">
                  Can&apos;t find what you need? We carry 1,200+ products.
                </p>
                <a
                  href="https://wa.me/254707686192?text=Hi, I'm looking for a specific farm product. Can you help?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#14532D] text-white font-semibold rounded-2xl px-7 py-3.5 transition-all btn-lift shadow-[0_4px_20px_rgba(11,61,46,0.25)]"
                >
                  <Package className="w-4 h-4" />
                  Request Any Product on WhatsApp
                </a>
              </motion.div>
            </>
          )}
        </div>
      </section>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </>
  )
}
