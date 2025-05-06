"use client";

import Image from "next/image";
import cityInfraImage from "public/images/themes/original/3.png"; // Adjust the path to your image

export default function WaterAndWaste() {
  return (
    <div className="relative flex text-gray-700">
      {/* Right-side image for large screens */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={cityInfraImage}
          alt="Urban Water and Waste System"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Content section with space for image */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Water & Waste (Municipal Systems)</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Water and waste aren’t technical problems. They’re systemic reflections of how we value people, space, and time.”
        </blockquote>

        <p className="mb-4">
          Every city and town runs on invisible networks—pipelines, drainage channels, garbage routes, and filtration systems. When they work, no one notices. When they don’t, the entire city feels it. <strong>Water & Waste (Municipal Systems)</strong> takes you to the pulse of urban infrastructure—where everyday maintenance meets deeply complex systems.
        </p>

        <p className="mb-4">
          In India, municipal bodies serve millions with limited resources. They’re tasked with delivering clean water, managing sewage, and handling solid waste across expanding cities. But these systems are often <strong>underfunded, under-monitored, and outdated</strong>. Real innovation lies not in disruption—but in support, augmentation, and systemic clarity.
        </p>

        <h3 className="text-xl font-semibold mb-2">Not Just Problems—Paths</h3>
        <p className="mb-4">
          In this theme, you don’t observe from afar. You walk with the system. You’ll join early-morning street cleaners, pump station staff, sanitation inspectors, and ward engineers. You'll trace the actual paths of service: where delays occur, where breakdowns are invisible, and where the people behind it all go unnoticed.
        </p>

        <ul className="list-disc pl-5 mb-6">
          <li>Map water pipelines, waste routes, and underserved areas in real-time</li>
          <li>Design dashboards, mobile tools, or citizen feedback systems</li>
          <li>Prototype low-cost leak sensors, bin trackers, and alert systems</li>
          <li>Co-create simplified workflows with ward officers and sanitation teams</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Why This Matters</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Public Health</strong>: Timely water and waste services prevent outbreaks and uphold hygiene</li>
          <li><strong>Climate Resilience</strong>: Efficient systems protect cities during floods, droughts, and rapid growth</li>
          <li><strong>Governance</strong>: Transparent infrastructure boosts trust and response in civic systems</li>
        </ul>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “If we design better systems for the most overlooked services, we design better cities for everyone.”
        </blockquote>

        <h3 className="text-xl font-semibold mb-2">Engineering That Listens</h3>
        <p className="mb-4">
          This is where your technical skills meet the realities of civic life. You’ll learn to work in ambiguity, design for maintainability, and empathize with the people who run the lifelines of our urban habitats. You’ll explore not just what can be automated—but what must be acknowledged.
        </p>

        <p>
          <strong>Water & Waste (Municipal Systems)</strong> isn’t just a theme. It’s an exercise in civic intelligence—where data, design, and empathy come together to serve those who keep our cities alive.
        </p>
      </div>
    </div>
  );
}
