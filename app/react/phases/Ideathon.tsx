"use client";
import React from "react";

export default function Ideathon() {
  return (
    <div
      style={{
        color: "#000",
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        fontSize: "1rem",
        padding: "1.5rem",
        lineHeight: 1.7,
        zIndex: 9999,
        position: "relative",
      }}
    >
      <h3 style={{ fontSize: "22px", color: "#92400e", marginBottom: "1rem" }}>
        💡 Ideathon (4 Days)
      </h3>

      <p style={{ color: "#000" }}>
        Design a solution for the problem you faced. Pitch it. Prototype it. Learn by doing.
      </p>

      <p style={{ color: "#000" }}>
        This is your first attempt at transforming insight into impact. Don’t wait for perfection—just build. A rough prototype can speak louder than polished slides.
      </p>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🎯 Part 1: From Insight to Idea</h4>

      <p style={{ color: "#000" }}>
        Use what you saw during Ground Zero and Reflect to shape an actionable solution idea. This is where intuition meets intent.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>🧩 Revisit your refined problem statement</li>
        <li>🧠 Brainstorm possible solutions — individually and with your team</li>
        <li>🎯 Narrow down to one concept that best fits the problem space</li>
        <li>✍️ Create a one-line pitch or design challenge: “How might we...”</li>
      </ul>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🛠️ Part 2: Rapid Prototyping</h4>

      <p style={{ color: "#000" }}>
        Build fast and simple. Use mockups, sketches, demos, storyboards, or even roleplay to express your idea.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>📦 Focus on core features, not details</li>
        <li>📱 Use low-code tools, cardboard, paper, Figma—whatever suits you</li>
        <li>🎬 Create a simple narrative around how it works and helps</li>
        <li>🕵️ Test it briefly with real users, even if informally</li>
      </ul>

      <div className="my-6 flex justify-center overflow-hidden">
        <img
          src="/phases/ideathon1.png"
          alt="Ideathon Prototyping Flow"
          className="w-full max-w-5xl object-contain border-none"
          style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
        />
      </div>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🎤 Part 3: Pitch the Problem and Prototype</h4>

      <p style={{ color: "#000" }}>
        Share your early concept with peers, mentors, or users. Be honest. Invite critique.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>📽️ Prepare a 3–5 minute pitch: problem → insight → solution → next step</li>
        <li>👂 Listen for reactions — not just applause, but confusion or curiosity</li>
        <li>📌 Take notes on what needs refining</li>
      </ul>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">📌 Outcome of Ideathon</h4>

      <p style={{ color: "#000" }}>
        You now have:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>🧾 A clearly pitched problem statement and solution concept</li>
        <li>📐 A working or visual prototype (low or mid fidelity)</li>
        <li>🔄 User feedback and team reflections</li>
        <li>🛣️ A plan for what to improve or pursue in the Solve phase</li>
      </ul>

      <p style={{ color: "#000" }}>
        Ideathon is not the end—it’s a proving ground. You’ve taken your first leap from **witness** to **creator**.
      </p>

      <p style={{ color: "#000" }}>
        🚀 Ideathon is where: <br />
        Questions turn into concepts <br />
        Concepts evolve through feedback <br />
        Learners become doers
      </p>
    </div>
  );
}
