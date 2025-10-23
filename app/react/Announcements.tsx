"use client";

import { useState } from "react";

const Announcements = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const announcements = [
    {
      id: 1,
      title: "Registration Deadline",
      date: "May 21, 2025",
      content: "Registration for the REACT Fellowship Program will close on May 30, 2025. Ensure you complete your application with all required documents before the deadline. Late applications will not be considered."
    },
    {
      id: 2,
      title: "Results Announcement",
      date: "June 1-7, 2025",
      content: "Results for the REACT Fellowship Program will be announced during the first week of June. All applicants will be notified via email. Please ensure your contact information is up to date in your application profile."
    },
    {
      id: 3,
      title: "Selection Process Begins (tentative) ",
      date: "June 15-21, 2025",
      content: "The selection process for successful candidates will commence in the third week of June. This includes orientation sessions, document verification, and preliminary project assignments. Be prepared to engage actively during this period."
    },
    {
      id: 4,
      title: "Orientation Webinar",
      date: "June 25, 2025",
      content: "A mandatory orientation webinar will be held for all selected candidates. The session will cover program expectations, project frameworks, mentorship details, and important dates. Links will be sent to selected candidates' email addresses."
    },
    {
      id: 5,
      title: "Fellowship Kickoff",
      date: "July 1, 2025",
      content: "The official kickoff for the REACT Fellowship Program will be on July 1. This marks the beginning of your journey in the program. All selected fellows are expected to participate in the virtual kickoff ceremony."
    },
    {
      id: 6,
      title: "Mentor Matching Process",
      date: "July 5-10, 2025",
      content: "During the first week of the program, fellows will be matched with their mentors based on research interests, project focus, and career goals. The mentorship is a critical component of your fellowship experience."
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Announcements</h1>
        <p className="text-gray-600 mb-8">
          Stay updated with the latest information about the REACT Fellowship Program
        </p>

        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div 
              key={announcement.id}
              className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div 
                className="px-6 py-4 cursor-pointer flex justify-between items-center"
                onClick={() => toggleExpand(announcement.id)}
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
                </div>
                <div className="text-gray-400">
                  {expandedId === announcement.id ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              
              {expandedId === announcement.id && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">{announcement.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Important Reminders</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Follow our social media channels for real-time updates</li>
            <li>For any queries regarding the program, contact <span className="font-medium">react@kct.ac.in</span></li>
            <li>All deadlines are based on Indian Standard Time (IST)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcements;