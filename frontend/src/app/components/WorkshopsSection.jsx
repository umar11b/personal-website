"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const workshopsData = [
  {
    title: "Amazon Bedrock AgentCore Workshop",
    description:
      "Learning case study following AWS HQ workshop demonstration on Bedrock AgentCore. Implemented dual-agent approach with Bedrock integration and fallback mechanisms, focusing on environmental tools like air quality, trip emissions, and wildfire alerts.",
    date: "August 21, 2025",
    presenters: "Jane Shen, AWS",
    github: "https://github.com/umar11b/EcoAgents-Bedrock",
    event: "AWS User Group Toronto",
  },
  {
    title: "Building a Secure EKS Framework for Financial Services",
    description:
      "Comprehensive workshop on building secure Amazon Elastic Kubernetes Service (EKS) frameworks specifically designed for financial services. Covered security best practices, compliance requirements, and implementation strategies for containerized applications in regulated environments.",
    date: "September 4, 2025",
    presenters: "Raj Bagwe, AWS\nPreetam Rebello, AWS",
    github: null,
    event: "AWS Summit 2025 Toronto",
  },
  {
    title: "An AWS Guide for VMware Administrators",
    description:
      "Interactive chalk talk designed for VMware administrators embarking on their AWS migration journey. Explored Amazon Elastic VMware Service (Amazon EVS) and AWS Transform for VMware, covering technical capabilities, use cases, and integration into overall migration strategies. Bridged knowledge between familiar VMware environments and AWS cloud services.",
    date: "September 4, 2025",
    presenters: "David Piet, AWS\nSimon Vaillancourt, AWS",
    github: null,
    event: "AWS Summit 2025 Toronto",
  },
];

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

      <div className="relative mb-4">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          {workshop.title}
        </h3>
      </div>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
        {workshop.description}
      </p>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-xs mb-1">Presenters:</p>
            <p className="text-purple-400 text-xs font-medium whitespace-pre-line">
              {workshop.presenters}
            </p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Date:</p>
            <p className="text-purple-400 text-xs font-medium">
              {workshop.date}
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
              Code
            </a>
          )}
          {!workshop.github && <div className="h-10"></div>}
        </div>

        {/* Event Badge at bottom */}
        {workshop.event === "AWS Summit 2025 Toronto" && (
          <div className="mt-8 pt-4 border-t border-gray-700/50">
            <div className="flex items-center justify-center">
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/30 border border-blue-400/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  AWS Summit 2025
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </div>
            </div>
          </div>
        )}

        {workshop.event === "AWS User Group Toronto" && (
          <div className="mt-8 pt-4 border-t border-gray-700/50">
            <div className="flex items-center justify-center">
              <div className="relative">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/30 border border-orange-400/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  AWS User Group Toronto
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
              </div>
            </div>
          </div>
        )}
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
