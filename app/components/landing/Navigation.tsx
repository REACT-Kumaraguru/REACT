"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href="/" className="text-black font-bold text-xl">
              REACT
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-black hover:text-gray-600">
              About
            </Link>
            <Link href="/react/program" className="text-black hover:text-gray-600">
              Programmes
            </Link>
             <Link href="/react/team" className="text-black hover:text-gray-600">
              Team
            </Link>
            {/* <Link href="/react/globe" className="text-black hover:text-gray-600">
              Fellowship
            </Link>
            <Link href="/select-user" className="text-black hover:text-gray-600">
              Apply
            </Link> */}
            <Link href="/react/contact" className="text-black hover:text-gray-600">
              Contact
            </Link>
            <Link href="/react/blogs" className="text-black hover:text-gray-600">
              Blogs
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-black p-2"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/"
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link 
              href="/react/program"
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              Programmes
            </Link>
            <a 
              href="/team.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              Team
            </a>
            {/* <a 
              href="/REACT Fellowship_ Credits & Academic Recognition.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              Credits
            </a>
            <Link 
              href="/select-user"
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              Apply
            </Link>
            <Link 
              href="/react/globe"
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              Fellowship
            </Link> */}
            <Link 
              href="/react/contact"
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link 
              href="/react/blogs"
              className="block px-3 py-2 text-black hover:bg-gray-100 rounded-md"
              onClick={toggleMobileMenu}
            >
              Blogs
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;