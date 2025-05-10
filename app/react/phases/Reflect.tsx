"use client";
import React from "react";

export default function Reflect() {
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
        🌀 Reflect & Distill (7–30 Days)
      </h3>

      <p style={{ color: "#000", backgroundColor: "#fff" }}>Turn experience into insight.</p>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        After living in the field for 30 days, this phase is your time to pause, look back, and ask: <br />
        What really stayed with me? <br />
        What confused me? Moved me? Frustrated me?
      </p>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        You’re not here to rush into solutions. You’re here to listen again—slower, deeper—and let the experience speak.
      </p>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🔍 Part 1: Mining Insights from Experience</h4>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        You return not just with stories, but with questions. This step helps you make sense of what you lived.
      </p>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>Steps to reflect:</p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>🗺️ Rebuild your journey — Recall your daily life, people, events, and emotions.</li>
        <li>⚡ Spot tension points — Moments of stress, confusion, or surprise.</li>
        <li>❓ Ask why — What caused it? Who’s affected? What systems are behind it?</li>
        <li>🧩 Find patterns — Group similar events (e.g. around water, time, trust, etc.).</li>
        <li>✏️ Draft problem statements — Start with: “I noticed that...” or “How might we...”</li>
        <li>👥 Sense-check — Share with mentors or locals for feedback.</li>
      </ul>

      <p style={{ color: "#000", backgroundColor: "#fff" }}>
        You now have problems that are real, personal, and grounded in lived reality.
      </p>

      {/* Image remains untouched */}
      <div className="my-6 flex justify-center overflow-hidden">
        <img
          src="/phases/insights1.png"
          alt="Insight Mining Flowchart"
          className="w-full max-w-5xl object-contain border-none"
          style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
        />
      </div>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🎯 Part 2: Choosing the Right Problem</h4>

      <p   style={{ color: "#000", backgroundColor: "#fff" }}>
        Not all problems can or should be solved right now. You’ll learn to prioritize with purpose.
      </p>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>Score each idea (1 to 5) based on:</p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Is it real and current?</li>
        <li>Do I care about it?</li>
        <li>Can I work on it in the next 3–12 months?</li>
        <li>Do I have the skills/tools for this?</li>
        <li>Would solving it create impact?</li>
        <li>Does it match what I want to learn or grow in?</li>
      </ul>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        <strong>Visual Aid:</strong> Plot your ideas on a grid: <br />
        <strong>Y-axis:</strong> Impact <br />
        <strong>X-axis:</strong> Effort
      </p>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        ✅ Look for high-impact, low-to-medium effort ideas. <br />
        These are your best starting points.
      </p>

      {/* EFFORT–IMPACT MATRIX TABLE */}
      <h4 className="text-lg font-semibold text-yellow-700 mb-2">Visual Prioritization Matrix</h4>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        Use this matrix to help visualize which problems are worth pursuing based on effort required and potential impact.
      </p>

      <div className="flex justify-center my-6">
        <img
          src="/phases/VPM.png" // ✅ Replace with your actual image path
          alt="Effort vs Impact Matrix"
          className="w-full max-w-4xl object-contain border border-gray-400 rounded-md shadow-sm"

        />
      </div>


      <h4 className="text-lg font-semibold text-yellow-700 mb-2">❤️ Your Final Pick</h4>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}> </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Which one feels urgent and worth doing?</li>
        <li>Which one matches my strengths and passion?</li>
        <li>Which one can I stick with for months?</li>
      </ul>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        👉 That’s your challenge for the next phase—<strong>Solve</strong>. It’s not just a project. It’s a commitment to a story you now carry.
      </p>

      <p  style={{ color: "#000", backgroundColor: "#fff" }}>
        🌱 Reflect is where: <br />
        Experience becomes understanding <br />
        Confusion turns into clarity <br />
        Passion becomes direction <br /><br />
        You’re not just thinking. You’re preparing. <br />
        With care. With depth. With purpose.
      </p>
    </div>
  );
}
