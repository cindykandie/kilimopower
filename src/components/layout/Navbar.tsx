"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MessageCircle, ChevronRight } from "lucide-react"
import { useScrollPosition } from "@/hooks/useScrollPosition"

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [open, setOpen] = useState(false)
  const glassy = scrollY > 40

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          glassy
            ? "bg-[#0B3D2E]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Kilimo Power"
              width={140}
              height={40}
              className="h-9 md:h-11 w-auto object-contain bg-white rounded-md px-1"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium rounded-xl hover:bg-white/10 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/254707686192"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16a34a] text-white text-sm font-semibold rounded-2xl px-4 py-2.5 transition-all btn-lift"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all touch-target"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-[#091f17] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
              <Image src="/logo.png" alt="Kilimo Power" width={120} height={36} className="h-9 w-auto" />
              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
              className="flex-1 flex flex-col justify-center px-6 gap-2"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between w-full py-4 px-5 rounded-2xl text-white text-xl font-semibold hover:bg-white/10 transition-all group"
                  >
                    {link.label}
                    <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            {/* Mobile WA CTA */}
            <div className="px-6 pb-[env(safe-area-inset-bottom,1.5rem)] pb-8">
              <a
                href="https://wa.me/254707686192"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#22C55E] text-white font-bold text-lg rounded-3xl py-4 transition-all btn-lift"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
