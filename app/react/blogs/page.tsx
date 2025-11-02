"use client";

import { useState } from "react";
import Link from "next/link";

const BlogPage = () => {
  // Sample blog data — in a real app, you might fetch this from an API
  const [blogs] = useState([
    {
      id: 1,
      title: "Building a Sustainable Tech Future",
      date: "October 15, 2025",
      description:
        "Discover how innovation and green technologies are shaping the next era of sustainable computing.",
      slug: "sustainable-tech-future",
    },
    {
      id: 2,
      title: "How AI Is Transforming Education",
      date: "September 30, 2025",
      description:
        "AI is revolutionizing classrooms through adaptive learning, smart analytics, and personalized teaching tools.",
      slug: "ai-transforming-education",
    },
    {
      id: 3,
      title: "The Power of Collaboration in Research",
      date: "September 10, 2025",
      description:
        "From interdisciplinary teams to global partnerships, discover how collaboration fuels innovation.",
      slug: "collaboration-in-research",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        REACT Blogs
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <Link
              href={`/react/blogs/${blog.slug}`}
              className="inline-block text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
