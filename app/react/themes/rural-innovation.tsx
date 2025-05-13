"use client";

import Image from "next/image";
import ruralImage from "public/images/themes/original/7.png"; // Update path as needed

export default function RuralInnovation() {
  return (
    <div className="relative flex text-gray-800 dark:text-white bg-white dark:bg-gray-900">
      {/* Right-side image for large screens */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={ruralImage}
          alt="Village development and innovation"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Main content area */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Rural Innovation (Village Development)</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Innovation in rural India isn’t about flashy tech—it’s about deep relevance and lasting value.”
        </blockquote>

        <p className="mb-4">
          In rural India, real progress doesn’t start in labs or offices. It begins in panchayat halls, open fields, tea shops, and the quiet, determined efforts of people doing the best they can with what they have. <strong>Rural Innovation</strong> invites you to walk beside these communities—not to deliver solutions, but to co-build them.
        </p>

        <p className="mb-4">
          With over <strong>65% of India’s population living in villages</strong> (Census, 2011), strengthening rural systems is essential for inclusive development. This theme takes you inside the village ecosystem—its governance, infrastructure, and aspirations. You’ll partner with <strong>Village Administrative Officers (VAOs)</strong>, local leaders, women’s self-help groups, and young changemakers.
        </p>

        <h3 className="text-xl font-semibold mb-2"> What You’ll Actually Do</h3>
        <p className="mb-4">
          You’ll live and work in villages—not as an observer, but as a collaborator. You’ll explore the gaps in water, roads, records, electricity, and health systems—and identify how small interventions can create outsized impact.
        </p>

        <ul className="list-disc pl-5 mb-4">
          <li>Map gaps in sanitation, public service access, or community infrastructure</li>
          <li>Design mobile-first tools for asset tracking, local grievance reporting, or participatory planning</li>
          <li>Prototype simple tech for mobility, energy access, waste, or awareness campaigns</li>
          <li>Digitize workflows and records with VAOs and Panchayat staff, using frugal, offline-first systems</li>
        </ul>

        <p className="mb-4">
          You’ll also work with:
        </p>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Rural-focused NGOs</strong> in governance, livelihoods, or community development</li>
          <li><strong>Social impact startups</strong> building for sanitation, healthtech, or agri-infra</li>
          <li><strong>Local government schemes</strong> to align with real-time development needs</li>
          <li><strong>Academic and policy labs</strong> exploring scalable village models</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2"> Why This Matters</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Economic Impact</strong>: Rural infrastructure lays the foundation for productivity and dignity</li>
          <li><strong>Responsive Governance</strong>: Digitized, citizen-centered workflows reduce friction and corruption</li>
          <li><strong>Youth Retention</strong>: Strong local systems give young people a reason to stay and lead</li>
        </ul>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Rural India doesn’t lack ideas—it needs the right bridges between imagination and implementation.”
        </blockquote>

        <h3 className="text-xl font-semibold mb-2"> The Deeper Commitment</h3>
        <p className="mb-4">
          <strong>Rural Innovation</strong> is about creating tools that fit into people’s rhythms—not the other way around. It’s about showing up with humility, listening with patience, and designing with both relevance and respect. Every form, poster, platform, or tool you build must answer one question: _Will this actually work for them?_
        </p>

        <p>
          If you want to understand systems from the grassroots—and prototype change that’s built to last—start here. This is where you learn not just how to build—but how to belong.
        </p>
      </div>
    </div>
  );
}
