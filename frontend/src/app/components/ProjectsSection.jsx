"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing cloud and DevOps expertise. Features modern React frontend with TypeAnimation, responsive design, and professional styling. Deployed with S3, CloudFront, Route 53, GitHub Actions CI/CD.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    deployment: "umarzaman.ca",
    github: "https://github.com/umar11b/personal-website",
    live: "https://umarzaman.ca",
    status: "completed",
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
    title: "Pi Homelab",
    description:
      "Raspberry Pi 5 Kubernetes homelab with Docker, K3s, ingress, and monitoring. Learning infrastructure automation and container orchestration in a home environment.",
    tech: ["Kubernetes", "Docker", "K3s", "Raspberry Pi", "Monitoring"],
    deployment: "Local Network",
    github: null,
    live: null,
    status: "in-progress",
  },
];

const StatusBadge = ({ status }) => {
  if (status === "completed") {
    return (
      <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium">
        Completed
      </span>
    );
  }
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium">
      In Progress
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
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
      className="relative bg-[#181818] p-6 rounded-lg shadow-sm hover:shadow-md hover:shadow-purple-500/10 transition-shadow duration-300 border border-gray-800 flex flex-col h-full"
    >
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

      <div className="flex items-start justify-between mb-4">
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
                className="px-2 py-1 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
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
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 text-sm font-medium"
            >
              <GithubIcon className="w-4 h-4" />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 text-sm font-medium"
            >
              <ExternalLinkIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {!project.github && !project.live && <div className="h-10"></div>}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
