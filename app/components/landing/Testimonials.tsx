'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const testimonials = [
  {
    name: "Jana",
    title: "Young Innovator (Tamil Nadu State Planning Commission)",
    quote:
      "Working in policy and grassroots innovation, I’ve always believed in the power of field-based education. REACT is the first program I’ve seen that truly embodies that vision. It's long overdue—and exactly what India needs right now. I strongly recommend it to anyone who wants to build real solutions, from real experience.",
    bg: "bg-blue-50",
    img: "jana.jpg",
    linkedin: "https://www.linkedin.com/in/connectwithjana/",
  },
  {
    name: "Sivakeerthana",
    title: "R and D Engineer (Zoho Corp)",
    quote:
      "As someone immersed in applied research, I’ve been waiting to see a program that connects students to the real world meaningfully. REACT does that with clarity and conviction. It’s not just another initiative—it’s a shift. We need more such frameworks if we truly care about the future of India’s innovation landscape.",
    bg: "bg-green-50",
    img: "sivakeerthana.jpg",
    linkedin: "https://www.linkedin.com/in/sivakeerthana/",
  },
  {
    name: "Sangeetha",
    title: "Professor",
    quote:
      "For years, I’ve watched students struggle to connect theory with the reality outside. REACT filled that gap in the most profound way. It brings back meaning to education—by grounding it in people, systems, and challenges. For a country like ours, this kind of learning is no longer optional. It’s essential.",
    bg: "bg-yellow-50",
    img: "sangeetha.jpg",
    linkedin: "https://www.linkedin.com/in/dr-sangeetha-n-ab397258/",
  },
  {
    name: "Aparna",
    title: "Student",
    quote:
      "I had never walked through a village and asked, 'How can I help?' REACT made me do that—and it changed how I see engineering forever.",
    bg: "bg-pink-50",
    img: "aparna.jpg",
    linkedin: "https://www.linkedin.com/in/aparnarm2904/",
  },
  {
    name: "Nandeeswaran",
    title: "Student",
    quote:
      "We built a working prototype with farmers. Not for them, but with them. That experience taught me more than any textbook ever could.",
    bg: "bg-indigo-50",
    img: "nandeesh.jpg",
    linkedin: "https://www.linkedin.com/in/nandeeswaran-k/",
  },
  ];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative z-20 bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">REACT Through Expert Eyes</h2>
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
              className={`min-w-[300px] max-w-[300px] ${item.bg} rounded-xl shadow-md p-5 flex-shrink-0`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={`/images/testimonials/${item.img}`}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.title}</p>
                </div>
                <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 text-xl" />
                </a>
              </div>
              <p className="text-gray-700 text-sm italic">“{item.quote}”</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
