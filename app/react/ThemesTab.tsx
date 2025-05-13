"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import themeList from "@/react/themes/themesData";
import ThemeCard from "@/react/themes/ThemeCard";

export default function ThemesTab() {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const ThemeComponent = activeTheme
    ? dynamic(() => import(`@/react/themes/${activeTheme}`), { ssr: false })
    : null;

  useEffect(() => {
    if (activeTheme && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTheme]);

  return (
    <div className="space-y-6">
      {/* Grid of theme cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {themeList.map((theme) => (
          <ThemeCard
            key={theme.slug}
            title={theme.title}
            image1={theme.image1}
            image2={theme.image2}
            onClick={() => setActiveTheme(theme.slug)}
            isActive={activeTheme === theme.slug}
          />
        ))}
      </div>

      {/* Render selected theme component */}
      {ThemeComponent && (
        <div
          ref={contentRef}
          className="mt-8 p-6 border rounded-xl shadow-lg bg-white"
        >
          <ThemeComponent />
        </div>
      )}
    </div>
  );
}
