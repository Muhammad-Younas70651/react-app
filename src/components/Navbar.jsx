import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-white text-xl font-bold">
                M
              </span>
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              My<span className="text-blue-600">Website</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">

            <a
              href="/"
              className="px-4 py-2 rounded-lg text-blue-600 bg-blue-50 font-semibold hover:bg-blue-100 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="/about"
              className="px-4 py-2 rounded-lg text-gray-600 font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              About
            </a>

            <a
              href="/services"
              className="px-4 py-2 rounded-lg text-gray-600 font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Services
            </a>

            <a
              href="/contact"
              className="px-4 py-2 rounded-lg text-gray-600 font-medium hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Contact
            </a>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Login */}
            <button className="hidden sm:block px-5 py-2.5 rounded-xl text-gray-700 font-semibold hover:text-blue-600 hover:bg-gray-100 transition-all duration-300">
              Login
            </button>

            {/* Get Started */}
            <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
