const blogs = [
  {
    category: "Technology",
    date: "12 Aug, 2020",
    author: "Admin",
    title: "Additions in conveying or collected objection",
    image: "/blog/blog1.jpg",
  },
  {
    category: "Firewall",
    date: "05 Oct, 2020",
    author: "Admin",
    title: "Discourse ye continued pronounce we abilities",
    image: "/blog/blog2.jpg",
  },
  {
    category: "Security",
    date: "27 Dec, 2020",
    author: "Admin",
    title: "Children greatest online extended delicate of",
    image: "/blog/blog3.jpg",
  },
];

export default function Blog() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
            Popular News
          </p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Latest From Our Blog
          </h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-600 uppercase">
                  {blog.category}
                </span>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>📅 {blog.date}</span>
                  <span>👤 By {blog.author}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
