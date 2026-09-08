import React from "react";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Welcome to MyWebsite
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Build Something
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Today
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Create modern, beautiful and powerful web experiences
              with our simple and innovative solutions. Take your
              ideas to the next level.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">

              <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Get Started →
              </button>

              <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-gray-300 bg-white text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>

            </div>

            {/* Small Stats */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  10K+
                </h3>
                <p className="text-sm text-gray-500">
                  Users
                </p>
              </div>

              <div className="h-10 w-px bg-gray-300"></div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  99%
                </h3>
                <p className="text-sm text-gray-500">
                  Satisfaction
                </p>
              </div>

              <div className="h-10 w-px bg-gray-300"></div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  24/7
                </h3>
                <p className="text-sm text-gray-500">
                  Support
                </p>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative hidden lg:flex justify-center">

            {/* Main Card */}
            <div className="relative w-[420px] h-[450px] rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-2xl shadow-blue-500/20">

              <div className="w-full h-full rounded-[22px] bg-white flex flex-col items-center justify-center p-8">

                {/* Icon */}
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/30">
                  <span className="text-4xl text-white font-bold">
                    M
                  </span>
                </div>

                <h2 className="mt-8 text-3xl font-bold text-gray-900">
                  MyWebsite
                </h2>

                <p className="mt-3 text-center text-gray-500 max-w-xs">
                  Modern solutions designed to help you grow,
                  create and succeed.
                </p>

                {/* Mini Cards */}
                <div className="mt-8 grid grid-cols-3 gap-3 w-full">

                  <div className="h-16 rounded-xl bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">
                      ⚡
                    </span>
                  </div>

                  <div className="h-16 rounded-xl bg-purple-50 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">
                      🚀
                    </span>
                  </div>

                  <div className="h-16 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">
                      ✨
                    </span>
                  </div>

                </div>

              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -left-8 bottom-12 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600">✓</span>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Project Complete
                </p>

                <p className="text-xs text-gray-500">
                  Everything looks great!
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

