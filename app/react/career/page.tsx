// app/react/careers/page.tsx
"use client";

import { useState } from "react";
import { JobCard } from "./JobCard"; // You'll define this component below
import CareerForm from "./CareerForm"; // You'll define this component below

const jobs = [
  {
    title: "Theme Program Management Intern (TPM)",
    target: "BBA Students",
    reportTo: "Theme Lead & Central REACT Team",
    description: `Execution, coordination, and field operations leadership for each REACT theme.`,
    details: `
- Coordinate immersions, logistics, and safety protocols
- Track student milestones and learning logs
- Build local stakeholder partnerships
- Represent the theme in all REACT-wide planning forums
- Ensure alignment with REACT vision and values
    `
  },
  {
    title: "Documentation & Project Intern",
    target: "MSW Students",
    reportTo: "Theme Lead & Central Documentation PM",
    description: `Capture and synthesize student journeys, community impact, and ethical narratives.`,
    details: `
- Maintain field logs and transformation stories
- Archive photo/video content ethically
- Assist in final report writing and documentation kits
- Align outputs with SDGs and funding goals
    `
  },
  {
    title: "Content Creator Intern",
    target: "BCom Students (Design Focus)",
    reportTo: "REACT Communications Team",
    description: `Shape REACT’s brand through visuals and media kits.`,
    details: `
- Design posters, reels, stories, templates (Canva, Figma)
- Maintain visual identity across platforms
- Support event and documentation visuals
    `
  },
  {
    title: "Outreach & Campaign Planning Intern",
    target: "BCom Students (Marketing Focus)",
    reportTo: "REACT Communications Team",
    description: `Lead outreach and analytics for REACT campaigns.`,
    details: `
- Run awareness campaigns and events
- Track content performance via analytics
- Plan drives, feedback forms, and engagement loops
    `
  },
  {
    title: "Budget Planning Intern",
    target: "BCom Students",
    reportTo: "Finance PM",
    description: `Own budgets and payment tracking for REACT events and logistics.`,
    details: `
- Prepare and monitor immersion budgets
- Handle invoices and reimbursements
- Track payment status and documentation
    `
  },
  {
    title: "Scholarship & Cost Report Analyst",
    target: "BCom Students",
    reportTo: "Finance PM",
    description: `Track scholarship use, spending efficiency, and cost-impact ratios.`,
    details: `
- Maintain logs of scholarship allocations
- Create monthly financial dashboards
- Support cost-benefit analysis for sponsors
    `
  },
  {
    title: "Documentation Officer – REACT Fellowship",
    target: "MSW Students",
    reportTo: "Documentation Lead & Core Team",
    description: `Capture daily immersion activity, mentor insights, and student journeys.`,
    details: `
- Record field logs, conversations, and reflections
- Maintain photo/video archives with consent
- Prepare stories, reports, and internal guides
    `
  }
];

export default function CareersPage() {
  return (
    <div className="p-8 space-y-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-indigo-800">Careers at REACT</h1>
      <p className="text-center text-lg max-w-3xl mx-auto text-gray-600">
        Join a movement that's transforming education through real-world immersion. Find your role, learn the expectations, and apply directly below. For queries, contact <a className="text-indigo-600 font-semibold" href="mailto:react@kct.ac.in">react@kct.ac.in</a>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, idx) => (
          <JobCard key={idx} {...job} />
        ))}
      </div>

      <div className="pt-12 border-t">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-4">Apply Now</h2>
        <CareerForm />
        
        <div className="text-center mt-12">
        <a
            href="/"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
            ← Back to Home
        </a>
        </div>

            </div>
            </div>
        );
        }

// Define JobCard.tsx and CareerForm.tsx in same folder
