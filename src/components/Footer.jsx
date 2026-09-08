import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">
              MyWebsite
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
              We create modern, responsive, and user-friendly
              websites that help businesses grow online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">
              Services
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>React Development</li>
              <li>API Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>📧 example@email.com</li>
              <li>📞 +92 300 1234567</li>
              <li>📍 Pakistan</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left lg:px-8">

          <p className="text-sm text-gray-400">
            © 2026 MyWebsite. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-400">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Facebook
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
