"use client";

const services = [
  {
    title: "Risk Management",
    desc: "Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods on an.",
  },
  {
    title: "Business Planning",
    desc: "Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods on an.",
  },
  {
    title: "Infrastructure Plan",
    desc: "Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods on an.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-28 bg-[#F5F7FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Header */}
        <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
          Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16">
          What We Do
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-10 shadow-md hover:shadow-xl
                         transition-all duration-300 hover:-translate-y-3"
            >
              {/* Icon placeholder */}
              <div className="mb-6 text-blue-600 text-4xl">
                📊
              </div>

              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Arrow Button */}
              <div className="w-10 h-10 mx-auto rounded-full bg-gray-100 flex items-center justify-center
                              group-hover:bg-blue-600 group-hover:text-white transition">
                →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
