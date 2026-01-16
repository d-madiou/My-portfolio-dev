"use client"

import React, { useState, useRef } from "react"
import { 
  ArrowDownIcon, 
  ChevronRight,
  ChevronLeft
} from "lucide-react"
import Image from "../../assets/images/ThiernoHero.png"

// --- Types ---

type TabType = 'overview' | 'experience' | 'education' | 'achievements';

interface TimelineItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
}

// --- Real Data (Mapped from CV) ---

const TAB_DATA: Record<TabType, TimelineItem[]> = {
  overview: [
    {
      id: "o1",
      title: "Backend Architecture",
      subtitle: "Python & Django",
      description: "Engineering scalable, secure backends using Django REST Framework. Handling complex data models for high-performance APIs.",
      tags: ["Django", "DRF", "PostgreSQL"],
    },
    {
      id: "o2",
      title: "Real-Time Systems",
      subtitle: "IoT & Streaming",
      description: "Architecting low-latency platforms. Connected IoT hardware via AWS and built real-time video streaming with OBS integration.",
      tags: ["AWS", "WebSockets", "IoT"],
    },
    {
      id: "o3",
      title: "Frontend Engineering",
      subtitle: "React Ecosystem",
      description: "Building interactive Production-Ready Web Apps (PWA) using Next.js and TypeScript with a focus on seamless state management.",
      tags: ["React", "Next.js", "TypeScript"],
    },
    {
      id: "o4",
      title: "DevOps & Cloud",
      subtitle: "Infrastructure",
      description: "Deploying production environments. Proficient in Docker containerization, CI/CD pipelines, and AWS cloud infrastructure.",
      tags: ["Docker", "AWS", "CI/CD"],
    }
  ],
  experience: [
    {
      id: "e1",
      title: "Lead Developer",
      subtitle: "Tech Nexus | Present",
      description: "Co-founded a tech hub. Leading development of live apps and mentoring students in algorithmic problem-solving.",
      tags: ["Leadership", "Full Stack"],
    },
    {
      id: "e2",
      title: "Full Stack Dev",
      subtitle: "Pultrix & Tolimoo",
      description: "Engineered IoT backends for farm monitoring and built high-traffic social platforms with 80% increased security.",
      tags: ["IoT", "System Design"],
    },
  ],
  education: [
    {
      id: "edu1",
      title: "B.Comp.Sc (Hons)",
      subtitle: "Albukhary Int. Univ",
      description: "GPA 3.75/4.0. Developed 'AIU Market Place', a campus e-commerce solution used by 16+ active stores.",
      tags: ["Dean's List", "Algorithms"],
    },
    {
      id: "edu2",
      title: "Software Engineer",
      subtitle: "ALX Africa",
      description: "Intensive 12-month program covering C, Python, DevOps, and System Design. Certified Software Engineer.",
      tags: ["C Language", "Engineering"],
    }
  ],
  achievements: [
  {
    id: "a1",
    title: "Startup Winner",
    subtitle: "Best Campus Startup",
    description: "Awarded for the 'Tech Nexus' initiative, validating business viability and strong technical execution.",
    tags: ["Entrepreneurship"],
  },
  {
    id: "a2",
    title: "AWS Certified",
    subtitle: "Global Certification",
    description: "AWS Cloud Practitioner Certified. Also completed Harvard CS50 and The Odin Project.",
    tags: ["AWS", "Cloud"],
  },
  {
    id: "a3",
    title: "Full-Stack E-Commerce Platform",
    subtitle: "Production-Ready System",
    description: "Designed and built a complete multi-vendor e-commerce platform with real-time notifications, admin dashboards, and automated email workflows using Supabase and React.",
    tags: ["Full-Stack", "E-Commerce"],
  },
  {
    id: "a4",
    title: "Real-Time System Implementation",
    subtitle: "Live Notifications & Emails",
    description: "Implemented real-time order notifications and transactional email automation using Supabase Edge Functions and React listeners.",
    tags: ["Real-Time", "Serverless"],
  },
  {
    id: "a5",
    title: "Advanced State Management",
    subtitle: "Scalable Frontend Architecture",
    description: "Built a scalable Redux architecture to manage cart state, products, and checkout flows across a complex multi-role application.",
    tags: ["Redux", "Frontend"],
  },
  {
    id: "a6",
    title: "Admin & Analytics Dashboard",
    subtitle: "Multi-Role Management System",
    description: "Developed a SuperAdmin dashboard with real-time metrics, user management, seller tracking, and business analytics.",
    tags: ["Admin", "Analytics"],
  }
]
}

// --- Helper Components ---

const TechPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1.5 bg-secondary/50 hover:bg-secondary border border-black/5 hover:border-black/10 rounded text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-default">
    {children}
  </span>
)

const StatBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-3xl font-bold text-foreground">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{label}</span>
  </div>
)

// --- Horizontal Timeline Components ---

