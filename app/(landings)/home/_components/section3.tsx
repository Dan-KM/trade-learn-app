"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, Clock, Headphones, Users } from "lucide-react";

export function Layout246() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-slate-100 via-gray-200 to-slate-100 overflow-hidden">
      {/* More prominent background elements */}
      <div
        className="absolute top-10 -left-32 w-80 h-80 bg-gradient-to-r from-blue-500/15 via-blue-400/8 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>

      <div
        className="absolute bottom-10 -right-32 w-96 h-96 bg-gradient-to-l from-red-500/12 via-red-400/6 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "2s" }}
      ></div>

      {/* Additional floating elements */}
      <div
        className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400/20 rounded-full blur-sm animate-bounce opacity-60"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-3/4 right-1/3 w-4 h-4 bg-red-400/25 rounded-full blur-sm animate-bounce opacity-50"
        style={{ animationDuration: "8s", animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-8 h-8 bg-gray-400/15 rounded-full blur-md animate-bounce opacity-40"
        style={{ animationDuration: "7s", animationDelay: "4s" }}
      ></div>

      <div className="container relative z-10">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Unlock Your Trading Potential with Our{" "}
              <span className="bg-gradient-to-r from-blue-600 via-gray-700 to-red-600 bg-clip-text text-transparent">
                Expert-Led Courses
              </span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn from industry professionals who bring real-world experience
              to the table. Our courses are designed to fit your schedule,
              allowing you to learn at your own pace. With a focus on practical
              skills, you'll gain the confidence needed to navigate the
              financial markets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div className="group relative">
            {/* Left feature - Blue theme */}
            <div className="absolute -inset-4 bg-gradient-to-br from-white/80 via-blue-50/40 to-white/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-blue-500/10"></div>

            <div className="relative p-6">
              <div className="mb-5 md:mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-xl shadow-blue-500/25 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-blue-500/30"> */}
                <Clock className="w-10 h-10 text-blue-600 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-gray-500/30" />
                {/* </div> */}
              </div>
              <h3 className="text-xl md:text-2xl mb-3 font-bold md:mb-4 text-gray-800 leading-tight">
                Enjoy Learning Flexibility with Our Tailored Course Options
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Choose from self-paced or live sessions that suit your
                lifestyle.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  className="text-blue-600 hover:text-blue-700 transition-colors duration-300 p-0 h-auto font-medium"
                  variant="link"
                  size="sm"
                >
                  Learn More
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="group relative">
            {/* Center feature - Neutral theme */}
            <div className="absolute -inset-4 bg-gradient-to-br from-white/80 via-gray-50/40 to-white/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-gray-500/10"></div>

            <div className="relative p-6">
              <div className="mb-5 md:mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl flex items-center justify-center shadow-xl shadow-gray-500/25 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-gray-500/30"> */}
                <Headphones className="w-10 h-10 text-gray-600 to-gray-800 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-gray-500/30" />
                {/* </div> */}
              </div>
              <h3 className="text-xl md:text-2xl mb-3 font-bold md:mb-4 text-gray-800 leading-tight">
                Receive Comprehensive Support Throughout Your Learning Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our dedicated support team is here to assist you every step of
                the way.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  className="text-gray-600 hover:text-gray-700 transition-colors duration-300 p-0 h-auto font-medium"
                  variant="link"
                  size="sm"
                >
                  Sign Up
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="group relative">
            {/* Right feature - Red theme */}
            <div className="absolute -inset-4 bg-gradient-to-br from-white/80 via-red-50/40 to-white/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-red-500/10"></div>

            <div className="relative p-6">
              <div className="mb-5 md:mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-xl shadow-red-500/25 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-red-500/30"> */}
                {/* <Users className="w-6 h-6 text-white" /> */}
                <Users className="w-10 h-10 text-red-600 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-gray-500/30" />
                {/* </div> */}
              </div>
              <h3 className="text-xl md:text-2xl mb-3 font-bold md:mb-4 text-gray-800 leading-tight">
                Join a Community of Like-Minded Traders and Learners
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Connect, share insights, and grow together in our vibrant
                trading community.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button
                  className="text-red-600 hover:text-red-700 transition-colors duration-300 p-0 h-auto font-medium"
                  variant="link"
                  size="sm"
                >
                  Join Us
                  <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
