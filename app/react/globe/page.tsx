'use client';

import { useState, ElementType, ReactNode } from "react";
import { ChevronDown, ChevronUp, Globe, Calendar, MapPin, Users, Award, Heart } from "lucide-react";
import CareerForm from "./CareerForm";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";

// ✅ Define and USE the props interface
interface FellowshipCardProps {
  title: string;
  icon: ElementType; // React component (e.g. Lucide icon)
  children: ReactNode;
}

// ✅ Apply the type to the component
const FellowshipCard: React.FC<FellowshipCardProps> = ({ title, icon: Icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-indigo-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 transition"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-indigo-600" />
          <h3 className="text-lg font-semibold text-indigo-900">{title}</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-indigo-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-indigo-600" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-700 space-y-3">
          {children}
        </div>
      )}
    </div>
  );
};

// Application Form Component
const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    motivation: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("Thank you for your interest! Please visit the official Google Form to complete your application.");
};


  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border border-indigo-200">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={formData.fullName}
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number (with country code)</label>
        <input
          type="tel"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Nationality / Country of Residence</label>
        <input
          type="text"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={formData.nationality}
          onChange={(e) => setFormData({...formData, nationality: e.target.value})}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">What are you currently searching for — in learning or in life?</label>
        <textarea
          rows={4}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          value={formData.motivation}
          onChange={(e) => setFormData({...formData, motivation: e.target.value})}
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
      >
        Proceed to Full Application
      </button>
      
      <p className="text-sm text-gray-600 text-center">
        This form will redirect you to the official Google Form with all required sections.
      </p>
    </form>
  );
};