const TimelineCard = ({ 
  item, 
  index 
}: { 
  item: TimelineItem; 
  index: number; 
}) => {
  const isTop = index % 2 === 0; // Zigzag logic: Even numbers top, Odd bottom

  return (
    <div className="relative flex-shrink-0 w-[300px] h-full group">
      
      {/* Connector Line (Vertical) */}
      <div className={`
        absolute left-1/2 -translate-x-1/2 w-px bg-black/5 group-hover:bg-[#FA891A]/50 transition-colors duration-500
        ${isTop ? 'top-1/2 h-[calc(50%-24px)]' : 'bottom-1/2 h-[calc(50%-24px)]'}
      `} />

      {/* Node Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border border-black/10 bg-white z-10 group-hover:border-[#FA891A] group-hover:scale-125 transition-all duration-300">
        <div className="absolute inset-0 m-auto w-1 h-1 bg-[#FA891A] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* The Card Content */}
      <div className={`
        absolute left-0 right-0 ${isTop ? 'bottom-1/2 pb-6' : 'top-1/2 pt-6'}
      `}>
        <div className="p-6 rounded-xl bg-white border border-black/5 shadow-sm hover:border-[#FA891A]/30 hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
          
          {/* Header Typography - No Icon */}
          <div className="flex flex-col gap-1 mb-4">
             {item.subtitle && (
              <span className="text-[10px] uppercase tracking-widest text-[#FA891A] font-mono">
                {item.subtitle}
              </span>
            )}
            <h3 className="text-lg font-bold text-foreground group-hover:text-black transition-colors">
              {item.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="text-[10px] px-2 py-1 rounded bg-secondary text-muted-foreground border border-black/5">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

// --- Main Component ---

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black/5 overflow-hidden">
      
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
          I am a <span className="text-foreground font-semibold">Certified Software Engineer</span> and Computer Science student passionate about building scalable, production-ready applications. I thrive on solving complex backend challenges and optimizing performance.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Profile "ID Card" (Sticky) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 z-20">
          
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 shadow-xl">
             {/* Avatar Area */}
             <div className="flex items-center gap-5 mb-8">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-black/5">
                   {/* Replace with your real photo */}
                   <img 
                      src={Image.src}
                      alt="Thierno Madiou Diallo"
                      className="w-full h-full object-cover" 
                   />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-foreground leading-tight">Thierno Madiou</h3>
                   <div className="text-[#FA891A] text-sm font-medium">Software Engineer</div>
                </div>
             </div>

             {/* Bio Data */}
             <div className="space-y-6 text-sm text-muted-foreground">
                <p>
                  As the Co-founder of <strong>Tech Nexus</strong>, I lead development on real-time platforms and e-commerce solutions using Django, React, and AWS.
                </p>
                <div className="flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-[#FA891A] animate-pulse"></span>
                   <span className="text-foreground/80">Open to new opportunities</span>
                </div>
             </div>

             {/* Stats Row */}
             <div className="mt-8 pt-8 border-t border-black/5 grid grid-cols-2 gap-6">
                <StatBox label="Experience" value="01 Yrs" />
                <StatBox label="Projects" value="15+" />
             </div>

             <a
                href="/pdf/Thierno_Madiou_Diallo_cv.pdf"
                download="Thierno_Madiou_Diallo_cv.pdf"
                className="block"
              >
                <button
                  type="button"
                  className="mt-8 w-full py-3 bg-black text-white hover:bg-[#FA891A] font-bold rounded transition-colors flex items-center justify-center gap-2 group shadow-lg hover:shadow-orange-500/20"
                >
                  Download CV
                  <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </button>
              </a>

          </div>

          {/* Core Tech Stack */}
          <div className="hidden lg:block">
            <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
               {['Python', 'Django', 'React', 'Next.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Docker', 'Tailwind', 'Supabase'].map(tech => (
                  <TechPill key={tech}>{tech}</TechPill>
               ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Horizontal Zigzag Timeline */}
        <div className="lg:col-span-8 w-full">
           
           {/* Tab Navigation */}
           <div className="flex items-center justify-between mb-8 border-b border-black/5 pb-2">
             <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                {['overview', 'experience', 'education', 'achievements'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as TabType)}
                    className={`pb-4 text-sm font-medium transition-colors capitalize relative whitespace-nowrap ${
                      activeTab === tab ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FA891A] rounded-t-full" />
                    )}
                  </button>
                ))}
             </div>
             
             {/* Desktop Scroll Controls */}
             <div className="hidden sm:flex gap-2">
                <button onClick={() => handleScroll('left')} className="p-2 rounded-full hover:bg-black/5 text-muted-foreground hover:text-foreground transition-colors">
                   <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => handleScroll('right')} className="p-2 rounded-full hover:bg-black/5 text-muted-foreground hover:text-foreground transition-colors">
                   <ChevronRight className="w-5 h-5" />
                </button>
             </div>
           </div>

           {/* The Horizontal Timeline Engine */}
           <div className="relative h-[600px] w-full">
              
              {/* Central Axis Line */}
              <div className="absolute top-1/2 left-0 w-full h-px bg-black/5" />
              
              {/* Scrollable Area */}
              <div 
                ref={scrollContainerRef}
                className="absolute inset-0 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center h-full px-4 gap-8 min-w-max">
                   {TAB_DATA[activeTab].map((item, idx) => (
                     <TimelineCard key={item.id} item={item} index={idx} />
                   ))}
                   
                   {/* End Spacer */}
                   <div className="w-12 h-1" />
                </div>
              </div>

              {/* Fade Gradients (White for Light Mode) */}
              <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
              
           </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection