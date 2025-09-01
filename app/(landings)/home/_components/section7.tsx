"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

export function Layout89() {
  return (
    // <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 overflow-hidden">
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-slate-200 via-slate-300 to-red-50 overflow-hidden">
      {/* Blue left-side floating orbs */}
      <div
        className="absolute -left-40 top-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/15 via-blue-400/8 to-transparent rounded-full blur-3xl animate-pulse opacity-50"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute -left-20 top-2/3 w-48 h-48 bg-blue-400/12 rounded-full blur-2xl"
        style={{
          animation: "float 8s ease-in-out infinite",
          animationDelay: "2s",
        }}
      ></div>

      {/* Red right-side floating orbs */}
      <div
        className="absolute -right-40 top-1/4 w-80 h-80 bg-gradient-to-l from-red-500/15 via-red-400/8 to-transparent rounded-full blur-3xl animate-pulse opacity-50"
        style={{
          animationDuration: "12s",
          animationDelay: "3s",
        }}
      ></div>
      <div
        className="absolute -right-20 bottom-1/3 w-48 h-48 bg-red-400/12 rounded-full blur-2xl"
        style={{
          animation: "float 9s ease-in-out infinite",
          animationDelay: "5s",
        }}
      ></div>

      {/* Subtle gradient overlays for asymmetrical balance */}
      <div className="absolute left-0 top-0 w-2/5 h-full bg-gradient-to-r from-blue-500/3 via-blue-400/2 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-2/5 h-full bg-gradient-to-l from-red-500/3 via-red-400/2 to-transparent pointer-events-none"></div>

      <div className="relative container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div className="transform transition-all duration-700 hover:translate-x-1">
            <p className="mb-3 font-semibold text-blue-600 text-sm uppercase tracking-wide md:mb-4">
              Empower
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-gray-800 to-red-600 bg-clip-text text-transparent">
              Your Journey to Trading Success Starts Here
            </h3>
          </div>
          <div
            className="transform transition-all duration-700 hover:translate-x-1"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              At TradeLearn, our mission is to empower aspiring traders with the
              skills and knowledge they need to thrive in the financial markets.
              We envision a world where anyone can confidently navigate trading,
              regardless of their background. Our commitment is to provide
              expert-led courses that inspire and equip you for success.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {/* Learn Button - Blue themed */}
              <button className="group relative px-6 py-3 bg-white border-2 border-blue-200 text-blue-700 font-semibold rounded-lg shadow-md hover:shadow-lg transform transition-all duration-500 hover:scale-105 hover:border-blue-300 hover:text-blue-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <span className="relative">Learn More</span>
              </button>

              {/* Join Button - Red themed link style */}
              <button className="group flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-all duration-300 hover:gap-3">
                <span>Join Community</span>
                <ChevronRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Image with trading-themed styling */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-red-600/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 transform transition-all duration-700 hover:scale-[1.02]">
            <div className="flex items-center justify-center h-64 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-xl border-2 border-dashed border-gray-300">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                      TL
                    </span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Trading Dashboard Preview
                </h4>
                <p className="text-sm text-gray-500">
                  Interactive learning platform interface
                </p>
              </div>
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
            transform: translateY(-20px) rotate(1deg);
          }
          66% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }
      `}</style>
    </section>
  );
}
