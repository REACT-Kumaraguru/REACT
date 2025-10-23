// app/react/SectionTabs.tsx
"use client";

interface SectionTabsProps {
  current: string;
  onChange: (newTab: string) => void;
  onOpenThemes: () => void;
}

export default function SectionTabs({ current, onChange, onOpenThemes }: SectionTabsProps) {
  const tabClass = (tab: string) =>
    `px-4 py-2 rounded-lg transition font-medium ${
      current === tab ? "bg-black text-white" : "bg-gray-200 text-black"
    } hover:bg-gray-300`;

  return (
    <div className="flex justify-center gap-4 mt-10">
      <button onClick={() => onChange("about")} className={tabClass("about")}>
        About
      </button>
      <button onClick={() => onChange("fees")} className={tabClass("fees")}>
        Fees
      </button>
      <button onClick={() => onChange("credits")} className={tabClass("credits")}>
        Credits
      </button>
      <button onClick={onOpenThemes} className={tabClass("themes")}>
        Themes
      </button>
    </div>
  );
}
