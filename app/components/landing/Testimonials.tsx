'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    name: "Jana",
    title: "Young Innovator (Tamil Nadu State Planning Commission)",
    quote:
      "Working in policy and grassroots innovation, I’ve always believed in the power of field-based education. REACT is the first program I’ve seen that truly embodies that vision. It's long overdue—and exactly what India needs right now. I strongly recommend it to anyone who wants to build real solutions, from real experience.",
    img: "Jana.jpg",
    linkedin: "https://www.linkedin.com/in/connectwithjana/",
  },
  {
    name: "Sivakeerthana",
    title: "R and D Engineer (Zoho Corp)",
    quote:
      "As someone immersed in applied research, I’ve been waiting to see a program that connects students to the real world meaningfully. REACT does that with clarity and conviction. It’s not just another initiative—it’s a shift. We need more such frameworks if we truly care about the future of India’s innovation landscape.",
    img: "Sivakeerthana.jpg",
    linkedin: "https://www.linkedin.com/in/sivakeerthana/",
  },
  {
    name: "Sangeetha",
    title: "Professor",
    quote:
      "For years, I’ve watched students struggle to connect theory with the reality outside. REACT filled that gap in the most profound way. It brings back meaning to education—by grounding it in people, systems, and challenges. For a country like ours, this kind of learning is no longer optional. It’s essential.",
    img: "Sangeetha.jpg",
    linkedin: "https://www.linkedin.com/in/dr-sangeetha-n-ab397258/",
  },
  {
    name: "Aparna",
    title: "Student",
    quote:
      "I had never walked through a village and asked, 'How can I help?' REACT made me do that—and it changed how I see engineering forever.",
    img: "Aparna.jpg",
    linkedin: "https://www.linkedin.com/in/aparnarm2904/",
  },
  {
    name: "Nandeeswaran",
    title: "Student",
    quote:
      "We built a working prototype with farmers. Not for them, but with them. That experience taught me more than any textbook ever could.",
    img: "Nandeesh.jpg",
    linkedin: "https://www.linkedin.com/in/nandeeswaran-k/",
  },
];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section
      style={{ backgroundColor: "#ffffff", padding: "3rem 1rem" }}
      className="relative z-20 bg-white py-12 px-6"
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "32px",
          color: "#111",
        }}
      >
        REACT Through Expert Eyes
      </h2>

      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing"
          drag="x"
          animate={paused ? {} : { x: ["-50%", "0%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="testimonial-card"
              style={{
                minWidth: "300px",
                maxWidth: "300px",
                backgroundColor: "#f0f4ff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                flexShrink: 0,
                color: "#111",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid white",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={`/images/${item.img}`}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="flex-1">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#111",
                      marginBottom: "4px",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </p>
                </div>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 text-xl" />
                </a>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  fontStyle: "italic",
                  color: "#111",
                }}
              >
                “{item.quote}”
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
