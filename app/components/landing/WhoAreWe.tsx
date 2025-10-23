'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const images = [1, 2, 3];

type Direction = number;

const variants: Variants = {
  enter: (dir: Direction) => ({
    x: dir > 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute',
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative',
  },
  exit: (dir: Direction) => ({
    x: dir < 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute',
  }),
};

export default function WhoAreWe() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      navigate(1);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPaused]);

  const navigate = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <section className="relative w-full bg-black flex flex-col items-center justify-center px-6 py-12">
      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold !text-white mb-6 text-center">
        REACT – Real-world Engineering and Application Through Collaborative Transformation
      </h2>

      {/* Image Carousel */}
      <div 
        className="relative w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-xl shadow-md bg-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence custom={direction} mode="popLayout" initial={false}>
          <motion.div
            key={images[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="w-full h-full relative"
          >
            <Image
              src={`/landing_whoarewe/${images[index]}.png`}
              alt={`REACT initiative slide ${index + 1}`}
              className="object-contain"
              fill
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => navigate(1)}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full z-10 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === index ? 'bg-black' : 'bg-black/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Know More Button */}
      <div className="mt-6">
        <Link href="/react">
          <button className="bg-black text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-md">
            Know More
          </button>
        </Link>
      </div>
    </section>
  );
}