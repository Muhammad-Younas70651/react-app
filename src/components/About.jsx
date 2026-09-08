    
function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div>

            {/* Small Heading */}
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              About Us
            </span>

            {/* Main Heading */}
            <h2 className="mt-5 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              We Build

              <span className="block bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We create modern and user-friendly digital solutions
              that help businesses grow and succeed online.
            </p>

            <p className="mt-4 leading-relaxed text-gray-500">
              Our goal is to combine clean design, modern technology,
              and simple user experiences to build websites that are
              fast, responsive, and easy to use.
            </p>

            {/* ================= FEATURES ================= */}
            <div className="mt-8 space-y-5">

              {/* Feature 1 */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100">
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Modern Design
                  </h3>

                  <p className="text-sm text-gray-500">
                    Clean and professional user interfaces.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-100">
                  <span className="font-bold text-purple-600">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Responsive Development
                  </h3>

                  <p className="text-sm text-gray-500">
                    Works perfectly on mobile, tablet, and desktop.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                  <span className="font-bold text-indigo-600">
                    ✓
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Modern Technology
                  </h3>

                  <p className="text-sm text-gray-500">
                    Built using reliable and modern technologies.
                  </p>
                </div>
              </div>

            </div>

            {/* Button */}
            <button
              type="button"
              className="mt-8 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Learn More →
            </button>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative">

            {/* Main Card */}
            <div className="rounded-3xl bg-linear-to-br from-blue-600 to-purple-600 p-1 shadow-2xl">

              <div className="rounded-[22px] bg-white p-8 sm:p-10">

                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600 to-purple-600 shadow-lg">
                  <span className="text-3xl font-bold text-white">
                    M
                  </span>
                </div>

                {/* Card Heading */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Why Choose Us?
                </h3>

                {/* Card Description */}
                <p className="mt-3 leading-relaxed text-gray-500">
                  We focus on creating simple, beautiful, and
                  powerful digital experiences that deliver real value.
                </p>

                {/* ================= STATISTICS ================= */}
                <div className="mt-8 grid grid-cols-3 gap-4">

                  {/* Users */}
                  <div className="rounded-xl bg-blue-50 p-4 text-center">
                    <h4 className="text-2xl font-bold text-blue-600">
                      10K+
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      Users
                    </p>
                  </div>

                  {/* Projects */}
                  <div className="rounded-xl bg-purple-50 p-4 text-center">
                    <h4 className="text-2xl font-bold text-purple-600">
                      50+
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      Projects
                    </p>
                  </div>

                  {/* Success */}
                  <div className="rounded-xl bg-indigo-50 p-4 text-center">
                    <h4 className="text-2xl font-bold text-indigo-600">
                      99%
                    </h4>

                    <p className="mt-1 text-xs text-gray-500">
                      Success
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* ================= FLOATING CARD ================= */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-4 shadow-xl sm:-left-8">

              <div className="flex items-center gap-3">

                {/* Check Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <span className="font-bold text-green-600">
                    ✓
                  </span>
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Trusted Solution
                  </p>

                  <p className="text-xs text-gray-500">
                    Built for your success
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

