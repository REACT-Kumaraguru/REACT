// app/react/careers/JobCard.tsx
"use client";

import React from "react";

interface JobCardProps {
  title: string;
  target: string;
  reportTo: string;
  description: string;
  details: string;
}

export const JobCard: React.FC<JobCardProps> = ({ title, target, reportTo, description, details }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-bold text-indigo-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-1"><strong>Target:</strong> {target}</p>
      <p className="text-sm text-gray-500 mb-1"><strong>Reporting To:</strong> {reportTo}</p>
      <p className="text-sm text-gray-500 mb-2"><strong>Duration:</strong> 6 months (Full-Time Internship)</p>
      <p className="text-md font-medium text-gray-700 mb-3">{description}</p>
      <pre className="text-sm whitespace-pre-wrap font-sans text-gray-600 bg-white border-l-4 border-indigo-300 pl-4 py-2">{details}</pre>
    </div>
  );
};
