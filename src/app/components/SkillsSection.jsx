"use client";
import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  programming: {
    title: "🧠 Programming & Scripting",
    items: ["Python", "JavaScript & TypeScript", "Bash/Shell scripting", "SQL"],
  },
  cloud: {
    title: "☁️ Cloud & DevOps",
    items: [
      "AWS (EC2, S3, IAM, Lambda, CloudWatch, CloudFormation)",
      "Docker (containerization)",
      "Linux server basics",
      {
        name: "GCP (Cloud Shell, Storage Systems)",
        tag: "lab",
      },
      {
        name: "Basic Kubernetes knowledge",
        tag: "academic",
      },
    ],
  },
  tools: {
    title: "🛠️ Tools & Frameworks",
    items: [
      "React (frontend development)",
      "Next.js",
      "Tailwind CSS & Chakra UI",
      {
        name: "MongoDB",
        tag: "project",
      },
      {
        name: "Figma",
        tag: "design",
      },
      {
        name: "Jira & Confluence",
        tag: "agile",
      },
    ],
  },
  data: {
    title: "📊 Data & Monitoring",
    items: ["AWS CloudWatch (log filtering, alarms, EC2 monitoring)"],
  },
  certifications: {
    title: "🎓 Certifications",
    items: [
      {
        name: "AWS Cloud Solutions Architect Foundational",
        status: "completed",
      },
      {
        name: "AWS Certified Solutions Architect – Associate",
        status: "in-progress",
      },
      {
        name: "HashiCorp Certified: Terraform Associate",
        status: "in-progress",
      },
      {
        name: "AWS Certified Developer – Associate",
        status: "planned",
      },
      {
        name: "AWS Certified SysOps Administrator – Associate",
        status: "planned",
      },
      {
        name: "Certified Kubernetes Administrator (CKA)",
        status: "planned",
      },
    ],
  },
};

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

const ExperienceTag = ({ type }) => {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      {type === "lab" && "Lab Experience"}
      {type === "academic" && "Academic"}
      {type === "project" && "Project"}
      {type === "design" && "Design"}
      {type === "agile" && "Agile Project Management"}
    </span>
  );
};

const SkillCard = ({ title, items, index }) => {
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
      className="relative bg-[#181818] p-6 rounded-lg shadow-sm hover:shadow-md hover:shadow-purple-500/10 transition-shadow duration-300"
    >
      <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex items-start"
          >
            <span className="text-purple-400 mr-2">▹</span>
            {typeof item === "string" ? (
              <span className="text-gray-300">{item}</span>
            ) : item.status ? (
              <div className="flex items-center gap-2">
                <span className="text-gray-300">{item.name}</span>
                <StatusBadge status={item.status} />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-gray-300">{item.name}</span>
                <ExperienceTag type={item.tag} />
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([key, value], index) => (
            <SkillCard
              key={key}
              title={value.title}
              items={value.items}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
