"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const themes = [
  {
    title: "Live with Forest",
    slug: "live-with-forest",
    summary:
      "Immerse yourself in ecosystems and work with forest officers, NGOs, and researchers.",
  },
  {
    title: "Built Environments",
    slug: "built-environments",
    summary:
      "Explore sustainable urban spaces and the systems that shape how we live.",
  },
  {
    title: "Tech for Society",
    slug: "tech-for-society",
    summary:
      "Use engineering and digital tools to solve local challenges at scale.",
  },
  {
    title: "Rural Innovation",
    slug: "rural-innovation",
    summary:
      "Work with farming communities to build real-world agri-tech and infrastructure.",
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
