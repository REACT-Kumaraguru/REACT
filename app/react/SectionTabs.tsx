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
          type="button"
          key={id}
          onClick={() => {
            if (id === "themes") {
              onOpenThemes(); // Handle the "themes" specific action
            } else {
              onChange(id); // Handle the default change action
            }
          }}
          >
          {label} {/* Displaying the label instead of 'id' */}
        </button>
      ))}
    </div>
  );
}
