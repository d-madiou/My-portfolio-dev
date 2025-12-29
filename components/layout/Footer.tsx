"use client"

import React, { useState, useEffect } from "react"
// Replacing custom imports with Lucide for immediate functionality. 
// You can switch these back to your "./Icon" import if you have custom SVGs.
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  ArrowRight, 
  Heart, 
  ArrowUp,
  Mail
} from "lucide-react"

// --- Helper Components ---

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/5 text-white/60 transition-all duration-300 hover:bg-brand-green hover:text-black hover:border-brand-green hover:scale-110"
  >
    {icon}
  </a>
)

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(href.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        className="group flex items-center gap-2 text-sm text-white/50 hover:text-brand-green transition-colors duration-300 py-1"
      >
        <span className="w-0 group-hover:w-2 h-px bg-brand-green transition-all duration-300" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
      </a>
    </li>
  )
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  // Handle Scroll for Back-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="relative bg-[#050505] border-t border-white/5 overflow-hidden pt-20 pb-10">
      
      {/* --- Ambient Glow --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* --- Top Grid Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <a href="#home" className="flex items-center gap-2 w-fit group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-green/20 to-brand-green/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-xl font-bold text-brand-green">T.</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Thierno.</span>
            </a>
            
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              Crafting digital experiences where code meets creativity. Focused on scalable architecture, human-centric design, and data-driven solutions.
            </p>

            {/* Newsletter Input */}
            <div className="max-w-md">
               <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                 <Mail className="w-4 h-4 text-brand-green" /> Stay updated
               </h4>
               <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                 <input 
                   type="email" 
                   placeholder="Enter your email address"
                   className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-green/50 focus:bg-white/10 transition-all duration-300"
                 />
                 <button 
                   type="submit"
                   className="absolute right-1.5 top-1.5 p-2 bg-brand-green rounded-lg text-black hover:bg-white hover:scale-105 transition-all duration-300"
                 >
                   <ArrowRight className="w-4 h-4" />
                 </button>
               </form>
            </div>
          </div>

          {/* Links Section (Span 7) - Clean Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
            
            {/* Navigation */}
            <div>
              <h4 className="text-white font-bold mb-6">Explore</h4>
              <ul className="space-y-2">
                <FooterLink href="#home">Home</FooterLink>
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#projects">Work</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-2">
                <FooterLink href="#services">Development</FooterLink>
                <FooterLink href="#services">Design System</FooterLink>
                <FooterLink href="#services">Consulting</FooterLink>
                <FooterLink href="#services">Strategy</FooterLink>
              </ul>
            </div>

            {/* Socials / Connect */}
            <div>
              <h4 className="text-white font-bold mb-6">Connect</h4>
              <div className="flex flex-wrap gap-3">
                <SocialLink href="#" label="GitHub" icon={<Github className="w-4 h-4" />} />
                <SocialLink href="#" label="LinkedIn" icon={<Linkedin className="w-4 h-4" />} />
                <SocialLink href="#" label="Twitter" icon={<Twitter className="w-4 h-4" />} />
                <SocialLink href="#" label="Instagram" icon={<Instagram className="w-4 h-4" />} />
              </div>
              <div className="mt-6">
                 <p className="text-xs text-white/30 mb-2">Email me directly</p>
                 <a href="mailto:hello@thierno.com" className="text-white hover:text-brand-green transition-colors font-medium">
                   hello@thierno.com
                 </a>
              </div>
            </div>

          </div>
        </div>

        {/* --- Divider --- */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          
          <div className="flex items-center gap-1.5 text-white/40">
            <span>&copy; {currentYear} Thierno.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse hidden sm:inline" />
            <span className="hidden sm:inline">and Coffee.</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>

      {/* --- Back to Top Button --- */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 bg-white text-black rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all duration-500 z-50 ${
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

    </footer>
  )
}

export default Footer