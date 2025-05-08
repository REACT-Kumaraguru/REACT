// @ts-nocheck
"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Explore from "./phases/Explore";
import Reflect from "./phases/Reflect";
import Solve from "./phases/Solve";
import Implement from "./phases/Implement";
import PhaseWrapper from "./phases/PhaseWrapper";

const contentMap = {
  explore: <Explore />,
  reflect: <Reflect />,
  solve: <Solve />,
  implement: <Implement />,
};

export default function About() {
  const [active, setActive] = useState("explore");
  const contentRef = useRef(null);

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Hero / Intro Section */}
      <div className="min-h-screen w-full flex flex-col items-end justify-center bg-black text-white px-6 py-16">
        <div className="w-full max-w-5xl px-4 text-left space-y-8">
        <h2
  className="text-2xl font-bold"
  style={{
    color: "#ffffff", // Fully white
    zIndex: 10,
    position: "relative",
  }}
>
  REACT: A Journey Through Experience
</h2>


          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Real Problems. Real Fields. Real Engineers.
          </h1>

          <p className="text-lg leading-relaxed"
  style={{
    color: "#d1d5db", // same as Tailwind's text-gray-300
    background: "transparent",
    position: "relative",
    zIndex: 20,
    padding: "0.5rem",
    marginBottom: "1.5rem",
  }}>
            REACT (Real-world Engineering and Application for Collaborative Transformation) is a 6-month immersive
            fellowship where students live, learn, and build inside real systems — not in classrooms. From forests and farms to health centers and waste facilities, REACT places you in the heart of complex, ground-level challenges.
          </p>

          <p className="text-lg leading-relaxed"
  style={{
    color: "#d1d5db", // same as Tailwind's text-gray-300
    background: "transparent",
    position: "relative",
    zIndex: 20,
    padding: "0.5rem",
    marginBottom: "1.5rem",
  }}>
            The journey is structured into four transformative phases:
          </p>

          <ul className="text-left text-base text-gray-300 list-disc list-inside space-y-2">
            <li><strong>Explore:</strong> Spend 30 days in the field, living the life of a field worker to deeply understand a system.</li>
            <li><strong>Reflect:</strong> Reframe that lived experience into clear, research-backed problem statements.</li>
            <li><strong>Solve:</strong> Work with mentors to co-design and prototype agile, implementable solutions.</li>
            <li><strong>Implement:</strong> Test your MVP in the real world, collect feedback, and lead it to impact.</li>
          </ul>

          <p className="text-lg leading-relaxed"
  style={{
    color: "#d1d5db", // same as Tailwind's text-gray-300
    background: "transparent",
    position: "relative",
    zIndex: 20,
    padding: "0.5rem",
    marginBottom: "1.5rem",
  }}>
            Entry into REACT begins with a two-step pre-selection:
          </p>

          <ul className="text-left text-base text-gray-300 list-disc list-inside space-y-2">
            <li><strong>Ground Zero (3 days):</strong> Act as a field worker in your own campus. Experience and extract a problem firsthand.</li>
            <li><strong>Ideathon (4 days):</strong> Design a solution for the problem you faced. Pitch it. Prototype it. Learn by doing.</li>
          </ul>

          <p className="text-lg leading-relaxed"
  style={{
    color: "#d1d5db", // same as Tailwind's text-gray-300
    background: "transparent",
    position: "relative",
    zIndex: 20,
    padding: "0.5rem",
    marginBottom: "1.5rem",
  }}>
            Selected students then go on a <strong>7–9 day thematic Yatra</strong> — visiting real REACT fields across sectors to deeply understand the ecosystems. Only after this do you finalize your theme and start your 6-month field immersion.
          </p>

          <div className="text-center">
            <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Phase Selector + Content */}
      <div
        className="w-full"
        style={{
          position: "relative",
          zIndex: 50,
          background: "transparent",
          padding: "1rem",
          margin: "2rem auto",
          maxWidth: "1280px",
          textAlign: "left",
        }}
        >

<p
  className="text-lg leading-relaxed"
  style={{
    color: "#1F2937", // Tailwind's gray-800
    background: "transparent",
    position: "relative",
    zIndex: 20,
    padding: "0.5rem",
    marginBottom: "1.5rem",
  }}
>
  In REACT, learning begins where life happens — in fields, forests, clinics, and communities. You’ll step into real systems, uncover challenges from within, and build solutions that matter. Each phase of the journey is crafted to move you from immersion to insight, and from ideas to real-world impact.
</p>




        {/* Image & Overlay Buttons */}
        <div className="relative w-full">
          <img
            src="/phases/fourtracks2.png"
            alt="REACT Phases"
            className="w-full h-auto rounded-xl shadow-md"
          />
          <div className="absolute inset-0 flex pointer-events-none">
            {["explore", "reflect", "solve", "implement"].map((phaseId) => (
              <button
                key={phaseId}
                onClick={() => {
                  setActive(phaseId);
                  contentRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex-1 pointer-events-auto"
                aria-label={phaseId}
                style={{ background: "transparent", cursor: "pointer" }}
              />
            ))}
          </div>
        </div>

        {/* Animated Phase Content */}
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
            <PhaseWrapper>{contentMap[active]}</PhaseWrapper>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
