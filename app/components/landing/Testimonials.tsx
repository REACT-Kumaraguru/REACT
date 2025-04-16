"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarthi — Student",
    quote:
      "REACT took me beyond classrooms — I prototyped my first solution in the field!",
    bg: "bg-green-50",
  },
  {
    name: "Sathish — REACT Alumni",
    quote:
      "This community reshaped my career path. I got into research and real-world innovation.",
    bg: "bg-blue-50",
  },
  {
    name: "Sowmya — Mentor",
    quote:
      "Guiding REACTers is incredibly fulfilling. They bring energy and curiosity that inspires us too.",
    bg: "bg-yellow-50",
  },
];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative z-20 bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
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
                  x: ["-50%", "0%"],
                }
          }
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className={`min-w-[260px] max-w-[260px] ${item.bg} rounded-xl shadow-md p-4 flex-shrink-0`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2 text-sm italic">“{item.quote}”</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
