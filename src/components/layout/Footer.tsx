"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MessageCircle, Mail, Phone, MapPin, Users, X, Camera, PlayCircle, ArrowRight, Send } from "lucide-react"
import { fadeUp, stagger } from "@/lib/animations"

const footerLinks = {
  Products: [
    { label: "Solar Irrigation", href: "/products/irrigation" },
    { label: "Solar Backup Kits", href: "/products/backup" },
    { label: "Rain Gun Sprinklers", href: "/products/sprinklers" },
    { label: "Farm Tillers", href: "/products/tillers" },
    { label: "Generators", href: "/products/generators" },
    { label: "Egg Incubators", href: "/products/incubators" },
  ],
  Solutions: [
    { label: "Irrigate My Farm", href: "/solutions/irrigation" },
    { label: "Stop Blackouts", href: "/solutions/backup" },
    { label: "Reduce Labour", href: "/solutions/machinery" },
    { label: "Poultry Power", href: "/solutions/poultry" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Installations", href: "/installations" },
    { label: "Blog", href: "/blog" },
    { label: "Distributors", href: "/distributors" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
}

const counties = ["Nairobi", "Nakuru", "Kisumu", "Mombasa", "Eldoret", "Thika", "Meru", "Embu", "Machakos", "Kitale", "Kericho", "Nyeri", "Muranga", "Kakamega"]

const socials = [
  { icon: Users, href: "#", label: "Facebook" },
  { icon: X, href: "#", label: "Twitter / X" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: PlayCircle, href: "#", label: "YouTube" },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#091f14] overflow-hidden">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#F4B740]/50 to-transparent" />

      {/* Background orb */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(244,183,64,0.08) 0%, transparent 65%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 pt-16 md:pt-20 pb-8">
        {/* Top: Logo + newsletter + WA */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pb-12 border-b border-white/10 mb-12">
          {/* Brand */}
          <div className="lg:max-w-[280px]">
            <Image src="/logo.png" alt="Kilimo Power" width={140} height={42} className="h-10 w-auto mb-5" />
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Kenya&apos;s most trusted farm technology platform. Solar pumps, backup systems, and farm machinery delivered anywhere.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#22C55E] flex items-center justify-center text-white/60 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1">
            <div className="text-white font-semibold mb-2">Stay Updated</div>
            <p className="text-white/50 text-sm mb-4">Get farm tips and product alerts straight to your email.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-white/10 border border-white/15 text-white placeholder:text-white/35 rounded-2xl px-4 py-3 text-sm outline-none focus:border-[#22C55E]/60 focus:bg-white/15 transition-all min-w-0"
              />
              <button
                type="submit"
                className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-[#22C55E] hover:bg-[#16a34a] text-white rounded-2xl transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* WA CTA */}
          <div className="flex-shrink-0 lg:w-[220px]">
            <div className="text-white font-semibold mb-2">Need Help Now?</div>
            <p className="text-white/50 text-sm mb-4">Our team is available Mon–Sat, 7am–8pm.</p>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center bg-[#22C55E] hover:bg-[#16a34a] text-white font-semibold rounded-2xl px-5 py-3 text-sm transition-all btn-lift"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <div className="text-white/80 font-semibold text-sm mb-4">{heading}</div>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/45 hover:text-white/80 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <div className="text-white/80 font-semibold text-sm mb-4">Contact Us</div>
            <ul className="space-y-3">
              <li>
                <a href="tel:+254700000000" className="flex items-center gap-2 text-white/45 hover:text-white/80 text-sm transition-colors">
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@kilimopower.co.ke" className="flex items-center gap-2 text-white/45 hover:text-white/80 text-sm transition-colors">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  info@kilimopower.co.ke
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-white/45 text-sm">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  Nairobi, Kenya
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Counties served */}
        <div className="mb-10 p-5 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">
            Serving All 47 Counties Including
          </div>
          <div className="flex flex-wrap gap-2">
            {counties.map((c) => (
              <span key={c} className="text-white/45 text-xs bg-white/8 rounded-full px-3 py-1">
                {c}
              </span>
            ))}
            <span className="text-[#F4B740] text-xs font-semibold rounded-full px-3 py-1">
              + 33 more counties
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Kilimo Power. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Returns Policy"].map((item) => (
              <Link key={item} href="#" className="text-white/35 hover:text-white/60 text-xs transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
