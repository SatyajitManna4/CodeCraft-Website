"use client";

export default function Hero() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-14">

        {/* LEFT CONTENT */}
        <div className="pt-12 md:pt-0 md:self-start">
  <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
    Optimize IT Systems
  </p>

  <h1 className="text-5xl md:text-6xl font-extrabold">
  Creating better <span className="text-blue-600">IT Solutions</span>
</h1>
    

  <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg">
    We deliver innovative, secure, and scalable technology solutions
   designed to accelerate business growth and digital transformation.
  </p>

          <button className="bg-blue-600 text-white text-lg px-8 py-4 rounded-md hover:bg-blue-700 transition active:scale-95">
    Start Now →
  </button>
</div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <img
            src="/hero.png"
            alt="IT Solutions"
            className="max-w-md w-full"
          />
        </div>

      </div>
    </section>
  );
}
