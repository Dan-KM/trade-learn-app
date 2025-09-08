import React, { useState, useEffect } from "react";
import {  
  Play,
  BookOpen,
  CheckCircle,  
} from "lucide-react";

interface LessonItemProps {
  lesson: Lesson;
  isExpanded: boolean;
  index: number;
  animationTrigger?: number;
  onLessonClick?: (lesson: Lesson) => void;
}

export const LessonItem: React.FC<LessonItemProps> = ({
  lesson,
  isExpanded,
  index,
  animationTrigger = 0,
  onLessonClick,
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Reset and trigger animation whenever animationTrigger or isExpanded changes
  useEffect(() => {
    setShouldAnimate(false);

    if (isExpanded) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isExpanded, animationTrigger]);

  const getLessonIcon = (type: "video" | "reading") => {
    return type === "video" ? (
      <Play className="w-4 h-4 text-gray-600" />
    ) : (
      <BookOpen className="w-4 h-4 text-gray-600" />
    );
  };

  const handleClick = () => {
    if (onLessonClick) {
      onLessonClick(lesson);
    }
  };

  return (
    <div
      className={`px-4 py-3 hover:bg-gray-50 transition-all duration-200 ease-in-out cursor-pointer  transform ${
        shouldAnimate && isExpanded
          ? "translate-x-0 opacity-100"
          : "-translate-x-2 opacity-0"
      } ${lesson.completed ? "border-r-4 border-blue-500" : ""}`}
      style={{
        transitionDelay:
          shouldAnimate && isExpanded ? `${index * 100}ms` : "0ms",
      }}
      onClick={handleClick}
    >
      <div className="flex items-start space-x-3">
        <div
          className={`flex-shrink-0 mt-0.5 transition-all duration-300 ease-in-out ${
            shouldAnimate && isExpanded ? "scale-100" : "scale-0"
          }`}
          style={{
            transitionDelay:
              shouldAnimate && isExpanded ? `${index * 100 + 200}ms` : "0ms",
          }}
        >
          {lesson.completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
          )}
        </div>
        <div
          className={`flex-1 min-w-0 transition-all duration-300 ease-in-out ${
            shouldAnimate && isExpanded
              ? "translate-x-0 opacity-100"
              : "translate-x-4 opacity-0"
          }`}
          style={{
            transitionDelay:
              shouldAnimate && isExpanded ? `${index * 100 + 150}ms` : "0ms",
          }}
        >
          <h4 className="text-sm font-medium text-gray-900 leading-tight">
            {lesson.title}
          </h4>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-xs text-gray-500">{lesson.duration}</span>
            <span className="text-gray-300">â€¢</span>
            <div className="flex items-center space-x-1">
              {getLessonIcon(lesson.type)}
              <span className="text-xs text-gray-500 capitalize">
                {lesson.type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
