'use client';

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function WhoAreWe() {
  const [index, setIndex] = useState(1); // 1 to 7
  const [phase, setPhase] = useState<"anim" | "original">("anim");
  const [direction, setDirection] = useState<"left" | "up">("left");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (phase === "anim") {
        setPhase("original");
        setDirection(prev => (prev === "left" ? "up" : "left")); // alternate
      } else {
        setPhase("anim");
        setIndex(prev => (prev % 7) + 1); // loop 1–7
      }
    }, 4000); // 2s pause + 2s slide

    return () => clearTimeout(timer);
  }, [phase]);

  const slideVariants: Variants = {
    enter: (dir: "left" | "up") => ({
      x: dir === "left" ? "100%" : 0,
      y: dir === "up" ? "100%" : 0,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      y: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir: "left" | "up") => ({
      x: dir === "left" ? "-100%" : 0,
      y: dir === "up" ? "-100%" : 0,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <section
      id="next-section"
      className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-black text-white px-6 py-24 gap-10 overflow-hidden"
    >
      {/* Text Content */}
      <motion.div
  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="w-full md:w-1/2 space-y-6 relative z-50 bg-black/70 p-6 rounded"
>
        <h1 className="text-3xl md:text-5xl font-bold">REACT</h1>
        
        <h2 style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}className="text-lg md:text-xl font-medium text-white shadow-md">

          Real-world Engineering and Application through Collaborative Transformation
        </h2>
        <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}className="text-md md:text-lg text-gray-200">
          REACT is a 6-month immersive fellowship that takes students beyond classrooms and into real communities—like forests, farms, courts, or disaster zones—where they live, listen, learn, and co-create solutions with local stakeholders and field experts.
        </p>

        <div className="text-base md:text-lg text-gray-200 space-y-6 max-w-xl">
          <div>
            <h3 style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}className="text-2xl font-semibold text-white">A 4-Phase Journey</h3>
            <div className="space-y-2 pl-2">
              <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}><strong>1. Explore:</strong> 30 days of immersive fieldwork to understand systemic realities firsthand.</p>
              <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}><strong>2. Reflect:</strong> Reframe lived experiences into meaningful challenges with mentor support.</p>
              <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}><strong>3. Solve:</strong> Co-design bold solutions using systems thinking and rapid prototyping.</p>
              <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}><strong>4. Implement:</strong> Deploy real-world MVPs with support from industry or institutional partners.</p>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}className="text-2xl font-semibold text-white pt-4">What Makes REACT Unique</h3>
            <div className="space-y-2 pl-2">
              <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}><strong>1.</strong> Tri-party collaboration between students, field mentors, and technical mentors.</p>
              <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}><strong>2.</strong> Theme-based immersion in urgent domains like Tech for Forests, HealthTech for All, and Rural Innovation.</p>
              <p style={{ fontSize: "24px", color: "white", marginBottom: "1rem" }}><strong>3.</strong> Certification as a Fellow of REACT, with a pathway to becoming a Catalyst Leader.</p>
            </div>
          </div>
        </div>

        <Link href="/react">
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Know More
          </button>
        </Link>
      </motion.div>

      {/* Image Transition Section */}
      <motion.div className="w-full md:w-1/2 aspect-[4/3] md:h-[500px] relative overflow-hidden rounded-lg shadow-lg bg-black">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={`${phase}-${index}`}
            src={`/images/themes/${phase}/${index}.png`}
            className="absolute w-full h-full object-cover"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
          />
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
