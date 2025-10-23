"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ReactHeader() {
  const router = useRouter();
  const [hover, setHover] = useState(false);

  return (
    <div className="absolute top-4 left-4 right-4 z-50 flex justify-between items-center px-4">
      {/* Home Icon */}
      <button
        onClick={() => router.push("/")}
        className="text-black"
        aria-label="Home"
      >
        <HomeIcon className="w-6 h-6" strokeWidth={1.5} />
      </button>

      {/* REACT Button */}
      <button
        onClick={() => router.push("/")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="text-black text-2xl font-extrabold flex items-end gap-1"
      >
        {/* REA falling to the left */}
        <motion.div
          animate={
            hover
              ? { y: 60, x: -20, rotate: -20, opacity: 0.8 }
              : { y: 0, x: 0, rotate: 0, opacity: 1 }
          }
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.3,
          }}
          className="flex gap-[1px]"
        >
          <span>R</span>
          <span>E</span>
          <span>A</span>
        </motion.div>

        {/* CT falling to the right */}
        <motion.div
          animate={
            hover
              ? { y: 60, x: 20, rotate: 20, opacity: 0.8 }
              : { y: 0, x: 0, rotate: 0, opacity: 1 }
          }
          transition={{
            duration: 0.6,
            type: "spring",
            bounce: 0.3,
          }}
          className="flex gap-[1px]"
        >
          <span>C</span>
          <span>T</span>
        </motion.div>
      </button>
    </div>
  );
}
