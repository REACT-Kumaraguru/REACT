"use client";
import React, { useEffect, useState } from "react";

type Props = {
  openPhase: (value: "explore" | "reflect" | "solve" | "apply") => void;
};

export default function ApplySidebarTemp({ openPhase }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true); // Ensure code only runs after client-side hydration
    const checkSize = () => setIsMobile(window.innerWidth < 768); // Treat <768px as mobile
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  if (!hydrated || isMobile) return null; // ✅ Completely hide on mobile

  return (
    <div style={{ width: "240px" }}>
      <button onClick={() => openPhase("apply")}>Open Apply Phase</button>
    </div>
  );
}
