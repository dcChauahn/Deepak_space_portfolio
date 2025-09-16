"use client";

import { Socials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] relative">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center z-10 min-w-fit"
        >
          <div className="relative w-[70px] h-[70px] flex items-center justify-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin object-contain max-w-full max-h-full"
              style={{ display: 'block', visibility: 'visible' }}
              priority
            />
          </div>

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 whitespace-nowrap">
            Deepak Chauhan
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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

        <div className="flex flex-row gap-5 items-center">
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
    </div>
  );
};

export default Navbar;
