"use client";

const steps = [
    {
        step: "01",
        title: "Choose a Service",
        desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",
        icon: "👥",
    },
    {
        step: "02",
        title: "Request a Meeting",
        desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",
        icon: "📹",
    },
    {
        step: "03",
        title: "Receive Custom Plan",
        desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",
        icon: "📊",
    },
    {
        step: "04",
        title: "Let’s Make it Happen",
        desc: "Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.",
        icon: "⚙️",
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
                            className="group relative bg-white border border-gray-200 p-10 text-center rounded-lg
             cursor-pointer transition-all duration-300 ease-out
             hover:-translate-y-3 hover:shadow-xl hover:border-blue-500"
                        >
                            {/* Background Step Number */}
                            <span
                                className="absolute top-6 right-6 text-6xl font-extrabold text-gray-100
               transition-all duration-300
               group-hover:text-blue-100"
                            >
                                {item.step}
                            </span>

                            {/* Icon */}
                            <div
                                className="text-blue-600 text-4xl mb-6
               transition-transform duration-300
               group-hover:scale-110"
                            >
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3
                                className="text-xl font-semibold text-neutral-900 mb-4
               transition-colors duration-300
               group-hover:text-blue-600"
                            >
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>

                    ))}
                </div>

            </div>
        </section>
    );
}
