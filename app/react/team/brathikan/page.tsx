"use client";
import React, { useState } from 'react';
import { Award, BookOpen, Lightbulb, Users, Globe, FileText, Mail, Linkedin, ExternalLink, ChevronDown, Waves, Zap, Shield } from 'lucide-react';

export default function Home() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-slate-900"></div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition">About</a>
            <a href="#initiatives" className="text-slate-700 hover:text-blue-600 transition">Initiatives</a>
            <a href="#impact" className="text-slate-700 hover:text-blue-600 transition">Impact</a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex items-center gap-3 text-blue-600">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Chevening Scholar • Founder, Kinowave</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Brathikan Vijayamohan<br />
            <span className="text-slate-600">Mankayarkarasi</span>
          </h1>
          
          <p className="text-xl text-slate-700 mb-4 font-medium">
            Principal Architect — Research & Development
          </p>
          <p className="text-lg text-slate-600 mb-8">
            Kumaraguru Institutions
          </p>
          
          <p className="text-2xl text-slate-800 mb-12 max-w-3xl leading-relaxed">
            Designing systems where education meets enterprise.
          </p>

          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
            <a href="#initiatives" className="px-6 py-3 bg-white text-slate-700 rounded-lg border border-slate-300 hover:border-blue-600 transition">
              Explore Work
            </a>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Executive Summary</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Brathikan leads Research & Development at Kumaraguru Institutions, building cross-disciplinary ecosystems that move ideas from field immersion to validated solutions and ventures. As founding architect of REACT, he integrates real-world problem discovery, systems thinking, and enterprise creation into the academic fabric. A Chevening Scholar and founder of Kinowave (a wave-energy venture recognized internationally), his work focuses on climate-tech, inclusive innovation, and translational education. Brathikan partners with communities, industry, and global networks to turn student and faculty research into measurable outcomes—pilots, patents, publications, and startups—with a clear emphasis on impact at scale.
          </p>
        </div>
      </section>

      {/* Role & Mandate */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Role & Mandate</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Lightbulb, title: "Strategy", desc: "Shape institution-wide research priorities and world-class partnerships." },
              { icon: Zap, title: "Translation", desc: "Convert research into pilots, IP, and startups with clear pathways to scale." },
              { icon: BookOpen, title: "Education by Doing", desc: "Embed REACT's field immersion → problem validation → prototype → implementation into curricula." },
              { icon: Users, title: "Ecosystem Building", desc: "Convene industry, government, and civil society for co-creation." },
              { icon: Award, title: "Mentorship", desc: "Guide faculty and student teams toward rigorous, outcome-driven work." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 transition">
                <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Initiatives */}
      <section id="initiatives" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Signature Initiatives</h2>
          
          <div className="space-y-4">
            {[
              {
                id: 'react',
                icon: BookOpen,
                title: "REACT — Real-world Experience & Application through Collaborative Transformation",
                content: "A full-cycle learning system: students live problems in the field, validate assumptions, build prototypes, and implement. Outcomes are tracked via REACT credits and a Digital Fieldfolio that captures evidence, reflection, and delivery."
              },
              {
                id: 'kinowave',
                icon: Waves,
                title: "Kinowave — Coastal Energy & Resilience",
                content: "A wave-energy concept leveraging fluid dynamics for clean power and shoreline protection; recognized by international platforms and building a research-to-deployment pipeline."
              },
              {
                id: 'governance',
                icon: Shield,
                title: "Governance & Ethics Charter",
                content: "Institutional frameworks for safe, ethical, consent-based field work; RACI matrices; risk & emergency SOPs; community validation protocols."
              },
              {
                id: 'ride',
                icon: Lightbulb,
                title: "RIDE Diagnostic & PULSE Toolkit",
                content: "A scaffolded, evidence-first toolkit—Infinity WHY, MAIR feasibility, stakeholder mapping—to move teams from 'interesting idea' to validated need and implementable solution."
              }
            ].map((initiative) => (
              <div key={initiative.id} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleSection(initiative.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-100 transition"
                >
                  <div className="flex items-center gap-3">
                    <initiative.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-slate-900 text-left">{initiative.title}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${expandedSection === initiative.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedSection === initiative.id && (
                  <div className="px-6 pb-4">
                    <p className="text-slate-700 leading-relaxed">{initiative.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Focus Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Climate & Renewable Energy",
              "Coastal Systems",
              "Translational R&D",
              "Systems Thinking & Design",
              "Field-based Education",
              "Venture Pathways",
              "Public-interest Technology",
              "Partnerships & Global Programs"
            ].map((area, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
                <p className="font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Impact at a Glance</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "180+", label: "Students Screened" },
              { number: "7", label: "Field Deployments" },
              { number: "10+", label: "Pilots & Prototypes" },
              { number: "4+", label: "Partners Onboarded" }
            ].map((metric, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.number}</div>
                <div className="text-slate-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Recognition & Media</h2>
          <div className="space-y-4">
            {[
              "Chevening Scholar (University of Edinburgh)",
              "Featured at Prototypes for Humanity",
              "James Dyson Award (national recognition)",
              "Speaker/Panelist on education transformation, climate innovation, and systems design"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
<section className="py-20 px-6 bg-gradient-to-r from-slate-800 to-slate-900">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6" style={{ color: 'white' }}>
      A Working Philosophy
    </h2>
    <blockquote className="text-2xl italic leading-relaxed" style={{ color: 'white' }}>
      "We don't just teach solutions—we live the problem until the solution becomes unavoidable."
    </blockquote>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Speaking & Collaboration</h3>
              <p className="text-slate-700 mb-4">
                Available for keynotes, masterclasses, sandpits, industry labs, and faculty development on:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Education-to-Enterprise systems</li>
                <li>• Field-based learning</li>
                <li>• Climate & coastal technologies</li>
                <li>• Building ethical research pipelines</li>
                <li>• Venture-ready problem solving</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="text-slate-700">
                  Office of Research & Development<br />
                  Kumaraguru Institutions, Coimbatore
                </p>
                <div className="flex flex-col gap-3 pt-4">
                  <a href="mailto:brathikan@kct.ac.in" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </a>
                  <a href="https://www.linkedin.com/in/brathikan/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                  <a href="https://react.kct.ac.in" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Globe className="w-4 h-4" />
                    react.kct.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-slate-400 text-center">
        <p>© 2025 Brathikan Vijayamohan Mankayarkarasi. All rights reserved.</p>
      </footer>
    </div>
  );
}