"use client";



const services = [

  {

    title: "Web Development",

    desc: "We build fast, responsive, and SEO-optimized websites that enhance user experience and help businesses grow their online presence.",

    image: "/services/programming.png",

  },

  {

    title: "Application Development",

    desc: "Our team develops secure and scalable mobile and web applications tailored to your business goals and customer needs.",

    image: "/services/app-development.png",

  },

  {

    title: "Digital Marketing",

    desc: "We deliver result-driven digital marketing strategies to increase brand visibility, generate quality leads, and boost online conversions.",

    image: "/services/digital-asset.png",

  },

  {

    title: "UI/UX Design",

    desc: "We create intuitive and engaging user interfaces and experiences that enhance usability and drive customer satisfaction.",

    image: "/services/ui-ux.png",

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



          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">

            We deliver scalable, secure, and custom IT services designed to help businesses

            innovate, grow faster, and stay competitive in the digital world.

          </p>

        </div>



        {/* RIGHT CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="group p-10 rounded-xl text-center cursor-pointer bg-white transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-xl"
            >



              {/* Image */}

              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110">

                <img

                  src={service.image}

                  alt={service.title}

                  className="w-9 h-9 object-contain"

                />

              </div>



              {/* Title */}

              <h3 className="text-xl font-semibold mb-3 text-black transition-colors duration-300 group-hover:text-blue-600">

                {service.title}

              </h3>



              {/* Description */}

              <p className="text-sm leading-relaxed text-gray-600 transition-opacity duration-300 group-hover:opacity-90">

                {service.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

