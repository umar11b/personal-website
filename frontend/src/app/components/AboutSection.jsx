"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg font-sans font-medium">
            I&apos;m a Computer Science student specializing in Cloud Computing
            at Sheridan College. I focus on building secure, scalable,
            cost-effectiveand efficient cloud systems. I have hands-on
            experience with AWS, Docker/Kubernetes, and real-world DevOps
            workflows through internships with startups and personal projects.
          </p>
          <p className="text-gray-300 text-lg font-sans font-medium">
            Currently, I&apos;m expanding my expertise in
            infrastructure-as-code, CI/CD automation, and Kubernetes to prepare
            for roles in Cloud Engineering and Site Reliability.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">
              Cloud Computing
            </span>
            <span className="px-4 py-2 bg-rose-500/10 text-rose-400 rounded-full">
              DevOps
            </span>
            <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full">
              Infrastructure-as-Code
            </span>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-800/50 hover:border-purple-500/30 overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            <div className="relative">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                What I Do
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start group/item">
                  <span className="text-purple-400 mr-2 group-hover/item:scale-110 transition-transform duration-200">
                    ▹
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
                    Build scalable cloud infrastructure and systems
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-pink-400 mr-2 group-hover/item:scale-110 transition-transform duration-200">
                    ▹
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
                    Implement DevOps practices and automation
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-rose-400 mr-2 group-hover/item:scale-110 transition-transform duration-200">
                    ▹
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
                    Develop and maintain containerized applications
                  </span>
                </li>
                <li className="flex items-start group/item">
                  <span className="text-purple-400 mr-2 group-hover/item:scale-110 transition-transform duration-200">
                    ▹
                  </span>
                  <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200">
                    Contribute to site reliability and system optimization
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
