"use client";
import React from "react";

type Props = {
  openPhase: (value: "explore" | "reflect" | "solve" | "apply") => void;
};

export default function ApplySidebar({ openPhase }: Props) {
  return (
    <div className="w-full lg:w-[240px] p-4">
      <button
        onClick={() => openPhase("apply")}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition"
      >
        Open Apply Phase
      </button>
    </div>
  );
}
