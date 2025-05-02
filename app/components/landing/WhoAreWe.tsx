"use client";
import React,{ useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhoAreWe() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Process steps for the workflow
  const steps = ["Explore", "Reflect", "Solve", "Implement"];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 py-12 sm:py-20">
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="max-w-4xl text-center space-y-8 sm:space-y-12"
      >
        <motion.div 
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Who Are We?</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            REACT is a learning ecosystem where students, professionals, and mentors collaborate to solve real-world problems — not just pass exams. We believe in meaningful, applied learning that begins where most education ends — from the <strong>forest to the factory</strong>, and from the <strong>village to the lab</strong>.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">What is REACT?</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            REACT stands for <strong>Real-world Experience and Application through Collaborative Transformation</strong>. It's not just a course—it's a new kind of journey. A hands-on, problem-solving program where learners live, observe, reflect, and co-create solutions with the people who face those problems every day.
          </p>

          <blockquote className="italic text-indigo-700 text-base sm:text-lg mb-4 sm:mb-6 font-medium px-4 border-l-4 border-indigo-300 py-2 bg-indigo-50 rounded">
            "We don't prepare students for the real world. We place them right in the middle of it."
          </blockquote>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
            Participants immerse themselves in real contexts—living as farmers, walking with forest guards, mapping water systems, decoding rural health, or rebuilding public services. They identify one challenge worth solving, reframe it into a research hypothesis, innovation brief, or design problem—and begin building solutions with mentorship and community support.
          </p>

          {/* Responsive workflow visualization */}
          {isMobile ? (
            // Mobile vertical workflow
            <div className="flex flex-col items-center gap-2 mt-6 mb-4">
              {steps.map((step, index) => (
                <div key={index} className="w-full max-w-xs">
                  <div className="px-4 py-3 bg-white border rounded-md shadow-sm font-medium text-gray-800 text-sm">
                    {step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="h-4 flex justify-center">
                      <div className="w-0.5 h-full bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Desktop horizontal workflow
            <div className="hidden sm:flex justify-center gap-3 text-sm font-medium text-gray-800 mt-8">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="px-4 py-2 bg-white border rounded-md shadow-sm hover:shadow transition">
                    {step}
                  </div>
                  {index < steps.length - 1 && <div className="self-center">→</div>}
                </React.Fragment>
              ))}
            </div>
          )}

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-6 sm:mt-8">
            REACT is more than education. It's a launchpad for changemakers—where <strong>lived experience becomes learning</strong>, and <strong>problem solvers become grounded creators of change</strong>.
          </p>

          <motion.div 
            variants={fadeIn}
            className="mt-8 sm:mt-10"
          >
            <Link href="/react">
              <button className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto text-base">
                Know More
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}