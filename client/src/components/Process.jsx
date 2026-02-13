"use client";



const steps = [

    {

        step: "01",

        title: "Choose a Service",

        desc: "Get started by choosing the service that suits your business.",

        image: "/process/service-provider.png",

    },

    {

        step: "02",

        title: "Request a Meeting",

        desc: "Schedule a meeting with our team to discuss your requirements.",

        image: "/process/meeting.png",

    },

    {

        step: "03",

        title: "Receive Custom Plan",

        desc: "We'll create a custom plan tailored to your specific needs.",

        image: "/process/plan.png",

    },

    {

        step: "04",

        title: "Let’s Make it Happen",

        desc: "Executing the strategy with precision, quality, and accountability.",

        image: "/process/happend.png",

    },

];



export default function Process() {

    return (

        <section className="py-28 bg-white">

            <div className="max-w-7xl mx-auto px-6">



                {/* SECTION HEADER */}

                <div className="text-center mb-20">

                    <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">

                        Process

                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">

                        How We Works

                    </h2>

                    <div className="w-12 h-1 bg-blue-600 mx-auto mt-4" />

                </div>



                {/* PROCESS GRID */}

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {steps.map((item, index) => (

                        <div
                            key={index}
                            className="group relative bg-white border border-gray-200 p-10 text-center rounded-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl hover:border-blue-500"
                        >

                            {/* Background Step Number */}

                            <span
                                className="absolute top-6 right-6 text-7xl font-extrabold text-gray-200 z-0 transition-all duration-300 group-hover:text-blue-100"
                            >

                                {item.step}

                            </span>





                            {/* Icon */}

                            <div className="relative z-10 mb-6 transition-transform duration-300 group-hover:scale-110">



                                <img

                                    src={item.image}

                                    alt={item.title}

                                    className="w-16 h-16 object-contain"

                                />

                            </div>



                            {/* Title */}

                            <h3 className="relative z-10 text-xl font-semibold text-neutral-900 mb-4 transition-colors duration-300 group-hover:text-blue-600">



                                {item.title}

                            </h3>



                            {/* Description */}

                            <p className="relative z-10 text-gray-600 text-sm leading-relaxed">



                                {item.desc}

                            </p>

                        </div>



                    ))}

                </div>



            </div>

        </section>

    );

}

