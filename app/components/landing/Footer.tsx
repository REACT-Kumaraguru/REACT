"use client";

export default function Footer() {
  return (
    <footer className="bg-white py-8 sm:py-12 px-4 sm:px-6 border-t mt-10">
      <div className="max-w-6xl mx-auto">
        {/* Mobile accordion style footer */}
        <div className="md:hidden space-y-6">
          <details className="group">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
              Downloads
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <ul className="space-y-2 mt-2 pl-2">
              <li><a href="/docs/react-brochure.pdf" target="_blank" className="underline text-base">REACT Brochure</a></li>
              <li><a href="/docs/theme-handbook.pdf" target="_blank" className="underline text-base">Theme Handbook</a></li>
              <li><a href="/docs/schedule.pdf" target="_blank" className="underline text-base">Program Schedule</a></li>
            </ul>
          </details>
          
          <details className="group">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
              Courses
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <ul className="space-y-2 mt-2 pl-2">
              <li><a href="/react" className="underline text-base">Main Courses</a></li>
              <li><a href="#" className="underline text-base">Side Labs</a></li>
            </ul>
          </details>
          
          <details className="group">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
              Media Presence
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <ul className="space-y-2 mt-2 pl-2">
              <li><a href="#" className="underline text-base">Press Mentions</a></li>
              <li><a href="#" className="underline text-base">Social Media</a></li>
              <li><a href="#" className="underline text-base">Interviews</a></li>
            </ul>
          </details>
          
          <details className="group">
            <summary className="flex justify-between items-center font-bold cursor-pointer list-none">
              Quick Links
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <ul className="space-y-2 mt-2 pl-2">
              <li><a href="/react" className="underline text-base">What is REACT?</a></li>
              <li><a href="/react" className="underline text-base">Themes</a></li>
              <li><a href="/select-user" className="underline text-base">Apply Now</a></li>
            </ul>
          </details>
        </div>
        
        {/* Desktop footer */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-700">
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
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} REACT Program. All rights reserved.
      </div>
    </footer>
  );
}