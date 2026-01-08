"use client"

import React, { useState, useEffect } from "react"
import { PROJECTS_DATA, Project } from "@/lib/constant"
import { GithubIcon, ExternalLinkIcon, CheckIcon, LinkedInIcon } from "./Icon"

// --- Helper Components ---

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  // Light Mode: Light gray bg, dark text
  <span className="inline-flex items-center px-2.5 py-1 rounded bg-secondary border border-black/5 text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
    {children}
  </span>
)

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-black/5">
    {title}
  </h3>
)

// --- Main Components ---

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      // Light Mode: White card, subtle shadow, orange border on hover
      className="cursor-pointer group flex flex-col h-full bg-white border border-black/5 rounded-xl overflow-hidden hover:border-[#FA891A]/30 hover:shadow-xl transition-all duration-300 shadow-sm"
    >
      {/* Image Container - Aspect Ratio 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden bg-secondary border-b border-black/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
        />
        {/* Overlay (Lighter for Light Mode) */}
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Header: Category & Year */}
        <div className="flex justify-between items-center mb-3">
          {/* Custom Orange Badge */}
          <span className="text-[#FA891A] text-[10px] font-bold uppercase tracking-widest border border-[#FA891A]/20 bg-[#FA891A]/5 px-2 py-1 rounded">
            {project.category}
          </span>
          <span className="text-muted-foreground text-xs font-mono">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-[#FA891A] transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {project.description}
        </p>

        {/* Footer: Text-Based Tech Stack (No Icons) */}
        <div className="pt-5 border-t border-black/5 mt-auto">
           <div className="flex flex-wrap gap-2">
             {project.technologies.slice(0, 3).map((tech, idx) => (
               <span key={idx} className="text-[10px] text-foreground/60 bg-secondary px-2 py-1 rounded">
                 {tech}
               </span>
             ))}
             {project.technologies.length > 3 && (
               <span className="text-[10px] text-muted-foreground px-1 py-1">
                 +{project.technologies.length - 3}
               </span>
             )}
           </div>
        </div>
      </div>
    </div>
  )
}

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <div className="fixed inset-0 z-[60] flex justify-center items-start pt-4 sm:pt-10 pb-4 px-4 bg-white/80 backdrop-blur-md overflow-y-auto">
      
      {/* Click outside to close (optional layer) */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container (Light Mode: White bg, dark text) */}
      <div className="relative w-full max-w-6xl bg-white border border-black/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-black/5">
           <h2 className="text-lg font-bold text-foreground truncate pr-4">{project.title}</h2>
           <button 
             onClick={onClose}
             className="p-2 hover:bg-black/5 rounded-full text-muted-foreground hover:text-foreground transition-colors"
           >
             {/* Simple Close X SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
           </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* LEFT: Main Content (Narrative) */}
          <div className="flex-1 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-black/5 space-y-10 bg-white">
            
            {/* Hero Image */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-black/10 shadow-sm">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Metrics Bar */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-xl bg-secondary/30 border border-black/5">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-lg font-bold text-foreground mb-1">{value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <section>
              <SectionHeader title="Overview" />
              <p className="text-muted-foreground text-base leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </section>

            {/* Architecture */}
            {project.architecture && (
               <section>
                 <SectionHeader title="Architecture" />
                 <div className="space-y-4">
                   {Object.entries(project.architecture).map(([key, value]) => (
                     <div key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-4 border-b border-black/5 last:border-0">
                       {/* Custom Orange Label */}
                       <span className="w-32 text-xs font-bold text-[#FA891A] uppercase tracking-wide flex-shrink-0">
                         {key}
                       </span>
                       <span className="text-foreground/80 text-sm leading-relaxed">{value}</span>
                     </div>
                   ))}
                 </div>
               </section>
            )}

            {/* Key Features / Highlights */}
            {(project.technicalHighlights || project.keyTechnicalAchievements) && (
              <section>
                <SectionHeader title="Technical Highlights" />
                <div className="grid gap-4">
                  {project.technicalHighlights ? (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {project.technicalHighlights.map((highlight, idx) => (
                        <div key={idx} className="p-5 rounded-lg border border-black/5 bg-secondary/10 hover:border-black/10 transition-colors">
                          <h4 className="font-bold text-foreground text-sm mb-2">{highlight.feature}</h4>
                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{highlight.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {highlight.tech.map((t, i) => (
                              <span key={i} className="text-[9px] uppercase font-bold px-1.5 py-0.5 bg-white text-foreground/70 border border-black/5 rounded">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="grid sm:grid-cols-1 gap-3">
                      {(project.keyTechnicalAchievements || project.features).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                          {/* Orange Bullet */}
                          <span className="text-[#FA891A] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            )}

            {/* Challenge & Outcome */}
            <section className="grid sm:grid-cols-2 gap-8 p-6 bg-secondary/20 rounded-xl border border-black/5">
               <div>
                  <h4 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wide opacity-80">The Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.challenges}
                  </p>
               </div>
               <div>
                  <h4 className="font-bold text-foreground mb-2 text-sm uppercase tracking-wide opacity-80">The Outcome</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.outcome}
                  </p>
               </div>
            </section>

          </div>

          {/* RIGHT: Sidebar (Metadata) */}
          <div className="lg:w-[320px] bg-secondary/10 p-8 lg:border-l border-black/5">
            <div className="space-y-8">
              
              {/* Actions */}
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Orange Button
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#FA891A] text-white font-bold text-sm rounded hover:bg-[#FA891A]/90 transition-colors shadow-sm"
                  >
                    <ExternalLinkIcon className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white text-foreground font-medium text-sm rounded border border-black/10 hover:bg-black/5 transition-colors shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4" /> View Code
                  </a>
                )}
              </div>

              {/* Meta Data */}
              <div className="space-y-6 text-sm">
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Role</div>
                  <div className="text-foreground font-medium">{project.role}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-foreground font-medium">{project.year} • {project.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Client / Context</div>
                  <div className="text-foreground font-medium">{project.category}</div>
                </div>
              </div>

              <div className="h-px bg-black/5 w-full" />

              {/* Technologies - Text Badges */}
              <div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">Tech Stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx}>{tech}</Badge>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState<string>('All')

  // Derive categories from data
  const categories = ['All', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))]
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter)

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-black/5 bg-background">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Selected Works
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg">
             Case studies in engineering, design, and product strategy.
          </p>
        </div>

        {/* Minimal Text Filter */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                filter === category
                  ? 'text-[#FA891A] font-bold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
              {filter === category && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FA891A]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="py-32 text-center">
          <p className="text-muted-foreground text-lg">No projects found in this category.</p>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects