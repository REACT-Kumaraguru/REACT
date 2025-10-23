'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  title: string;
  url?: string;
  image1: string;
  image2: string;
  onClick?: () => void;
  isActive?: boolean;
};

export default function ThemeCard({ title, url, image1, image2, onClick, isActive }: Props) {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === image1 ? image2 : image1));
    }, 1500);
    return () => clearInterval(interval);
  }, [image1, image2]);

  const card = (
    <div
      onClick={onClick}
      className={`relative w-full h-[300px] md:h-[400px] overflow-hidden border rounded-xl shadow-lg group transition-all duration-300 cursor-pointer ${
        isActive ? 'ring-4 ring-green-500 scale-105' : ''
      }`}
    >
      <img
        src={currentImage}
        alt={title}
        className="w-full h-full object-cover transition duration-1000 ease-in-out group-hover:blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-60 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition">
        Learn More
      </div>
      <div className="absolute bottom-5 left-5 text-white text-3xl font-extrabold drop-shadow-md">
        {title}
      </div>
    </div>
  );

  if (typeof url === 'string') {
    return <Link href={url}>{card}</Link>;
  }

  return card;
}
