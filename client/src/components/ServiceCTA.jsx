"use client";



export default function ServiceCTA() {

  return (

    <section className="relative -mt-24 z-10">

      <div className="max-w-6xl mx-auto px-6">

        <div
          className="rounded-2xl px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10 text-white"
          style={{

            background:

              "linear-gradient(90deg, rgba(32, 51, 91, 0.95), rgba(108, 117, 145, 0.95)), url('/cta-bg.jpg')",

            backgroundSize: "cover",

          }}

        >

          {/* Text */}

          <div>

            <p className="text-sm mb-2 opacity-90">Need help?</p>

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">

              Easy solutions for all difficult IT <br />

              problems, keep business safe.

            </h3>

          </div>



          {/* Button */}

          <button className="bg-white text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition">

            Contact Us

          </button>

        </div>

      </div>

    </section>

  );

}

