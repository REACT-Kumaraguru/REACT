"use client";
import React from "react";

export default function Fieldtrip() {
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
        🌍 Fieldtrip (7 Days)
      </h3>

      <p style={{ color: "#000" }}>
        Explore all the REACT themes and fields in person. Visit, observe, question, and absorb.
      </p>

      <p style={{ color: "#000" }}>
        The Fieldtrip gives you a panoramic view of the possibilities. You’ll interact with practitioners, experience diverse contexts, and build a wide-angle understanding of real-world systems.
      </p>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🧭 Part 1: Explore with Curiosity</h4>

      <p style={{ color: "#000" }}>
        Each day, you'll dive into a different domain or theme—energy, water, health, mobility, environment, livelihoods, and education.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>🚌 Visit field sites, communities, or organizations</li>
        <li>🎤 Talk to stakeholders, workers, and system users</li>
        <li>📝 Take notes, photos, and capture moments that intrigue or puzzle you</li>
        <li>🌐 Learn how systems work across different environments</li>
        <li>📚 Ask deeper questions: Why is this done this way? What alternatives exist?</li>
      </ul>

      <div className="my-6 flex justify-center overflow-hidden">
        <img
          src="/phases/fieldtrip1.png"
          alt="Fieldtrip Exploration Visual"
          className="w-full max-w-5xl object-contain border-none"
          style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
        />
      </div>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">🔍 Part 2: Compare & Contrast</h4>

      <p style={{ color: "#000" }}>
        As you move across fields, patterns begin to emerge.
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>What are common constraints across fields?</li>
        <li>Where do solutions seem systemic vs individual?</li>
        <li>Which contexts felt familiar, and which challenged your worldview?</li>
        <li>What surprised you about people’s workarounds or resilience?</li>
      </ul>

      <p style={{ color: "#000" }}>
        These comparisons help you anchor your future choices in what truly matters to you.
      </p>

      <h4 className="text-lg font-semibold text-yellow-700 mb-2">📌 Outcome of Fieldtrip</h4>

      <p style={{ color: "#000" }}>
        At the end of the 7 days, you should have:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>🗺️ A field journal filled with observations, sketches, and quotes</li>
        <li>💡 A short reflection on which domains excited or bothered you most</li>
        <li>🧭 A clearer idea of which theme you want to engage with deeply</li>
        <li>🧶 A few questions you'd love to solve one day</li>
      </ul>

      <p style={{ color: "#000" }}>
        Fieldtrip isn’t just sightseeing—it’s sensing the systems that shape society. You return not just informed, but inspired.
      </p>

      <p style={{ color: "#000" }}>
        🚀 Fieldtrip is where: <br />
        Exposure turns into empathy <br />
        Systems thinking begins <br />
        Direction starts to emerge
      </p>
    </div>
  );
}
