"use client"

import React, { useState, useEffect } from "react"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ArrowRight, 
  Heart, 
  ArrowUp,
  Mail,
  BadgeCheck // <--- Imported the Badge Icon
} from "lucide-react"

// --- Helper Components ---

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/5 text-zinc-500 shadow-sm transition-all duration-300 hover:bg-[#FA891A] hover:text-white hover:border-[#FA891A] hover:scale-110"
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
        className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-[#FA891A] transition-colors duration-300 py-1"
      >
        <span className="w-0 group-hover:w-2 h-px bg-[#FA891A] transition-all duration-300" />
        <span className="group-hover:translate-x-1 transition-transform duration-300">{children}</span>
      </a>
    </li>
  )
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="relative bg-zinc-50 border-t border-black/5 overflow-hidden pt-20 pb-10">
      
      {/* --- Ambient Glow --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#FA891A]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* --- Top Grid Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <a href="#home" className="flex items-center gap-2 w-fit group">
              {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FA891A]/20 to-[#FA891A]/5 border border-black/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <span className="text-xl font-bold text-[#FA891A]">D.</span>
              </div> */}
              
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-zinc-900 tracking-tight">Madiou</span>
                {/* <span className="text-2xl font-bold text-[#FA891A]">.</span> */}
                
                {/* --- THE CERTIFIED BLUE TICK --- */}
                <BadgeCheck className="w-6 h-6 text-white fill-[#1D9BF0] ml-1" />
              </div>
            </a>
            
            <p className="text-zinc-500 text-base leading-relaxed max-w-md">
              Crafting digital experiences where code meets creativity. Focused on scalable architecture, human-centric design, and data-driven solutions.
            </p>

            {/* Newsletter Input */}
            <div className="max-w-md">
               <h4 className="text-sm font-bold text-zinc-900 mb-3 flex items-center gap-2">
                 <Mail className="w-4 h-4 text-[#FA891A]" /> Stay updated
               </h4>
               <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                 <input 
                   type="email" 
                   placeholder="Enter your email address"
                   className="w-full bg-white border border-black/10 rounded-xl py-3 pl-4 pr-12 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#FA891A]/50 focus:ring-1 focus:ring-[#FA891A]/20 transition-all duration-300 shadow-sm"
                 />
                 <button 
                   type="submit"
                   className="absolute right-1.5 top-1.5 p-2 bg-[#FA891A] rounded-lg text-white hover:bg-[#FA891A]/90 hover:scale-105 transition-all duration-300 shadow-sm"
                 >
                   <ArrowRight className="w-4 h-4" />
                 </button>
               </form>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
            <div>
              <h4 className="text-zinc-900 font-bold mb-6">Explore</h4>
              <ul className="space-y-2">
                <FooterLink href="home">Home</FooterLink>
                <FooterLink href="about">About</FooterLink>
                <FooterLink href="services">Services</FooterLink>
                <FooterLink href="projects">Work</FooterLink>
                <FooterLink href="contact">Contact</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-zinc-900 font-bold mb-6">Services</h4>
              <ul className="space-y-2">
                <FooterLink href="services">Development</FooterLink>
                <FooterLink href="services">Design System</FooterLink>
                <FooterLink href="services">Consulting</FooterLink>
                <FooterLink href="services">Strategy</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="text-zinc-900 font-bold mb-6">Connect</h4>
              <div className="flex flex-wrap gap-3">
                <SocialLink href="https://github.com/d-madiou" label="GitHub" icon={<Github className="w-4 h-4" />} />
                <SocialLink href="https://www.linkedin.com/in/thierno-madiou-diallo-99583124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" label="LinkedIn" icon={<Linkedin className="w-4 h-4" />} />
                <SocialLink href="https://x.com" label="Twitter" icon={<Twitter className="w-4 h-4" />} />
                <SocialLink href="https://www.instagram.com/its_thierno_224?igsh=NG1zbGRkMWQ5Zjlj&utm_source=qr" label="Instagram" icon={<Instagram className="w-4 h-4" />} />
              </div>
              <div className="mt-6">
                 <p className="text-xs text-zinc-400 mb-2">Email me directly</p>
                 <a href="mailto:madioudiallo846@gmail.com" className="text-zinc-700 hover:text-[#FA891A] transition-colors font-medium">
                   madioudiallo846@gmail.com
                 </a>
              </div>
            </div>

          </div>
        </div>

        {/* --- Divider --- */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mb-8" />

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-zinc-400">
            <span>&copy; {currentYear} Diallo Madiou.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse hidden sm:inline" />
            <span className="hidden sm:inline">and Coffee.</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">Terms</a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">Sitemap</a>
          </div>
        </div>

      </div>

      {/* --- Back to Top Button --- */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 bg-[#FA891A] text-white rounded-full shadow-lg shadow-orange-500/20 hover:scale-110 active:scale-95 transition-all duration-500 z-50 ${
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