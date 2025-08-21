"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Calendar } from "lucide-react";

const contactData = [
  {
    icon: Calendar,
    label: "Schedule a Chat",
    value: "Book a call",
    href: "https://calendar.app.google/fyyXFHDT8uSNE7wa8",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Mail,
    label: "Email",
    value: "zamanu@sheridancollege.ca",
    href: "mailto:zamanu@sheridancollege.ca?subject=Portfolio%20Inquiry",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/umarzaman2018",
    href: "https://www.linkedin.com/in/umarzaman2018/",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/umar11b",
    href: "https://github.com/umar11b",
    color: "from-gray-600 to-gray-700",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Toronto, ON, Canada",
    href: null,
    color: "from-green-500 to-emerald-500",
    span: 2,
  },
];

const ContactCard = ({ contact, index }) => {
  const IconComponent = contact.icon;

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
      className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-800/50 hover:border-purple-500/30 overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      <div className="relative flex items-center gap-4">
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}
        >
          <IconComponent className="w-5 h-5" />
        </div>

        <div
          className={`flex-1 min-w-0 ${
            contact.span === 2 ? "text-center" : ""
          }`}
        >
          <p className="text-gray-400 text-xs mb-2 font-medium tracking-wide uppercase">
            {contact.label}
          </p>
          {contact.href ? (
            <a
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-purple-300 transition-colors duration-300 font-semibold text-sm break-all group-hover:underline"
            >
              {contact.value}
            </a>
          ) : (
            <p className="text-gray-200 font-semibold text-sm">
              {contact.value}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="text-center mb-8">
          <p className="text-gray-300 text-lg mb-4">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about cloud infrastructure and DevOps.
          </p>
          <p className="text-gray-400 text-sm">
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactData.map((contact, index) => (
            <div
              key={index}
              className={contact.span === 2 ? "md:col-span-2" : ""}
            >
              <ContactCard contact={contact} index={index} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Looking for a Cloud & DevOps Engineer? Let's connect! 🚀
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
