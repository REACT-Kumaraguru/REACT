"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const themes = [
  {
    title: "Tech for Forest",
    slug: "tech-for-forest",
    summary:
      "Work alongside forest departments, NGOs, and researchers to create technologies that support conservation, biodiversity, and community-based forest governance.",
  },
  {
    title: "Inclusive Infrastructure Lab",
    slug: "inclusive-infrastructure-lab",
    summary:
      "Design human-centered spaces by auditing and reimagining built environments for access, safety, and dignity across all demographics.",
  },
  {
    title: "Tech for Society",
    slug: "tech-for-society",
    summary:
      "Apply digital tools, automation, and systems thinking to solve civic, social, and developmental challenges at scale.",
  },
  {
    title: "Rural Innovation",
    slug: "rural-innovation",
    summary:
      "Co-create grassroots solutions with rural communities, addressing agriculture, water, mobility, and decentralized infrastructure through technology.",
  },
  {
    title: "Tech for Farmers",
    slug: "tech-for-farmers",
    summary:
      "Develop smart tools, advisory platforms, and post-harvest innovations to empower farmers and improve food systems.",
  },
  {
    title: "HealthTech for All",
    slug: "healthtech-for-all",
    summary:
      "Innovate at the intersection of technology and primary healthcare to improve access, equity, and community wellness.",
  },
  {
    title: "Tech for Urban Sanitation",
    slug: "tech-for-urban-sanitation",
    summary:
      "Create resilient, tech-driven systems for water, waste, and sanitation to ensure clean, inclusive urban living.",
  },
];


export default function ThemesPreview() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative z-20 bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Themes</h2>
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          animate={
            paused
              ? {}
              : {
                  x: ["0%", "-50%"],
                }
          }
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...themes, ...themes].map((theme, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-[260px] bg-gray-100 rounded-xl shadow-md p-4 flex-shrink-0"
            >
              <h3 className="text-lg font-semibold mb-2">{theme.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{theme.summary}</p>
              <Link href={`/theme/${theme.slug}`}>
                <button className="text-blue-600 underline font-medium text-sm">
                  Know More →
                </button>
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
