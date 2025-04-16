"use client";
import Link from "next/link";



export default function WhoAreWe() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="max-w-4xl text-center space-y-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Who Are We?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            REACT is a learning ecosystem where students, professionals, and mentors collaborate to solve real-world problems — not just pass exams. We believe in meaningful, applied learning — from the forest to the factory.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">What is REACT?</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            REACT stands for Real-world Experience and Application through Collaborative Transformation. It's a hands-on, problem-solving program where learners explore themes like sustainability, tech, and rural innovation.
          </p>
          <div className="mt-6">
          
          <Link href="/react">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Know More
            </button>
          </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
