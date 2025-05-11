// app/components/landing/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DrawingCanvas from "./tools/DrawingCanvas";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 400 });
  const [isDraggingButton, setIsDraggingButton] = useState(false);
  //const [menuPosition, setMenuPosition] = useState({ x: window.innerWidth - 70, y: 20 });
  const [menuPosition, setMenuPosition] = useState(() => {
  if (typeof window !== "undefined") {
    return { x: window.innerWidth - 70, y: 20 };
  }
  return { x: 0, y: 20 };
});
  const [draggingMenu, setDraggingMenu] = useState(false);

  
  


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    if (draggingMenu) {
      setMenuPosition({ x: e.clientX - 20, y: e.clientY - 20 });
    }
  };
  const handleMouseUp = () => setDraggingMenu(false);

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, [draggingMenu]);
useEffect(() => {
  const handleTouchMove = (e: TouchEvent) => {
    if (draggingMenu && e.touches.length === 1) {
      const touch = e.touches[0];
      setMenuPosition({ x: touch.clientX - 20, y: touch.clientY - 20 });
    }
  };
  const handleTouchEnd = () => setDraggingMenu(false);

  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);
  return () => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };
}, [draggingMenu]);



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

      {/* Original top-right buttons (shown only on desktop) */}
<Link href="/react/themes">
  <div className="hidden md:block" style={{
    position: "absolute",
    top: "4vh",
    right: "2vw",
    width: "100px",
    height: "28px",
    cursor: "pointer",
    zIndex: 10,
  }} />
</Link>

<a href="/team.pdf" target="_blank" rel="noopener noreferrer">
  <div className="hidden md:block" style={{
    position: "absolute",
    top: "10vh",
    right: "2vw",
    width: "100px",
    height: "28px",
    cursor: "pointer",
    zIndex: 10,
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    textDecoration: "none",
  }} />
</a>

<a href="/REACT Fellowship_ Credits & Academic Recognition.pdf" target="_blank" rel="noopener noreferrer">
  <div className="hidden md:block" style={{
    position: "absolute",
    top: "15vh",
    right: "2vw",
    width: "100px",
    height: "28px",
    cursor: "pointer",
    zIndex: 10,
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    textDecoration: "none",
  }} />
</a>

<Link href="/react/contact">
  <div className="hidden md:block" style={{
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
  <div className="hidden md:block" style={{
    position: "absolute",
    top: "25vh",
    right: "2vw",
    width: "100px",
    height: "28px",
    cursor: "pointer",
    zIndex: 10,
  }} />
</Link>


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


{/* Floating hamburger icon (only on mobile) */}
<div
  className="md:hidden"
  onMouseDown={() => setDraggingMenu(true)}
  onTouchStart={() => setDraggingMenu(true)}
  style={{
    position: "absolute",
    top: menuPosition.y,
    left: menuPosition.x,
    zIndex: 50,
    cursor: "grab"
  }}
>
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
  >
    ☰
  </button>
</div>


{/* Dropdown menu (only shows when menuOpen is true) */}
{menuOpen && (
  <div className="absolute top-16 right-4 bg-white text-black rounded-lg shadow-lg z-50 p-4 space-y-3 text-sm md:hidden">
    <Link href="/react/themes" className="block hover:underline">Themes</Link>
    <a href="/team.pdf" target="_blank" rel="noopener noreferrer" className="block hover:underline">Team PDF</a>
    <a href="/REACT Fellowship_ Credits & Academic Recognition.pdf" target="_blank" rel="noopener noreferrer" className="block hover:underline">Credits PDF</a>
    <Link href="/react/contact" className="block hover:underline">Contact</Link>
    <Link href="/react/blogs" className="block hover:underline">Blogs</Link>
  </div>
)}


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
