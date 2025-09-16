"use client";

import React from "react";

const AnimatedFooter = () => {
  return (
    <div className="relative w-full h-[400px] bg-black overflow-hidden">
      <svg viewBox="0 0 1200 400" className="absolute w-full h-full">
        {/* Symbol */}
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="50%" dy=".35em" className="text-9xl font-bold fill-none stroke-2 stroke-linejoin-round">
            Deepak Chauhan
          </text>
        </symbol>
        
        {/* Duplicate symbols with different colors */}
        <use href="#s-text" className="text text-1" />
        <use href="#s-text" className="text text-2" />
        <use href="#s-text" className="text text-3" />
        <use href="#s-text" className="text text-4" />
        <use href="#s-text" className="text text-5" />
      </svg>
      
      <style jsx>{`
        .text {
          fill: none;
          stroke-width: 3;
          stroke-linejoin: round;
          stroke-dasharray: 100 500;
          stroke-dashoffset: 0;
          animation: stroke 6s infinite linear;
        }
        
        .text-1 {
          stroke: #F2385A;
          animation-delay: -1.2s;
        }
        
        .text-2 {
          stroke: #F5A503;
          animation-delay: -2.4s;
        }
        
        .text-3 {
          stroke: #E9F1DF;
          animation-delay: -3.6s;
        }
        
        .text-4 {
          stroke: #56D9CD;
          animation-delay: -4.8s;
        }
        
        .text-5 {
          stroke: #3AA1BF;
          animation-delay: -6s;
        }
        
        @keyframes stroke {
          100% {
            stroke-dashoffset: -600;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedFooter;
