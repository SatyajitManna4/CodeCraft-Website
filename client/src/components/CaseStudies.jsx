"use client";

const stats = [
  { value: "687", label: "Happy Clients" },
  { value: "2348", label: "Finished Projects" },
  { value: "450", label: "Skilled Experts" },
  { value: "1200", label: "Media Posts" },
];

export default function CaseStudies() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Our Work Showcase
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4" />
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <img
            src="/case-1.jpg"
            alt="Case study 1"
            className="rounded-xl object-cover w-full h-[350px]"
          />
          <img
            src="/case-2.jpg"
            alt="Case study 2"
            className="rounded-xl object-cover w-full h-[350px]"
          />
          <img
            src="/case-3.jpg"
            alt="Case study 3"
            className="rounded-xl object-cover w-full h-[350px]"
          />
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600">
                {item.value}
              </h3>
              <p className="text-gray-700 mt-2 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
