"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Seeking a Fresh Start",
    preview: "You’ve always wanted a chance — but didn’t have the space, the support, or the spark.",
    content: (
      <>
        <p style={{ marginBottom: "12px", color: "#333" }}><strong>You’ve always wanted a chance — but didn’t have the space, the support, or the spark.</strong></p>
        <p style={{ marginBottom: "12px", color: "#333" }}>
          Maybe the school didn’t recognize your way of thinking. Maybe family pressures forced you to compromise.
          You’ve been surviving, not growing. <strong>REACT is your second chance — but it treats you like it’s your first.</strong>
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Many Indian students face a 'silent dropout' — not from the system, but from belief in themselves.”<br />
          — <em>Prof. Anil Sadgopal, National Curriculum Framework Contributor</em>
        </blockquote>
        <p style={{ marginBottom: "12px", color: "#333" }}>
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
        <p style={{ marginBottom: "12px", color: "#333" }}><strong>You’re smart, curious, and eager — but you haven’t found your thing yet. That might be this.</strong></p>
        <p style={{ marginBottom: "12px", color: "#333" }}>
          You’ve dabbled in coding, helped a cousin with farming, or built something just for fun. But you haven’t felt called yet.
          REACT is where you stop waiting for clarity — and start discovering it through doing.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Discovery-based, experience-first models outperform lecture-based learning by 65% in retention and engagement.”<br />
          — <em>Harvard Project Zero, 2021</em>
        </blockquote>
        <p style={{ marginBottom: "12px", color: "#333" }}>This is not a classroom. It’s a mirror. Let it show you who you really are.</p>
      </>
    ),
  },
  {
    title: "Looking Beyond the Degree",
    preview: "You graduated. But you still don’t feel like an engineer.",
    content: (
      <>
        <p style={{ marginBottom: "12px", color: "#333" }}><strong>You graduated. But you still don’t feel like an engineer. That’s more common than you think.</strong></p>
        <p style={{ marginBottom: "12px", color: "#333" }}>
          Concepts are in your notes. Projects are on your resume. But somewhere, the connection between learning and meaning was missing.
          REACT rebuilds that bridge.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “According to AICTE’s 2022 report, only 17% of engineering graduates in India feel confident applying their skills in real-world contexts.”
        </blockquote>
        <p style={{ marginBottom: "12px", color: "#333" }}>We don’t just teach theory — we embed you in the systems, problems, and lives that demand real engineering.</p>
      </>
    ),
  },
  {
    title: "Ready to Give Back",
    preview: "You’ve been here before. You want more — to lead, to guide, to rebuild.",
    content: (
      <>
        <p style={{ marginBottom: "12px", color: "#333" }}><strong>You’ve been here before. You want more — to lead, to guide, to rebuild.</strong></p>
        <p style={{ marginBottom: "12px", color: "#333" }}>
          You’ve seen how REACT transforms a problem into purpose. And now, you’re back to help others do the same. Welcome.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Mentorship creates a multiplier effect in experiential learning.”<br />
          — <em>UNESCO Futures of Education Report, 2021</em>
        </blockquote>
        <p style={{ marginBottom: "12px", color: "#333" }}>Whether you come back to build deeper solutions, or mentor a new batch — your journey isn’t done. It’s evolving.</p>
      </>
    ),
  },
  {
    title: "Needing Clarity & Space",
    preview: "Life’s been heavy. You need more than a program — you need peace, clarity, and growth.",
    content: (
      <>
        <p style={{ marginBottom: "12px", color: "#333" }}><strong>Life’s been heavy. You need more than a program — you need peace, clarity, and growth.</strong></p>
        <p style={{ marginBottom: "12px", color: "#333" }}>
          REACT isn’t therapy. But it’s therapeutic. You live slow. You ask questions. You reconnect — with people, with nature, with yourself.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “In high-pressure societies like India, emotionally anchored education creates resilience and better long-term wellbeing.”<br />
          — <em>India Development Review (IDR), 2020</em>
        </blockquote>
        <p style={{ marginBottom: "12px", color: "#333" }}>No deadlines. Just direction. No race. Just reflection. It’s not an escape — it’s a return to your core.</p>
      </>
    ),
  },
  {
    title: "Upgrading My Skills",
    preview: "You want to rebuild your skillset — not just add certificates, but master something real.",
    content: (
      <>
        <p style={{ marginBottom: "12px", color: "#333" }}><strong>You want to rebuild your skillset — not just add certificates, but master something real.</strong></p>
        <p style={{ marginBottom: "12px", color: "#333" }}>
          Maybe your previous education didn’t give you practical exposure. Maybe you're changing careers. Maybe you just want to feel confident again. REACT gives you space to start fresh—with guidance, hands-on experience, and clarity.
        </p>
        <blockquote className="border-l-4 pl-4 italic my-4 text-gray-600">
          “Upskilling must move from theory-heavy to practice-first, especially for India's next-gen workforce.”
          <br />— <em>NASSCOM India Skills Report, 2022</em>
        </blockquote>
        <p style={{ marginBottom: "12px", color: "#333" }}>
          You don’t need to know everything. You just need to be ready to begin again—this time, for real.
        </p>
      </>
    ),
  }
  
];

export default function Motivations() {
  const [activeItem, setActiveItem] = useState<null | typeof items[0]>(null);

  return (
    <section
      style={{
        backgroundColor: "#f9f9f9",
        padding: "48px 24px",
        position: "relative",
      }}
    >

      <div className="max-w-6xl mx-auto text-center space-y-12">
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
          color: "#111",
          marginBottom: "24px",
        }}
      >
        Everyone Has a Reason. What’s Yours?
      </h2>


      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          textAlign: "left",
        }}
      >

          {items.map((item, i) => (
            <motion.div
              key={item.title}
              onClick={() => setActiveItem(item)}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              style={{
                backgroundColor: "#ffffff",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                cursor: "pointer",
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
              
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#111",
                }}
              >
                {item.title}
              </h3>

              <div className="flex-1 flex items-center justify-center">
              <blockquote
                style={{
                  position: "relative",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#444",
                  fontStyle: "italic",
                  padding: "0 16px",
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >

              <span
                style={{
                  position: "absolute",
                  left: "-16px",
                  top: "-8px",
                  fontSize: "36px",
                  lineHeight: "1",
                  color: "#ccc",
                }}
              >
                “
              </span>

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
        style={{
          position: "absolute",
          top: "12px",
          right: "16px",
          fontSize: "20px",
          color: "#444",
          cursor: "pointer",
        }}
        
      >
        ×
      </button>
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "12px",
          color: "#111",
        }}
      >
        {activeItem.title}
      </h3>

      <div
        style={{
          color: "#222",
          fontSize: "15px",
          lineHeight: "1.6",
          marginTop: "12px",
        }}
      >
        {activeItem.content}
      </div>

    </div>
  </div>
)}

    </section>
  );
}
