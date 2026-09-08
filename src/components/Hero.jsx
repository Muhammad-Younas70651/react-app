import React from "react";
function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-50">

      {/* Background Decoration */}
      <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"></div>

      {/* Main Container */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>

              Welcome to MyWebsite
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Build Something

              <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Amazing Today
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0">
              Create modern, beautiful and powerful web experiences
              with our simple and innovative solutions. Take your
              ideas to the next level.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">

              {/* Get Started */}
              <button
                type="button"
                className="w-full rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-auto"
              >
                Get Started →
              </button>

              {/* Learn More */}
              <button
                type="button"
                className="w-full rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 sm:w-auto"
              >
                Learn More
              </button>

            </div>

            {/* Statistics */}
            <div className="mt-10 flex items-center justify-center gap-8 lg:justify-start">

              {/* Users */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  10K+
                </h3>

                <p className="text-sm text-gray-500">
                  Users
                </p>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-gray-300"></div>

              {/* Satisfaction */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  99%
                </h3>

                <p className="text-sm text-gray-500">
                  Satisfaction
                </p>
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-gray-300"></div>

              {/* Support */}
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

  
          <div className="relative hidden justify-center lg:flex">

            {/* Main Card */}
            <div className="relative h-[450px]w-[420px] rounded-3xl bg-linear-to-br from-blue-600 to-purple-600 p-1 shadow-2xl shadow-blue-500/20">

              {/* Card Content */}
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[22px] bg-white p-8">

                {/* Icon */}
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-linear-to-br from-blue-600 to-purple-600 shadow-xl shadow-blue-500/30">
                  <span className="text-4xl font-bold text-white">
                    M
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-8 text-3xl font-bold text-gray-900">
                  MyWebsite
                </h2>

                {/* Description */}
                <p className="mt-3 max-w-xs text-center text-gray-500">
                  Modern solutions designed to help you grow,
                  create and succeed.
                </p>

                {/* Mini Cards */}
                <div className="mt-8 grid w-full grid-cols-3 gap-3">

                  <div className="flex h-16 items-center justify-center rounded-xl bg-blue-50">
                    <span className="font-bold text-blue-600">
                      ⚡
                    </span>
                  </div>

                  <div className="flex h-16 items-center justify-center rounded-xl bg-purple-50">
                    <span className="font-bold text-purple-600">
                      🚀
                    </span>
                  </div>

                  <div className="flex h-16 items-center justify-center rounded-xl bg-indigo-50">
                    <span className="font-bold text-indigo-600">
                      ✨
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute-bottom-0 left-0 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl">

              {/* Check Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <span className="text-green-600">
                  ✓
                </span>
              </div>

              {/* Text */}
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