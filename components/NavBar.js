"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react or use Heroicons

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-center bg-gray-900/80 backdrop-blur-md border-b border-gray-800 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo on the left */}
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
          Clooyzi
        </div>

        {/* Center Nav */}
        <nav className="hidden md:flex space-x-10 text-white font-medium text-sm">
          <a href="#" className="hover:text-violet-400 transition">Home</a>
          <a href="#" className="hover:text-violet-400 transition">Templates</a>
          <a href="#" className="hover:text-violet-400 transition">About</a>
          <a href="#" className="hover:text-violet-400 transition">Contact</a>
        </nav>

        {/* Get Started button */}
        <div className="hidden md:block">
          <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-500 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-800 flex flex-col items-center space-y-4 py-6 z-50 text-white font-medium text-sm">
          <a href="#" className="hover:text-violet-400 transition">Home</a>
          <a href="#" className="hover:text-violet-400 transition">Templates</a>
          <a href="#" className="hover:text-violet-400 transition">About</a>
          <a href="#" className="hover:text-violet-400 transition">Contact</a>
          <button className="bg-violet-600 text-white px-6 py-2 rounded-full hover:bg-violet-500 transition-all duration-300">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
