import { Bundle } from "@/types"

export const bundles: Bundle[] = [
  {
    id: "1",
    title: "Irrigate My Farm",
    problem: "Tired of relying on rain or hauling water by hand?",
    description:
      "Everything you need to run a complete solar irrigation system — from the source to your crops. No KPLC. No diesel.",
    includes: [
      { name: "Solar Irrigation Pump", emoji: "☀️" },
      { name: "Rain Gun Sprinkler (×2)", emoji: "💧" },
      { name: "Piping & Fittings Kit", emoji: "🔧" },
    ],
    gradient: "from-[#0B3D2E] via-[#0d4a34] to-[#14532D]",
    acreage: "Covers up to 5 acres",
    savings: "Save KSh 120,000/yr on fuel",
    counties: "All 47 counties",
    price: 78000,
    originalPrice: 106000,
    badge: "Most Popular Bundle",
  },
  {
    id: "2",
    title: "Stop KPLC Blackouts",
    problem: "Losing crops, income, and peace of mind to power outages?",
    description:
      "A complete off-grid backup system. When KPLC goes down, your farm stays running — lights, pumps, cold storage, all of it.",
    includes: [
      { name: "5KVA Inverter", emoji: "🔌" },
      { name: "Lithium Battery (200Ah)", emoji: "🔋" },
      { name: "Solar Panels (×4)", emoji: "☀️" },
    ],
    gradient: "from-[#1e3a5f] via-[#1e4d82] to-[#162e52]",
    acreage: "Powers entire farmhouse + equipment",
    savings: "Save KSh 6,000/mo on KPLC",
    counties: "All 47 counties",
    price: 95000,
    originalPrice: 130000,
    badge: "High Demand",
  },
  {
    id: "3",
    title: "Modern Farm Starter Pack",
    problem: "Starting a farm and not sure what equipment you need?",
    description:
      "The essential toolkit for any new farm. Prepare your land, irrigate, and spray — all in one affordable bundle.",
    includes: [
      { name: "Farm Tiller", emoji: "⚙️" },
      { name: "Wheelbarrow Sprayer", emoji: "🚿" },
      { name: "Portable Generator", emoji: "⚡" },
    ],
    gradient: "from-[#78350f] via-[#92400e] to-[#6b2c08]",
    acreage: "Set up 1–5 acres",
    savings: "Save 60% vs hiring equipment",
    counties: "All 47 counties",
    price: 112000,
    originalPrice: 158000,
    badge: "Best Value",
  },
]
