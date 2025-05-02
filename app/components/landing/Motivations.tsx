"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Needy REACT",
    preview: "You've always wanted a chance — but didn't have the space, the support, or the spark.",
    content: (
      <>
        <p><strong>You've always wanted a chance — but didn't have the space, the support, or the spark.</strong></p>
        <p>
          Maybe the school didn't recognize your way of thinking. Maybe family pressures forced you to compromise.
          You've been surviving, not growing. <strong>REACT is your second chance — but it treats you like it's your first.</strong>
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          "Many Indian students face a 'silent dropout' — not from the system, but from belief in themselves."<br />
          — <em>Prof. Anil Sadgopal, National Curriculum Framework Contributor</em>
        </blockquote>
        <p>
          At REACT, you don't need the perfect resume. You need curiosity, honesty, and the courage to try again. That's enough.
        </p>
      </>
    ),
  },
  {
    title: "Hidden Potential",
    preview: "You're smart, curious, and eager — but you haven't found your thing yet.",
    content: (
      <>
        <p><strong>You're smart, curious, and eager — but you haven't found your thing yet. That might be this.</strong></p>
        <p>
          You've dabbled in coding, helped a cousin with farming, or built something just for fun. But you haven't felt called yet.
          REACT is where you stop waiting for clarity — and start discovering it through doing.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          "Discovery-based, experience-first models outperform lecture-based learning by 65% in retention and engagement."<br />
          — <em>Harvard Project Zero, 2021</em>
        </blockquote>
        <p>This is not a classroom. It's a mirror. Let it show you who you really are.</p>
      </>
    ),
  },
  {
    title: "Confused After BE/BTech",
    preview: "You graduated. But you still don't feel like an engineer.",
    content: (
      <>
        <p><strong>You graduated. But you still don't feel like an engineer. That's more common than you think.</strong></p>
        <p>
          Concepts are in your notes. Projects are on your resume. But somewhere, the connection between learning and meaning was missing.
          REACT rebuilds that bridge.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          "According to AICTE's 2022 report, only 17% of engineering graduates in India feel confident applying their skills in real-world contexts."
        </blockquote>
        <p>We don't just teach theory — we embed you in the systems, problems, and lives that demand real engineering.</p>
      </>
    ),
  },
  {
    title: "Returning REACTers",
    preview: "You've been here before. You want more — to lead, to guide, to rebuild.",
    content: (
      <>
        <p><strong>You've been here before. You want more — to lead, to guide, to rebuild.</strong></p>
        <p>
          You've seen how REACT transforms a problem into purpose. And now, you're back to help others do the same. Welcome.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          "Mentorship creates a multiplier effect in experiential learning."<br />
          — <em>UNESCO Futures of Education Report, 2021</em>
        </blockquote>
        <p>Whether you come back to build deeper solutions, or mentor a new batch — your journey isn't done. It's evolving.</p>
      </>
    ),
  },
  {
    title: "Emotional Space",
    preview: "Life's been heavy. You need more than a program — you need peace, clarity, and growth.",
    content: (
      <>
        <p><strong>Life's been heavy. You need more than a program — you need peace, clarity, and growth.</strong></p>
        <p>
          REACT isn't therapy. But it's therapeutic. You live slow. You ask questions. You reconnect — with people, with nature, with yourself.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          "In high-pressure societies like India, emotionally anchored education creates resilience and better long-term wellbeing."<br />
          — <em>India Development Review (IDR), 2020</em>
        </blockquote>
        <p>No deadlines. Just direction. No race. Just reflection. It's not an escape — it's a return to your core.</p>
      </>
    ),
  },
  {
    title: "Skill Reset",
    preview: "You want to rebuild your skillset — not just add certificates, but master something real.",
    content: (
      <>
        <p><strong>You want to rebuild your skillset — not just add certificates, but master something real.</strong></p>
        <p>
          Maybe your previous education didn't give you practical exposure. Maybe you're changing careers. Maybe you just want to feel confident again. REACT gives you space to start fresh—with guidance, hands-on experience, and clarity.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          "Upskilling must move from theory-heavy to practice-first, especially for India's next-gen workforce."
          <br />— <em>NASSCOM India Skills Report, 2022</em>
        </blockquote>
        <p>
          You don't need to know everything. You just need to be ready to begin again—this time, for real.
        </p>
      </>
    ),
  }
];

export default function Motivations() {
  const [activeItem, setActiveItem] = useState<null | typeof items[0]>(null);
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeItem]);

  // Handle swipe for mobile
  const handleSwipe = (direction: 'left' | 'right') => {
    if (!activeItem) return;
    
    const currentIndex = items.findIndex(item => item.title === activeItem.title);
    let newIndex;
    
    if (direction === 'left') {
      newIndex = (currentIndex + 1) % items.length;
    } else {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    }
    
    setActiveItem(items[newIndex]);
  };

  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold">Where Are You Coming From?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              onClick={() => setActiveItem(item)}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-md cursor-pointer flex flex-col justify-between min-h-[160px] sm:min-h-[200px] hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.preview}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal - Optimized for mobile */}
      {activeItem && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50 px-4 backdrop-blur-md bg-white/70"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveItem(null);
          }}
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto px-4 sm:px-6 py-5 sm:py-7 rounded-xl shadow-xl relative border"
            drag={isMobile ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 100) {
                if (info.offset.x > 0) {
                  handleSwipe('right');
                } else {
                  handleSwipe('left');
                }
              }
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl sm:text-2xl font-bold pr-8">{activeItem.title}</h3>
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-4 text-xl text-gray-600 hover:text-black p-2"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            
            <div className="text-gray-700 text-[15px] leading-relaxed space-y-4">{activeItem.content}</div>
            
            {isMobile && (
              <div className="flex justify-between mt-6 text-sm text-gray-400">
                <span>← Swipe to navigate</span>
                <span>{items.findIndex(item => item.title === activeItem.title) + 1}/{items.length}</span>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}