"use client"

import React, { useState } from 'react';
import { TECH_SERVICES_DATA } from '@/lib/constant';
import { SparkleIcon } from './Icon'; // Assuming you still want this for the marquee
import { ArrowUpRight } from 'lucide-react'; // Standard import from lucide-react

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TECH_SERVICES_DATA[0].category);
  const activeSkills = TECH_SERVICES_DATA.find(service => service.category === activeTab);

  const marqueeItems = ["INNOVATIVE SOLUTIONS", "SCALABLE ARCHITECTURE", "DATA-DRIVEN INSIGHTS", "SEAMLESS UX/UI"];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Glass Container */}
        <div className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
          
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-0">
            
            {/* LEFT COLUMN: Visual/Image Side */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="absolute inset-0">
                 <img 
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop" 
                    alt="Technical Mastery" 
                    className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-[#0a0a0a]/90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>
              
              {/* Badge */}
              <div className="absolute bottom-8 left-8">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-brand-green shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                    </span>
                    <span className="tracking-wider font-bold">STACK ONLINE</span>
                 </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Content Side */}
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#0a0a0a]/40 relative">
              
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                  Technical Arsenal
                </h2>
                <p className="text-white/60 leading-relaxed text-sm md:text-base max-w-xl">
                  I don't just use tools; I select the right instruments for the job. Here is the technology stack I leverage to build robust solutions.
                </p>
              </div>

              {/* Styled Tabs */}
              <div className="flex flex-wrap gap-3 mb-10">
                {TECH_SERVICES_DATA.map(service => (
                  <button
                    key={service.category}
                    onClick={() => setActiveTab(service.category)}
                    className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full border transition-all duration-300 ${
                      activeTab === service.category
                        ? 'bg-brand-green text-black border-brand-green font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-white/5 border-white/10 text-white/50 hover:text-white hover:border-white/30'
                    }`}
                  >
                    {service.category}
                  </button>
                ))}
              </div>

              {/* --- NEW: Text-Based Tech Cloud --- */}
              <div className="min-h-[200px]">
                <div className="flex flex-wrap gap-3">
                  {activeSkills?.technologies.map((tech, idx) => (
                    <div 
                      key={tech.name} 
                      className="animate-in fade-in zoom-in slide-in-from-bottom-2 duration-500 fill-mode-both"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <div className="group/chip relative overflow-hidden px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-green/50 hover:bg-brand-green/10 transition-all duration-300 cursor-default">
                        
                        <div className="flex items-center gap-2">
                          {/* The Tech Name */}
                          <span className="text-sm font-medium text-white/70 group-hover/chip:text-white transition-colors tracking-wide">
                            {tech.name}
                          </span>
                          
                          {/* Hidden Arrow that appears on hover */}
                          <ArrowUpRight className="w-3 h-3 text-brand-green opacity-0 -translate-x-2 group-hover/chip:opacity-100 group-hover/chip:translate-x-0 transition-all duration-300" />
                        </div>
                        
                        {/* Subtle Glow Background on Hover */}
                        <div className="absolute inset-0 bg-brand-green/5 blur-md opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full mt-24 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden py-6">
          <div className="flex animate-scroll whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
                  <div key={index} className="flex items-center mx-10 group cursor-default">
                      <SparkleIcon className="w-3 h-3 text-brand-green/40 mr-4 group-hover:text-brand-green group-hover:animate-spin-slow transition-colors" />
                      <span className="text-xs md:text-sm font-bold tracking-[0.3em] text-white/20 group-hover:text-white transition-colors duration-500">
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