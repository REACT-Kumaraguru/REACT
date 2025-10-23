"use client";

type Props = {
    phase: "explore" | "reflect" | "solve" | "apply";
    onClose: () => void;
  };
  
  export default function PhaseOverlay({ phase, onClose }: Props) {
    return (
      <div className="fixed inset-0 bg-white z-50 p-8">
        <button onClick={onClose}>Close</button>
        <h2 className="text-2xl font-bold capitalize">{phase}</h2>
        <p>Details about the {phase} phase...</p>
      </div>
    );
  }
  
  