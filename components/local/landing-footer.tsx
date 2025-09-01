'use client';

export default function TradingFooter() {
  return (
    <footer className="relative px-[5%] py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden border-t border-gray-100">
      {/* Blue left-side floating orbs */}
      <div
        className="absolute -left-32 top-1/3 w-64 h-64 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse opacity-40"
        style={{ animationDuration: "12s" }}
      ></div>
      <div
        className="absolute -left-16 bottom-1/4 w-40 h-40 bg-blue-400/8 rounded-full blur-2xl"
        style={{
          animation: "float 10s ease-in-out infinite",
          animationDelay: "3s",
        }}
      ></div>

      {/* Red right-side floating orbs */}
      <div
        className="absolute -right-32 top-1/4 w-64 h-64 bg-gradient-to-l from-red-500/10 via-red-400/5 to-transparent rounded-full blur-3xl animate-pulse opacity-40"
        style={{
          animationDuration: "14s",
          animationDelay: "2s",
        }}
      ></div>
      <div
        className="absolute -right-16 bottom-1/3 w-40 h-40 bg-red-400/8 rounded-full blur-2xl"
        style={{
          animation: "float 11s ease-in-out infinite",
          animationDelay: "6s",
        }}
      ></div>

      {/* Subtle gradient overlays */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-500/3 via-blue-400/2 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-500/3 via-red-400/2 to-transparent pointer-events-none"></div>

      <div className="relative container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-12">
          {/* Quick Links Column */}
          <div className="transform transition-all duration-700 hover:translate-y-1">
            <h3 className="text-xl font-bold text-gray-800 mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 transform transition-all duration-500"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Blog Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div
            className="transform transition-all duration-700 hover:translate-y-1"
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 relative">
              Resources
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-gray-600 to-gray-500 transform transition-all duration-500"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Webinars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  E-books
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us Column */}
          <div
            className="transform transition-all duration-700 hover:translate-y-1"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 relative">
              Connect With Us
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-red-600 to-red-500 transform transition-all duration-500"></div>
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-6 h-6 mr-4 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-6 h-6 mr-4 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-6 h-6 mr-4 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-6 h-6 mr-4 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-red-600 transition-colors duration-300 flex items-center group"
                >
                  <div className="w-6 h-6 mr-4 flex items-center justify-center">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
                TradeLearn
              </span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 TradeLearn. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(1deg);
          }
          66% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }
      `}</style>
    </footer>
  );
}
