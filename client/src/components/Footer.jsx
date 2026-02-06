export default function Footer() {
  return (
    <footer className="bg-[#020B3A] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">CodeCraft</h2>
          <p className="text-sm mb-6">
            Custom IT solutions helping businesses grow securely and efficiently.
          </p>

          <div className="flex bg-white rounded-full overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-blue-600 px-5 text-white">
              ➤
            </button>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Meet Our Team</li>
            <li>News & Media</li>
            <li>Case Studies</li>
            <li>Contact Us</li>
            {/* <li>Investors</li> */}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Solutions
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Application Development</li>
            <li>Digital Marketing</li>
            <li>UI/UX Design</li>
            <li>Software Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Info
          </h3>
          <p className="text-sm mb-3">
            <strong>Address:</strong><br />
            Kolkata,West Bengal,700010, India
          </p>
          <p className="text-sm mb-6">
            <strong>Email:</strong><br />
            hiicodecraft@gmail.com
          </p>

          <h4 className="text-white font-semibold mb-3">
            Connect with us
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600
               hover:bg-blue-600 hover:text-white transition"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700
               hover:bg-blue-700 hover:text-white transition"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-sky-500
               hover:bg-sky-500 hover:text-white transition"
              aria-label="Twitter"
            >
              x
            </a>
          </div>


        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>Copyright © 2026 CodeCraft. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Terms</span>
            <span>Privacy</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
