"use client";
import { useState } from "react";
import Link from "next/link";

export default function WhoAreYou() {
  return (
    <section
      className="min-h-screen w-full bg-white flex flex-col items-center justify-center py-20 scroll-snap-align-start"
      style={{
        backgroundImage: "url('/images/bgdesign.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <h2 className="text-4xl font-bold mb-12">Who Are You?</h2>

      <div
        className="flex flex-col md:flex-row gap-10 items-center justify-end w-full max-w-none px-6 -translate-y-75"
      >

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
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
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
