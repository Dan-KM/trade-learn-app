// "use client";

// import React, { useState, useEffect } from "react";
// import { Star } from "lucide-react";

// export function Testimonial4() {
//   const testimonials = [
//     {
//       id: 1,
//       quote:
//         "TradeLearn transformed my trading skills! The courses are comprehensive and engaging, making learning enjoyable and effective.",
//       name: "Emily Johnson",
//       role: "Trader, Freelance",
//       avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
//       company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
//     },
//     {
//       id: 2,
//       quote:
//         "The expert-led courses gave me the confidence to start trading professionally. The support team is incredible and always there when you need them.",
//       name: "Michael Chen",
//       role: "Day Trader",
//       avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
//       company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
//     },
//     {
//       id: 3,
//       quote:
//         "I went from complete beginner to profitable trader in just 6 months. The structured approach and real-world scenarios made all the difference.",
//       name: "Sarah Davis",
//       role: "Investment Analyst",
//       avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
//       company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
//     },
//     {
//       id: 4,
//       quote:
//         "The flexibility to learn at my own pace while having access to expert guidance was exactly what I needed. Highly recommend to anyone serious about trading.",
//       name: "David Rodriguez",
//       role: "Portfolio Manager",
//       avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
//       company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false);

//       setTimeout(() => {
//         setCurrentIndex((prevIndex) =>
//           prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//         );
//         setIsVisible(true);
//       }, 500);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   const currentTestimonial = testimonials[currentIndex];

//   return (
//     <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-slate-200 via-gray-300 to-slate-200 overflow-hidden">
//       {/* Background elements */}
//       <div
//         className="absolute top-10 -left-40 w-72 h-72 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"
//         style={{ animationDuration: "12s" }}
//       ></div>

//       <div
//         className="absolute bottom-10 -right-40 w-80 h-80 bg-gradient-to-l from-red-500/18 via-red-400/9 to-transparent rounded-full blur-3xl animate-pulse"
//         style={{ animationDuration: "15s", animationDelay: "3s" }}
//       ></div>

//       {/* Floating quote marks */}
//       <div
//         className="absolute top-1/4 left-1/4 text-6xl text-blue-300/20 font-serif transform -rotate-12 animate-pulse"
//         style={{ animationDuration: "8s" }}
//       >
//         "
//       </div>
//       <div
//         className="absolute bottom-1/4 right-1/4 text-6xl text-red-300/20 font-serif transform rotate-12 animate-pulse"
//         style={{ animationDuration: "10s", animationDelay: "2s" }}
//       >
//         "
//       </div>

//       <div className="container relative z-10">
//         <div className="mx-auto w-full max-w-4xl text-center">
//           {/* Enhanced star rating */}
//           <div className="mb-6 flex items-center justify-center gap-1 md:mb-8">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="transform transition-all duration-500 hover:scale-125"
//                 style={{
//                   animationDelay: `${i * 100}ms`,
//                   animation: "gentle-bounce 2s infinite",
//                 }}
//               >
//                 <Star className="w-7 h-7 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
//               </div>
//             ))}
//           </div>

//           {/* Animated testimonial content with slide transition */}
//           <div
//             className={`transition-all duration-500 transform ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-8"
//             }`}
//           >
//             <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mb-8 md:mb-10">
//               "{currentTestimonial.quote}"
//             </blockquote>

//             <div className="flex w-full flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
//               {/* Avatar with glow effect */}
//               <div className="relative group">
//                 <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-gray-400/20 to-red-400/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
//                 <img
//                   src={currentTestimonial.avatar}
//                   alt={`${currentTestimonial.name} avatar`}
//                   className="relative size-16 md:size-18 min-h-16 min-w-16 md:min-h-18 md:min-w-18 rounded-full object-cover border-3 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               {/* User info */}
//               <div className="mb-4 md:mb-0">
//                 <p className="text-lg font-bold text-gray-800">
//                   {currentTestimonial.name}
//                 </p>
//                 <p className="text-gray-600">{currentTestimonial.role}</p>
//               </div>

//               {/* Divider */}
//               <div className="hidden w-px h-12 bg-gray-400/50 md:block" />

//               {/* Company logo */}
//               <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
//                 <img
//                   src={currentTestimonial.company}
//                   alt="Company logo"
//                   className="max-h-10 md:max-h-12"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Progress indicators */}
//           <div className="mt-12 flex items-center justify-center gap-3">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setIsVisible(false);
//                   setTimeout(() => {
//                     setCurrentIndex(index);
//                     setIsVisible(true);
//                   }, 500);
//                 }}
//                 className={`h-2 rounded-full transition-all duration-500 ${
//                   index === currentIndex
//                     ? "w-8 bg-gradient-to-r from-blue-500 to-red-500"
//                     : "w-2 bg-gray-400 hover:bg-gray-500"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gentle-bounce {
//           0%,
//           100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-2px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

