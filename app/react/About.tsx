// @ts-nocheck
"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Explore from "./phases/Explore";
import Reflect from "./phases/Reflect";
import Solve from "./phases/Solve";
import Implement from "./phases/Implement";
import PhaseWrapper from "./phases/PhaseWrapper";

const wedges = [
  {
    id: "explore",
    title: "Explore",
    description: "Live 30 days in the field to feel the system from within.",
    color: "#4CAF50"
  },
  {
    id: "reflect",
    title: "Reflect",
    description: "Pause, listen, and reframe your experience into a challenge worth solving.",
    color: "#2196F3"
  },
  {
    id: "solve",
    title: "Solve",
    description: "Co-design bold, grounded solutions backed by system thinking and research.",
    color: "#FFC107"
  },
  {
    id: "implement",
    title: "Implement",
    description: "Bring your solution to life, build with stakeholders, and lead the change.",
    color: "#FF5722"
  }
];

const contentMap = {
  explore: <Explore />,
  reflect: <Reflect />,
  solve: <div className="mt-16"><Solve /></div>,
  implement: <Implement />,
};

export default function About() {
  const [active, setActive] = useState("explore");
  const contentRef = useRef(null);
  const radius = 320;
  const center = 500;

  function describeArc(startAngle: number, endAngle: number) {
    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M${center},${center} L${start.x},${start.y} A${radius},${radius} 0 ${largeArcFlag} 0 ${end.x},${end.y} Z`;
  }

  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = (angle - 90) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Title + Hook Section */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-6 py-16">
  <div className="max-w-4xl text-center space-y-8">
    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
      Real Problems. Real Fields. Real Engineers.
    </h1>
    <p className="text-lg md:text-xl text-gray-300">
      REACT (Real-world Engineering and Application for Collaborative Transformation) is a 6-month immersive fellowship where students live, learn, and build inside real systems — not in classrooms. From forests and farms to health centers and waste facilities, REACT places you in the heart of complex, ground-level challenges.
    </p>

    <p className="text-lg text-gray-300">
      The journey is structured into four transformative phases:
    </p>
    <ul className="text-left text-base text-gray-300 list-disc list-inside space-y-2">
      <li><strong>Explore:</strong> Spend 30 days in the field, living the life of a field worker to deeply understand a system.</li>
      <li><strong>Reflect:</strong> Reframe that lived experience into clear, research-backed problem statements.</li>
      <li><strong>Solve:</strong> Work with mentors to co-design and prototype agile, implementable solutions.</li>
      <li><strong>Implement:</strong> Test your MVP in the real world, collect feedback, and lead it to impact.</li>
    </ul>

    <p className="text-lg text-gray-300">
      Entry into REACT begins with a two-step pre-selection:
    </p>
    <ul className="text-left text-base text-gray-300 list-disc list-inside space-y-2">
      <li><strong>Ground Zero (3 days):</strong> Act as a field worker in your own campus. Experience and extract a problem firsthand.</li>
      <li><strong>Ideathon (4 days):</strong> Design a solution for the problem you faced. Pitch it. Prototype it. Learn by doing.</li>
    </ul>

    <p className="text-lg text-gray-300">
      Selected students then go on a <strong>7–9 day thematic Yatra</strong> — visiting real REACT fields across sectors to deeply understand the ecosystems. Only after this do you finalize your theme and start your 6-month field immersion.
    </p>

    <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
      Apply Now
    </button>
  </div>
</div>


      {/* Original SVG Wheel Section */}
      <div className="relative px-4 py-10">
        <h2 className="text-4xl font-bold text-center mb-6">REACT: A Journey Through Experience</h2>

        <div className="flex justify-center items-center my-10" role="radiogroup" aria-label="REACT Phases">
          <svg width="1000" height="1000" viewBox="0 0 1000 1000" className="relative">
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              style={{ transformOrigin: "400px 400px" }}
            >
              <image
                href="/images/decor-outer.svg"
                x="0"
                y="0"
                width="1000"
                height="1000"
                preserveAspectRatio="xMidYMid slice"
                style={{ pointerEvents: "none", opacity: 0.7 }}
              />
            </motion.g>

            {wedges.map((w, i) => {
              const startAngle = (360 / wedges.length) * i;
              const endAngle = startAngle + 90;
              const midAngle = (startAngle + endAngle) / 2;
              const labelPos = polarToCartesian(center, center, radius -100, midAngle);

              return (
                <g key={w.id}>
                  <title>{w.title}: {w.description}</title>

                  <motion.path
                    d={describeArc(startAngle, endAngle)}
                    fill={w.color}
                    onClick={() => {
                      setActive(w.id);
                      contentRef.current?.scrollIntoView({ behavior: "smooth" });
                    }}
                    whileHover={{ scale: 1.03 }}
                    animate={{ scale: active === w.id ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="cursor-pointer focus:outline-none"
                    role="radio"
                    aria-checked={active === w.id}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActive(w.id);
                    }}
                  />
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className={`pointer-events-none fill-white font-bold ${
                      w.id === "explore" ? "text-base" : "text-lg"
                    }`}
                  >
                    {w.icon} {w.title}
                  </text>

                </g>
              );
            })}

            <circle cx={center} cy={center} r={90} fill="white" />
            <text
              x={center}
              y={center}
              textAnchor="middle"
              alignmentBaseline="middle"
              className="text-sm fill-black font-semibold"
            >
              REACT
            </text>
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            ref={contentRef}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <PhaseWrapper>
              {contentMap[active]}
            </PhaseWrapper>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}