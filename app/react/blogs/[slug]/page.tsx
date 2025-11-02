"use client";

import React from "react";
import { notFound, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type BlogPost = {
  title: string;
  date: string;
  content: string;
};

const blogPosts: Record<string, BlogPost> = {
  "sustainable-tech-future": {
    title: "Building a Sustainable Tech Future",
    date: "October 15, 2025",
    content: `
      As the world shifts toward greener technologies, the software industry must adapt.
      By optimizing systems, using renewable energy data centers, and encouraging responsible consumption,
      we can create a more sustainable digital ecosystem.
    `,
  },
  "ai-transforming-education": {
    title: "How AI Is Transforming Education",
    date: "September 30, 2025",
    content: `
      Artificial Intelligence (AI) is enabling personalized learning experiences.
      Educators can leverage predictive analytics to better understand student progress and adapt teaching methods accordingly.
    `,
  },
  "collaboration-in-research": {
    title: "The Power of Collaboration in Research",
    date: "September 10, 2025",
    content: `
      Innovation thrives when diverse minds collaborate. Open research platforms and global initiatives
      are driving impactful discoveries across disciplines.
    `,
  },
};

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogPost({ params }: BlogPostPageProps) {
  // ✅ Unwrap the params using React.use()
  const { slug } = React.use(params);
  const router = useRouter();

  const post = blogPosts[slug];

  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 py-24">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to Blogs
      </button>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-8">{post.date}</p>
      <div className="text-gray-700 whitespace-pre-line leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}
