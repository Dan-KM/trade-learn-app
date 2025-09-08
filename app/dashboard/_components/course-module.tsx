"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
  Loader2,
} from "lucide-react";

import  { LessonItem }  from "./lesson-item";

interface CourseModuleProps {
  title: string;
  totalLessons: number;
  totalDuration: string;
  lessons: Lesson[];
  defaultExpanded?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}


const CourseModule: React.FC<CourseModuleProps> = ({
  title,
  totalLessons,
  totalDuration,
  lessons,
  defaultExpanded = false,
  isLoading = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [height, setHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded, isLoading]);

  const toggleExpanded = () => {
    if (!isLoading) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden max-w-sm">
      {/* Module Header */}
      <button
        onClick={toggleExpanded}
        disabled={isLoading}
        className={`w-full px-4 py-3 text-left transition-colors duration-150 focus:outline-none ${
          isLoading
            ? "cursor-not-allowed opacity-75"
            : "hover:bg-gray-50 cursor-pointer"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm leading-tight">
              {title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {totalLessons} lessons â€¢ {totalDuration}
            </p>
          </div>
          <div className="ml-2 flex-shrink-0 transition-transform duration-300 ease-in-out">
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
            ) : isExpanded ? (
              <ChevronUp
                className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ease-in-out ${
                  isExpanded ? "rotate-0" : "rotate-180"
                }`}
              />
            ) : (
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ease-in-out ${
                  !isExpanded ? "rotate-0" : "rotate-180"
                }`}
              />
            )}
          </div>
        </div>
      </button>

      {/* Lessons List with Smooth Height Animation */}
      <div
        className="border-t border-gray-200 transition-all duration-500 ease-in-out overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef}>
          {isLoading ? (
            <div className="px-4 py-8 flex flex-col items-center justify-center space-y-3">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
              <p className="text-sm text-gray-500 animate-pulse">
                Loading lessons...
              </p>
            </div>
          ) : (
            lessons.map((lesson, index) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                isExpanded={isExpanded}
                // isLoading={isLoading}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export { CourseModule };


/*
<CourseModule
title="JavaScript Fundamentals Review"
totalLessons={3}
totalDuration="45 min"
lessons={sampleLessons}
defaultExpanded={true}
isLoading={isLoading}
loadingText="Fetching course content..."
/>
*/