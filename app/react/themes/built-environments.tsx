"use client";

import Image from "next/image";
import builtEnvImage from "public/images/themes/original/6.png"; // Adjust as needed

export default function BuiltEnvironments() {
  return (
    <div className="relative flex text-gray-800 dark:text-white bg-white dark:bg-gray-900">
      {/* Right margin image */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={builtEnvImage}
          alt="Urban accessibility and inclusive design"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Built Environments</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “We don't design spaces to look modern. We design them to make everyday life feel less difficult, less invisible, and more human.”
        </blockquote>

        <p className="mb-4">
          Every wall, bench, ramp, corridor, or courtyard tells a story—of access or exclusion, of ease or struggle, of dignity or denial. In <strong>Built Environments</strong>, we explore how physical space shapes behavior—and how we can shape space to serve all people, especially those least considered.
        </p>

        <p className="mb-4">
          India’s cities are growing faster than their infrastructure. Informal settlements expand beyond planning maps. Footpaths disappear. Buildings rise without thinking of those who move differently, see differently, process differently. Add to that: <strong>1 in 4 Indians face some form of physical, sensory, cognitive, or emotional limitation</strong>—yet most spaces are not built for them.
        </p>

        <h3 className="text-xl font-semibold mb-2">🔧 What You’ll Actually Do</h3>
        <p className="mb-4">
          You won’t just study architecture—you’ll decode the lived systems behind it. You’ll step into schools, PHCs, housing blocks, transit hubs, and slum lanes—not to judge, but to understand.
        </p>
        <p className="mb-4">
          You’ll observe:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>How a woman waits at an unlit bus stop after dark</li>
          <li>How a child in a wheelchair navigates a crowded school</li>
          <li>How a neurodivergent person copes with a noisy, chaotic ward</li>
          <li>How a street vendor reclaims disappearing public space</li>
        </ul>
        <p className="mb-4">
          Then you’ll design—not from assumption, but from collaboration.
        </p>

        <p className="mb-4">
          You’ll work alongside:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Startups</strong> in smart mobility, civic access, or urban resilience</li>
          <li><strong>Labs and engineering teams</strong> exploring low-cost, modular design</li>
          <li><strong>NGOs</strong> advocating for disability rights, gender-safe cities, and housing equity</li>
          <li><strong>Urban think tanks</strong> working on inclusive planning and governance</li>
          <li><strong>City officials</strong> experimenting with tech-enabled spatial audits</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">💡 What You Might Build</h3>
        <ul className="list-disc pl-5 mb-6">
          <li>Conduct spatial audits of public toilets, transport stations, and housing corridors</li>
          <li>Map access, usability, and sensory clarity for different age groups and abilities</li>
          <li>Prototype physical or digital interventions that improve wayfinding, comfort, or dignity</li>
          <li>Design with durability and simplicity for long-term use in real-world conditions</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">📍 Why This Matters</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Inclusive Urbanism</strong>: Design choices determine who feels welcome and who feels invisible</li>
          <li><strong>Health & Safety</strong>: Poor design contributes to anxiety, injury, and exclusion</li>
          <li><strong>Public Trust</strong>: When people feel seen in design, they believe in the systems behind it</li>
        </ul>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Designing better cities isn’t about changing skylines. It’s about reimagining sidewalks.”
        </blockquote>

        <h3 className="text-xl font-semibold mb-2">✨ The Deeper Invitation</h3>
        <p className="mb-4">
          <strong>Built Environments</strong> is not just about structure. It’s about social contracts. Where a ramp isn’t charity—it’s justice. Where signage, seating, and shelter aren’t luxuries—they’re rights. And where every line you draw must start with empathy.
        </p>

        <p>
          If you want to reimagine how people move, pause, belong, and thrive—start here.
        </p>
      </div>
    </div>
  );
}
