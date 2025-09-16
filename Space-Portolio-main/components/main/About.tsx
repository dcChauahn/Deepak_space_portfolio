"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="about"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          About Me
        </h1>
      </motion.div>

      <motion.h1
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
      >
        Professional Profile
      </motion.h1>

      <div className="w-full max-w-6xl px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Summary */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="space-y-6"
          >
            <div className="p-8 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Profile Summary
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Full Stack Developer with <span className="text-cyan-400 font-semibold">5+ years of experience</span> in building and maintaining scalable web applications. 
                Specialized in <span className="text-purple-400 font-semibold">Shopify Theme & App Development</span> and 
                <span className="text-purple-400 font-semibold"> WordPress/WooCommerce websites</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                Expertise in React.js, Node.js, PHP, and modern databases. Proven track record of optimizing applications for performance, SEO, and conversions. 
                Strong experience in cloud deployments, secure API integrations, and collaborating with cross-functional teams to deliver user-focused web solutions.
              </p>
            </div>

            {/* Contact Information */}
            <motion.div
              variants={slideInFromLeft(0.8)}
              className="p-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3">📍</span>
                  <span>Chandigarh, India</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3">✉️</span>
                  <a 
                    href="mailto:deepakchauhan143143143@gmail.com"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    deepakchauhan143143143@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-cyan-400 mr-3">📞</span>
                  <a 
                    href="tel:+918394980003"
                    className="hover:text-cyan-400 transition-colors duration-200"
                  >
                    +91 8394980003
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Key Highlights */}
          <motion.div
            variants={slideInFromRight(0.5)}
            className="space-y-6"
          >
            <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Key Expertise</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Shopify Theme & App Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">WordPress/WooCommerce Solutions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">React.js & Node.js Applications</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">E-commerce Platform Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">API Integration & Cloud Deployment</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-gray-300">Performance Optimization & SEO</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-cyan-400">Bachelor&apos;s in Computer Applications</h4>
                <p className="text-gray-300">Shri Guru Ram Rai University, Dehradun</p>
                <p className="text-gray-400 text-sm">2015 – 2019</p>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
              <div className="flex space-x-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Hindi</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
