// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   return (
//     <>
//       {/* Top Info Bar */}
//       <div className="bg-[#681ACF] text-white text-sm">
//         <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
//           <div className="flex gap-4">
//             <div className="flex items-center gap-2">
//               <Image src="/header/location.png" alt="Location" width={16} height={16} />
//               <span>Kolkata, West Bengal</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <Image src="/header/mail.png" alt="Email" width={16} height={16} />
//               <a href="https://mail.google.com/mail/?view=cm&to=hiicodecraft@gmail.com" target="_blank">
//                 <span>hiicodecraft@gmail.com</span>
//               </a>  
//             </div>

//           </div>
//           <div className="flex gap-4 items-center">
//             <div className="flex items-center gap-2">
//               <Image src="/header/clock.png" alt="Office Hours" width={16} height={16} />
//               <span>Office Hours: 8:00 AM – 7:45 PM</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <Image src="/header/internet.png" alt="Language" width={16} height={16} />
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="bg-white shadow sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-blue-600">
//             <Image
//               src="/codeCraft.png"
//               alt="codeCraft Logo"
//               width={48}
//               height={48}
//             />
//           </Link>

//           {/* Navigation */}
//           <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
//             <Link href="/">Home</Link>
//             <Link href="/company">Company</Link>
//             <Link href="/services">Services</Link>
//             {/* <Link href="/portfolio">Case Studies</Link> */}
//             <Link href="/blog">Blog</Link>
//             <Link href="/contact">Contact</Link>
//           </nav>

//           {/* CTA */}
//           <div className="hidden md:flex items-center gap-3">
//             <div className="text-sm text-gray-600">
//               <p>Have any Questions?</p>
//               <p className="font-semibold text-blue-600">
//                 <a href="https://mail.google.com/mail/?view=cm&to=hiicodecraft@gmail.com" target="_blank">

//                 hiicodecraft@gmail.com
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* ================= TOP INFO BAR (DESKTOP ONLY) ================= */}
      <div className="hidden md:block bg-[#681ACF] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <Image src="/header/location.png" alt="Location" width={16} height={16} />
              <span>Kolkata, West Bengal</span>
            </div>

            <div className="flex items-center gap-2">
              <Image src="/header/mail.png" alt="Email" width={16} height={16} />
              <a
                href="https://mail.google.com/mail/?view=cm&to=hiicodecraft@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                hiicodecraft@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/header/clock.png" alt="Office Hours" width={16} height={16} />
              <span>8:00 AM – 7:45 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <Image src="/CodeCraft.png" alt="CodeCraft Logo" width={48} height={48} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/company">Company</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block text-sm">
            <p className="text-gray-600">Have any Questions?</p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=hiicodecraft@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600"
            >
              hiicodecraft@gmail.com
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 transition ${open ? "visible" : "invisible"}`}
      >
        {/* Overlay */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex justify-between items-center p-5 border-b">
            <Image src="/CodeCraft.png" alt="Logo" width={36} height={36} priority />
            <button onClick={closeMenu} className="text-2xl">✕</button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col divide-y text-gray-800">
            {[
              ["Home", "/"],
              ["Company", "/company"],
              ["Services", "/services"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={closeMenu}
                className="px-6 py-4 flex justify-between items-center hover:bg-gray-100"
              >
                {label}
                <span>›</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
