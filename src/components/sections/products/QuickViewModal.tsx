"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, Star, Check, Truck, Shield, CreditCard, Clock, Tag, Zap } from "lucide-react"
import { Product } from "@/types"

interface Props {
  product: Product | null
  onClose: () => void
}

export default function QuickViewModal({ product, onClose }: Props) {
  if (!product) return null
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="fixed inset-x-4 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[70] bg-white rounded-t-3xl md:rounded-3xl overflow-hidden max-h-[90vh] md:max-h-[85vh] md:w-full md:max-w-2xl flex flex-col"
          >
            {/* Drag handle (mobile) */}
            <div className="flex justify-center pt-3 pb-1 md:hidden flex-shrink-0">
              <div className="w-10 h-1 bg-[#0F172A]/15 rounded-full" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-[#F7F7F5] hover:bg-[#0B3D2E] hover:text-white rounded-2xl transition-all text-[#475569]"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1">
              {/* Image area */}
              <div className={`relative h-52 bg-gradient-to-br ${product.gradient} flex-shrink-0`}>
                <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-3xl bg-white/15 border border-white/20 flex items-center justify-center text-5xl shadow-2xl">
                    {product.emoji ?? "🌿"}
                  </div>
                </div>
                {product.badge && (
                  <div className="absolute bottom-4 left-5 inline-flex items-center gap-1 bg-[#F4B740] text-[#0F172A] text-xs font-bold rounded-full px-3 py-1.5">
                    <Tag className="w-3 h-3" />
                    {product.badge}
                  </div>
                )}
                <div className="absolute bottom-4 right-5 bg-red-500 text-white text-xs font-bold rounded-full px-2.5 py-1">
                  -{discount}%
                </div>
              </div>

              <div className="p-5 md:p-6">
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating!) ? "fill-[#F4B740] text-[#F4B740]" : "text-[#475569]/30"}`} />
                      ))}
                    </div>
                    <span className="text-[#0F172A] font-semibold text-sm">{product.rating}</span>
                    <span className="text-[#475569] text-sm">({product.reviews} reviews)</span>
                  </div>
                )}

                <span className="text-[#22C55E] text-xs font-semibold uppercase tracking-widest">{product.category}</span>
                <h2 className="text-[#0F172A] text-2xl font-bold mt-1 mb-2 leading-tight" style={{ fontFamily: "var(--font-satoshi)" }}>
                  {product.name}
                </h2>
                <p className="text-[#475569] text-sm leading-relaxed mb-4">{product.description}</p>

                {/* Benefits */}
                {product.benefits && (
                  <div className="mb-5">
                    <p className="text-[#0F172A] text-sm font-semibold mb-3">Why farmers love it:</p>
                    <div className="space-y-2">
                      {product.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-[#22C55E]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#22C55E]" />
                          </div>
                          <span className="text-[#475569] text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Savings + suitableFor */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {product.savings && (
                    <div className="inline-flex items-center gap-1.5 bg-[#22C55E]/10 text-[#0B3D2E] text-xs font-semibold rounded-xl px-3 py-2">
                      <Zap className="w-3 h-3" />
                      {product.savings}
                    </div>
                  )}
                  {product.suitableFor && (
                    <div className="inline-flex items-center gap-1.5 bg-[#0B3D2E]/8 text-[#0B3D2E] text-xs font-semibold rounded-xl px-3 py-2">
                      🌱 {product.suitableFor}
                    </div>
                  )}
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {[
                    { icon: CreditCard, text: "Pay After Delivery" },
                    { icon: Truck, text: `${product.deliveryDays ?? 3}-Day Delivery` },
                    { icon: Shield, text: "1-Year Warranty" },
                    { icon: Clock, text: "Expert Support" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 bg-[#F7F7F5] rounded-2xl px-3 py-2.5">
                      <Icon className="w-4 h-4 text-[#0B3D2E] flex-shrink-0" />
                      <span className="text-[#0F172A] text-xs font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky footer */}
            <div className="flex-shrink-0 p-4 md:p-5 border-t border-black/[0.06] bg-white">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-[#0B3D2E] text-2xl font-bold" style={{ fontFamily: "var(--font-satoshi)" }}>
                    KSh {product.price.toLocaleString()}
                  </span>
                  <span className="text-[#475569] text-sm line-through">KSh {product.originalPrice.toLocaleString()}</span>
                </div>
                <div className="text-[#22C55E] text-xs font-semibold bg-[#22C55E]/10 rounded-full px-2.5 py-1">
                  M-Pesa Accepted
                </div>
              </div>
              <a
                href={`https://wa.me/254707686192?text=Hi, I want to order the ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#22C55E] hover:bg-[#16a34a] text-white font-bold rounded-2xl py-4 transition-all shadow-[0_4px_20px_rgba(34,197,94,0.3)] btn-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Order on WhatsApp — Pay After Delivery
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
