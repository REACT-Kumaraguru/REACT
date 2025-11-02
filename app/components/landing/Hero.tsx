// app/components/landing/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DrawingCanvas from "./tools/DrawingCanvas";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 50, y: 400 });
  const [isDraggingButton, setIsDraggingButton] = useState(false);
  //const [menuPosition, setMenuPosition] = useState({ x: window.innerWidth - 70, y: 20 });
  const [menuPosition, setMenuPosition] = useState(() => {
  if (typeof window !== "undefined") {
    return { x: window.innerWidth - 70, y: 20 };
  }
  return { x: 0, y: 20 };
});
  const [draggingMenu, setDraggingMenu] = useState(false);

  
  


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.2);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    if (draggingMenu) {
      setMenuPosition({ x: e.clientX - 20, y: e.clientY - 20 });
    }
  };
  const handleMouseUp = () => setDraggingMenu(false);

  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
}, [draggingMenu]);
useEffect(() => {
  const handleTouchMove = (e: TouchEvent) => {
    if (draggingMenu && e.touches.length === 1) {
      const touch = e.touches[0];
      setMenuPosition({ x: touch.clientX - 20, y: touch.clientY - 20 });
    }
  };
  const handleTouchEnd = () => setDraggingMenu(false);

  window.addEventListener("touchmove", handleTouchMove);
  window.addEventListener("touchend", handleTouchEnd);
  return () => {
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };
}, [draggingMenu]);


  // Sample announcements array
  const announcements = [
    {
      id: 1,
      title: "REACT Student Fellow 2025 Cohort Application closed",
      description: "UG and Master’s students — applications are now closed. Submit the interest form to be the first to hear when it reopens."
    },
    {
      id: 2,
      title: "REACT GLOBE Fellowship — Ongoing (Closes in 10 Days)",
      description: "Applications are open — closing soon. Round 1 -31st October | Round 2 -10th November ."
    },
    {
      id: 3,
      title: "REACT Volunteering Fellow — Opening Soon",
      description: "Applications opening soon. Submit the interest form to get early access to the opportunity."
    },
    {
      id: 4,
      title: "REACT Citizen Fellow —  Opening Soon",
      description: "A 2-month online leadership cohort open to all."
    }
  ];

  // Sample events array
  const events = [
    {
      id: 1,
      title: "REACT Fellowship Orientation",
      date: "November 1, 2025",
      description: "Official orientation for the fellowship program."
    },
    {
      id: 2,
      title: "REACT Problem to Idea Mapping",
      date: "October 21, 2025",
      description: "Conducting an event to make students understand the importance of user centric design."
    },
    {
      id: 3,
      title: "REACT Fellows Meet",
      date: "November 3, 2025",
      description: "To understand the progress and future scope planning."
    }
  ];
  return (
    <>
     {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-primary-50 to-white">
      {/* Video Background */}
       <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-45 hidden sm:block z-0"
  >
    <source src="/video-hero.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Mobile Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w- h-full object-cover opacity-45 block sm:hidden z-0"
  >
    <source src="/hero-mobile.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

      {/* Foreground Content */}
      {/* <motion.div 
        className="relative z-10 flex flex-col sm:flex-row gap-4 items-center pt-[90px]"
        custom={2}
      >
        <Link 
          href="/react/themes"
          className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
        >
          View Themes
        </Link>
        <Link 
          href="/react/about"
          className="inline-block px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
        >
          Learn More
        </Link>
      </motion.div> */}
    </section>
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-16">Stay Connected with REACT</h1>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Events Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            //className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Events</h2>
            <p className="text-gray-700 mb-6">
              The Buzzing Zone relaying essentials of wide range of activities organised throughout the year.
            </p>
            
            {/* Preview of Events */}
            <div className="mb-6 space-y-4">
              {events.slice(0, 3).map((event) => (
                <div key={event.id} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              ))}
            </div>
            
            <Link
              href="/react/events"
              className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-600 font-medium transition-colors"
            >
              More Events
            </Link>
          </motion.div>

          {/* Announcements Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            //className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Announcements</h2>
            <p className="text-gray-700 mb-6">
              The information hub of the upcoming events, new programmes, resources, and general notices.
            </p>

            <div className="overflow-hidden h-64 relative">
              <motion.div
                animate={{
                  y: ['0%', '-50%'],
                }}
                transition={{
                  duration: announcements.length * 3, // 3s per item
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
                className="flex flex-col space-y-4"
              >
                {/* Doubled array for smooth infinite scroll */}
                {[...announcements, ...announcements].map((item, index) => (
                  <div
                    key={index}
                    className="border-b pb-3"
                  >
                    <strong className="block text-gray-800 mb-1">{item.title}</strong>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <Link
              href="/react/announcements"
              className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-600 transition-colors"
            >
              More Announcements
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
