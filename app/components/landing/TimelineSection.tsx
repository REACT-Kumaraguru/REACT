"use client";
import { useEffect, useState } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function TimelineSection() {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    fetch("/timeline2.svg")
      .then((res) => res.text())
      .then((text) => setSvgContent(text));
  }, []);

  return (
    <section className="w-full bg-white text-black py-20 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">REACT Journey</h2>
        <p className="text-lg md:text-xl mb-12">
          A bold, immersive path through Explore, Reflect, Solve, and Implement — grounded in real-life impact.
        </p>
  
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            width: "100%",
          }}
        >
          <div
    style={{
      minWidth: "1600px",  // ✅ make it big — works even on desktops
      margin: "0 auto",
    }}
  >

  </div>


          <img
            src="/timeline2.png"
            alt="REACT Timeline"
            style={{
              minWidth: "800px", // ensures it's not too small
              maxWidth: "1200px",
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </section>
  );
  
}
