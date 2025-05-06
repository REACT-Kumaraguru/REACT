"use client";
import React from "react";

export default function Reflect() {
  return (
    <>
      <h3 className="text-xl font-bold mb-4 text-yellow-700">🌀 Reflect & Distill – 7 to 30 Days</h3>
  
  <p className="mb-4 text-gray-700">
    Some things don’t make sense in the moment. Only when you step back, sit still, and listen again—do they begin to speak. That’s what <strong>Reflect</strong> is for. After living the life, you let it breathe through you one more time. This time, slower. This time, with intention.
  </p>

  <p className="mb-4 text-gray-700">
    You return not just with stories, but with tension. With something unresolved. Something that stayed with you. This phase helps you hold that feeling long enough to ask:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Why did this moment matter more than others?</li>
    <li>What caused this problem to exist?</li>
    <li>Who is affected—and how do they see it?</li>
    <li>What has already been tried?</li>
    <li>Is this a problem that needs to be solved—or understood differently?</li>
  </ul>

  <p className="text-lg text-gray-800 italic mb-6">
    Reflection is not a pause in the journey. It’s the part where you decide where to go next.
  </p>

  <p className="text-base text-gray-700 mb-4">
    Here, you study not books—but the systems you lived inside. You map relationships, visualize impact chains, trace decisions across time. It’s a time for silence, systems, and synthesis.
  </p>

  <p className="text-base text-gray-700 mb-4">
    With mentor support, you’ll eventually choose one challenge to carry forward—not the loudest one, but the one that’s asking for you. The one you understand both emotionally and structurally. And from that, you’ll begin shaping it into a <strong>problem statement</strong>, a <strong>research hypothesis</strong>, or a <strong>design brief</strong>.
  </p>

  <p className="text-gray-700 mb-6">
    But before you can solve anything, you must first understand what you’re solving—and why. That begins by turning your lived experience into insights worth acting on.
  </p>

  <h4 className="text-lg font-semibold text-yellow-700 mb-2">Part One: Insight Mining from Experience</h4>

  <p className="mb-4 text-gray-700">
    After 30 days of immersion, you carry memories, emotions, and observations. Insight Mining helps you transform these into clear, grounded, and meaningful problem statements.
  </p>

  <div className="my-6 flex justify-center overflow-hidden">
<img
src="reflect.svg" // <-- replace with your actual filename
alt="Insight Mining Flowchart"
className="w-full max-w-2xl object-contain border-none"
style={{ clipPath: 'inset(2px 2px 2px 2px)' }} // removes thin outer lines
/>
</div>


  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li><strong>Reconstruct your journey:</strong> Map out your days—what happened, who you met, what stood out.</li>
    <li><strong>Highlight tension points:</strong> Look for moments that felt frustrating, unfair, slow, or confusing.</li>
    <li><strong>Ask reflective questions:</strong> Why did this happen? Who was impacted? What system was involved?</li>
    <li><strong>Cluster recurring themes:</strong> Group moments into patterns—around water, trust, time, access, etc.</li>
    <li><strong>Draft raw problem statements:</strong> Use phrases like “I noticed that...” or “How might we...”</li>
    <li><strong>Sense-check your insights:</strong> Share with mentors, peers, or locals to validate what you found.</li>
  </ul>

  <p className="text-gray-700 mb-6">
    This process gives you not just a list of problems—but problems that are personal, observed, and real.
  </p>

  <h4 className="text-lg font-semibold text-yellow-700 mb-2">Part Two: Shortlisting the Right Problem</h4>

  <p className="mb-4 text-gray-700">
    Once you have a list of potential problems, you need a method to choose the one to take forward. We use a structured scoring system to help you decide with clarity.
  </p>

  <p className="mb-2 text-gray-700 font-medium">Score each problem (1 to 5) across the following:</p>

  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Is this a real and current issue in the community?</li>
    <li>Do I genuinely care about solving it?</li>
    <li>Can I address this within the next 3 to 12 months?</li>
    <li>Do I or my team have access to tools or skills for this?</li>
    <li>If solved, would it create meaningful impact?</li>
    <li>Does this align with what I want to grow or learn?</li>
  </ul>

  <p className="mb-4 text-gray-700">
    Add up the scores. Prioritize the top 2 or 3. Then choose the one that feels right—not just in numbers, but in your gut.
  </p>

  <p className="mb-4 text-gray-700">
    You can also draw a grid with effort on the X-axis and impact on the Y-axis. Aim for problems that fall in the high-impact, low-to-medium effort zone.
  </p>

  <h4 className="text-lg font-semibold text-yellow-700 mb-2">Visual Prioritization Matrix</h4>

<p className="mb-4 text-gray-700">
Use this matrix to help visualize which problems are worth pursuing based on effort required and potential impact.
</p>

<div className="overflow-x-auto mb-6">
<table className="min-w-full text-sm text-left text-gray-700 border border-collapse border-gray-300">
<thead>
  <tr className="bg-yellow-100">
    <th className="px-4 py-2 border font-bold text-center">Impact ↓<br/>Effort →</th>
    <th className="px-4 py-2 border font-bold text-center">Low Effort</th>
    <th className="px-4 py-2 border font-bold text-center">Medium Effort</th>
    <th className="px-4 py-2 border font-bold text-center">High Effort</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td className="px-4 py-3 border font-semibold bg-yellow-50">High Impact</td>
    <td className="px-4 py-3 border"><u>Best Choice</u><br/>Quick wins with great value</td>
    <td className="px-4 py-3 border"><u>Good candidates</u><br/>Worth investing effort</td>
    <td className="px-4 py-3 border"><u>Big ideas</u><br/>Needs long-term commitment</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border font-semibold bg-yellow-50">Medium Impact</td>
    <td className="px-4 py-3 border"><u>Helpful</u><br/>Low resistance</td>
    <td className="px-4 py-3 border"><u>Maybe</u><br/>Only if well aligned</td>
    <td className="px-4 py-3 border"><u>Costly</u><br/>Hard to justify</td>
  </tr>
  <tr>
    <td className="px-4 py-3 border font-semibold bg-yellow-50">Low Impact</td>
    <td className="px-4 py-3 border"><u>Ignore</u><br/>Low return</td>
    <td className="px-4 py-3 border"><u>Skip</u><br/>Likely not worth effort</td>
    <td className="px-4 py-3 border"><u>Avoid</u><br/>Drains resources</td>
  </tr>
</tbody>
</table>
</div>



  <p className="text-gray-700 mb-4">
    Ask yourself:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>Which one can I commit to for the next few months?</li>
    <li>Which one feels urgent and meaningful?</li>
    <li>Which one aligns with my skills, my timeline, and my passion?</li>
  </ul>

  <p className="text-gray-700 mb-6">
    Your final choice becomes the foundation for the Solve phase. It's not just a project. It’s your way of honoring the life you lived—and beginning to change it.
  </p>

  <p className="text-base text-gray-700 italic">
    Reflect is where immersion becomes insight. It’s where experience becomes direction. It’s where intention enters the equation.
  </p>
    </>
  );
}