// Main Careers Page
export default function CareersPage() {
    const [showForm, setShowForm] = useState(false); // 👈 Add this line

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-2">
            Global Learning and Observation-Based Engagement
          </div>
          <h1 className="text-5xl font-bold">REACT GLOBE Fellowship 2026</h1>
          <p className="text-2xl font-light italic">Run a real-world system. Build your clarity. Lead global change.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January – June 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Coimbatore, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>8-12 Fellows per Cohort</span>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-8 py-12 space-y-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>REACT GLOBE Fellowship</strong> is a six-month, full-time <strong>international leadership residency</strong> hosted at <strong>Kumaraguru Institutions, Coimbatore, India</strong>, under the global initiative <strong>REACT — Real-world Engineering & Application for Collaborative Transformation.</strong>
          </p>
          <p className="text-lg text-gray-600">
            It is not an internship or classroom course — it is a live-in, hands-on residency that places you <strong>inside the operating core of a working innovation ecosystem.</strong>
          </p>
          <p className="text-lg text-gray-600">
            Between <strong>January and June 2026</strong>, fellows from around the world will join the REACT team in India to <strong>run, manage, and evolve</strong> one of the most forward-thinking education-innovation movements in the Global South.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-6 my-12">
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <Globe className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Global Immersion</h3>
            <p className="text-gray-600">Live and work in India's innovation ecosystem with international fellows</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <Award className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Real Responsibility</h3>
            <p className="text-gray-600">Run actual systems, not simulations. Lead from day one.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-indigo-200 shadow-sm">
            <Heart className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="text-lg font-bold text-indigo-900 mb-2">Full Support</h3>
            <p className="text-gray-600">Accommodation, meals, stipend, mentorship, and global network</p>
          </div>
        </div>

        {/* Why GLOBE Section */}
        {/* Why GLOBE Section */}
<div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-lg border border-indigo-200">
  <h2 className="text-3xl font-bold text-indigo-900 mb-6">
    Why GLOBE Is Unlike Any Other Fellowship
  </h2>
  <div className="space-y-4 text-gray-700">
    <p>
      Most fellowships give you <strong>projects.</strong> REACT gives you <strong>systems</strong> — complex, living, and real.
    </p>
    <p>
      Most fellowships offer <strong>exposure.</strong> REACT offers <strong>responsibility</strong> — and the space to lead within it.
    </p>
    <p>
      Most fellowships <strong>study change.</strong> REACT <strong>engineers</strong> it — through innovation, policy, and collaboration.
    </p>

    <p className="mt-4">
      The GLOBE Fellowship is built for those ready to operate at the frontier of education, enterprise, and governance.
      Fellows work within the REACT ecosystem — a global blend of think tank, innovation lab, and incubator — where ideas are tested against the realities of people, institutions, and impact.
    </p>

    <p className="font-semibold text-gray-800 mt-6">You will:</p>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Engage directly with field, industrial, and policy environments where transformation is happening in real time.</li>
      <li>Translate complex systems into models, frameworks, and pathways that others can build upon.</li>
      <li>Collaborate across disciplines and sectors to address emerging global challenges.</li>
      <li>Lead initiatives that connect technology, sustainability, and human development in measurable ways.</li>
    </ul>

    <p className="mt-6">
      <strong>GLOBE</strong> is distinguished by its depth of autonomy and breadth of engagement. It is designed for individuals who seek to build clarity through creation, lead through systems, and learn through responsibility.
    </p>

    <p className="mt-4 font-semibold text-gray-800">
      Here, leadership is not assigned — it is earned through action, reflection, and result.
    </p>
  </div>
</div>


        {/* Expandable Sections */}
        <div className="space-y-4 my-12">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Learn More About the Fellowship</h2>
          
<FellowshipCard title="What Fellows Do" icon={Users}>
  <p className="font-semibold text-indigo-900">
    As a GLOBE Fellow, you are part of REACT’s operational leadership team — a select, high-trust cohort shaping how real-world learning, innovation, and enterprise come together.
  </p>
  <p className="mt-2">
    You don’t just support REACT — you build and evolve it. You will design, test, and scale systems that connect technology, policy, community, and business — while discovering your own path as a global problem-solver and systems thinker.
  </p>
  <p className="mt-2">
    Every fellow’s journey is flexible and self-directed, adapting to your expertise, curiosity, and long-term goals. Whether you are a technologist, designer, strategist, or entrepreneur, you’ll operate like a founder inside an ecosystem of change.
  </p>

  <div className="mt-4">
    <p className="font-semibold text-gray-800 mb-2">Key Responsibilities:</p>
    <ul className="list-disc list-inside space-y-1 ml-4">
      <li>
        <strong>Field & Systems Leadership:</strong> Lead on-ground and industrial immersions, uncover system gaps, and pilot interventions. Move between grassroots and boardrooms — connecting field realities with institutional and enterprise strategy.
      </li>
      <li>
        <strong>System Architecture & Innovation Design:</strong> Architect frameworks, digital dashboards, and operational blueprints that others will use. Design data-driven, tech-enabled, and policy-informed innovations that make REACT globally replicable.
      </li>
      <li>
        <strong>Strategic Documentation & Thought Leadership:</strong> Document not just activities but insights. Produce high-quality narratives, models, and visual systems that shape REACT’s knowledge base and global positioning. Publish reflections that influence practice beyond the program.
      </li>
      <li>
        <strong>Global Partnerships & Institutional Building:</strong> Co-create with universities, industries, and innovation councils worldwide. Represent REACT in international exchanges and help form new collaborations, programs, and spin-off initiatives.
      </li>
      <li>
        <strong>Enterprise & Innovation Acceleration:</strong> Mentor student innovators, validate ideas, and guide early-stage prototypes into ventures, pilots, or policy frameworks. Learn the full innovation-to-implementation pipeline from concept to field impact.
      </li>
    </ul>

    <p className="mt-4">
      <strong>Self-Led Micro-Track:</strong> Develop your own micro-track — a personal experiment or system innovation within REACT. It could be a product, a toolkit, a research model, or a partnership framework. You design it, own it, and publish its learnings as part of REACT’s legacy.
    </p>

    <p className="mt-4 font-semibold text-gray-800">
      In Essence: You’ll operate like a mini founder, not a participant — building live systems, shaping new methods, and defining what 21st-century education and innovation can look like.
    </p>
  </div>
</FellowshipCard>


          <FellowshipCard title="Who Can Apply" icon={Globe}>
            <p>REACT GLOBE welcomes applicants from around the world who are eager to live and learn in India while building real-world systems.</p>
            <div className="mt-4">
              <p className="font-semibold text-gray-800 mb-2">Ideal applicants:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Aged <strong>21-35 years</strong></li>
                <li>Graduates, gap-year master's students, or early-career professionals</li>
                <li>Backgrounds in Engineering, Design, Education, Social Sciences, Environment, Policy, or related fields</li>
                <li>Curious, self-driven, reflective, and ready for cross-cultural collaboration</li>
                <li>Fluent in English and open to living in India for six months</li>
              </ul>
              <p className="mt-4 italic text-gray-600">Those comfortable volunteering with food and accommodation support will be able to indicate that in the application form.</p>
            </div>
          </FellowshipCard>

          <FellowshipCard title="Fellowship Benefits" icon={Award}>
            <ul className="space-y-2">
              <li><strong>Accommodation:</strong> Comfortable shared housing near REACT Lab campus</li>
              <li><strong>Meals:</strong> Healthy food provided on campus</li>
              <li><strong>Stipend:</strong> Modest monthly allowance to cover local expenses</li>
              <li><strong>Volunteer Option:</strong> Applicants may opt to contribute in a volunteer capacity (with food and accommodation provided)</li>
              <li><strong>Visa Assistance:</strong> Official invitation and documentation for Indian visa processing</li>
              <li><strong>Workspace & Tools:</strong> Access to REACT Lab infrastructure, digital systems, and partner networks</li>
              <li><strong>Mentorship:</strong> Guidance from REACT's leadership, industry mentors, and visiting educators</li>
              <li><strong>Certification:</strong> REACT GLOBE Fellowship — Cohort 2026 Certificate of Completion</li>
              <li><strong>Global Network Access:</strong> Membership in the REACT Global Alumni Network, with opportunities for co-lead roles and start-up incubation</li>
            </ul>
          </FellowshipCard>

          <FellowshipCard title="Important Dates & Deadlines" icon={Calendar}>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-semibold">Applications Open</span>
                <span className="text-indigo-600 font-bold">18 October 2024</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-semibold">Phase 1 Deadline</span>
                <span className="text-indigo-600 font-bold">31 October 2025</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-semibold">Phase 2 Deadline</span>
                <span className="text-indigo-600 font-bold">10 November 2025</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="font-semibold">Fellowship Term</span>
                <span className="text-indigo-600 font-bold">January – June 2026</span>
              </div>
              <p className="text-sm text-red-600 font-semibold mt-4">⚠️ Rolling selection — early applications reviewed first (first come, first serve)</p>
              <p className="text-sm text-gray-600 italic">Interviews conducted online within 3 weeks of application submission</p>
            </div>
          </FellowshipCard>

          <FellowshipCard title="Learning Outcomes" icon={Award}>
            <p className="font-semibold text-indigo-900 mb-3">By the end of the fellowship, you will have:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Designed or managed a real educational innovation system</li>
              <li>Worked across multiple sectors — education, design, technology, and sustainability</li>
              <li>Developed systems leadership and operational strategy skills</li>
              <li>Gained clarity on your personal and professional direction</li>
              <li>Joined a global network of practitioners, mentors, and changemakers</li>
            </ul>
          </FellowshipCard>
        </div>

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg text-center my-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h2>
        <p className="text-lg mb-2">
          Live in India. Lead a real system. Learn how to build transformation from the inside out.
        </p>
        <p className="text-sm opacity-90 mb-6">
          Applications are reviewed on a rolling basis — apply early for priority consideration.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/react/globe/apply"
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          Apply Now
        </Link>
        </div>
      </div>
    </div>

       <FAQSection />
        {/* Footer Info */}
        <div className="text-center text-gray-600 space-y-2 py-8 border-t">
          <p className="font-semibold">For queries: <a href="mailto:react@kct.ac.in" className="text-indigo-600 hover:underline">react@kct.ac.in</a></p>
          <p className="text-sm">📍 REACT Lab, Kumaraguru Institutions, Coimbatore, Tamil Nadu, India</p>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md"
          >
            ← Back to Home
          </a>
        </div>
      </div>
  
  );
}