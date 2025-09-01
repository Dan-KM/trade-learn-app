import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, UserPlus, BookOpen, Play } from "lucide-react";

export function Layout237() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Enhanced background elements */}
      <div
        className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-blue-500/12 via-blue-400/6 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "14s" }}
      ></div>

      <div
        className="absolute bottom-20 -right-40 w-80 h-80 bg-gradient-to-l from-red-500/10 via-red-400/5 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "16s", animationDelay: "4s" }}
      ></div>

      {/* Floating connection lines */}
      <div
        className="absolute top-1/2 left-1/4 w-32 h-0.5 bg-gradient-to-r from-blue-300/30 via-gray-300/20 to-transparent blur-sm animate-pulse hidden md:block"
        style={{ animationDuration: "8s", animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-32 h-0.5 bg-gradient-to-l from-red-300/30 via-gray-300/20 to-transparent blur-sm animate-pulse hidden md:block"
        style={{ animationDuration: "10s", animationDelay: "3s" }}
      ></div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <div className="mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 via-gray-100 to-red-100 text-gray-700 font-semibold rounded-full text-sm border border-gray-200/50 shadow-sm">
                Start
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-5 font-bold md:mb-6 text-gray-800 leading-tight">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-gray-700 to-red-600 bg-clip-text text-transparent">
                Trading Success
              </span>{" "}
              Begins Here
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Getting started with TradeLearn is simple and straightforward.
              Follow our easy steps to embark on your trading education today.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {/* Step 1 - Blue theme (left) */}
            <div className="flex w-full flex-col items-center text-center group relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-blue-50/60 via-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-blue-500/10"></div>

              <div className="relative">
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  1
                </div>

                <div className="mb-5 md:mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/25 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-blue-500/30">
                    <UserPlus className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl mb-5 font-bold md:mb-6 text-gray-800">
                  Create Your Account
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Visit our website and sign up for free to get started on your
                  trading journey.
                </p>
              </div>
            </div>

            {/* Step 2 - Gray theme (center) */}
            <div className="flex w-full flex-col items-center text-center group relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-gray-50/60 via-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-gray-500/10"></div>

              <div className="relative">
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  2
                </div>

                <div className="mb-5 md:mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl shadow-gray-500/25 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-gray-500/30">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl mb-5 font-bold md:mb-6 text-gray-800">
                  Choose Your Course
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Select from a variety of expert-led courses tailored to your
                  skill level.
                </p>
              </div>
            </div>

            {/* Step 3 - Red theme (right) */}
            <div className="flex w-full flex-col items-center text-center group relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-red-50/60 via-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-red-500/10"></div>

              <div className="relative">
                {/* Step number */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  3
                </div>

                <div className="mb-5 md:mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-xl shadow-red-500/25 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-red-500/30">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl mb-5 font-bold md:mb-6 text-gray-800">
                  Start Learning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Engage with interactive content and real-world trading
                  scenarios.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 md:mt-14 lg:mt-16">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </Button>
            <Button
              className="text-gray-600 hover:text-gray-800 transition-colors duration-300 font-medium group"
              variant="link"
              size="lg"
            >
              Learn More
              <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
