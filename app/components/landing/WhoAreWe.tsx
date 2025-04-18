"use client";
import Link from "next/link";

export default function WhoAreWe() {  
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
        <div className="max-w-4xl text-center space-y-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Who Are We?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              REACT is a learning ecosystem where students, professionals, and mentors collaborate to solve real-world problems — not just pass exams. We believe in meaningful, applied learning that begins where most education ends — from the <strong>forest to the factory</strong>, and from the <strong>village to the lab</strong>.
            </p>
          </div>
  
          <div>
            <h2 className="text-4xl font-bold mb-4">What is REACT?</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              REACT stands for <strong>Real-world Experience and Application through Collaborative Transformation</strong>. It’s not just a course—it’s a new kind of journey. A hands-on, problem-solving program where learners live, observe, reflect, and co-create solutions with the people who face those problems every day.
            </p>
  
            <blockquote className="italic text-indigo-700 text-lg mb-6 font-medium">
              “We don’t prepare students for the real world. We place them right in the middle of it.”
            </blockquote>
  
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Participants immerse themselves in real contexts—living as farmers, walking with forest guards, mapping water systems, decoding rural health, or rebuilding public services. They identify one challenge worth solving, reframe it into a research hypothesis, innovation brief, or design problem—and begin building solutions with mentorship and community support.
            </p>
  
            <div className="flex justify-center gap-3 text-sm font-medium text-gray-800 mt-8">
              <div className="px-4 py-2 bg-white border rounded-md shadow">Explore</div>
              <div className="self-center">→</div>
              <div className="px-4 py-2 bg-white border rounded-md shadow">Reflect</div>
              <div className="self-center">→</div>
              <div className="px-4 py-2 bg-white border rounded-md shadow">Solve</div>
              <div className="self-center">→</div>
              <div className="px-4 py-2 bg-white border rounded-md shadow">Implement</div>
            </div>
  
            <p className="text-gray-700 text-lg leading-relaxed mt-8">
              REACT is more than education. It’s a launchpad for changemakers—where <strong>lived experience becomes learning</strong>, and <strong>problem solvers become grounded creators of change</strong>.
            </p>
  
            <div className="mt-10">
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
  
