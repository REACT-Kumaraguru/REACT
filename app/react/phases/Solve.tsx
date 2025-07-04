"use client";
import React from "react";

export default function Solve() {
  return (
    <>
      <div   className="w-full px-4 py-4"
  style={{
    display: "block",
    width: "100%",
    maxWidth: "100%",
    padding: "1rem",
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
    background: "transparent",
    color: "#1f2937", // Tailwind gray-800 (dark enough for visibility)
  }}>
  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1d4ed8", marginBottom: "1rem" }}>
    🔧 Solve the Problem (3–12 Months)
  </h3>

  <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>Turn insight into impact.</p>

  <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
    You’ve lived the problem. You’ve understood it deeply.<br />
    Now it’s time to build something that matters.
  </p>

  <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
    In REACT, Solve is not just about making solutions—it’s about making meaningful, usable, and lasting change.
  </p>
</div>


      <h4 className="text-lg font-semibold text-blue-700 mt-8 mb-2">🔧 Choose Your Path to Solve</h4>
      <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
        Not every problem is the same. That’s why REACT gives you 5 powerful ways to approach it—based on what your challenge needs.
      </p>

      <div className="my-6 flex justify-center">
  <img
    src="/phases/fivetracks1.png"
    alt="Overview of the 5 Solve Tracks"
    className="w-full max-w-3xl object-contain"
    style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
  />
</div>


      {/* Research Track */}
      <details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
        <summary className="font-semibold text-blue-800 cursor-pointer">🧠 Research Track</summary>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}><strong>Best when:</strong> The problem is unclear or unknown<br /><strong>Goal:</strong> Discover new knowledge</p>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          🔬 You investigate something no one fully understands yet—through experiments, data, or field studies.
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          You follow steps like: <br />
          → Identify the gap <br />
          → Frame your questions <br />
          → Design experiments <br />
          → Test, analyze, and publish findings
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>✅ Use this when curiosity leads and clarity must be built.</p>

        {/* Existing image remains */}
        <div className="my-6 flex justify-center overflow-hidden">
          <img
            src="/phases/research1.png"
            alt="Research Methodology Flowchart"
            className="w-full max-w-3xl border-none object-contain"
            style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
          />
        </div>
      </details>

      {/* Innovation Track */}
      <details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
        <summary className="font-semibold text-blue-800 cursor-pointer">🚀 Innovation Track</summary>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}><strong>Best when:</strong> The problem is known but no solution exists<br /><strong>Goal:</strong> Create something new</p>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          💭 You build a new idea from scratch—using creativity and rapid testing.
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          Your process: <br />
          → Understand user needs <br />
          → Frame "How might we..." <br />
          → Prototype fast <br />
          → Test with users <br />
          → Refine and scale
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>✅ Use this when people need something that doesn’t exist yet.</p>

        <div className="my-6 flex justify-center overflow-hidden">
          <img
            src="/phases/innovation.png"
            alt="Innovation Process Flowchart"
            className="w-full max-w-3xl border-none object-contain"
            style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
          />
        </div>
      </details>

      {/* Design Track */}
      <details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
        <summary className="font-semibold text-blue-800 cursor-pointer">🎨 Design Track</summary>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}><strong>Best when:</strong> Existing solutions don’t fit<br /><strong>Goal:</strong> Reimagine for real users</p>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          🛠️ You improve how systems feel and function—making them more usable and human-centered.
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          Steps include: <br />
          → Study real-life use <br />
          → Redefine the actual problem <br />
          → Generate user-friendly ideas <br />
          → Build and test meaningful designs
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>✅ Use this when form, function, and feeling all matter.</p>

        <div className="my-6 flex justify-center overflow-hidden">
          <img
            src="/phases/design1.png"
            alt="Design Thinking Flowchart"
            className="w-full max-w-3xl border-none object-contain"
            style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
          />
        </div>
      </details>

      {/* System Track */}
      <details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
        <summary className="font-semibold text-blue-800 cursor-pointer">🌍 System Track</summary>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}><strong>Best when:</strong> Problems are big and interconnected<br /><strong>Goal:</strong> Shift how the whole system works</p>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          🌱 You don’t just fix symptoms—you shift structures.
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          You’ll: <br />
          → Map how everything connects <br />
          → Spot feedback loops <br />
          → Find leverage points <br />
          → Intervene at root levels
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>✅ Use this when you want to solve for the long term, not just the surface.</p>

        <div className="my-6 flex justify-center overflow-hidden">
          <img
            src="/phases/system.png"
            alt="System Thinking Flowchart"
            className="w-full max-w-3xl border-none object-contain"
            style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
          />
        </div>
      </details>

      {/* General Track */}
      <details className="bg-white p-4 border border-blue-200 rounded-md shadow-sm">
        <summary className="font-semibold text-blue-800 cursor-pointer">⚙️ General Track</summary>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}><strong>Best when:</strong> The problem is clear and urgent<br /><strong>Goal:</strong> Act fast and effectively</p>

        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          🔧 A sharp, structured method used in real-world engineering and operations.
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
          Process: <br />
          → Clarify the issue <br />
          → Find root cause <br />
          → Decide fast <br />
          → Fix it, monitor, and learn
        </p>
        <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>✅ Use this when the problem is urgent and solvable now.</p>

        <div className="my-6 flex justify-center overflow-hidden">
          <img
            src="/phases/general_psm.png"
            alt="General Problem Solving Flowchart"
            className="w-full max-w-3xl border-none object-contain"
            style={{ clipPath: 'inset(2px 2px 2px 2px)' }}
          />
        </div>
      </details>

      <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1.5rem", marginTop: "1.5rem" }}>
        🛠️ <strong>Your Solve Journey Includes:</strong>
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>5-day Hackathon to build your first prototype</li>
        <li>Mentors and experts to guide your track</li>
        <li>Real-world testing and feedback</li>
        <li>Milestones and reviews every month</li>
        <li>Tools like FMEA, TRIZ, and Digital Prototyping</li>
        <li>Open-source documentation to share what you build</li>
      </ul>

      <p className="bg-yellow-300 border-l-4 border-yellow-600 text-black p-6 my-8 text-xl italic font-semibold shadow-md">
  “The goal is not just to solve a problem — but to solve it in a way that can be trusted, repeated, and transformed into change.”
</p>


      <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
        🧭 Solve isn’t the end. It’s the turning point.<br />
        It’s when understanding becomes action.<br />
        It’s when your experience becomes something others can use.
      </p>

      <p style={{ fontSize: "1 rem", color: "black", marginBottom: "1rem" }}>
        Coming up next: <strong>Implement</strong> — taking your solution back to the field that inspired it.
      </p>
    </>
  );
}
