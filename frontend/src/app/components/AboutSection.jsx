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
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-rose-500/20 rounded-lg blur-xl"></div>
          <div className="relative bg-[#181818] p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">▹</span>
                <span>Build scalable cloud infrastructure and systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">▹</span>
                <span>Implement DevOps practices and automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-rose-400 mr-2">▹</span>
                <span>Develop and maintain containerized applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">▹</span>
                <span>
                  Contribute to site reliability and system optimization
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
