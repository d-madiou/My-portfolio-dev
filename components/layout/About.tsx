"use client"

import React, { useState } from "react"
import { CheckIcon } from "./Icon" // Assuming this exists based on your code
import { ArrowDownIcon } from "lucide-react"

// --- Types & Mock Data ---

type TabType = 'overview' | 'experience' | 'education' | 'awards';

interface InfoCardData {
  id: string;
  title: string;
  description: string;
  image: string;
}

// FAKE DATA STRUCTURE
const TAB_DATA: Record<TabType, InfoCardData[]> = {
  overview: [
    {
      id: "o1",
      title: "Frontend Architecture",
      description: "Crafting responsive, pixel-perfect UIs using React, Next.js, and Tailwind CSS with a focus on accessibility and performance.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "o2",
      title: "Backend Systems",
      description: "Designing robust APIs and microservices using Node.js, Go, and Python, ensuring scalability and security.",
      image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "o3",
      title: "Cloud Infrastructure",
      description: "Deploying and managing containerized applications on AWS and DigitalOcean using Docker and Kubernetes.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "o4",
      title: "UI/UX Collaboration",
      description: "Bridging the gap between design and code, working closely with designers to implement Figma prototypes accurately.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  experience: [
    {
      id: "e1",
      title: "Senior Full Stack Dev",
      description: "TechCorp Inc. (2021 - Present). Led a team of 5 engineers to rebuild the legacy core platform, improving load times by 40%.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "e2",
      title: "Frontend Engineer",
      description: "Creative Agency (2019 - 2021). Developed award-winning interactive websites for Fortune 500 clients using WebGL and GSAP.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
    },
  ],
  education: [
    {
      id: "edu1",
      title: "M.S. Computer Science",
      description: "Stanford University (2017-2019). Specialization in Artificial Intelligence and Human-Computer Interaction.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "edu2",
      title: "B.S. Software Engineering",
      description: "MIT (2013-2017). Graduated Summa Cum Laude. Dean's List for 8 consecutive semesters.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  awards: [
    {
      id: "a1",
      title: "Hackathon Winner 2023",
      description: "First place in the Global AI Hackathon for building an accessibility tool for visually impaired developers.",
      image: "https://images.unsplash.com/photo-1569437061241-a848be43cc82?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "a2",
      title: "Open Source Contributor",
      description: "Recognized as a top contributor to the React ecosystem in 2022 for performance optimization libraries.",
      image: "https://images.unsplash.com/photo-1607799275518-d58665d096cd?q=80&w=1000&auto=format&fit=crop"
    }
  ]
}

// --- Helper Components ---

const TechPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded text-xs font-mono text-brand-gray-light hover:text-white transition-colors cursor-default">
    {children}
  </span>
)

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-3xl font-bold text-white">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{label}</span>
  </div>
)

const SkillCard: React.FC<{ 
  item: InfoCardData
  isActive: boolean
  onClick: () => void
}> = ({ item, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative h-full min-h-[280px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 border ${
        isActive 
          ? 'border-brand-green/50' 
          : 'border-white/5 hover:border-white/20'
      }`}
    >
      {/* Image Layer */}
      <div className="absolute inset-0">
        <img
          src={item.image}
          alt={item.title}
          className={`w-full h-full object-cover transition-transform duration-1000 ${
            isActive ? 'scale-110 opacity-40' : 'scale-100 opacity-20 group-hover:opacity-30'
          }`}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      {/* Content Layer */}
      <div className="relative h-full flex flex-col justify-end p-6">
        <div className={`transition-all duration-300 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className={`text-lg font-bold transition-colors ${
              isActive ? 'text-white' : 'text-white/70'
            }`}>
              {item.title}
            </h3>
            {isActive && <CheckIcon className="w-5 h-5 text-brand-green animate-in zoom-in" />}
          </div>
          
          <p className={`text-sm leading-relaxed text-brand-gray-light transition-opacity duration-300 ${
            isActive ? 'opacity-100 line-clamp-none' : 'opacity-0 h-0 overflow-hidden'
          }`}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

// --- Main Component ---

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // When tab changes, reset the active card to the first one
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    setActiveCardIndex(0)
  }

  // Get content based on active tab
  const currentContent = TAB_DATA[activeTab]

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
      
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          About Me
        </h2>
        <p className="text-xl text-brand-gray-light max-w-3xl leading-relaxed">
          I am a multidisciplinary developer bridging the gap between <span className="text-white">complex data</span> and <span className="text-white">human-centric interfaces</span>. My work is driven by the belief that software should be robust, scalable, and intuitive.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* LEFT COLUMN: Profile "ID Card" (Sticky) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
             {/* Avatar Area */}
             <div className="flex items-center gap-5 mb-8">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white/10">
                   <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
                      alt="Profile"
                      className="w-full h-full object-cover" 
                   />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white">Thierno Madiou</h3>
                   <div className="text-brand-green text-sm font-medium">Full Stack Engineer</div>
                </div>
             </div>

             {/* Bio Data */}
             <div className="space-y-6 text-sm text-brand-gray-light">
                <p>
                   Currently building scalable web applications and analyzing complex datasets to drive business decisions.
                </p>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                   <span className="text-white/80">Open to new opportunities</span>
                </div>
             </div>

             {/* Stats Row */}
             <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                <StatBox label="Years Exp." value="02+" />
                <StatBox label="Projects" value="15+" />
             </div>

             {/* Action */}
             <button className="mt-8 w-full py-3 bg-white hover:bg-brand-green text-black font-bold rounded transition-colors flex items-center justify-center gap-2 group">
                Download Resume
                <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
             </button>
          </div>

          {/* Core Tech Stack (Mobile: Hidden, Desktop: Visible) */}
          <div className="hidden lg:block">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
               {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Go', 'AWS', 'Docker', 'PostgreSQL', 'Redis', 'TensorFlow', 'Figma'].map(tech => (
                  <TechPill key={tech}>{tech}</TechPill>
               ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Interactive Story Grid */}
        <div className="lg:col-span-8 space-y-12">
           
           {/* Top Navigation */}
           <div className="flex items-center gap-8 text-sm overflow-x-auto pb-2 scrollbar-hide border-b border-white/5">
              {['overview', 'experience', 'education', 'awards'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab as TabType)}
                  className={`pb-4 font-medium transition-all relative capitalize whitespace-nowrap ${
                    activeTab === tab 
                      ? 'text-white' 
                      : 'text-white/40 hover:text-white'
                  }`}
                >
                  {tab}
                  {/* Active Tab Indicator Line */}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-green rounded-t-full" />
                  )}
                </button>
              ))}
           </div>

           {/* The Grid */}
           <div className="grid sm:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
              {currentContent.map((item, idx) => (
                <SkillCard
                  key={item.id}
                  item={item}
                  isActive={idx === activeCardIndex}
                  onClick={() => setActiveCardIndex(idx)}
                />
              ))}
           </div>

           {/* Mobile Tech Stack */}
           <div className="lg:hidden">
              <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                 {['React', 'Next.js', 'TypeScript', 'Python', 'Go', 'AWS'].map(tech => (
                    <TechPill key={tech}>{tech}</TechPill>
                 ))}
              </div>
           </div>

           {/* Quote / Philosophy */}
           <div className="p-8 border-l-2 border-brand-green/30 bg-white/5 rounded-r-xl">
              <p className="text-lg italic text-white/80 mb-4">
                 "Code is poetry written for machines, but designed for humans to read."
              </p>
              <div className="text-sm text-brand-green font-mono">
                 — My Engineering Philosophy
              </div>
           </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection