"use client";

const services = [
  {
    title: "Web Development",
    desc: "Astonished set expression solicitude way admiration",
    active: true,
  },
  {
    title: "Application Development",
    desc: "Astonished set expression solicitude way admiration",
  },
  {
    title: "Digital Marketing",
    desc: "Astonished set expression solicitude way admiration",
  },
  {
    title: "UI/UX Design",
    desc: "Astonished set expression solicitude way admiration",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#F5F7FF]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-4">
            — WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Custom IT Solutions for <br />
            Your Business
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-lg">
            Carried nothing on am warrant towards. Polite in of in oh needed
            itself silent course. Assistance travelling so especially do
            prosperous appearance.
          </p>

          {/* Video Button */}
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
              ▶
            </div>
            <span className="font-semibold text-gray-800">
              VIDEO SHOWCASE
            </span>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-10 rounded-xl shadow-sm text-center transition
                ${
                  service.active
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
            >
              {/* Icon Placeholder */}
              <div
                className={`mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center
                ${
                  service.active
                    ? "bg-white/20"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                ⚙
              </div>

              <h3
                className={`text-xl font-semibold mb-3 ${
                  service.active ? "text-white" : "text-black"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm leading-relaxed ${
                  service.active ? "text-white/80" : "text-gray-600"
                }`}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
