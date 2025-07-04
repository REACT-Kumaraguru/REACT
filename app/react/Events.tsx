"use client";

import { useState } from "react";
import Image from "next/image";

// Define types
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationLink?: string;
  recordingLink?: string;
}

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingEvents = [
    {
      id: 1,
      title: "REACT Fellowship Orientation",
      date: "June 1, 2025",
      time: "10:00 AM - 12:00 PM EST",
      location: "Virtual (Zoom)",
      description: "Join us for the official orientation of the REACT Fellowship Program. We'll cover program guidelines, expectations, and introduce the leadership team.",
      registrationLink: "/register/orientation"
    },
    {
      id: 2,
      title: "AI Ethics in Healthcare Symposium",
      date: "July 15, 2025",
      time: "1:00 PM - 5:00 PM EST",
      location: "Hybrid (Boston Convention Center & Virtual)",
      description: "A half-day symposium exploring ethical considerations in AI healthcare applications. Features keynote speakers from leading research institutions and healthcare organizations.",
      registrationLink: "/register/ai-ethics-symposium"
    },
    {
      id: 3,
      title: "Technical Workshop: Building Responsible AI Systems",
      date: "July 22-23, 2025",
      time: "9:00 AM - 4:00 PM EST",
      location: "Virtual (Zoom)",
      description: "A comprehensive two-day workshop on developing AI systems with ethics and responsibility at their core. Sessions include hands-on coding exercises and project development.",
      registrationLink: "/register/technical-workshop"
    },
    {
      id: 4,
      title: "REACT Fellowship Research Showcase",
      date: "August 10, 2025",
      time: "2:00 PM - 6:00 PM EST",
      location: "Virtual (Gather.Town)",
      description: "Fellows will present their preliminary research findings and project proposals. This is an opportunity to receive feedback from mentors and peers.",
      registrationLink: "/register/research-showcase"
    }
  ];

  const pastEvents = [
    {
      id: 101,
      title: "REACT Information Session",
      date: "May 15, 2025",
      time: "3:00 PM - 4:00 PM EST",
      location: "Virtual (Recorded)",
      description: "Introduction to the REACT Fellowship Program, covering eligibility criteria, application process, and fellowship benefits.",
      recordingLink: "/recordings/info-session"
    },
    {
      id: 102,
      title: "Application Workshop",
      date: "May 18, 2025",
      time: "11:00 AM - 12:30 PM EST",
      location: "Virtual (Recorded)",
      description: "Detailed walkthrough of the application process with tips on creating a compelling application.",
      recordingLink: "/recordings/application-workshop"
    },
    {
      id: 103,
      title: "Alumni Panel: Life After REACT",
      date: "May 10, 2025",
      time: "4:00 PM - 5:30 PM EST",
      location: "Virtual (Recorded)",
      description: "Former REACT fellows discuss their experiences and how the program impacted their careers and research.",
      recordingLink: "/recordings/alumni-panel"
    }
  ];

  const EventCard = ({ event, isPast = false }: { event: Event, isPast?: boolean }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
          <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {isPast ? "Past" : "Upcoming"}
          </div>
        </div>
        
        <div className="flex items-center mt-3 text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
          </svg>
          <span>{event.date}</span>
        </div>
        
        <div className="flex items-center mt-2 text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
          </svg>
          <span>{event.time}</span>
        </div>
        
        <div className="flex items-center mt-2 text-gray-600">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
          </svg>
          <span>{event.location}</span>
        </div>
        
        <p className="mt-4 text-gray-700">{event.description}</p>
        
        {isPast ? (
          <a 
            href={event.recordingLink} 
            className="mt-4 inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            Watch Recording
          </a>
        ) : (
          <a 
            href={event.registrationLink} 
            className="mt-4 inline-block bg-black hover:bg-gray-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200"
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">REACT Fellowship Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for a series of events designed to enhance your understanding of responsible AI in healthcare and maximize your fellowship experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "upcoming"
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "past"
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {activeTab === "upcoming" 
            ? upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
            : pastEvents.map(event => <EventCard key={event.id} event={event} isPast={true} />)
          }
        </div>

        {/* Call To Action */}
        {/* <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated on REACT Events</h2>
              <p className="text-blue-100 mb-6">
                Subscribe to our newsletter to get notified about upcoming events, workshops, and opportunities within the REACT Fellowship Program.
              </p>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none w-full"
                />
                <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-md font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="md:w-1/3 bg-blue-800 flex items-center justify-center p-8">
              <div className="text-center">
                <div className="bg-white rounded-full p-3 inline-block mb-4">
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Have questions?</h3>
                <p className="text-blue-200 mt-2">Contact our events team at<br /><span className="text-white font-medium">events@reactfellowship.org</span></p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Events;