"use client";
import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  cloudPlatforms: {
    title: "☁️ Cloud Platforms",
    items: [
      {
        name: "AWS (EC2, S3, IAM, Lambda, CloudWatch, CloudFormation)",
        tag: "project",
      },
      {
        name: "GCP (Cloud Shell, Cloud Storage)",
        tag: "academic",
      },
    ],
  },
  devopsInfrastructure: {
    title: "⚙️ DevOps & Infrastructure",
    items: [
      {
        name: "Docker (containerization)",
        tag: "project",
      },
      {
        name: "Kubernetes (K3s, Helm)",
        tag: "home-lab",
      },
      {
        name: "Infrastructure-as-Code (Terraform, CDK, YAML)",
        tag: "project",
      },
      {
        name: "Linux server administration (Debian, Ubuntu)",
        tag: "home-lab",
      },
    ],
  },
  programmingAutomation: {
    title: "🔧 Programming & Automation",
    items: [
      {
        name: "Python",
        tag: "academic",
      },
      {
        name: "Bash/Shell scripting",
        tag: "academic",
      },
      {
        name: "Go",
        tag: "project",
      },
      {
        name: "JavaScript/TypeScript",
        tag: "project",
      },
    ],
  },
  monitoringReliability: {
    title: "🔍 Monitoring & Reliability",
    items: [
      {
        name: "AWS CloudWatch (logs, alarms, EC2 monitoring)",
        tag: "project",
      },
      {
        name: "Prometheus",
        tag: "home-lab",
      },
      {
        name: "Grafana",
        tag: "home-lab",
      },
    ],
  },
  toolsFrameworks: {
    title: "🛠️ Tools & Frameworks",
    items: [
      {
        name: "CI/CD Pipelines (GitHub Actions)",
        tag: "project",
      },
      {
        name: "Git",
        tag: "project",
      },
      {
        name: "VS Code",
        tag: "project",
      },
      {
        name: "Jira & Confluence",
        tag: "academic",
      },
    ],
  },
  certifications: {
    title: "🎓 Certifications",
    items: [
      {
        name: "AWS Certified Cloud Practitioner",
        status: "completed",
      },
      {
        name: "AWS Solutions Architect – Associate",
        status: "in-progress",
      },
      {
        name: "AWS Certified Machine Learning Engineer – Associate",
        status: "in-progress",
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
  const getTagStyle = (type) => {
    switch (type) {
      case "academic":
        return "bg-gradient-to-r from-purple-400 to-blue-400 text-white";
      case "project":
        return "bg-gradient-to-r from-pink-500 to-rose-500 text-white";
      case "home-lab":
        return "bg-gradient-to-r from-cyan-400 to-blue-600 text-white";
      case "in-progress":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
      case "planned":
        return "bg-gradient-to-r from-slate-500 to-gray-500 text-white";
      case "agile":
        return "bg-gradient-to-r from-rose-400 to-pink-400 text-white";
      default:
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white";
    }
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${getTagStyle(type)}`}>
      {type === "academic" && "Academic"}
      {type === "in-progress" && "In Progress"}
      {type === "planned" && "Planned"}
      {type === "project" && "Project"}
      {type === "home-lab" && "Home Lab"}
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
            className="flex items-start group/item"
          >
            <span className="text-purple-400 mr-2 group-hover/item:scale-110 transition-transform duration-200">
              ▹
            </span>
            {typeof item === "string" ? (
              <span className="text-gray-300">{item}</span>
            ) : item.status ? (
              <div className="flex items-start gap-2">
                <span className="text-gray-300 flex-1">{item.name}</span>
                <StatusBadge status={item.status} />
              </div>
            ) : (
              <div className="flex items-start gap-2">
                <span className="text-gray-300 flex-1">{item.name}</span>
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
