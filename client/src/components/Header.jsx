import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-[#681ACF] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex gap-4">
            <span>📍 Kolkata, West Bengal</span>
            <span>✉ hiicodecraft@gmail.com</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>⏰ Office Hours: 8:00 AM – 7:45 PM</span>
            <span>🌐</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            <img
              src="/codeCraft.png"
              alt="codeCraft Logo"
              className="h-15 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/company">Company</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Case Studies</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="text-sm text-gray-600">
              <p>Have any Questions?</p>
              <p className="font-semibold text-blue-600">
                hiicodecraft@gmail.com
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
