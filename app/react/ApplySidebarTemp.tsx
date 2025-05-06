"use client";
import React from "react";

type Props = {
  openPhase: (value: "explore" | "reflect" | "solve" | "apply") => void;
};

export default function ApplySidebar({ openPhase }: Props) {
  return (
    <div className="w-full lg:w-[240px]">
      <button onClick={() => openPhase("apply")}>Open Apply Phase</button>
    </div>
  );
}
// Force rebuild
