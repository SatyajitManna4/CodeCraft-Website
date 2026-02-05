"use client";

export default function AboutExperience() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE AREA */}
        <div className="relative">
          {/* Top Image */}
          <img
            src="/about-1.png"
            alt="IT Experience"
            className="rounded-xl shadow-lg w-3/4"
          />

          {/* Bottom Image */}
          <img
            src="/about-2.png"
            alt="VR Technology"
            className="rounded-xl shadow-lg w-3/4 mt-10 ml-20"
          />

          {/* Experience Card */}
          <div className="absolute top-1/2 right-0 translate-x-1/2 bg-white shadow-xl rounded-xl px-8 py-6 text-center">
            <h3 className="text-5xl font-bold text-blue-600">1</h3>
            <p className="text-sm font-semibold text-gray-700">
              Years Of <br /> Experience
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We Help IT Companies <br />
            Scale Engineering
          </h2>

          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he
            followed speedily.
          </p>

          {/* Feature 1 */}
          <div className="flex gap-4 mb-6">
            <div className="text-blue-600 text-2xl">✔</div>
            <div>
              <h4 className="text-lg font-semibold">
                Certified Company
              </h4>
              <p className="text-gray-600 text-sm">
                Assurance yet bed was improving furniture man.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 mb-10">
            <div className="text-blue-600 text-2xl">★</div>
            <div>
              <h4 className="text-lg font-semibold">
                Award Ceremony
              </h4>
              <p className="text-gray-600 text-sm">
                Assurance yet bed was improving furniture man.
              </p>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-6">
            <img
              src="/signature.png"
              alt="Signature"
              className="h-12 mb-2"
            />
            <p className="font-semibold">Spark Moun</p>
            <p className="text-sm text-gray-500">
              Chairman & Founder
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
