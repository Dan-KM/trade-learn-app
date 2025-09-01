import React from "react";

export function Layout27() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle left blue element */}
      <div
        className="absolute top-1/2 -left-32 w-64 h-64 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-3xl animate-pulse opacity-60"
        style={{ animationDuration: "8s" }}
      ></div>

      {/* Subtle right red element */}
      <div
        className="absolute top-1/4 -right-32 w-48 h-48 bg-gradient-to-l from-red-500/8 via-red-400/4 to-transparent rounded-full blur-2xl animate-pulse opacity-50"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6 text-gray-800 leading-tight">
              Unlock Your Trading Potential with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-gray-700 to-red-600 bg-clip-text text-transparent">
                Expert-Led Courses
              </span>{" "}
              and Support
            </h2>
            <p className="text-lg mb-6 md:mb-8 text-gray-600 leading-relaxed">
              At TradeLearn, we provide expert-led online trading courses
              designed for aspiring traders. Enjoy the flexibility of learning
              at your own pace, backed by comprehensive support every step of
              the way.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div className="group">
                <h3 className="text-2xl md:text-3xl mb-2 font-bold text-gray-800">
                  Flexible
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Expert guidance tailored to your trading journey.
                </p>
              </div>
              <div className="group">
                <h3 className="text-2xl md:text-3xl mb-2 font-bold text-gray-800">
                  Supportive
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Join a community that fosters your trading success.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-red-100/30 rounded-lg blur-xl transform scale-105"></div>

            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="relative w-full rounded-lg object-cover shadow-lg transition-transform duration-700 hover:scale-105"
              alt="Trading education platform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
