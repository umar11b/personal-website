"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

const endorsementsData = [
  {
    name: "Anas Khan",
    title: "Software Engineer",
    date: "2025",
    feedback:
      "Umar is a passionate aspiring Cloud Engineer, who wants to learn and apply his skills. He was great to have on the team and was very curious about different technologies. He took initiative to set up logging for our applications, which helped us gain important insights on how our services were running.",
    tags: [
      "Escalation procedures",
      "Self-service technologies",
      "Timelines",
      "Innovation",
      "Automation",
      "Artificial Intelligence",
      "Python (programming language)",
      "JavaScript (programming language)",
    ],
    project: "AI-Powered Browser Extension",
    organization: "Learning Mode AI",
  },
  {
    name: "Ralph Maamari",
    title: "Chief Executive Officer",
    date: "2024",
    feedback:
      "Great professional experience working with Umar and Emad who were very professional throughout the entire process!",
    tags: [
      "Planning",
      "Finance",
      "Continuous integration",
      "Personal finance",
      "Continuous deployment",
      "CI/CD",
      "DevOps",
      "Scalability",
      "Software as a Service (SaaS)",
      "Automation",
    ],
    project: "Infrastructure Systems DevOps CI/CD Role",
    organization: "Savi Finance",
  },
  {
    name: "Imran Nathani",
    title: "Operations Manager",
    date: "2024",
    feedback:
      "Your strong teamwork and communication skills have contributed greatly to the overall success of our projects. Well done!",
    tags: [
      "Diabetes mellitus",
      "Slack (software)",
      "Google Sheets",
      "Communication",
      "Automatic updates",
      "Data sharing",
      "Mailchimp",
      "Workflow management",
    ],
    project:
      "Integration of Ticketspice, Mailchimp, Slack, and Google Sheets for I Challenge Diabetes",
    organization: "I Challenge Diabetes",
  },
  {
    name: "James Rhule",
    title: "Managing Partner",
    date: "2024",
    feedback: "Good work, thanks for the help!",
    tags: [
      "Notification systems",
      "Service development",
      "User profile",
      "Management",
    ],
    project: "Backend Systems Lead",
    organization: "Project: Human City",
  },
  {
    name: "Kurtis Cicalo",
    title: "CEO",
    date: "2024",
    feedback: "Great to work with.",
    tags: [
      "Regression testing",
      "Scenario testing",
      "Language model",
      "Integrity testing",
      "Vulnerability",
    ],
    project: "LLM Integration Security and Content Integrity Testing",
    organization: "Voiceflip Technologies Inc",
  },
  {
    name: "Abi",
    title: "Consulting Founder",
    date: "2024",
    feedback:
      "Umar has been an outstanding intern from the start, demonstrating a strong willingness to learn and an impressive ability to execute tasks independently. His talent and dedication are evident in every project he undertakes. Umar consistently exceeds expectations with minimal guidance, showcasing his considerable skills and potential. We are incredibly pleased with his performance and encourage him to continue developing his talents.",
    tags: ["Frontend", "Tailwind CSS", "Figma", "React"],
    project: "Laravel Web Application Development",
    organization: "Prabbis Consulting",
  },
];

const EndorsementCard = ({ endorsement, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{
        opacity: isActive ? 1 : 0.7,
        scale: isActive ? 1 : 0.95,
        y: isActive ? 0 : 10,
      }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl shadow-lg border border-gray-800/50 overflow-hidden min-h-[400px] flex flex-col ${
        isActive ? "shadow-purple-500/20" : "shadow-gray-500/10"
      }`}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>

      <div className="relative flex-1">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {endorsement.name}
              </h3>
              <p className="text-purple-400 text-sm font-medium">
                {endorsement.title}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">{endorsement.date}</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
              Project
            </p>
            <p className="text-purple-300 text-sm font-medium">
              {endorsement.project}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
              Organization
            </p>
            <p className="text-pink-300 text-sm font-medium">
              {endorsement.organization}
            </p>
          </div>
        </div>

        {/* Feedback */}
        <div className="mb-6 flex-1">
          <p className="text-gray-300 text-sm leading-relaxed italic">
            "{endorsement.feedback}"
          </p>
        </div>

        {/* Tags */}
        <div>
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-3">
            Skills Demonstrated
          </p>
          <div className="flex flex-wrap gap-2">
            {endorsement.tags.slice(0, 6).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
            {endorsement.tags.length > 6 && (
              <span className="px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400 border border-gray-500/20">
                +{endorsement.tags.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EndorsementsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % endorsementsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? endorsementsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  return (
    <section id="endorsements" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Endorsements
        </h2>

        <div className="relative">
          {/* Navigation Buttons - Outside Carousel */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-400">
                Swipe or use arrows to navigate
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="flex transition-transform duration-500 ease-in-out">
              {endorsementsData.map((endorsement, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  <EndorsementCard
                    endorsement={endorsement}
                    isActive={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {endorsementsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EndorsementsSection;
