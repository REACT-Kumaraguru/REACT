// Final fix: ensure onOpenThemes is typed and passed


"use client";

type Props = {
  current: string;
  onChange: (tab: string) => void;
  onOpenThemes: () => void;
};

export default function SectionTabs({ current, onChange, onOpenThemes }: Props) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {["about", "fees", "credits", "themes"].map((tab) => (
        <button
          key={tab}
          onClick={() => {
            if (tab === "themes") onOpenThemes();
            else onChange(tab);
          }}
          className={`px-4 py-2 rounded ${current === tab ? "bg-black text-white" : "bg-gray-200"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
