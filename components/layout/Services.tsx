
import React from 'react';
import { useState } from 'react';
import { TECH_SERVICES_DATA } from '@/lib/constant';
import { SparkleIcon } from './Icon';

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(TECH_SERVICES_DATA[0].category);
  const activeSkills = TECH_SERVICES_DATA.find(service => service.category === activeTab);

  const marqueeItems = ["INNOVATIVE SOLUTIONS", "SCALABLE ARCHITECTURE", "DATA-DRIVEN INSIGHTS", "SEAMLESS UX/UI"];

  return (
    <section className="py-20 lg:py-32 bg-slate-50 dark:bg-brand-black relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Main Frame */}
        <div className="relative p-1 bg-gradient-to-br from-brand-green/50 via-slate-500/50 to-brand-green/50 rounded-2xl">
          <div 
            className="absolute -top-4 -left-4 w-24 h-24 bg-brand-green/30 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <div 
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-green/30 rounded-full blur-3xl"
            aria-hidden="true"
          />
          
          <div className="relative bg-slate-50 dark:bg-brand-gray-dark p-6 md:p-10 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Photo */}
              <div className="lg:col-span-2 w-full h-full">
                <div className="aspect-w-3 aspect-h-4 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=800&auto=format&fit=crop" 
                    alt="Alex Doe" 
                    className="rounded-lg shadow-xl object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent rounded-lg"></div>
                </div>
              </div>

              {/* Right Column: Skills */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                  My Technical Skills
                </h2>
                <p className="text-slate-600 dark:text-brand-gray-light mb-8">
                  A glimpse into the technologies and tools I use to bring ideas to life, from scalable backend systems to intuitive user interfaces.
                </p>

                {/* Skill Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-gray-700 mb-6 pb-3">
                  {TECH_SERVICES_DATA.map(service => (
                    <button
                      key={service.category}
                      onClick={() => setActiveTab(service.category)}
                      className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                        activeTab === service.category
                          ? 'bg-brand-green text-brand-black shadow-md'
                          : 'bg-slate-200 dark:bg-gray-800 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-gray-700'
                      }`}
                    >
                      {service.category}
                    </button>
                  ))}
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 min-h-[150px]">
                  {activeSkills?.technologies.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center group" title={tech.name}>
                      <div className="text-slate-600 dark:text-gray-400 transition-all duration-300 group-hover:text-brand-green group-hover:scale-110 group-hover:-translate-y-1">
                        {tech.icon}
                      </div>
                      <span className="text-xs text-slate-500 dark:text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        {/* Bottom Marquee Banner */}
        <div className="absolute bottom-0 left-0 w-full py-4 bg-slate-200/50 dark:bg-brand-gray-dark/50 backdrop-blur-sm mt-16 overflow-hidden">
            <div className="flex animate-scroll">
                {[...marqueeItems, ...marqueeItems].map((item, index) => (
                    <div key={index} className="flex items-center text-nowrap mx-6">
                        <SparkleIcon className="w-5 h-5 text-brand-green mr-4" />
                        <span className="text-lg font-bold tracking-widest text-slate-700 dark:text-slate-300 uppercase">
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