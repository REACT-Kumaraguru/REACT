"use client";

type Props = {
  current: string;
  onChange: (tab: string) => void;
};

export default function SectionTabs({ current, onChange }: Props) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {["about", "fees", "credits", "themes"].map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded ${current === tab ? "bg-black text-white" : "bg-gray-200"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
