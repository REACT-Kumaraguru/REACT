"use client";

import Image from "next/image";
import wetlandImage from "public/images/themes/original/wetland1.png"; // Replace with an actual image path

export default function TechForWetlands() {
  return (
    <div className="relative flex text-gray-800 dark:text-white bg-white dark:bg-gray-900">
      {/* Right-margin image for large screens */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={wetlandImage}
          alt="Wetland"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Main content with padding to avoid image overlap */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Tech for Wetlands</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “A wetland lost is a system collapsed. Water doesn’t just flow—it connects, sustains, and remembers.”
        </blockquote>

        <p className="mb-4">
          Wetlands are more than water—they’re living ecosystems that regulate floods, recharge aquifers, purify toxins, host biodiversity, and sustain livelihoods. Yet they are vanishing fast: over <strong>30% of India’s wetlands</strong> have disappeared in the last three decades (ISRO, 2022).
        </p>

        <p className="mb-4">
          In our cities, wetlands become real estate. In rural belts, they’re treated as wastelands. Conservation policies often overlook local practices, and tech solutions rarely consider ecological rhythms.
        </p>

        <p className="mb-4 font-semibold text-blue-700">
          This is where REACT steps in—with humility and systems thinking.
        </p>

        <h3 className="text-xl font-semibold mb-2">Enter the Watershed</h3>
        <p className="mb-4">
          <strong>Tech for Wetlands</strong> places you inside the catchment—working with communities that depend on tanks, lakes, ponds, and marshes. You study runoff, understand siltation, track flow paths, and document traditional water wisdom.
        </p>

        <p className="mb-4">
          Wetland work isn’t just data-driven. It’s people-aware, season-sensitive, and slow by design.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Wetland degradation isn’t a tech problem—it’s a systems collapse from ignoring stakeholders, cycles, and feedback.” — CSE, 2020
        </blockquote>

        <h3 className="text-xl font-semibold mb-2">What You Might Build</h3>
        <ul className="list-disc pl-5 mb-6">
          <li>Sensor networks to track water levels, inflow-outflow, or contamination</li>
          <li>Interactive dashboards for watershed behavior and seasonal management</li>
          <li>Low-cost dredging tools or silt traps co-designed with tank users</li>
          <li>Community-led documentation of traditional water governance</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Principles that Flow</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Ecological Fit</strong>: If it disrupts flora-fauna cycles, it’s not helping</li>
          <li><strong>Community First</strong>: Design with tank users, not just GIS tools</li>
          <li><strong>Low Intervention</strong>: Preserve and enhance, don’t engineer over</li>
          <li><strong>Long-Term Thinking</strong>: Wetlands don’t yield quarterly results</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Why This Matters</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Environmental:</strong> Wetlands store 40x more carbon per hectare than forests (Ramsar, 2021)</li>
          <li><strong>Social:</strong> Village tanks often determine access to drinking water and farming cycles</li>
          <li><strong>Urban:</strong> Restored wetlands reduce urban flooding and increase aquifer recharge</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Who Should Join?</h3>
        <p className="mb-4">
          Civil engineers, hydrologists, data analysts, ecologists, mappers, and system thinkers. If you care about climate, water, or equitable futures, this is your lab.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “If it can’t be repaired with local knowledge and doesn’t earn trust from the community—it won’t last.”
        </blockquote>

        <p>
          <strong>Tech for Wetlands</strong> is not just an environmental theme. It’s a call to rebuild our relationship with water, land, and time—through thoughtful tech and grounded collaboration.
        </p>
      </div>
    </div>
  );
}
