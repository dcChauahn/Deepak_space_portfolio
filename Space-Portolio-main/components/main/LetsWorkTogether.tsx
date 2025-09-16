"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const LetsWorkTogether = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 pb-8"
      id="contact"
    >
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-[13px]">
          Ready to Collaborate
        </h1>
      </motion.div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Let&apos;s Work Together
      </h1>

      <div className="w-full max-w-4xl px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 p-12 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m passionate about creating exceptional digital experiences. Whether you need a 
              stunning website, a powerful e-commerce platform, or a custom web application, 
              let&apos;s discuss how we can bring your vision to life.
            </p>
            
            
            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm">
                📍 Based in Chandigarh, India | Available for remote work worldwide
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LetsWorkTogether;
