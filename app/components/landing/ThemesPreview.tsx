'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import themeList from '@/react/themes/themesData';
import ThemeCard from '@/react/themes/ThemeCard';

export default function ThemesPreview() {
  const controls = useAnimation();

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

  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Themes</h2>

      <div
        className="w-full overflow-hidden"
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
          className="flex gap-6 w-[200%] px-4 cursor-grab active:cursor-grabbing"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
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
