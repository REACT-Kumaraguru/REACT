'use client';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type Params = {
  params: {
    slug: string;
  };
};

export default function ThemePage({ params }: Params) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const mod = await import(`../${params.slug}`);
        setComponent(() => mod.default);
      } catch (err) {
        console.error(`Failed to load theme: ${params.slug}`, err);
        notFound(); // fallback if file doesn’t exist
      }
    };
    loadComponent();
  }, [params.slug]);

  if (!Component) return <div className="p-10">Loading theme...</div>;

  return (
    <div className="min-h-screen bg-white p-10">
      <Component />
    </div>
  );
}
