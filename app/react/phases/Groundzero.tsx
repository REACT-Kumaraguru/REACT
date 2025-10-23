"use client";
import React from "react";

export default function Groundzero() {
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
        🚶‍♂️ Ground Zero (3 Days)
      </h3>

      <p style={{ color: "#000" }}>
        Become a field worker in your own campus. Experience reality before defining problems.
      </p>

      <p style={{ color: "#000" }}>
        For 3 days, step away from your usual routine. Shadow workers, talk to users, observe systems up close. Don’t assume — absorb.
      </p>

      <p style={{ color: "#000" }}>
        Ground Zero is about presence. Be on the ground, in motion, immersed in people’s lived experiences.
      </p>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🔍 Part 1: Act, Don’t Analyze</h4>

      <p style={{ color: "#000" }}>
        These 3 days are not for solution-thinking. Your job is to:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>🧭 Observe workflows and routines</li>
        <li>🎙️ Have honest, informal conversations</li>
        <li>📸 Capture photos, sketches, or voice notes</li>
        <li>📝 Keep a daily log of what you saw and felt</li>
        <li>👂 Focus on listening, not leading</li>
      </ul>

      {/* <div className="my-6 flex justify-center overflow-hidden">
        <img
          src="/phases/groundzero1.png"
          alt="Ground Zero Field Immersion"
          className="w-full max-w-5xl object-contain border-none"
          style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
        />
      </div> */}

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🔦 Part 2: Extract Lived Signals</h4>

      <p style={{ color: "#000" }}>
        From these days of presence, start to pull early signals:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>What are people really struggling with?</li>
        <li>What’s unspoken but visible?</li>
        <li>Where are gaps between need and delivery?</li>
        <li>What surprised or challenged your assumptions?</li>
      </ul>

      <p style={{ color: "#000" }}>
        This is not formal research. This is immersion. The goal is to carry stories, scenes, and observations — not charts or checklists.
      </p>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">📌 Output of Ground Zero</h4>

      <p style={{ color: "#000" }}>
        By the end of 3 days, you should have:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>📖 A journal of experiences (text, audio, visuals)</li>
        <li>📷 Visual snapshots of real systems or behavior</li>
        <li>🗣️ 3–5 compelling raw observations or user quotes</li>
        <li>🧠 One sentence that captures a tension you witnessed</li>
      </ul>

      <p style={{ color: "#000" }}>
        Ground Zero gives your future problem statement **weight and witness**. It’s no longer “an idea.” It’s a story you saw unfold.
      </p>

      <p style={{ color: "#000" }}>
        🧭 Don’t forget — you’re not solving yet. You’re **feeling** the ground beneath the problem.
      </p>

      <p style={{ color: "#000" }}>
        🌱 Ground Zero is where: <br />
        Curiosity meets empathy <br />
        Ideas gain context <br />
        Innovation roots in reality
      </p>
    </div>
  );
}
