"use client";

import Image from "next/image";
import dairyImage from "public/images/themes/original/4.png"; // Adjust path as needed

export default function TechForDairy() {
  return (
    <div className="relative flex text-gray-700">
      {/* Right-side image */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={dairyImage}
          alt="Dairy Farmer and Cattle"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Tech for Dairy</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “If you can’t measure it, you can’t improve it — but first, you must listen to the people who live it.”
        </blockquote>

        <p className="mb-4">
          India is the <strong>world’s largest producer of milk</strong>, but this milestone hides a fragmented ecosystem of smallholder dairy farmers, informal logistics, and limited veterinary care. While dairy sustains millions, the systems behind it often remain invisible, outdated, and unsupported.
        </p>

        <p className="mb-4">
          <strong>Tech for Dairy</strong> is not about industrializing production—it’s about strengthening the link between animal care, farmer knowledge, and resilient local economies. From wearable devices that monitor health to AI-enabled yield tracking, you’ll work on grounded innovations that respect both tradition and need.
        </p>

        <h3 className="text-xl font-semibold mb-2">Design with the Herd, Not Above It</h3>
        <p className="mb-4">
          This theme places you alongside farmers, cooperatives, veterinarians, and logistics partners. You’ll walk the milking routes, speak with women-led dairy groups, observe feeding and healthcare routines—and build systems that reflect this complexity.
        </p>

        <ul className="list-disc pl-5 mb-6">
          <li>Co-design milk yield tracking tools with farmer collectives</li>
          <li>Prototype low-cost cattle health monitors using IoT or vision models</li>
          <li>Develop cold chain alert systems for milk chilling and transport</li>
          <li>Create real-time dashboards and SMS tools for supply-chain coordination</li>
          <li>Incorporate indigenous animal care practices into tech workflows</li>
        </ul>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Tech in dairy doesn’t start with code—it starts with the cow, and the care it receives.”
        </blockquote>

        <h3 className="text-xl font-semibold mb-2">Why This Matters</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Food Security</strong>: Reliable dairy production supports rural nutrition and child health</li>
          <li><strong>Rural Income</strong>: Small boosts in productivity uplift entire families and communities</li>
          <li><strong>Sustainability</strong>: Improved animal health reduces emissions, antibiotic misuse, and spoilage</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">More Than Milk</h3>
        <p className="mb-4">
          Dairy is not just an industry—it’s a way of life for millions across India. From early-morning chores to late-night emergencies, dairy farmers live on call. When you work in this theme, you step into this rhythm. You won’t just design for them—you’ll design <em>with</em> them.
        </p>

        <p>
          <strong>Tech for Dairy</strong> is a chance to bring data, care, and engineering into balance. It’s where precision meets empathy—and where technology nourishes both people and planet.
        </p>
      </div>
    </div>
  );
}
