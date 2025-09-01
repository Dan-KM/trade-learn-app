"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/", color: "blue" },
    { label: "About", href: "/about", color: "blue" },
    { label: "Courses", href: "/courses", color: "red" },
    { label: "Contact", href: "/contact", color: "red" },
  ];

  return (
    <div className="fixed top-4 left-4 right-4 z-50">
      <nav className="relative mx-auto max-w-7xl bg-white/20 backdrop-blur-2xl rounded-full shadow-2xl border border-white/30 px-6 py-4">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 w-1/4 h-full bg-gradient-to-r from-blue-500/8 via-blue-400/5 to-transparent rounded-full pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/4 h-full bg-gradient-to-l from-red-500/8 via-red-400/5 to-transparent rounded-full pointer-events-none"></div>

        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 group cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-lg">
                <span className="text-white font-bold text-lg">TL</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                TradeLearn
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "relative text-gray-700 font-medium transition-all duration-300 group",
                  link.color === "red"
                    ? "hover:text-red-600"
                    : "hover:text-blue-600"
                )}
              >
                <span>{link.label}</span>
                <div
                  className={clsx(
                    "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                    link.color === "red"
                      ? "bg-gradient-to-r from-red-600 to-red-500"
                      : "bg-gradient-to-r from-blue-600 to-blue-500"
                  )}
                ></div>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/get-started"
              className="group relative px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-red-600 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-red-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <span className="relative">Get Started</span>
            </Link>
          </div>
        </div>

        {/* Floating orbs */}
        <div
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-blue-400/10 rounded-full blur-xl animate-pulse opacity-30"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-red-400/10 rounded-full blur-xl animate-pulse opacity-30"
          style={{ animationDuration: "5s", animationDelay: "1s" }}
        ></div>
      </nav>

      {/* Mobile dropdown (absolute, keeps navbar intact) */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 px-4">
          <div className="lg:hidden space-y-3 bg-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/30">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={clsx(
                  "block text-gray-700 font-medium transition-colors duration-200",
                  link.color === "red"
                    ? "hover:text-red-600"
                    : "hover:text-blue-600"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
