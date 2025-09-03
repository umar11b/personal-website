"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const workshopsData = [
  {
    title: "Amazon Bedrock AgentCore Workshop",
    description:
      "Learning case study following AWS HQ workshop demonstration on Bedrock AgentCore (AWS User Group Toronto - August 21, 2025) demonstration done by Jane Shen. Implemented dual-agent approach with Bedrock integration and fallback mechanisms, focusing on environmental tools like air quality, trip emissions, and wildfire alerts.",
    date: "2025",
    duration: "1 day",
    github: "https://github.com/umar11b/EcoAgents-Bedrock",
    event: "AWS User Group Toronto",
  },
  // Example workshop for AWS Summit 2025 Toronto (uncomment when ready)
  // {
  //   title: "Advanced Serverless Architecture Workshop",
  //   description:
  //     "Deep dive into building scalable serverless applications using AWS Lambda, API Gateway, and DynamoDB. Learn best practices for event-driven architecture and cost optimization.",
  //   date: "2025",
  //   duration: "2 days",
  //   github: null,
  //   event: "AWS Summit 2025 Toronto",
  // },
];

const EventBadge = ({ event }) => {
  // AWS User Group Toronto styling
  if (event === "AWS User Group Toronto") {
    return (
      <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25 border border-orange-400/30 hover:shadow-orange-500/40 transition-all duration-300">
        🏙️ AWS User Group Toronto
      </span>
    );
  }

  // AWS Summit 2025 Toronto styling
  if (event === "AWS Summit 2025 Toronto") {
    return (
      <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30 hover:shadow-blue-500/40 transition-all duration-300">
        🎯 AWS Summit 2025 Toronto
      </span>
    );
  }

  // Default styling for other events
  return (
    <span className="px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 border border-purple-400/30 hover:shadow-purple-500/40 transition-all duration-300">
      📅 {event}
    </span>
  );
};

const WorkshopCard = ({ workshop, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-800/50 hover:border-purple-500/30 overflow-hidden flex flex-col h-full"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div className="relative flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          {workshop.title}
        </h3>
        <EventBadge event={workshop.event} />
      </div>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
        {workshop.description}
      </p>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-xs mb-1">Date:</p>
            <p className="text-purple-400 text-sm font-medium">
              {workshop.date}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Duration:</p>
            <p className="text-purple-400 text-sm font-medium">
              {workshop.duration}
            </p>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          {workshop.github && (
            <a
              href={workshop.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              Workshop Materials
            </a>
          )}
          {!workshop.github && <div className="h-10"></div>}
        </div>
      </div>
    </motion.div>
  );
};

const WorkshopsSection = () => {
  return (
    <section id="workshops" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Workshops & Training
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshopsData.map((workshop, index) => (
            <WorkshopCard key={index} workshop={workshop} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkshopsSection;
