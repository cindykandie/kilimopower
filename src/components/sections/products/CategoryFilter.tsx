"use client"
import { useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { CATEGORY_TABS } from "@/data/allProducts"
import { useScrollPosition } from "@/hooks/useScrollPosition"

interface Props {
  activeCategory: string
  onCategoryChange: (id: string) => void
  searchQuery: string
  onSearchChange: (q: string) => void
  sortBy: string
  onSortChange: (s: string) => void
  totalCount: number
}

const SORT_OPTIONS = [
  { value: "default", label: "Featured" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "newest", label: "Newest" },
]

export default function CategoryFilter({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}: Props) {
  const scrollY = useScrollPosition()
  const pillsRef = useRef<HTMLDivElement>(null)
  const isSticky = scrollY > 560

  // Scroll active pill into view
  useEffect(() => {
    if (!pillsRef.current) return
    const active = pillsRef.current.querySelector("[data-active='true']")
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }, [activeCategory])

  return (
    <div
      className={`z-40 bg-[#F7F7F5]/95 backdrop-blur-xl border-b border-black/[0.06] transition-all duration-300 ${
        isSticky ? "sticky top-16 md:top-20 shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : ""
      }`}
      id="products"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Category pills row */}
        <div
          ref={pillsRef}
          className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id
            return (
              <motion.button
                key={tab.id}
                data-active={isActive}
                onClick={() => onCategoryChange(tab.id)}
                whileTap={{ scale: 0.95 }}
                className={`relative flex-shrink-0 inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all touch-target ${
                  isActive
                    ? "text-white shadow-[0_4px_16px_rgba(11,61,46,0.35)]"
                    : "bg-white text-[#475569] hover:bg-[#0B3D2E]/8 hover:text-[#0B3D2E] border border-black/[0.06]"
                }`}
              >
                {/* Active background */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-2xl bg-[#0B3D2E]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </AnimatePresence>
                <span className="relative z-10 text-base leading-none">{tab.emoji}</span>
                <span className="relative z-10 whitespace-nowrap">{tab.label}</span>
                <span
                  className={`relative z-10 text-xs rounded-full px-1.5 py-0.5 font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-[#0B3D2E]/10 text-[#0B3D2E]"
                  }`}
                >
                  {tab.count}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Search + Sort row */}
        <div className="flex items-center gap-3 pb-4">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-white border border-black/[0.08] rounded-2xl pl-10 pr-10 py-3 text-sm text-[#0F172A] placeholder:text-[#475569]/70 outline-none focus:border-[#0B3D2E]/40 focus:ring-2 focus:ring-[#0B3D2E]/10 transition-all"
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => onSearchChange("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-[#475569]/20 hover:bg-[#475569]/30 transition-colors"
                >
                  <X className="w-3 h-3 text-[#475569]" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Sort */}
          <div className="relative flex-shrink-0">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-white border border-black/[0.08] rounded-2xl pl-4 pr-9 py-3 text-sm text-[#0F172A] outline-none focus:border-[#0B3D2E]/40 cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] pointer-events-none" />
          </div>

          {/* Results count */}
          <div className="hidden sm:flex items-center gap-1.5 text-[#475569] text-sm ml-auto flex-shrink-0">
            <SlidersHorizontal className="w-4 h-4" />
            <span><strong className="text-[#0F172A]">{totalCount}</strong> products</span>
          </div>
        </div>
      </div>
    </div>
  )
}
