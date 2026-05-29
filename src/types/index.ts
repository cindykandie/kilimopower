export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  badge: string
  category: string
  gradient: string
  iconBg: string
  // Extended fields
  emoji?: string
  benefits?: string[]
  stock?: "in_stock" | "low_stock" | "out_of_stock"
  deliveryDays?: number
  savings?: string
  suitableFor?: string
  tags?: string[]
  featured?: boolean
  rating?: number
  reviews?: number
}

export interface Bundle {
  id: string
  title: string
  problem: string
  description: string
  includes: { name: string; emoji: string }[]
  gradient: string
  acreage?: string
  savings?: string
  counties?: string
  price: number
  originalPrice: number
  badge: string
}

export interface Category {
  id: string
  title: string
  description: string
  emoji: string
  gradient: string
  border: string
  href: string
  subcategories?: string[]
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  county: string
  rating: number
  quote: string
  initials: string
  avatarBg: string
  product: string
}

export interface BlogPost {
  id: string
  title: string
  category: string
  readTime: string
  excerpt: string
  gradient: string
  date: string
  emoji?: string
  county?: string
  author?: string
  tag?: string
  featured?: boolean
}

export interface FarmerGuide {
  id: string
  title: string
  description: string
  level: "Beginner" | "Intermediate" | "Advanced"
  savings?: string
  pages: number
  gradient: string
  emoji: string
  category: string
}

export interface LearningCategory {
  id: string
  title: string
  description: string
  emoji: string
  gradient: string
  accentColor: string
  articleCount: number
}

export interface TrendingTopic {
  id: string
  label: string
  count: number
  hot?: boolean
}

export interface ContactOption {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  accentColor: string
  gradient: string
  cta: string
  href: string
  badge?: string
}

export interface Installation {
  id: string
  county: string
  type: string
  gradient: string
  span: "wide" | "tall" | "normal"
}

export interface Stat {
  value: string
  label: string
  suffix: string
}

export interface TrustItem {
  emoji: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ProblemPathway {
  id: string
  headline: string
  problem: string[]
  solution: string[]
  emoji: string
  gradient: string
  accentColor: string
  savings: string
  cta: string
  tag: string
}

export interface Solution {
  id: string
  title: string
  subtitle: string
  description: string
  includes: { name: string; emoji: string }[]
  metrics: { label: string; value: string; unit?: string }[]
  gradient: string
  acreage?: string
  savings: string
  badge: string
  price: string
  tag: string
}

export interface CaseStudy {
  id: string
  title: string
  county: string
  problem: string
  solution: string
  result: string
  savings: string
  timeline: string
  products: string[]
  quote: string
  name: string
  gradient: string
  emoji: string
}

export interface MapPin {
  id: string
  county: string
  x: number
  y: number
  installations: number
  products: string[]
  savings: string
  gradient: string
  featured?: boolean
}

export interface GalleryItem {
  id: string
  title: string
  county: string
  category: string
  gradient: string
  emoji: string
  span?: "wide" | "tall" | "normal"
}

export interface VideoCard {
  id: string
  title: string
  subtitle: string
  duration: string
  gradient: string
  emoji: string
  category: string
}
