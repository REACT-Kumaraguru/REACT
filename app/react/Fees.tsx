// app/react/Fees.tsx
"use client";

export default function Fees() {
  return (
    <div className="px-4 py-6 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-rose-700">
        Fees & Support
      </h2>

      <p className="mb-4 text-gray-700 text-base sm:text-lg">
        REACT is a field-based learning experience unlike any conventional program. From rural immersion to solution implementation, your journey includes not just mentorship and guidance—but also safe accommodation, healthy food, and all necessary facilities to support your stay, learning, and co-creation.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold text-rose-700 mt-6 mb-2">
        Fee Structure
      </h3>
      <p className="mb-4 text-gray-700 text-base sm:text-lg">
        The program follows a flexible, credit-based system. One month of active field-based learning is equivalent to <strong>1 academic credit</strong>. Each credit includes:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>Full access to REACT learning modules and on-field mentorship</li>
        <li>Accommodation in the host community or campus</li>
        <li>Nutritious daily meals (breakfast, lunch, dinner)</li>
        <li>Basic transportation and learning materials</li>
      </ul>

      <p className="mb-4 text-gray-700 text-base sm:text-lg">
        <strong>Each credit is priced at ₹10,000 INR.</strong> A minimum of 6 credits (6 months) is required to complete the program, equivalent to ₹60,000. Participants who wish to continue may extend:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>By 6 additional credits (6 more months) – twice at most</li>
        <li>Or by 12 additional credits (12 months) – once at most</li>
      </ul>

      <p className="mb-6 text-gray-700 text-base sm:text-lg">
        The maximum duration of the program is 18 months (up to 24 credits).
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold text-rose-700 mb-2">
        Scholarships & Support
      </h3>
      <p className="mb-4 text-gray-700 text-base sm:text-lg">
        We believe finance should never be a barrier to passion or purpose. Every applicant is automatically considered for a scholarship based on the strength of their application, commitment, and alignment with the REACT vision.
      </p>

      <p className="mb-2 text-gray-700 font-medium text-base sm:text-lg">
        Scholarships are available in the following tiers:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
        <li>100% (Full tuition fee waiver)</li>
        <li>75% tuition fee covered</li>
        <li>50% tuition fee covered</li>
        <li>25% tuition fee covered</li>
        <li>10% tuition fee covered</li>
      </ul>

      <p className="mb-4 text-gray-700 text-base sm:text-lg">
        Scholarship eligibility is determined through your application form and a short admission task. No separate scholarship form is required.
      </p>

      <p className="mb-4 text-gray-700 text-base sm:text-lg">
        <strong>Note:</strong> Sponsored candidates (e.g., those funded by institutions or industry partners) are generally <strong>not eligible</strong> for scholarships, unless specifically approved by the REACT committee.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold text-rose-700 mb-2">
        Value Beyond Cost
      </h3>
      <p className="mb-6 text-gray-700 text-base sm:text-lg">
        The REACT experience includes not just education—but exposure, immersion, purpose, and possibility. It's an investment into your future—and the future you’re ready to change.
      </p>
    </div>
  );
}
