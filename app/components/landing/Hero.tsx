"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [showReact, setShowReact] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Alternate between black and white on every visit
  const [bgColor, setBgColor] = useState("#111");

  useEffect(() => {
    // Check if device is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const last = localStorage.getItem("last-bg");
    const next = last === "white" ? "black" : "white";
    localStorage.setItem("last-bg", next);
    setBgColor(next === "white" ? "#f8f8f8" : "#111");
  }, []);

  const isDark = bgColor === "#111";

  // Drawing logic - optimize for mobile
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Update canvas dimensions on resize
    const updateDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    let drawing = false;
    let lastX = 0;
    let lastY = 0;

    const setStrokeColor = () => {
      ctx.strokeStyle = isDark ? "#ffffff" : "#000000";
      ctx.lineWidth = isMobile ? 3 : 2; // Thicker line on mobile
      ctx.lineCap = "round";
    };

    // Handle both mouse and touch events
    const startDraw = (e: MouseEvent | TouchEvent) => {
      drawing = true;
      setStrokeColor();
      
      let clientX, clientY;
      
      if ("touches" in e) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        // Mouse event
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      lastX = clientX;
      lastY = clientY;
      
      ctx.beginPath();
      ctx.moveTo(clientX, clientY);
    };

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!drawing) return;
      
      let clientX, clientY;
      
      if ("touches" in e) {
        // Touch event
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        // Mouse event
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(clientX, clientY);
      ctx.stroke();
      
      lastX = clientX;
      lastY = clientY;
    };

    const stopDraw = () => {
      drawing = false;
      ctx.beginPath();
    };

    // Mouse Events
    canvas.addEventListener("mousedown", startDraw);
    window.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stopDraw);
    
    // Touch Events
    canvas.addEventListener("touchstart", startDraw);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stopDraw);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      // Mouse Events
      canvas.removeEventListener("mousedown", startDraw);
      window.removeEventListener("mousemove", draw);
      window.removeEventListener("mouseup", stopDraw);
      
      // Touch Events
      canvas.removeEventListener("touchstart", startDraw);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", stopDraw);
    };
  }, [isDark, isMobile]);

  // Show REACT after 1s
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
            onMouseEnter={() => !isMobile && setShowApply(true)}
            onMouseLeave={() => !isMobile && setShowApply(false)}
            onTouchStart={() => isMobile && setShowApply(true)}
          >
            <h1
              className={`text-[10vw] sm:text-[8vw] font-handwriting pointer-events-none select-none ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              REACT
            </h1>

            {/* Always show apply button on mobile, conditionally on desktop */}
            {(showApply || isMobile) && (
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