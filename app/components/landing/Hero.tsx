// app/components/landing/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DrawingCanvas from "./tools/DrawingCanvas";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
  style={{
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "black",
    transition: "opacity 1s ease",
    paddingTop: "env(safe-area-inset-top)",
    paddingBottom: "env(safe-area-inset-bottom)",
    opacity: scrolled ? 0 : 1,
    pointerEvents: scrolled ? "none" : "auto",
  }}
>

      {/* Drawing logic and overlay */}
      <DrawingCanvas />

      

      {/* Interaction layer, clickable only when no tool is active */}
      <div id="canvas-links" className="absolute inset-0 pointer-events-auto">
      <Link
  href="/select-user"
  style={{
    position: "absolute",
    top: "55vh",         // adjust based on where your text is drawn
    left: "45%",
    width: "140px",
    height: "30px",
    transform: "translateX(-50%)",
    zIndex: 10,          // above canvas but below toolbars
    cursor: "pointer",
  }}
/>
<Link
  href="/react"
  style={{
    position: "absolute",
    top: "55vh",         // same as above if side-by-side
    left: "58%",
    width: "140px",
    height: "30px",
    transform: "translateX(-50%)",
    zIndex: 10,
    cursor: "pointer",
  }}
/>


<>
  <Link href="/react/themes">
    <div style={{
      position: "absolute",
      top: "4vh",
      right: "2vw",
      width: "100px",
      height: "28px",
      cursor: "pointer",
      zIndex: 10,
    }} />
  </Link>

  <a
  href="/team.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "absolute",
    top: "10vh",
    right: "2vw",
    width: "100px",
    height: "28px",
    cursor: "pointer",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
    textDecoration: "none",
  }}
>
</a>


  <a
  href="/REACT Fellowship_ Credits & Academic Recognition.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "absolute",
    top: "15vh",
    right: "2vw",
    width: "100px",
    height: "28px",
    cursor: "pointer",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
    textDecoration: "none",
  }}
>
  </a>


  <Link href="/react/contact">
    <div style={{
      position: "absolute",
      top: "20vh",
      right: "2vw",
      width: "100px",
      height: "28px",
      cursor: "pointer",
      zIndex: 10,
    }} />
  </Link>

  <Link href="/react/blogs">
    <div style={{
      position: "absolute",
      top: "25vh",
      right: "2vw",
      width: "100px",
      height: "28px",
      cursor: "pointer",
      zIndex: 10,
    }} />
  </Link>
</>


      </div>

      <div
  onClick={() => {
    const nextSection = document.querySelector("#next-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  }}
  style={{
    position: "absolute",
    bottom: "20px",
    right: "20px",
    zIndex: 20,
    fontSize: "28px",
    color: "white",
    cursor: "pointer",
    animation: "bounce 1.5s infinite",
  }}
>
  ↓
</div>

    </section>
  );
}
