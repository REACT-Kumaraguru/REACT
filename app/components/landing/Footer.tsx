'use client';
import {
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6  border-t mt-10">
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 text-sm">
        
        {/* REACT Description */}
        <div>
          <h3 className="text-lg font-semibold !text-white mb-3">About REACT</h3>
          <p className="!text-white">
            The REACT (Real-world Engineering and Application for Collaborative Transformation) Program empowers students to engineer solutions in real socio-technical environments. Through hands-on challenges, interdisciplinary projects, and field immersion, REACT bridges the gap between classroom learning and real-world impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg !text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/react" className="hover:underline">What is REACT?</a></li>
            <li><a href="/react/themes" className="hover:underline">Themes</a></li>
            <li><a href="/select-user" className="hover:underline">Apply Now</a></li>
            <li><a href="/react/globe" className="hover:underline">Careers</a></li>
            <li><a href="/react/groundzero" className="hover:underline">GroundZero</a></li>
          </ul>
        </div>

        {/* Downloads */}
        <div>
          <h3 className="text-lg font-semibold !text-white mb-3">Downloads</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/docs/react-brochure.pdf" target="_blank" className="hover:underline">REACT Brochure</a></li>
            <li><a href="/docs/theme-handbook.pdf" target="_blank" className="hover:underline">Theme Handbook</a></li>
            <li><a href="/docs/schedule.pdf" target="_blank" className="hover:underline">Program Schedule</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center gap-6 text-gray-400">
        <a rel="noopener" href="https://www.instagram.com/react.tribe/" target="_blank" aria-label="Instagram">
          <Instagram className="w-5 h-5 hover:text-white transition-colors" />
        </a>
        <a rel="noopener" href="https://www.linkedin.com/company/react-ki/" target="_blank" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-white transition-colors" />
        </a>
        <a rel="noopener" href="https://www.twitter.com" target="_blank" aria-label="Twitter">
          <Twitter className="w-5 h-5 hover:text-white transition-colors" />
        </a>
        <a rel="noopener" href="https://www.youtube.com" target="_blank" aria-label="YouTube">
          <Youtube className="w-5 h-5 hover:text-white transition-colors" />
        </a>
      </div>
      
      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} REACT Program. All rights reserved.
      </div>
    </footer>
  );
}
