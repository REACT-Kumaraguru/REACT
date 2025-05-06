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
      className={`relative min-h-screen w-full transition-all duration-1000 overflow-hidden bg-black ${
        scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Drawing logic and overlay */}
      <DrawingCanvas />

      

      {/* Interaction layer, clickable only when no tool is active */}
      <div id="canvas-links" className="absolute inset-0 pointer-events-auto">
        <Link
          href="/select-user"
          className="absolute w-[160px] h-[30px] left-[calc(50%-110px)] top-[calc(50%+40px)]"
        />
        <Link
          href="/react"
          className="absolute w-[160px] h-[30px] left-[calc(50%+40px)] top-[calc(50%+40px)]"
        />
        <div className="fixed top-5 right-5 z-20 space-y-2 text-right text-lg">
        {[
  { label: "Themes", href: "/react/themes" },
  { label: "Team", href: "/react/team" },
  { label: "Credit Structure", href: "/react/credit-structure" },
  { label: "Contact Us", href: "/react/contact" },
  { label: "Blogs", href: "/react/blogs" }
].map((item, i) => (
  <Link key={item.label} href={item.href}>
    <div
      className="absolute right-[40px]"
      style={{
        top: `${60 + (i - 1) * 40}px`, // ⬅️ precise alignment above text baseline
        width: "180px",
        height: "24px"
      }}
    />
  </Link>
))}




        </div>
      </div>

      <div
        className="absolute bottom-5 right-5 z-20 text-white text-3xl cursor-pointer animate-bounce"
        onClick={() => {
          const nextSection = document.querySelector("#next-section");
          nextSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        ↓
      </div>
    </section>
  );
}
