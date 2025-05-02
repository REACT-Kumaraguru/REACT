"use client";

type Props = {
  phase: "explore" | "reflect" | "solve" | "apply";
  onClose: () => void;
};

export default function PhaseOverlay({ phase, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-white z-50 p-6 sm:p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-black transition"
          >
            ✕ Close
          </button>
        </div>

        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-bold capitalize mb-4 text-rose-700">
          {phase}
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Details about the <strong>{phase}</strong> phase go here. This section
          can include information, visuals, or actionable steps relevant to this
          stage of the REACT journey.
        </p>
      </div>
    </div>
  );
}
