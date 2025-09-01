"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import {
  ExternalLinkIcon,
  GithubIcon,
  PlayIcon,
  XIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

const projectsData = [
  {
    title: "BlockchainCore",
    description:
      "Real-time cryptocurrency data processing platform with live trade data ingestion from Binance WebSocket API. Features AWS SQS + Lambda for cost-effective message processing, S3 + DynamoDB for data storage, automated anomaly detection for price movements and volume spikes, and comprehensive monitoring with CloudWatch + SNS alerts. Infrastructure managed with Terraform and CI/CD via GitHub Actions.",
    tech: [
      "Python",
      "AWS SQS",
      "AWS Lambda",
      "DynamoDB",
      "S3",
      "Terraform",
      "GitHub Actions",
      "WebSocket API",
    ],
    deployment: "AWS Cloud",
    github: "https://github.com/umar11b/BlockchainCore",
    live: null,
    video: "/videos/blockchaincore-demo.mp4", // Add video URL
    status: "completed",
  },
  {
    title: "Pi Homelab",
    description:
      "Designed and deployed a multi-tenant Kubernetes homelab on Raspberry Pi 5 with Docker, K3s, and ingress. Configured workload isolation, pod sharing, and role-based access controls to ensure secure multi-user environments. Added Prometheus + Grafana monitoring to track performance and optimize resource utilization.",
    tech: ["Kubernetes", "Docker", "K3s", "Ingress", "Grafana", "Prometheus"],
    deployment: "Local Network",
    github: null,
    live: null,
    status: "in-progress",
  },
  {
    title: "Greenalytics",
    description:
      "React + Node.js dashboard for environmental metrics; automated deploy pipeline; AWS hosting. Real-time cloud-native environmental dashboard for tracking Canadian industrial waste, electricity usage, and carbon emissions. Deployed with S3, CloudFront, Route 53, GitHub Actions CI/CD.",
    tech: [
      "React",
      "Node.js",
      "AWS S3",
      "CloudFront",
      "GitHub Actions",
      "Terraform",
    ],
    deployment: "greenalytics.umarzaman.ca",
    github: "https://github.com/umar11b/Greenalytics",
    live: "https://greenalytics.umarzaman.ca",
    status: "in-progress",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing cloud and DevOps expertise. Features modern React frontend with TypeAnimation, responsive design, and professional styling. Deployed with S3, CloudFront, Route 53, GitHub Actions CI/CD.",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "AWS S3",
      "CloudFront",
      "Route 53",
      "GitHub Actions",
    ],
    deployment: "umarzaman.ca",
    github: "https://github.com/umar11b/personal-website",
    live: "https://umarzaman.ca",
    status: "completed",
  },
];

const StatusBadge = ({ status }) => {
  if (status === "completed") {
    return (
      <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow shadow-amber-400/20 border border-amber-300">
        Completed
      </span>
    );
  }
  if (status === "in-progress") {
    return (
      <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        In Progress
      </span>
    );
  }
  return (
    <span className="px-2 py-1 text-xs rounded-full border border-purple-500 text-purple-400">
      Planned
    </span>
  );
};

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  if (!isOpen) return null;

  // Use React Portal to render outside the constrained container
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] bg-black pointer-events-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: "black",
        pointerEvents: "auto",
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-[10000] bg-black/50 rounded-full p-2 pointer-events-auto"
        style={{ zIndex: 10000 }}
      >
        <XIcon className="w-6 h-6" />
      </button>
      <video
        src={videoUrl}
        controls
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-contain pointer-events-auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          pointerEvents: "auto",
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>,
    document.body
  );
};

const ProjectCard = ({ project, index }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
          {project.title}
        </h3>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400 text-xs mb-2">Deployed on:</p>
          <p className="text-purple-400 text-sm font-medium">
            {project.deployment}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-xs mb-2">Technologies:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              Code
            </a>
          )}
          {project.video && (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              <PlayIcon className="w-4 h-4" />
              Video Demo
            </button>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium transform hover:scale-105"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {!project.github && !project.live && !project.video && (
            <div className="h-10"></div>
          )}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={project.video}
      />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Scrollable Projects */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projectsData.map((project, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          {/* Scroll Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="w-full max-w-md bg-gray-700 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                style={{
                  width: scrollContainerRef.current
                    ? `${
                        (scrollPosition /
                          (scrollContainerRef.current.scrollWidth -
                            scrollContainerRef.current.clientWidth)) *
                        100
                      }%`
                    : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
