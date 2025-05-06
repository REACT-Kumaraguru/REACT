"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Seeking a Fresh Start",
    preview: "You’ve always wanted a chance — but didn’t have the space, the support, or the spark.",
    content: (
      <>
        <p><strong>You’ve always wanted a chance — but didn’t have the space, the support, or the spark.</strong></p>
        <p>
          Maybe the school didn’t recognize your way of thinking. Maybe family pressures forced you to compromise.
          You’ve been surviving, not growing. <strong>REACT is your second chance — but it treats you like it’s your first.</strong>
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Many Indian students face a 'silent dropout' — not from the system, but from belief in themselves.”<br />
          — <em>Prof. Anil Sadgopal, National Curriculum Framework Contributor</em>
        </blockquote>
        <p>
          At REACT, you don’t need the perfect resume. You need curiosity, honesty, and the courage to try again. That’s enough.
        </p>
      </>
    ),
  },
  {
    title: "Untapped Curiosity",
    preview: "You’re smart, curious, and eager — but you haven’t found your thing yet.",
    content: (
      <>
        <p><strong>You’re smart, curious, and eager — but you haven’t found your thing yet. That might be this.</strong></p>
        <p>
          You’ve dabbled in coding, helped a cousin with farming, or built something just for fun. But you haven’t felt called yet.
          REACT is where you stop waiting for clarity — and start discovering it through doing.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Discovery-based, experience-first models outperform lecture-based learning by 65% in retention and engagement.”<br />
          — <em>Harvard Project Zero, 2021</em>
        </blockquote>
        <p>This is not a classroom. It’s a mirror. Let it show you who you really are.</p>
      </>
    ),
  },
  {
    title: "Looking Beyond the Degree",
    preview: "You graduated. But you still don’t feel like an engineer.",
    content: (
      <>
        <p><strong>You graduated. But you still don’t feel like an engineer. That’s more common than you think.</strong></p>
        <p>
          Concepts are in your notes. Projects are on your resume. But somewhere, the connection between learning and meaning was missing.
          REACT rebuilds that bridge.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “According to AICTE’s 2022 report, only 17% of engineering graduates in India feel confident applying their skills in real-world contexts.”
        </blockquote>
        <p>We don’t just teach theory — we embed you in the systems, problems, and lives that demand real engineering.</p>
      </>
    ),
  },
  {
    title: "Ready to Give Back",
    preview: "You’ve been here before. You want more — to lead, to guide, to rebuild.",
    content: (
      <>
        <p><strong>You’ve been here before. You want more — to lead, to guide, to rebuild.</strong></p>
        <p>
          You’ve seen how REACT transforms a problem into purpose. And now, you’re back to help others do the same. Welcome.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Mentorship creates a multiplier effect in experiential learning.”<br />
          — <em>UNESCO Futures of Education Report, 2021</em>
        </blockquote>
        <p>Whether you come back to build deeper solutions, or mentor a new batch — your journey isn’t done. It’s evolving.</p>
      </>
    ),
  },
  {
    title: "Needing Clarity & Space",
    preview: "Life’s been heavy. You need more than a program — you need peace, clarity, and growth.",
    content: (
      <>
        <p><strong>Life’s been heavy. You need more than a program — you need peace, clarity, and growth.</strong></p>
        <p>
          REACT isn’t therapy. But it’s therapeutic. You live slow. You ask questions. You reconnect — with people, with nature, with yourself.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “In high-pressure societies like India, emotionally anchored education creates resilience and better long-term wellbeing.”<br />
          — <em>India Development Review (IDR), 2020</em>
        </blockquote>
        <p>No deadlines. Just direction. No race. Just reflection. It’s not an escape — it’s a return to your core.</p>
      </>
    ),
  },
  {
    title: "Upgrading My Skills",
    preview: "You want to rebuild your skillset — not just add certificates, but master something real.",
    content: (
      <>
        <p><strong>You want to rebuild your skillset — not just add certificates, but master something real.</strong></p>
        <p>
          Maybe your previous education didn’t give you practical exposure. Maybe you're changing careers. Maybe you just want to feel confident again. REACT gives you space to start fresh—with guidance, hands-on experience, and clarity.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Upskilling must move from theory-heavy to practice-first, especially for India's next-gen workforce.”
          <br />— <em>NASSCOM India Skills Report, 2022</em>
        </blockquote>
        <p>
          You don’t need to know everything. You just need to be ready to begin again—this time, for real.
        </p>
      </>
    ),
  }
  
];

export default function Motivations() {
  const [activeItem, setActiveItem] = useState<null | typeof items[0]>(null);

  return (
    <section className="bg-gray-50 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl font-bold">Everyone Has a Reason. What’s Yours?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              onClick={() => setActiveItem(item)}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className="bg-white p-6 rounded-xl shadow-md cursor-pointer flex flex-col justify-between min-h-[200px] hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-4">{item.title}</h3>
              <div className="flex-1 flex items-center justify-center">
                <blockquote className="relative text-center text-sm text-gray-700 italic px-4 max-w-xs">
                  <span className="text-4xl leading-none absolute -left-4 -top-2 text-gray-400">“</span>
                  <span>{item.preview}</span>
                  <span className="text-4xl leading-none absolute -right-4 -bottom-2 text-gray-400">”</span>
                </blockquote>
              </div>



            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
{activeItem && (
  <div className="fixed inset-0 flex items-center justify-center z-50 px-4 backdrop-blur-md bg-white/70">
    <div className="bg-white p-6 rounded-xl shadow-md cursor-pointer flex flex-col justify-between min-h-[220px] hover:shadow-lg transition"
    >
      <button
        onClick={() => setActiveItem(null)}
        className="absolute top-3 right-4 text-xl text-gray-600 hover:text-black"
      >
        ×
      </button>
      <h3 className="text-2xl font-bold mb-1">{activeItem.title}</h3>
      <div className="text-gray-700 text-[15px] leading-relaxed space-y-4">{activeItem.content}</div>
    </div>
  </div>
)}

    </section>
  );
}
