import React from "react";

function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build modern, responsive, and user-friendly websites using the latest technologies.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "We create clean and attractive designs that provide a smooth and enjoyable user experience.",
      icon: "🎨",
    },
    {
      title: "React Development",
      description:
        "We develop fast and interactive web applications using React.js and modern tools.",
      icon: "⚛️",
    },
    {
      title: "Responsive Design",
      description:
        "Our websites work perfectly on desktops, tablets, and mobile devices.",
      icon: "📱",
    },
    {
      title: "API Integration",
      description:
        "We connect websites and applications with APIs to handle real-time data efficiently.",
      icon: "🔗",
    },
    {
      title: "Website Maintenance",
      description:
        "We maintain, improve, and update websites to keep them secure and up to date.",
      icon: "⚙️",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 font-semibold text-blue-600">
            Our Services
          </p>

          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            What We Can Do For You
          </h2>

          <p className="text-gray-600">
            We provide modern web development and design services
            to help businesses build a strong online presence.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="leading-7 text-gray-600">
                {service.description}
              </p>

              {/* Learn More */}
              <button className="mt-5 font-semibold text-blue-600 transition hover:text-blue-800">
                Learn More →
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
