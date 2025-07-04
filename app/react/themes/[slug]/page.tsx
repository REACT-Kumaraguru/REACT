'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type ThemePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function ThemePage({ params }: ThemePageProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        // Resolve params here
        const resolvedParams = await params;
        const mod = await import(`../${resolvedParams.slug}`);
        if (!mod?.default) throw new Error('No default export found');
        setComponent(() => mod.default);
      } catch (err) {
        console.error(`Failed to load theme`, err);
        notFound();
      }
    };

    loadComponent();
  }, [params]);

  if (!Component) return <div className="p-10">Loading theme...</div>;

  return (
    <div className="min-h-screen bg-white p-10">
      <Component />
    </div>
  );
}
