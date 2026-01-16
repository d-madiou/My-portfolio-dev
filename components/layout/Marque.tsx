"use client"

import type React from "react"
import { StarIcon } from "lucide-react"

const MarqueeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center mx-6 group cursor-default">
    {/* Black Star Separator */}
    <StarIcon className="w-6 h-6 text-black fill-black mx-6 animate-[spin_4s_linear_infinite]" />
    
    {/* Solid White Text */}
    <span className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-black transition-colors duration-300">
      {text}
    </span>
  </div>
)

const Marquee: React.FC = () => {
  const items = [
    "Full Stack Engineer", 
    "Golang Beginner", 
    "Python Developer", 
    "AWS Certified", 
    "System Design",
    "Problem Solver"
  ]

  return (
    // Container with negative margin to overlap sections slightly or just stand out
    <div className="relative py-8 z-20 overflow-hidden bg-white">
      
      {/* Rotated Wrapper for dynamic feel */}
      <div className="relative -rotate-1 scale-105 bg-[#FA891A] shadow-xl border-y-4 border-black">
        
        {/* Scroller */}
        <div className="flex whitespace-nowrap py-4">
          <div className="flex animate-marquee">
            {items.map((item, index) => (
              <MarqueeItem key={`a-${index}`} text={item} />
            ))}
          </div>
          <div className="flex animate-marquee" aria-hidden="true">
            {items.map((item, index) => (
              <MarqueeItem key={`b-${index}`} text={item} />
            ))}
          </div>
          <div className="flex animate-marquee" aria-hidden="true">
            {items.map((item, index) => (
              <MarqueeItem key={`c-${index}`} text={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  )
}

export default Marquee