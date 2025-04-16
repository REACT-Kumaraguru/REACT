"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showReact, setShowReact] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Alternate between black and white on every visit
  const [bgColor, setBgColor] = useState("#111");

  useEffect(() => {
    const last = localStorage.getItem("last-bg");
    const next = last === "white" ? "black" : "white";
    localStorage.setItem("last-bg", next);
    setBgColor(next === "white" ? "#f8f8f8" : "#111");
  }, []);

  const isDark = bgColor === "#111";

  // Drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drawing = false;

    const setStrokeColor = () => {
      ctx.strokeStyle = isDark ? "#ffffff" : "#000000";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
    };

    const startDraw = (e: MouseEvent) => {
      drawing = true;
      setStrokeColor();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    };

    const draw = (e: MouseEvent) => {
      if (!drawing) return;
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    };

    const stopDraw = () => {
      drawing = false;
      ctx.beginPath();
    };

    window.addEventListener("mousedown", startDraw);
    window.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stopDraw);

    return () => {
      window.removeEventListener("mousedown", startDraw);
      window.removeEventListener("mousemove", draw);
      window.removeEventListener("mouseup", stopDraw);
    };
  }, [isDark]);

  // Show REACT after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowReact(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Detect scroll to fade hero
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative min-h-screen w-full transition-all duration-1000 ${
        scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ backgroundColor: bgColor }}
      />

      {/* REACT Title + Apply Button */}
      <AnimatePresence>
        {showReact && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center z-10"
            onMouseEnter={() => setShowApply(true)}
            onMouseLeave={() => setShowApply(false)}
          >
            <h1
              className={`text-[10vw] font-handwriting pointer-events-none select-none ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              REACT
            </h1>

            {showApply && (
              <Link href="/select-user">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-10 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-green-200 transition-all"
                >
                  Apply Now
                </motion.button>
              </Link>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
