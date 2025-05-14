// app/components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-6 border-t mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-700">
        <div>
          <h3 className="font-bold mb-2">Downloads</h3>
          <ul className="space-y-2">
            <li><a href="/docs/react-brochure.pdf" target="_blank" className="underline">REACT Brochure</a></li>
            <li><a href="/docs/theme-handbook.pdf" target="_blank" className="underline">Theme Handbook</a></li>
            <li><a href="/docs/schedule.pdf" target="_blank" className="underline">Program Schedule</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Courses</h3>
          <ul className="space-y-2">
            <li><a href="/react" className="underline">Main Courses</a></li>
            <li><a href="#" className="underline">Side Labs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Media Presence</h3>
          <ul className="space-y-2">
            <li><a href="#" className="underline">Press Mentions</a></li>
            <li><a href="#" className="underline">Social Media</a></li>
            <li><a href="#" className="underline">Interviews</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/react" className="underline">What is REACT?</a></li>
            <li><a href="/react" className="underline">Themes</a></li>
            <li><a href="/select-user" className="underline">Apply Now</a></li>
            <li><a href="/react/careers" className="underline">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} REACT Program. All rights reserved.
      </div>
    </footer>
  );
}