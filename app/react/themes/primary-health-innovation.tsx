"use client";

import Image from "next/image";
import healthImage from "public/images/themes/original/5.png"; // Adjust the path based on your image location

export default function PrimaryHealthInnovation() {
  return (
    <div className="relative flex text-gray-700">
      {/* Right-side persistent image */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={healthImage}
          alt="Rural Health Worker"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Primary Health Innovation</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Healthcare innovation doesn’t start in hospitals. It begins where care is delivered under pressure—with patience, not privilege.”
        </blockquote>

        <p className="mb-4">
          In the quiet, crowded corridors of India’s rural clinics and semi-urban Primary Health Centres (PHCs), healthcare happens under pressure. With minimal resources, limited digital access, and tireless staff, these centers handle everything from maternal care to minor surgeries—often serving hundreds with just a few hands.
        </p>

        <p className="mb-4">
          <strong>Primary Health Innovation</strong> is your entry point into this world—not to intervene from above, but to walk alongside. You’ll witness how frontline healthcare workers juggle paperwork, referrals, and emergencies. And you’ll ask: How can we make these systems more connected, humane, and resilient?
        </p>

        <h3 className="text-xl font-semibold mb-2">Support Before Disruption</h3>
        <p className="mb-4">
          You’re not here to build over them—you’re here to build with them. You’ll study real-world medical delivery in resource-limited settings, with permission and humility. You'll work with ANMs, nurses, doctors, and clerks, and explore how tools—not tech buzzwords—can improve care.
        </p>

        <ul className="list-disc pl-5 mb-6">
          <li>Map bottlenecks in patient flow, documentation, and follow-up systems</li>
          <li>Design low-tech interventions for scheduling, screening, or triage</li>
          <li>Create culturally sensitive health education for preventive care and nutrition</li>
          <li>Prototype tools for medicine tracking, vitals monitoring, or digital records</li>
        </ul>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “If we can make health systems work at the periphery—we can make them work anywhere.”
        </blockquote>

        <h3 className="text-xl font-semibold mb-2">Why This Matters</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Public Health</strong>: Strong PHCs mean earlier detection, faster recovery, and long-term community wellness</li>
          <li><strong>Equity</strong>: Rural healthcare deserves design rigour equal to that of urban hospitals</li>
          <li><strong>Scalability</strong>: Solutions built here can scale across the national public health infrastructure</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Empathy in Execution</h3>
        <p className="mb-4">
          This theme is not about grand solutions. It’s about quiet, persistent improvements. Where even a single screen or sheet can reduce hours of stress. Where your designs must function without internet, withstand erratic electricity, and respect the human at the center.
        </p>

        <p>
          <strong>Primary Health Innovation</strong> is where care meets code, systems meet humanity, and design meets responsibility. If you want to build solutions that survive beyond the prototype—and matter to the people who use them—start here.
        </p>
      </div>
    </div>
  );
}
