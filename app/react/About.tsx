"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  openPhase: (value: "explore" | "reflect" | "solve" | "Implement") => void;
};

const contentMap: Record<string, string> = {
  explore: "Explore the forest, observe systems, meet people, and identify hidden challenges.",
  reflect: "Reflect on what you saw. Why do these problems exist? What can you influence?",
  solve: "Prototype, test, and iterate on a solution that fits the context.",
  apply: "Take it back. Implement, share, or expand it in the real world.",
};

export default function About({ openPhase }: Props) {
  const [active, setActive] = useState<"explore" | "reflect" | "solve" | "Implement">("explore");

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">About REACT</h2>
      <p className="mb-6 text-gray-700">
        REACT is a real-world, experiential learning journey where students work with communities and ecosystems to solve pressing problems.
      </p>

      {/* Sticky Phase Navigation */}
      <div className="sticky top-0 bg-white py-4 z-10">
        <div className="flex items-center justify-center gap-3">
          {["explore", "reflect", "solve", "Implement"].map((phase, idx, arr) => (
            <div key={phase} className="flex items-center gap-3">
              <button
                onClick={() => setActive(phase as any)}
                className={`px-4 py-2 rounded font-semibold ${
                  active === phase ? "bg-black text-white" : "bg-gray-200 text-black"
                }`}
              >
                {phase.charAt(0).toUpperCase() + phase.slice(1)}
              </button>
              {idx < arr.length - 1 && <span className="text-xl">→</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Sliding Info Area */}
      <div className="relative mt-6 h-[180px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-gray-100 rounded-xl p-6 shadow"
          >
            <h3 className="text-lg font-semibold mb-2 capitalize">{active}</h3>
            <p className="text-sm text-gray-700">{contentMap[active]}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Extra Content Below (Scrollable) */}
      <div className="mt-10 space-y-4">
        <h3 className="text-xl font-bold">Additional Information</h3>
        <p className="text-gray-700 text-sm">
          This section is a placeholder. You can add more explanation, links, images, videos, or stories related to the REACT journey here. Each phase can have a deep dive.
        </p>
        <p className="text-gray-700 text-sm">
          For example: Explain how students have applied this in real life. Include quotes, results, outcomes, or reflections.
        </p>
      </div>
    </div>
  );
}
