"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need a business plan",
    answer:
      "Yes, a business plan helps you define goals, understand the market, and plan growth strategies effectively.",
  },
  {
    question: "How long should a business plan be",
    answer:
      "A business plan should typically be 15–30 pages depending on the complexity of your business.",
  },
  {
    question: "Where do I start",
    answer:
      "Start with market research, define your services, and identify your target customers clearly.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(2); // third open by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f5f7fb] py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            — FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 leading-tight">
            Most common question <br /> about our services
          </h2>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            View All
          </button>
        </div>

        {/* RIGHT ACCORDION */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    ?
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>

                <span
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 px-6 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
