"use client";

export default function HeroImage() {
  return (
    <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden border-b border-gray-200 bg-white">
      <img
        src="/forest.jpg"
        alt="A lush forest representing REACT's immersive environment"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
