"use client"
import { motion } from "framer-motion"
import { ArrowRight, Clock, BookOpen } from "lucide-react"
import { blogPosts } from "@/data/blog"
import { stagger, fadeUp } from "@/lib/animations"

const CATEGORY_COLORS: Record<string, string> = {
  Solar: "#0B3D2E",
  Irrigation: "#1e3a5f",
  Power: "#78350f",
  Machinery: "#1e1b4b",
}

export default function BlogSection() {
  return (
    <section className="bg-white py-20 md:py-28">
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
              Farm Knowledge
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-[#0F172A] leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Learn From{" "}
              <span className="text-[#0B3D2E]">The Experts</span>
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-[#0B3D2E] font-semibold hover:gap-3 transition-all whitespace-nowrap self-start sm:self-auto">
            All Articles
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              className="group flex flex-col bg-[#F7F7F5] rounded-3xl overflow-hidden hover:shadow-[0_12px_40px_rgba(11,61,46,0.12)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image / gradient thumbnail */}
              <div className="relative h-44 overflow-hidden flex-shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className="inline-flex items-center gap-1.5 text-white text-xs font-semibold rounded-full px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/20"
                  >
                    <BookOpen className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>

                {/* Read time */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 text-white/80 text-xs bg-black/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="text-[#475569] text-xs mb-2">{post.date}</div>
                <h3
                  className="text-[#0F172A] font-bold text-base leading-snug mb-2 flex-1 group-hover:text-[#0B3D2E] transition-colors"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  {post.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-1.5 text-[#0B3D2E] text-sm font-semibold group-hover:gap-2.5 transition-all">
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
