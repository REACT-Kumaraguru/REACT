"use client";

type Props = {
  current: string;
  onChange: (tab: string) => void;
  onOpenThemes: () => void;
};

export default function SectionTabs({ current, onChange, onOpenThemes }: Props) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "fees", label: "Fees" },
    { id: "credits", label: "Credits" },
    { id: "themes", label: "Themes" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6 px-4">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => (id === "themes" ? onOpenThemes() : onChange(id))}
          aria-pressed={current === id ? "true" : "false"}  // Corrected aria-pressed value
          className={`px-4 py-2 text-sm sm:text-base rounded-full transition ${
            current === id
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
