"use client"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ShoppingBag } from "lucide-react"
import { useScrollPosition } from "@/hooks/useScrollPosition"

export default function MobileCTABar() {
  const scrollY = useScrollPosition()
  const show = scrollY > 300

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mobile-cta-bar"
          style={{
            background: "linear-gradient(to top, #F7F7F5 70%, rgba(247,247,245,0))",
          }}
        >
          <div className="flex gap-3">
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white font-bold rounded-2xl py-4 text-sm shadow-[0_4px_20px_rgba(34,197,94,0.35)] touch-target"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <button className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[#0B3D2E] text-white rounded-2xl shadow-[0_4px_16px_rgba(11,61,46,0.3)] touch-target">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
