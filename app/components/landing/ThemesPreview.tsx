'use client';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import themeList from '@/react/themes/themesData';
import ThemeCard from '@/react/themes/ThemeCard';

export default function ThemesPreview() {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const CARD_WIDTH = 340; // 320px card + 20px gap

  useEffect(() => {
    controls.start({
      x: ['0%', '-100%'],
      transition: {
        duration: 60,
        ease: 'linear',
        repeat: Infinity,
      },
    });
  }, [controls]);

  const scrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -CARD_WIDTH : CARD_WIDTH;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Themes</h2>

      {/* Arrow buttons */}
      <button
        onClick={() => scrollBy('left')}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow"
      >
        ←
      </button>
      <button
        onClick={() => scrollBy('right')}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow"
      >
        →
      </button>

      <div
        className="w-full overflow-x-scroll scrollbar-none"
        ref={scrollRef}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: ['0%', '-100%'],
            transition: {
              duration: 60,
              ease: 'linear',
              repeat: Infinity,
            },
          })
        }
      >
        <motion.div
          className="flex gap-6 w-max px-4 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -5000, right: 0 }}
        >
          {[...themeList, ...themeList].map((theme, index) => (
            <div
              key={`${theme.slug}-${index}`}
              className="min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-md p-4 flex-shrink-0"
            >
              <ThemeCard
                title={theme.title}
                url={theme.url}
                image1={theme.image1}
                image2={theme.image2}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
