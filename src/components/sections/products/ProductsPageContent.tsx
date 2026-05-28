"use client"
import { useState, useMemo } from "react"
import { allProducts } from "@/data/allProducts"
import { Product } from "@/types"
import ProductsHero from "./ProductsHero"

import CategoryFilter from "./CategoryFilter"
import FeaturedCarousel from "./FeaturedCarousel"
import BundleSection from "./BundleSection"
import ProductGridSection from "./ProductGridSection"
import FAQSection from "./FAQSection"
import TrustStrip from "@/components/shared/TrustStrip"
import WhatsAppCTA from "@/components/sections/WhatsAppCTA"

export default function ProductsPageContent() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("default")

  const filteredProducts = useMemo<Product[]>(() => {
    let list = [...allProducts]

    if (activeCategory !== "all") {
      list = list.filter((p) =>
        p.category.toLowerCase().replace(/\s+/g, "-") === activeCategory ||
        p.tags?.includes(activeCategory)
      )
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.includes(q))
      )
    }

    switch (sortBy) {
      case "price_asc":
        list.sort((a, b) => a.price - b.price)
        break
      case "price_desc":
        list.sort((a, b) => b.price - a.price)
        break
      case "rating":
        list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
        break
      case "newest":
        list.reverse()
        break
    }

    return list
  }, [activeCategory, searchQuery, sortBy])

  return (
    <>
      <ProductsHero />

      <CategoryFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalCount={filteredProducts.length}
      />

      <FeaturedCarousel />

      <BundleSection />

      <ProductGridSection products={filteredProducts} />

      <TrustStrip />

      <WhatsAppCTA />

      <FAQSection />
    </>
  )
}
