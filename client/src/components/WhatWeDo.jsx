"use client";



const services = [

  {

    title: "Risk Management",

    desc: "Helping your business stay secure, compliant, and prepared for potential risks.",

    image: "/whatWeDo/risk.png",

  },

  {

    title: "Business Planning",

    desc: "Smart planning strategies to guide business growth and success.",

    image: "/whatWeDo/planning.png",

  },

  {

    title: "Infrastructure Plan",

    desc: "Smart infrastructure planning for scalable and reliable IT systems.",

    image: "/whatWeDo/infrastructure.png",

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
              className="group bg-white rounded-xl p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-3 active:scale-95 active:shadow-lg"
            >

              {/* Icon placeholder */}

              <div className="mb-6 flex justify-center">

                <img

                  src={item.image}

                  alt={item.title}

                  className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-active:scale-95"

                />

              </div>



              <h3 className="text-xl font-semibold text-neutral-900 mb-4">

                {item.title}

              </h3>



              <p className="text-gray-600 text-sm leading-relaxed mb-6">

                {item.desc}

              </p>



              {/* Arrow Button */}

              <div className="w-10 h-10 mx-auto rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition group-active:scale-95">

                →

              </div>

            </div>

          ))}

        </div>



      </div>

    </section>

  );

}

