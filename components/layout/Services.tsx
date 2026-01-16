"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { SparkleIcon } from './Icon'; // Assuming this exists based on your code
import { ArrowUpRight } from 'lucide-react';
import About1 from '../../assets/images/About1.png'; // Example image import

// --- DEFINING DATA LOCALLY FOR EASY EDITING ---
const SKILLS_DATA = [
  {
    category: "Full Stack",
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Django" },
      { name: "Python" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "Figma" }
    ]
  },
  {
    category: "Cloud & DevOps",
    technologies: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "PostgreSQL" },
      { name: "CI/CD" },
      { name: "Git & GitHub" },
      { name: "Linux" },
      { name: "Nginx" }
    ]
  },
  {
    category: "Data Science",
    technologies: [
      { name: "Advanced SQL" },
      { name: "Power BI" },
      { name: "Google Sheets" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Data Mining" },
      { name: "Pandas/NumPy" }
    ]
  }
];

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(SKILLS_DATA[0].category);
  const activeSkills = SKILLS_DATA.find(service => service.category === activeTab);

  const marqueeItems = ["INNOVATIVE SOLUTIONS", "SCALABLE ARCHITECTURE", "DATA-DRIVEN INSIGHTS", "SEAMLESS UX/UI"];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-background">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Glass Container (Light Mode: White with subtle border/shadow) */}
        <div className="group relative rounded-3xl bg-white border border-black/5 shadow-2xl overflow-hidden">
          
          {/* Internal Glow Effect (Orange) */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FA891A]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* LEFT COLUMN: Visual/Image Side */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-black/5">
              <div className="absolute inset-0">
                 {/* Image */}
                 <Image 
                    src={About1} 
                    alt="Technical Mastery" 
                    fill
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Gradients (Adjusted for Light Mode - keeping image slightly dimmed for text contrast if needed, or clear) */}
                  <div className="absolute inset-0 bg-black/10" /> 
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-8 left-8">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-white/50 backdrop-blur-md text-xs font-mono text-[#FA891A] shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA891A] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FA891A]"></span>
                    </span>
                    <span className="tracking-wider font-bold">STACK ONLINE</span>
                 </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Content Side */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
              
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  Technical Arsenal
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl">
                  I don&apos;t just use tools; I select the right instruments for the job. From full-stack engineering to complex data analysis, here is the technology stack I leverage.
                </p>
              </div>

              {/* Styled Tabs */}
              <div className="flex flex-wrap gap-3 mb-10">
                {SKILLS_DATA.map(service => (
                  <button
                    key={service.category}
                    onClick={() => setActiveTab(service.category)}
                    // Updated Colors: Active is Orange #FA891A, Inactive is light gray
                    className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 ${
                      activeTab === service.category
                        ? 'bg-[#FA891A] text-white border-[#FA891A] font-bold shadow-[0_0_15px_rgba(250,137,26,0.4)]'
                        : 'bg-secondary text-muted-foreground border-transparent hover:border-black/10 hover:text-foreground'
                    }`}
                  >
                    {service.category}
                  </button>
                ))}
              </div>

              {/* --- Text-Based Tech Cloud --- */}
              <div className="min-h-[200px]">
                <div className="flex flex-wrap gap-3">
                  {activeSkills?.technologies.map((tech, idx) => (
                    <div 
                      key={tech.name} 
                      className="animate-in fade-in zoom-in slide-in-from-bottom-2 duration-500 fill-mode-both"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="group/chip relative overflow-hidden px-5 py-3 rounded-xl bg-white border border-black/5 shadow-sm hover:border-[#FA891A]/50 hover:bg-[#FA891A]/5 transition-all duration-300 cursor-default">
                        
                        <div className="flex items-center gap-2">
                          {/* The Tech Name (Dark text) */}
                          <span className="text-sm font-medium text-foreground/80 group-hover/chip:text-[#FA891A] transition-colors tracking-wide">
                            {tech.name}
                          </span>
                          
                          {/* Hidden Arrow that appears on hover (Orange) */}
                          <ArrowUpRight className="w-3 h-3 text-[#FA891A] opacity-0 -translate-x-2 group-hover/chip:opacity-100 group-hover/chip:translate-x-0 transition-all duration-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Marquee - Light Mode Style */}
      <div className="w-full mt-24 border-y border-black/5 bg-white/50 backdrop-blur-sm overflow-hidden py-6">
          <div className="flex animate-scroll whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                  <div key={index} className="flex items-center mx-10 group cursor-default">
                      {/* Orange Sparkle */}
                      <SparkleIcon className="w-3 h-3 text-[#FA891A]/40 mr-4 group-hover:text-[#FA891A] group-hover:animate-spin-slow transition-colors" />
                      
                      {/* Dark Text, Orange Hover */}
                      <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground/30 group-hover:text-[#FA891A] transition-colors duration-500">
                          {item}
                      </span>
                  </div>
              ))}
          </div>
      </div>
      
    </section>
  );
};

export default SkillsSection;