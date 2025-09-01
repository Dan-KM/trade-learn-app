"use client";

import React from "react";

export function Cta7() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Blue left-side floating orbs */}
      <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse opacity-60"></div>
      <div
        className="absolute -left-16 top-1/4 w-40 h-40 bg-blue-400/15 rounded-full blur-2xl animate-bounce opacity-50"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      ></div>

      {/* Red right-side floating orbs */}
      <div
        className="absolute -right-32 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-gradient-to-l from-red-500/20 via-red-400/10 to-transparent rounded-full blur-3xl animate-pulse opacity-60"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute -right-16 bottom-1/4 w-40 h-40 bg-red-400/15 rounded-full blur-2xl animate-bounce opacity-50"
        style={{ animationDuration: "9s", animationDelay: "4s" }}
      ></div>

      {/* Subtle gradient overlays */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-blue-500/5 via-blue-400/3 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-500/5 via-red-400/3 to-transparent pointer-events-none"></div>

      <div className="relative container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0 transform transition-all duration-700 hover:translate-x-1">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent leading-tight">
              Unlock Your Trading Potential Today
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Join our free trial and start trading confidently with
              professional-grade tools and education!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start justify-start gap-4">
          {/* Primary CTA - Blue themed */}
          {/* <button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-blue-600 overflow-hidden"
            title="Sign Up"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <span className="relative">Sign Up Free</span>
          </button> */}

          {/* Secondary CTA - Red themed */}
          {/* <button
            className="group relative px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-lg shadow-md hover:shadow-lg transform transition-all duration-500 hover:scale-105 hover:border-red-300 hover:text-red-700 overflow-hidden"
            title="Learn More"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-50/50 to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400/20 to-red-300/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            <span className="relative">Learn More</span>
          </button> */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-up animation-delay-1000">
            <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-300/50">
              Learn More
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-red-400 hover:bg-red-500 hover:border-red-500 text-red-300 hover:text-white font-semibold rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 focus:outline-none focus:ring-4 focus:ring-red-300/50">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50"></div>
    </section>
  );
}
