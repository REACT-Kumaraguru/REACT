"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    category: "Program Overview",
    items: [
      {
        q: "What exactly is the REACT GLOBE Fellowship?",
        a: "The REACT GLOBE Fellowship (Global Learning and Observation-Based Engagement) is a six-month, full-time international leadership residency hosted in Coimbatore, India. Fellows live and work inside REACT — Real-world Engineering and Application for Collaborative Transformation — helping design and operate a working innovation ecosystem that connects education with real-world problem-solving.",
      },
      {
        q: "How is REACT GLOBE different from other fellowships or internships?",
        a: "Unlike research or classroom-based fellowships, REACT GLOBE is operational. You don’t study a project — you run the system that makes projects possible. You will: • Manage real operations and partnerships. • Build frameworks adopted by universities and industries. • Live in India’s innovation ecosystem and see systems thinking in action. Other programs give exposure; REACT gives responsibility.",
      },
      {
        q: "Who is the ideal candidate?",
        a: "Someone aged 21–35 who wants to live abroad and learn through real-world action. Self-driven, reflective, and adaptable individuals who value collaboration over competition and enjoy working across disciplines — technology, education, community, and design. Prior India experience is not required.",
      },
      {
        q: "What makes REACT GLOBE the most sought-after experience of its kind?",
        a: "You build a live system — not a prototype. You lead from day 1. You work in the Global South. You gain institutional credibility and join a lifelong network of changemakers.",
      },
      {
        q: "Where does the fellowship take place?",
        a: "At Kumaraguru Institutions, Coimbatore (Tamil Nadu, India) — an integrated academic-innovation campus surrounded by active field and industrial networks.",
      },
    ],
  },
  {
    category: "Logistics & Support",
    items: [
      {
        q: "What are the dates and deadlines?",
        a: "Applications Open: 18 Oct 2024 | Phase 1 Deadline: 31 Oct 2025 | Phase 2: 10 Nov 2025 | Residency: Jan–Jun 2026. Rolling selection — apply early!",
      },
      {
        q: "What support do fellows receive?",
        a: "Shared accommodation, healthy meals, modest stipend, workspace, mentorship, visa assistance, and certificate after completion.",
      },
      {
        q: "Is there a fee to apply or participate?",
        a: "No. There is no application fee, and selected fellows do not pay tuition. Basic living support is provided.",
      },
      {
        q: "Is this open to Indians?",
        a: "Yes. While globally oriented, the fellowship is open to all nationalities, including Indian applicants.",
      },
      {
        q: "What visa should I apply for?",
        a: "Once selected, REACT will issue an official invitation letter. Fellows may apply for cultural exchange, research, or internship visa categories depending on nationality.",
      },
    ],
  },
  {
    category: "Life & Experience",
    items: [
      {
        q: "What kind of work will I actually do each day?",
        a: "Operations meetings, field coordination, systems design, storytelling, and mentorship — combining intellect, logistics, and creativity.",
      },
      {
        q: "What is daily life like in Coimbatore?",
        a: "Safe, green, and welcoming. Weekdays are structured with weekends for travel and cultural immersion.",
      },
      {
        q: "Do I need to speak Tamil or Hindi?",
        a: "No. English is the working language. Basic Tamil phrases are taught during induction.",
      },
      {
        q: "What health or safety measures exist?",
        a: "Valid health insurance is mandatory. 24-hour campus health centre, safety briefings, and anti-harassment policies are in place.",
      },
      {
        q: "Why India?",
        a: "India is a living laboratory of innovation where tradition, technology, and transformation intersect — an unmatched context for systems change learning.",
      },
    ],
  },
  {
    category: "Application Process",
    items: [
      {
        q: "How do I apply?",
        a: "Submit your application via the above forms. Include your CV, LinkedIn, and short reflections. Early applications reviewed first.",
      },
      {
        q: "What happens after I apply?",
        a: "Acknowledgement within 48 hours → Online conversation → Offer with visa documentation in 2–3 weeks.",
      },
      {
        q: "What if I’m not selected this year?",
        a: "You can re-apply for the next cycle. Strong applicants may be invited to join other REACT projects or virtual collaborations.",
      },
      {
        q: "I’m taking time to make my application perfect — is that okay?",
        a: "We admire your care, but apply early! Rolling selection means earlier submissions have higher priority.",
      },
    ],
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(2);

  const toggle = (index: string) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-700 flex items-center justify-center gap-2">
          <HelpCircle className="w-7 h-7 text-indigo-600" />
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Everything you need to know about the REACT GLOBE Fellowship — organized for easy navigation.
        </p>
      </div>

      {faqData.map((section, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
            {section.category}
          </h3>
          {section.items.slice(0, visibleCount).map((item, j) => {
            const index = `${i}-${j}`;
            const isOpen = expanded === index;
            return (
              <div key={index} className="mb-3 border rounded-lg overflow-hidden shadow-sm">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center bg-white p-4 text-left font-medium hover:bg-indigo-50 transition"
                >
                  <span className="text-gray-800">{item.q}</span>
                  {isOpen ? (
                    <ChevronUp className="text-indigo-600" />
                  ) : (
                    <ChevronDown className="text-indigo-600" />
                  )}
                </button>
                {isOpen && (
                  <div className="bg-gray-50 text-gray-700 p-4 border-t whitespace-pre-line">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}

      <div className="text-center mt-8">
        {visibleCount < 5 && (
          <button
            onClick={() => setVisibleCount(visibleCount + 1)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md"
          >
            Load More FAQs
          </button>
        )}
      </div>
    </section>
  );
}
