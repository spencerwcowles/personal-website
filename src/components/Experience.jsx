"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Backend Developer",
    company: "KlonIt.AI",
    url: "https://klonit.ai/",
    date: "Mar. 2025 – Present",
    description:
      "Built MCP-based SQL Server connector for LLM tools like Claude Desktop. Developed local testing infrastructure and led GitHub-driven agile workflows.",
  },
  {
    title: "Associate/Software Developer",
    company: "Triton Consulting Group",
    url: "https://ucsdtcg.org/",
    date: "Feb. 2025 – Present",
    description:
      "Developed React frontend with Chakra UI and Framer Motion. Built secure authentication, file uploads (Multer, MongoDB), and optimized REST APIs.",
  },
  {
    title: "Software Engineer",
    company: "Triton Unmanned Aerial Systems",
    url: "https://tritonuas.com/",
    date: "June 2024 – March 2025",
    description:
      "Engineered A* and RRT* path planning algorithms for autonomous drones. Integrated live aerial mapping with real-time image stitching.",
  },
  {
    title: "Summer Teaching Assistant",
    company: "All Saints Episcopal Day School",
    url: "https://allsaints.org/",
    date: "June 2024 - August 2024",
    description:
      "Supported instruction across 8 classes. Delivered 50+ lesson plans and organized educational activities with 95% student engagement.",
  },
  {
    title: "Computer Science Fellow",
    company: "Headstarter",
    url: "https://headstarter.co/",
    date: "July 2024 - August 2024",
    description:
      "Built a food inventory tracker with Python and SQLite. Designed and launched a personal portfolio website using HTML, CSS, and JavaScript.",
  },
  {
    title: "Math Tutor",
    company: "Mathnasium",
    url: "https://www.mathnasium.com/",
    date: "Feb. 2021 - Feb. 2022",
    description:
      "Tutored 40+ students in math fundamentals. Created custom lesson plans and led 20+ parent-teacher meetings to track progress.",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  // Calculate which timeline item is closest to the center of the viewport
  useEffect(() => {
    if (experiences.length === 0) return;

    const calculateClosestItem = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(itemCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    calculateClosestItem();
    window.addEventListener("scroll", calculateClosestItem);
    window.addEventListener("resize", calculateClosestItem);
    return () => {
      window.removeEventListener("scroll", calculateClosestItem);
      window.removeEventListener("resize", calculateClosestItem);
    };
  }, [activeIndex, experiences.length]);

  return (
    <div className="relative max-w-2xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-12 text-center">Experience</h2>
      <div
        className="absolute left-4 md:left-1/2 h-full w-0.5 bg-slate-700 dark:bg-slate-600 transform md:-translate-x-1/2"
        style={{ zIndex: 0 }}
      />
      <div className="space-y-12 relative">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={index}
            experience={experience}
            index={index}
            isActive={index === activeIndex}
            ref={(el) => (itemRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
}

const TimelineItem = forwardRef(function TimelineItem(
  { experience, index, isActive },
  ref
) {
  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div
          className={`$${
            isActive
              ? "bg-white dark:bg-slate-900 border-blue-400 dark:border-cyan-300 border-2 ring-2 ring-blue-300 dark:ring-cyan-400 ring-offset-2 scale-[1.02]"
              : "bg-white dark:bg-slate-900 border-neutral-200 dark:border-slate-700 border-2"
          } rounded-lg p-6 shadow-lg transition-all duration-300 relative z-10 text-gray-900 dark:text-white`}
        >
          <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
          <h4 className="text-lg font-semibold text-blue-600 dark:text-cyan-300 mb-1">
            {experience.url ? (
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {experience.date}
          </p>
          <p className="text-gray-700 dark:text-gray-200">
            {experience.description}
          </p>
        </div>
      </motion.div>
      <div className="flex items-center justify-center z-10">
        <div
          className={`w-8 h-8 rounded-full transition-colors duration-300 border-4 border-neutral-200 dark:border-slate-700 ${
            isActive
              ? "bg-blue-400 dark:bg-cyan-400"
              : "bg-gray-200 dark:bg-slate-700"
          } flex items-center justify-center`}
        >
          <span
            className={`$${
              isActive
                ? "text-blue-900 dark:text-cyan-900"
                : "text-gray-500 dark:text-gray-300"
            } text-sm font-bold`}
          >
            {index + 1}
          </span>
        </div>
      </div>
      <div className="flex-1 hidden md:block"></div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";
