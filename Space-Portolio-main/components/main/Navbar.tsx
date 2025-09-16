"use client";

import { Socials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] relative">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center z-10 min-w-fit"
        >
          <div className="relative w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] flex items-center justify-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={50}
              height={50}
              className="sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
              className="cursor-pointer hover:animate-slowspin object-contain max-w-full max-h-full"
              style={{ display: 'block', visibility: 'visible' }}
              priority
            />
          </div>

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 whitespace-nowrap">
            Deepak Chauhan
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[15px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-full text-gray-200 text-sm sm:text-base">
            <a href="#about-me" className="cursor-pointer">
              Home
            </a>
            <a href="#about" className="cursor-pointer">
              About
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#experience" className="cursor-pointer">
              Experience
            </a>
            <a href="#project-showcase" className="cursor-pointer">
              Portfolio
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        <div className="flex flex-row gap-2 sm:gap-3 md:gap-5 items-center">
          {Socials.map((social) => (
            social.name === 'Email' ? (
              <motion.a
                key={social.name}
                href={social.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer"
                title="Hire Me"
              >
                <span className="flex items-center text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                  Hire Me
                </span>
              </motion.a>
            ) : (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-transform duration-200 p-2 rounded-full hover:bg-gray-800/50"
                title={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain transition-all duration-200 hover:opacity-80"
                  style={{ 
                    display: 'block',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.8
                  }}
                />
              </a>
            )
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#030014] border-t border-[#7042f861] backdrop-blur-md"
        >
          <div className="flex flex-col space-y-4 p-6">
            <a 
              href="#about-me" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a 
              href="#project-showcase" 
              className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
