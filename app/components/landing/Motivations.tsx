"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Needy REACT",
    text: "You’ve always wanted a chance, but didn’t have the space, the support, or the spark. REACT welcomes you.",
  },
  {
    title: "Hidden Potential",
    text: "You’re curious, smart, and eager — but just haven’t found your thing yet. This might be it.",
  },
  {
    title: "Confused After BE/BTech",
    text: "You finished college, but still don’t feel like an engineer. That’s more common than you think. Let’s change that.",
  },
  {
    title: "Returning REACTers",
    text: "You’ve been here before. You want more — to lead, guide, or build again. Welcome back.",
  },
  {
    title: "Emotional Space",
    text: "Life’s been heavy. REACT isn’t just work. It’s growth, clarity, and purpose — with a community that supports you.",
  },
];

export default function Motivations() {
  const [activeItem, setActiveItem] = useState<null | typeof items[0]>(null);

  return (
    <section className="bg-gray-50 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold">Where Are You Coming From?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              onClick={() => setActiveItem(item)}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer flex flex-col justify-between min-h-[200px] hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.text.slice(0, 100)}...</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Transparent modal */}
      {activeItem && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 backdrop-blur-md bg-white/50">
          <div className="bg-white max-w-lg w-full p-8 rounded-xl shadow-xl relative border">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-3 right-4 text-xl text-gray-600 hover:text-black"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">{activeItem.title}</h3>
            <p className="text-gray-700 text-base">{activeItem.text}</p>
          </div>
        </div>
      )}
    </section>
  );
}