export function Testimonial4() {
  const testimonials = [
    {
      id: 1,
      quote:
        "TradeLearn transformed my trading skills! The courses are comprehensive and engaging, making learning enjoyable and effective.",
      name: "Emily Johnson",
      role: "Trader, Freelance",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
    },
    {
      id: 2,
      quote:
        "The expert-led courses gave me the confidence to start trading professionally. The support team is incredible and always there when you need them.",
      name: "Michael Chen",
      role: "Day Trader",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
    },
    {
      id: 3,
      quote:
        "I went from complete beginner to profitable trader in just 6 months. The structured approach and real-world scenarios made all the difference.",
      name: "Sarah Davis",
      role: "Investment Analyst",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
    },
    {
      id: 4,
      quote:
        "The flexibility to learn at my own pace while having access to expert guidance was exactly what I needed. Highly recommend to anyone serious about trading.",
      name: "David Rodriguez",
      role: "Portfolio Manager",
      avatar: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      company: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 600);
    }, 8000); // Increased from 5000ms to 8000ms

    return () => clearInterval(interval);
  }, [testimonials.length, currentIndex]); // Added currentIndex to dependencies to reset timer

  const handleNavigation = (newIndex: number) => {
    if (newIndex !== currentIndex) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setIsVisible(true);
      }, 600);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swiped left - go to next
        const nextIndex =
          currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
        handleNavigation(nextIndex);
      } else {
        // Swiped right - go to previous
        const prevIndex =
          currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        handleNavigation(prevIndex);
      }
    }

    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseUp = (e : React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const endX = e.clientX;
    const deltaX = startX - endX;
    const minSwipeDistance = 100;

    if (Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Dragged left - go to next
        const nextIndex =
          currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
        handleNavigation(nextIndex);
      } else {
        // Dragged right - go to previous
        const prevIndex =
          currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
        handleNavigation(prevIndex);
      }
    }

    setIsDragging(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-slate-200 via-gray-300 to-slate-200 overflow-hidden">
      {/* Background elements */}
      <div
        className="absolute top-10 -left-40 w-72 h-72 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "12s" }}
      ></div>

      <div
        className="absolute bottom-10 -right-40 w-80 h-80 bg-gradient-to-l from-red-500/18 via-red-400/9 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "15s", animationDelay: "3s" }}
      ></div>

      {/* Floating quote marks */}
      <div
        className="absolute top-1/4 left-1/4 text-6xl text-blue-300/20 font-serif transform -rotate-12 animate-pulse"
        style={{ animationDuration: "8s" }}
      >
        "
      </div>
      <div
        className="absolute bottom-1/4 right-1/4 text-6xl text-red-300/20 font-serif transform rotate-12 animate-pulse"
        style={{ animationDuration: "10s", animationDelay: "2s" }}
      >
        "
      </div>

      <div className="container relative z-10">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Enhanced star rating */}
          <div className="mb-6 flex items-center justify-center gap-1 md:mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="transform transition-all duration-500 hover:scale-125"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animation: "gentle-bounce 2s infinite",
                }}
              >
                <Star className="w-7 h-7 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
              </div>
            ))}
          </div>

          {/* Swipeable testimonial content */}
          <div
            className={`transition-all duration-600 transform cursor-grab active:cursor-grabbing select-none ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            } ${isDragging ? "scale-95" : "scale-100"}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => setIsDragging(false)}
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed mb-8 md:mb-10">
              "{currentTestimonial.quote}"
            </blockquote>

            <div className="flex w-full flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
              {/* Avatar with glow effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-gray-400/20 to-red-400/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <img
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} avatar`}
                  className="relative size-16 md:size-18 min-h-16 min-w-16 md:min-h-18 md:min-w-18 rounded-full object-cover border-3 border-white shadow-xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* User info */}
              <div className="mb-4 md:mb-0">
                <p className="text-lg font-bold text-gray-800">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-600">{currentTestimonial.role}</p>
              </div>

              {/* Divider */}
              <div className="hidden w-px h-12 bg-gray-400/50 md:block" />

              {/* Company logo */}
              <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
                <img
                  src={currentTestimonial.company}
                  alt="Company logo"
                  className="max-h-10 md:max-h-12"
                />
              </div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="mt-12 flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-blue-500 to-red-500"
                    : "w-2 bg-gray-400 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gentle-bounce {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </section>
  );
}