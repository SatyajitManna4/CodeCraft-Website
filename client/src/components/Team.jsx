const teamMembers = [
  {
    name: "Satyajit Manna",
    role: "Software Engineer",
    image: "/team/satyajit_images.jpeg",
  },
  {
    name: "Dibyendu Das",
    role: "Project Manager",
    image: "/team/dibyendu_das.jpg",
  },
  {
    name: "Ankan Kumar Nanda",
    role: "CEO, Founder",
    image: "/team/Ankan_kumar_nanda.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Expert Team
          </p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Meet Our Leadership
          </h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative text-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-110 group-active:scale-95"
                />

                {/* Hover Icon */}
                {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-xl">
                    +
                  </div>
                </div> */}
              </div>

              {/* Name & Role */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 text-gray-500 text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
