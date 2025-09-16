"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      duration: "Jan 2023 – Present",
      description: [
        "Developed and customized Shopify themes and apps for global clients",
        "Designed & built WordPress/WooCommerce websites from scratch",
        "Built e-commerce solutions with third-party API integrations",
        "Optimized websites for SEO, performance, and conversion rate",
        "Delivered custom React.js-based business applications"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Snowflakes Software Pvt Ltd",
      duration: "Jan 2020 – Nov 2023",
      description: [
        "Designed and implemented RESTful APIs to boost application performance",
        "Managed software development lifecycle for major projects",
        "Built scalable web services ensuring smooth front-end & back-end communication",
        "Implemented Single Sign-On (SSO) authentication (OAuth)",
        "Deployed applications across multiple cloud environments",
        "Worked with UX designers to deliver responsive, user-friendly UIs",
        "Integrated third-party RESTful APIs to expand system functionality"
      ]
    }
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="experience"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-[13px]">
          Professional Experience
        </h1>
      </motion.div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Work Experience
      </h1>

      <div className="w-full max-w-6xl px-10">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative mb-12 ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-12 top-6 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
              
              {/* Experience card */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                {/* Card header */}
                <div className="p-6 border-b border-gray-700/50">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-cyan-400 font-semibold mb-2">{exp.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-400 text-sm font-medium bg-gray-800/50 px-3 py-1 rounded-full border border-gray-600/50">
                        {exp.duration}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-6">
                  <div className="grid gap-3">
                    {exp.description.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.3) + (itemIndex * 0.1) }}
                        className="flex items-start group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:from-cyan-500/40 group-hover/item:to-purple-500/40 transition-all duration-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        </div>
                        <p className="text-gray-300 leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
