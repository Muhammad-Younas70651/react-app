import React from "react";

function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <span className="font-semibold text-blue-600">
            Contact Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600">
            Have a question or want to work with us?
            Send us a message and we will get back to you.
          </p>

        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side - Contact Information */}
          <div className="rounded-2xl bg-gray-50 p-8">

            <h3 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h3>

            <p className="mt-3 text-gray-600">
              Feel free to contact us using the information below.
            </p>

            {/* Email */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                📧
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Email
                </h4>

                <p className="text-gray-600">
                  example@email.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                📞
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Phone
                </h4>

                <p className="text-gray-600">
                  +92 300 1234567
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                📍
              </div>

              <div>
                <h4 className="font-semibold text-gray-900">
                  Location
                </h4>

                <p className="text-gray-600">
                  Pakistan
                </p>
              </div>
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-2xl bg-gray-50 p-8">

            <h3 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h3>

            <form className="mt-6 space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;

