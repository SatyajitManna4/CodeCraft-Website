"use client";

export default function TrustedCustomers() {
  return (
    <section className="py-28 bg-[#F5F7FF]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-4">
            — Works About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            Trusted by 5,000+ <br />
            Happy Customers
          </h2>

          <p className="text-gray-700 text-lg mb-8 max-w-xl">
            Jennings appetite disposed me an at subjects an. To no indulgence
            diminution so discovered mr apartments. Are off under folly death
            wrote cause her way spite.
          </p>

          {/* Bullet Points */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                ✓
              </span>
              <p className="font-semibold text-neutral-900">
                100% Client Satisfaction
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                ✓
              </span>
              <p className="font-semibold text-neutral-900">
                World Class Worker
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition">
            Talk To A Consultant
          </button>
        </div>

        {/* RIGHT IMAGE + STATS */}
        <div className="relative">
          <img
            src="/team-work.jpg"
            alt="Team work"
            className="rounded-xl shadow-lg w-full"
          />

          {/* Floating Stats Card */}
          <div className="absolute -bottom-10 -left-10 bg-white shadow-xl rounded-xl px-10 py-8">
            <h3 className="text-5xl font-extrabold text-blue-600">
              875<span className="text-3xl align-top">+</span>
            </h3>
            <p className="text-gray-700 font-semibold mt-2">
              Completed Projects
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
