"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jana — Mentor (Tamil Nadu State Planning Commission)",
    quote:
      "I’ve worked with many youth programs, but REACT stands out. It doesn’t just talk about impact—it lives it. The students here don’t wait to be told what to do; they step into communities and start building solutions from day one.",
    bg: "bg-blue-50",
  },
  {
    name: "Sivakeerthana — Mentor (Zoho Corp)",
    quote:
      "Mentoring in REACT felt like watching sparks turn into fire. Students were not only technically sound—they were deeply empathetic. That blend is rare, and it’s what society needs more of.",
    bg: "bg-green-50",
  },
  {
    name: "Sangeetha — Professor & Mentor (Kumaraguru College of Technology)",
    quote:
      "REACT gave my students a lens that no classroom ever could. They returned with better questions, deeper curiosity, and stronger confidence in real-world problem-solving.",
    bg: "bg-yellow-50",
  },
  {
    name: "Aparna — Student",
    quote:
      "I had never walked through a village and asked, 'How can I help?' REACT made me do that—and it changed how I see engineering forever.",
    bg: "bg-pink-50",
  },
  {
    name: "Nandeesh — Student",
    quote:
      "We built a working prototype with farmers. Not for them, but with them. That experience taught me more than any textbook ever could.",
    bg: "bg-indigo-50",
  },
  {
    name: "Rukiya Beevi — Student",
    quote:
      "REACT gave me a purpose. I now know that I want to use my skills to build something that matters—for real people, not just marks.",
    bg: "bg-rose-50",
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
