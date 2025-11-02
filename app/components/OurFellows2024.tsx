'use client';

import { useState } from 'react';
import { X, MapPin, Linkedin, Mail, Plus } from 'lucide-react';
import Image from 'next/image';

interface Fellow {
  id: number;
  name: string;
  image: string;
  country: string;
  bio: string;
  linkedin?: string;
  email?: string;
  specialization?: string;
}

const OurFellows2024 = () => {
  const [selectedFellow, setSelectedFellow] = useState<Fellow | null>(null);

    const fellows: Fellow[] = [
    {
      id: 1,
      name: "Janarthanan V",
      image: "/fellows/janarthanan.jpg",
      country: "India",
      bio: "BE, Kumaraguru College of Technology • MSc Cleantech at Imperial College London. Janarthanan is a cleantech innovator driving solutions that turn ocean waves into clean energy and protect coastlines. Through REACT, he developed his system-design mindset, connected with global mentors, and advanced his startup beyond ideation into a scalable prototype.",
      specialization: "Cleantech & Ocean Energy",
      linkedin: "https://linkedin.com/in/janarthanan-v",
      email: "janarthanan@example.com"
    },
    {
      id: 2,
      name: "Harini R",
      image: "/fellows/harini.jpg",
      country: "India",
      bio: "BE, Kumaraguru College of Technology • Project Manager, Green Gem Energy. Harini leads renewable-energy projects in Tamil Nadu, driving solar adoption and sustainable infrastructure. REACT helped her sharpen her leadership in operations and strategy, connect with impact-projects, and scale her role from engineer to change-maker.",
      specialization: "Renewable Energy & Leadership",
      linkedin: "https://linkedin.com/in/harini-r",
      email: "harini@example.com"
    },
    {
      id: 3,
      name: "Shakeel Akther",
      image: "/fellows/shakeel.jpg",
      country: "India",
      bio: "BE, Kumaraguru College of Technology • Founder, Elaicle. Shakeel is an entrepreneur building next-gen mobility and energy-storage solutions for India's urban challenges. REACT provided access to real-time consumers and stakeholders—including pilot collaboration with local authorities in Coimbatore—and accelerated his startup from concept to implementation.",
      specialization: "Mobility & Energy Storage",
      linkedin: "https://linkedin.com/in/shakeel-akther",
      email: "shakeel@example.com"
    },
    {
      id: 4,
      name: "Sivakeerthana",
      image: "/fellows/sivakeerthana.jpg",
      country: "India",
      bio: "BE, Kumaraguru College of Technology • Researcher, Zoho. Sivakeerthana applies advanced research methods to drive product innovation within a global software company. REACT empowered her to bridge research and real-world impact, enriching her profile with field insights and connecting her academic experience to corporate innovation.",
      specialization: "Research & Product Innovation",
      linkedin: "https://linkedin.com/in/sivakeerthana",
      email: "sivakeerthana@example.com"
    }
  ];

  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">Our Fellows 2024</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the exceptional individuals who are part of the REACT GLOBE Fellowship 2024 cohort — leading change from India to the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fellows.map((fellow) => (
            <div
              key={fellow.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedFellow(fellow)}
            >
              {/* Image Container */}
              <div className="relative h-72 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
                {/* Placeholder for image - replace with actual Image component */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-indigo-200 to-purple-200">
                  <div className="text-6xl font-bold text-white">
                    {fellow.name.charAt(0)}
                  </div>
                </div>
                {/* Uncomment when you have actual images */}
                <Image
                  src={fellow.image}
                  alt={fellow.name}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 text-white">
                    <Plus className="w-5 h-5" />
                    <span className="font-semibold">View Profile</span>
                  </div>
                </div>
              </div>

              {/* Name Card */}
              <div className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white p-4">
                <h3 className="text-lg font-bold">{fellow.name}</h3>
                <div className="flex items-center gap-1 text-sm text-indigo-100 mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{fellow.country}</span>
                </div>
              </div>

              {/* Hover indicator circle (like in the image) */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Plus className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fellow Detail Modal */}
      {selectedFellow && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header Image */}
              <div className="h-64 bg-gradient-to-br from-indigo-200 to-purple-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-white">
                    {selectedFellow.name.charAt(0)}
                  </div>
                </div>
                {/* Close button */}
                <button
                  onClick={() => setSelectedFellow(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedFellow.name}
                </h2>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedFellow.country}</span>
                </div>

                {selectedFellow.specialization && (
                  <div className="mb-4">
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {selectedFellow.specialization}
                    </span>
                  </div>
                )}

                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedFellow.bio}
                </p>

                {/* Social Links */}
                {/* <div className="flex gap-3 pt-4 border-t">
                  {selectedFellow.linkedin && (
                    <a
                      href={selectedFellow.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {selectedFellow.email && (
                    <a
                      href={`mailto:${selectedFellow.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurFellows2024;