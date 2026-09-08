import React from "react";
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20">
              <span className="text-xl font-bold text-white">
                M
              </span>
            </div>

            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              My<span className="text-blue-600">Website</span>
            </span>
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-2 md:flex">

            <a
              href="/"
              className="rounded-lg bg-blue-50 px-4 py-2 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-100"
            >
              Home
            </a>

            <a
              href="/about"
              className="rounded-lg px-4 py-2 font-medium text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            >
              About
            </a>

            <a
              href="/services"
              className="rounded-lg px-4 py-2 font-medium text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            >
              Services
            </a>

            <a
              href="/contact"
              className="rounded-lg px-4 py-2 font-medium text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            >
              Contact
            </a>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Login Button */}
            <button
              type="button"
              className="hidden rounded-xl px-5 py-2.5 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-blue-600 sm:block"
            >
              Login
            </button>

            {/* Get Started Button */}
            <button
              type="button"
              className="rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-5 py-2.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
            >
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
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