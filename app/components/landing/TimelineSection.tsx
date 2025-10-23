"use client";
import { useEffect, useRef } from "react";

export default function TimelineSection() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <section className="w-full bg-white text-black py-20 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 style={{ color: "#000", backgroundColor: "#fff" }} className="text-3xl md:text-5xl font-bold mb-10">REACT Journey</h2>
        <p style={{ color: "#000", backgroundColor: "#fff" }} className="text-lg md:text-xl mb-12">
          A bold, immersive path through Explore, Reflect, Solve, and Implement — grounded in real-life impact.
        </p>

        <div
          ref={scrollContainerRef}
          className="overflow-x-auto w-full"
          style={{
            WebkitOverflowScrolling: "touch",
            display: "flex",
            justifyContent: "flex-start",
            scrollBehavior: "smooth",
          }}
        >
          <div
            style={{
              minWidth: "1600px", // or the actual image width
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/timeline2.png"
              alt="REACT Timeline"
              style={{
                height: "auto",
                maxWidth: "none",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
