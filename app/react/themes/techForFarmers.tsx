"use client";

import Image from "next/image";
import farmerImage from "public/images/themes/original/1.png";

export default function TechForFarmers() {
  return (
    <div className="relative flex text-gray-700">
      {/* Right-margin image for large screens */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-64 z-0">
        <Image
          src={farmerImage}
          alt="Farmer"
          className="object-cover h-full w-full opacity-20"
        />
      </div>

      {/* Main content with padding to avoid image overlap */}
      <div className="relative z-10 w-full lg:pr-72 p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Tech for Farmers</h2>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Innovation in agriculture doesn’t mean replacing the farmer—it means respecting their instinct and building with it.”
        </blockquote>

        <p className="mb-4">
          Behind every grain of rice or pulse is a farmer who has negotiated with nature, market volatility, limited infrastructure, and shrinking margins. Indian agriculture, which supports over <strong>58% of the population’s livelihood</strong> (World Bank, 2023), is no longer just about cultivation—it’s a delicate act of resilience, system navigation, and survival.
        </p>

        <p className="mb-4">
          Yet the story of agricultural innovation is often written far from the fields. Too many solutions are built in labs, funded by venture metrics, or designed with assumptions rather than immersion.
        </p>

        <p className="mb-4 font-semibold text-green-700">
          This is where REACT intervenes.
        </p>

        <h3 className="text-xl font-semibold mb-2">Step into the System—Don’t Just Study It</h3>
        <p className="mb-4">
          <strong>Tech for Farmers</strong> isn’t a simulation or a case study—it’s full immersion. You live and learn alongside farmers, observing the rhythms of sowing, tending, harvesting, and selling. You witness firsthand how weather, groundwater, pests, market access, and policy impact everyday decisions.
        </p>

        <p className="mb-4">
          This is not to romanticize struggle—but to design <em>with</em> it, not around it.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “According to FAO (2021), over 80% of agricultural technology fails to scale due to poor contextual fit. The issue isn’t innovation—it’s insulation.”
        </blockquote>

        <h3 className="text-xl font-semibold mb-2">Co-Create, Don’t Impose</h3>
        <ul className="list-disc pl-5 mb-6">
          <li>Design low-cost agri-tools for sowing, irrigation, and post-harvest processing</li>
          <li>Prototype field-level solutions for water efficiency, crop health, or logistics</li>
          <li>Partner with farmer groups to identify bottlenecks in effort, income, or access</li>
          <li>Build tech that asks: does this reduce dependency, or increase dignity?</li>
        </ul>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “Frugal innovation in agriculture is about solving for constraints, not scaling luxury.” — Radjou & Prabhu, 2012
        </blockquote>

        <h3 className="text-xl font-semibold mb-2">Design Principles That Matter</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Affordability</strong>: If it can’t be bought, it can’t be used.</li>
          <li><strong>Adoptability</strong>: If it’s hard to learn, it’s easy to abandon.</li>
          <li><strong>Repairability</strong>: If it breaks in the field, it must be fixed in the field.</li>
          <li><strong>Dignity</strong>: If it reduces agency or increases dependency, it’s not innovation.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Why This Matters</h3>
        <ul className="list-disc pl-5 mb-6">
          <li><strong>Economic:</strong> Efficient tools can cut input costs by 20–30% and increase yields by up to 40% (ICAR, 2022)</li>
          <li><strong>Social:</strong> Community-designed tech sees 3x higher adoption than top-down models (NABARD, 2021)</li>
          <li><strong>National:</strong> Supporting smallholders strengthens food security and climate resilience (IPCC, 2022)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Who Should Join?</h3>
        <p className="mb-4">
          Engineers, designers, soil scientists, coders, data thinkers—anyone ready to build with mud on their boots. This is where your technical knowledge collides with field complexity and transforms into systems that serve.
        </p>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-indigo-700 font-medium mb-4">
          “If your solution can’t survive the monsoon, withstand rough use, or explain itself without English, it’s not ready.”
        </blockquote>

        <p>
          <strong>Tech for Farmers</strong> is not just a theme. It’s a hands-on invitation to co-build, co-learn, and grow something that works—slowly, locally, and together.
        </p>
      </div>
    </div>
  );
}
