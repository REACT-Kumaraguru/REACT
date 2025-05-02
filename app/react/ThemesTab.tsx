"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import themeList from "@/react/themes/themesData";

export default function ThemesTab() {
  const [activeTheme, setActiveTheme] = useState<string | null>(themeList[0]?.slug || null);

  const ThemeComponent = activeTheme
    ? dynamic(() => import(`@/react/themes/${activeTheme}`), { ssr: false })
    : null;

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {/* Left Sidebar */}
      <aside className="w-full sm:w-1/4 space-y-3">
        <h2 className="text-xl font-bold mb-2">Themes</h2>
        <div className="space-y-2">
          {themeList.map((theme) => (
            <div
              key={theme.slug}
              onClick={() => setActiveTheme(theme.slug)}
              className={`p-3 text-sm text-center cursor-pointer border rounded shadow transition ${
                activeTheme === theme.slug
                  ? "bg-black text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {theme.title}
            </div>
          ))}
        </div>
      </aside>

      {/* Right Content */}
      <section className="w-full sm:w-3/4">
        {ThemeComponent ? (
          <ThemeComponent />
        ) : (
          <p className="text-gray-600">Select a theme to view details.</p>
        )}
      </section>
    </div>
  );
}
