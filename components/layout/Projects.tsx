"use client"

import React, { useState, useEffect } from "react"
import { PROJECTS_DATA, Project } from "@/lib/constant"
import { GithubIcon, ExternalLinkIcon, CheckIcon, LinkedInIcon } from "./Icon"

// --- Helper Components ---

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider text-white/70 font-medium">
    {children}
  </span>
)

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">
    {title}
  </h3>
)

// --- Main Components ---

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group flex flex-col h-full bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-brand-green/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300"
    >
      {/* Image Container - Aspect Ratio 16:9 */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#111] border-b border-white/5">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
        {/* Overlay Gradient for text readability if needed */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        
        {/* Header: Category & Year */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-brand-green text-[10px] font-bold uppercase tracking-widest border border-brand-green/20 bg-brand-green/5 px-2 py-1 rounded">
            {project.category}
          </span>
          <span className="text-white/30 text-xs font-mono">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-brand-gray-light text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
          {project.description}
        </p>

        {/* Footer: Text-Based Tech Stack (No Icons) */}
        <div className="pt-5 border-t border-white/5 mt-auto">
           <div className="flex flex-wrap gap-2">
             {project.technologies.slice(0, 3).map((tech, idx) => (
               <span key={idx} className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded">
                 {tech}
               </span>
             ))}
             {project.technologies.length > 3 && (
               <span className="text-[10px] text-white/30 px-1 py-1">
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
    <div className="fixed inset-0 z-[60] flex justify-center items-start pt-4 sm:pt-10 pb-4 px-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
      
      {/* Click outside to close (optional layer) */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
           <h2 className="text-lg font-bold text-white truncate pr-4">{project.title}</h2>
           <button 
             onClick={onClose}
             className="p-2 hover:bg-white/10 rounded-full text-white/60 hover:text-white transition-colors"
           >
             {/* Simple Close X SVG */}
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
           </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* LEFT: Main Content (Narrative) */}
          <div className="flex-1 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 space-y-10 bg-[#050505]">
            
            {/* Hero Image */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Metrics Bar */}
            {project.metrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-xl bg-white/5 border border-white/5">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-lg font-bold text-white mb-1">{value}</div>
                    <div className="text-[10px] text-white/40 uppercase tracking-wider font-bold">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <section>
              <SectionHeader title="Overview" />
              <p className="text-brand-gray-light text-base leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </section>

            {/* Architecture */}
            {project.architecture && (
               <section>
                 <SectionHeader title="Architecture" />
                 <div className="space-y-4">
                   {Object.entries(project.architecture).map(([key, value]) => (
                     <div key={key} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-4 border-b border-white/5 last:border-0">
                       <span className="w-32 text-xs font-bold text-brand-green uppercase tracking-wide flex-shrink-0">
                         {key}
                       </span>
                       <span className="text-white/80 text-sm leading-relaxed">{value}</span>
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
                        <div key={idx} className="p-5 rounded-lg border border-white/10 bg-[#0a0a0a] hover:border-white/20 transition-colors">
                          <h4 className="font-bold text-white text-sm mb-2">{highlight.feature}</h4>
                          <p className="text-xs text-brand-gray-light mb-3 leading-relaxed">{highlight.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {highlight.tech.map((t, i) => (
                              <span key={i} className="text-[9px] uppercase font-bold px-1.5 py-0.5 bg-white/10 text-white/60 rounded">
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
                        <li key={idx} className="flex items-start gap-3 text-sm text-brand-gray-light">
                          <span className="text-brand-green mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            )}

            {/* Challenge & Outcome */}
            <section className="grid sm:grid-cols-2 gap-8 p-6 bg-white/5 rounded-xl border border-white/5">
               <div>
                  <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide opacity-80">The Challenge</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {project.challenges}
                  </p>
               </div>
               <div>
                  <h4 className="font-bold text-white mb-2 text-sm uppercase tracking-wide opacity-80">The Outcome</h4>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {project.outcome}
                  </p>
               </div>
            </section>

          </div>

          {/* RIGHT: Sidebar (Metadata) */}
          <div className="lg:w-[320px] bg-[#0a0a0a] p-8 lg:border-l border-white/10">
            <div className="space-y-8">
              
              {/* Actions */}
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-brand-green text-black font-bold text-sm rounded hover:bg-brand-green/90 transition-colors"
                  >
                    <ExternalLinkIcon className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 text-white font-medium text-sm rounded border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View Code
                  </a>
                )}
              </div>

              {/* Meta Data */}
              <div className="space-y-6 text-sm">
                <div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Role</div>
                  <div className="text-white font-medium">{project.role}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Duration</div>
                  <div className="text-white font-medium">{project.year} • {project.duration}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1">Client / Context</div>
                  <div className="text-white font-medium">{project.category}</div>
                </div>
              </div>

              <div className="h-px bg-white/10 w-full" />

              {/* Technologies - Text Badges */}
              <div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Tech Stack</div>
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
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-white/5">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Selected Works
          </h2>
          <p className="text-brand-gray-light max-w-xl text-lg">
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
                  ? 'text-brand-green'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              {category}
              {filter === category && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-green" />
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
          <p className="text-white/30 text-lg">No projects found in this category.</p>
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