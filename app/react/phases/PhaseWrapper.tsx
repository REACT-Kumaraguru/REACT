"use client";
import React from "react";

export default function PhaseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-black rounded-xl px-6 pt-6 pb-10 shadow w-full relative z-10">

      {children}
    </div>
  );
}
