"use client";
import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Cloud Engineer Intern",
    company: "Learning Mode AI",
    location: "Toronto, ON (Remote)",
    duration: "Jan. 2025 – Aug. 2025",
    achievements: [
      "Led DevOps and SRE initiatives to modernize AWS infrastructure, architecting a Terraform-based staging environment for four microservices running on a single EC2 instance, improving environment consistency and reducing infrastructure costs by 40%",
      "Implemented CI/CD pipelines using GitHub Actions for automated Terraform validation and service deployments, automating most infrastructure provisioning tasks and reducing deployment time by 70%",
      "Built centralized logging and alerting using AWS CloudWatch and Slack API, cutting troubleshooting time from hours to minutes and improving system visibility across all services",
      "Reduced Mean Time to Detection (MTTD) of production incidents by 80% through proactive monitoring and real-time alerts integrated with CloudWatch metrics",
      "Collaborated with a cross-functional developer team to standardize Infrastructure-as-Code practices, improving deployment reliability and scalability across environments that supported over 200 active users",
    ],
    technologies: [
      "AWS",
      "Terraform",
      "GitHub Actions",
      "CloudWatch",
      "EC2",
      "SRE",
      "DevOps",
    ],
    type: "cloud-engineering",
  },
  {
    title: "Frontend Developer Intern",
    company: "Prabbis Consulting",
    location: "Halifax, NS (Remote)",
    duration: "Jan. 2024 – May 2024",
    achievements: [
      "Developed and deployed responsive frontend pages using Next.js, Tailwind CSS, and TypeScript, including secure authentication flows",
      "Improved reusability and responsiveness across mobile, tablet, and desktop platforms",
      "Collaborated with mentor and team using Jira within Agile sprints",
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Jira", "Agile"],
    type: "frontend-development",
  },
];

const ExperienceCard = ({ experience, index }) => {
  const getTypeColor = (type) => {
    switch (type) {
      case "cloud-engineering":
        return "from-blue-500 to-cyan-500";
      case "frontend-development":
        return "from-purple-500 to-pink-500";
      default:
        return "from-purple-500 to-pink-500";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "cloud-engineering":
        return "☁️";
      case "frontend-development":
        return "💻";
      default:
        return "💼";
    }
  };

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
      className="relative bg-[#181818] p-6 rounded-lg shadow-sm hover:shadow-md hover:shadow-purple-500/10 transition-shadow duration-300 mb-6"
    >
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{getTypeIcon(experience.type)}</span>
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              {experience.title}
            </h3>
            <p className="text-lg font-semibold text-gray-200">
              {experience.company}
            </p>
            <p className="text-sm text-gray-400">{experience.location}</p>
          </div>
        </div>
        <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
          {experience.duration}
        </span>
      </div>

      {/* Technologies */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${getTypeColor(
                experience.type
              )} text-white`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h4 className="text-sm font-semibold text-gray-300 mb-3">
          Key Achievements:
        </h4>
        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start group/item"
            >
              <span className="text-purple-400 mr-3 group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0 mt-1">
                ▹
              </span>
              <span className="text-gray-300 text-sm leading-relaxed">
                {achievement}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
