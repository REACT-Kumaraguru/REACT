"use client";
import { useState } from "react";
import Link from "next/link";

export default function WhoAreYou() {
  return (
    <section
  style={{
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    padding: "60px 16px",
    backgroundImage: "url('/images/bgdesign.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    zIndex: 1,
  }}
>
<div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.2)",
      zIndex: 0,
    }}
  />


      <div className="flex flex-col items-end gap-8">
      <h2
  style={{
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#000", // solid black for visibility
    zIndex: 10,
  }}
>
  Who Are You?
</h2>




        <div className="flex flex-col md:flex-row gap-10">
          <PeelCard
            title="I'm a Student"
            description="Currently pursuing or recently finished my education"
            href="/apply?type=student"
            bg="bg-blue-100/70"
            hover="hover:bg-blue-100/90"
          />
          <PeelCard
            title="I'm a Professional"
            description="Working or experienced — ready to take a break"
            href="/apply?type=professional"
            bg="bg-green-100/70"
            hover="hover:bg-green-100/90"
          />
        </div>
      </div>
    </section>

  );
}

function PeelCard({
  title,
  description,
  href,
  bg,
  hover,
}: {
  title: string;
  description: string;
  href: string;
  bg: string;
  hover: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} className="w-full md:w-[320px]">
      <div
        className={`relative h-[180px] flex flex-col justify-between p-8 rounded-xl shadow-lg transition-all duration-300 ${bg} ${hover} cursor-pointer`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div>
        <h3
  className="text-2xl font-bold mb-2 text-black dark:text-white"
  style={{
    textShadow: "0 0 1px rgba(100, 100, 100, 0.6)", // mild gray outline
  }}
>
  {title}
</h3>

<p
  className="text-sm text-gray-800 dark:text-gray-200"
  style={{
    textShadow: "0 0 1px rgba(120, 120, 120, 0.5)", // even milder for paragraph
  }}
>
  {description}
</p>


        </div>

        {/* Peel corner effect */}
        <div
          className={`absolute bottom-0 right-0 w-[140px] h-[100px] bg-white text-xs font-bold text-center leading-[100px] shadow transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        >
          Click to Apply
        </div>
      </div>
    </Link>
  );
}
