"use client";
import React from "react";

export default function PhaseWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 rounded-xl px-6 pt-6 pb-10 shadow w-full">
      {children}
    </div>
  );
}
