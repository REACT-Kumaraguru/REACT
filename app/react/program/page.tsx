'use client';

import React, { useState } from 'react';
import { ArrowRight, Users, Globe, Heart, Briefcase, X, Bell } from 'lucide-react';

const ProgramsPage = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState('');

  const programs = [
    {
      id: 1,
      icon: Briefcase,
      title: "REACT Fellowship",
      description: "Step beyond classrooms into real-world learning — where students in India design, build, and implement solutions that create tangible impact.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      link: "/react",
      available: true
    },
    {
      id: 2,
      icon: Globe,
      title: "REACT GLOBE Fellowship",
      description: "An immersive leadership journey for graduates and professionals to work within complex systems, drive change, and shape global solutions for India and beyond.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      link: "/react/globe",
      available: true
    },
    {
      id: 3,
      icon: Heart,
      title: "REACT Volunteer / Intern Program",
      description: "A hands-on pathway for young changemakers in India to lead operations, strategy, and storytelling — powering the REACT movement from within.",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50",
      available: false
    },
    {
      id: 4,
      icon: Users,
      title: "REACT Citizen Fellow",
      description: "A global online experience open to anyone, anywhere — collaborate with teams across India and the world on live, impact-driven projects.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      available: false
    }
  ];

  const handleExploreClick = (program: any) => {
    if (program.available) {
      window.location.href = program.link;
    } else {
      setSelectedProgram(program.title);
      setShowComingSoon(true);
    }
  };

  const handleExpressInterest = () => {
    window.location.href = '/react/announcements';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">REACT Programs</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Choose your path to create real-world impact. Whether you're a student, graduate, professional, or global citizen — there's a place for you in the REACT movement.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className={`group relative bg-gradient-to-br ${program.bgGradient} rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                {/* Gradient Top Bar */}
                <div className={`h-2 bg-gradient-to-r ${program.gradient}`} />
                
                {/* Coming Soon Badge */}
                {!program.available && (
                  <div className="absolute top-6 right-6 z-10">
                    <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      Coming Soon
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Explore Button */}
                  <button
                    onClick={() => handleExploreClick(program)}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${program.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity group-hover:gap-3 duration-300`}
                  >
                    Explore
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.gradient} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action Section */}
      {/* <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Program is Right for You?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            We're here to help you find your perfect fit in the REACT ecosystem.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/react/announcements"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View All Announcements
            </a>
            <a
              href="mailto:react@kct.ac.in"
              className="bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition border-2 border-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div> */}

      {/* Info Section */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-indigo-600 mb-2">4</div>
            <p className="text-gray-700 font-semibold">Unique Programs</p>
            <p className="text-sm text-gray-600 mt-2">Tailored pathways for different stages of your journey</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">Global</div>
            <p className="text-gray-700 font-semibold">Reach & Impact</p>
            <p className="text-sm text-gray-600 mt-2">Connect with changemakers from India and around the world</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-pink-600 mb-2">Real</div>
            <p className="text-gray-700 font-semibold">World Impact</p>
            <p className="text-sm text-gray-600 mt-2">Work on actual problems with measurable outcomes</p>
          </div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Coming Soon!</h2>
                    <p className="text-yellow-100 text-sm mt-1">Opening Very Soon</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowComingSoon(false)}
                  className="text-white hover:text-gray-200 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {selectedProgram}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This program will be opening soon! Express your interest to be notified when applications open.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleExpressInterest}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
                >
                  <Bell className="w-5 h-5" />
                  Express Interest
                </button>

                <button
                  onClick={() => setShowComingSoon(false)}
                  className="w-full bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Close
                </button>
              </div>

              <p className="text-sm text-gray-500 text-center mt-4">
                For immediate inquiries, contact{' '}
                <a href="mailto:react@kct.ac.in" className="text-indigo-600 hover:underline font-semibold">
                  react@kct.ac.in
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramsPage;