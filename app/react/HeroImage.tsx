"use client";

export default function HeroImage() {
  return (
    <div className="relative w-full h-[250px] overflow-hidden border-b border-gray-200 bg-white">
      <img
        src="/forest.jpg"
        alt="Forest background"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
