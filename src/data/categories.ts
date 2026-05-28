import { Category } from "@/types"

export const categories: Category[] = [
  {
    id: "1",
    title: "Irrigate My Farm",
    description: "Solar pumps, drip systems & rain guns to water any farm size — no KPLC bill.",
    emoji: "💧",
    gradient: "from-[#0B3D2E] to-[#0d5c3a]",
    border: "border-[#22C55E]/30",
    href: "/products/irrigation",
  },
  {
    id: "2",
    title: "Stop KPLC Blackouts",
    description: "Solar backup kits and inverters that keep your farm running 24/7.",
    emoji: "⚡",
    gradient: "from-[#14532D] to-[#1a6b38]",
    border: "border-[#F4B740]/30",
    href: "/products/solar-backup",
  },
  {
    id: "3",
    title: "Reduce Labour Costs",
    description: "Tillers, sprinklers and automation tools that save you time and money.",
    emoji: "🌾",
    gradient: "from-[#0B3D2E] to-[#1e4a2e]",
    border: "border-[#22C55E]/30",
    href: "/products/machinery",
  },
  {
    id: "4",
    title: "Poultry Farming Power",
    description: "Reliable solar incubators and backup systems built for poultry farmers.",
    emoji: "🐔",
    gradient: "from-[#7f1d1d] to-[#9b2828]",
    border: "border-[#F4B740]/30",
    href: "/products/poultry",
  },
]
