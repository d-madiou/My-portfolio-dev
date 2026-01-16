"use client"

import type React from "react"
import { useState } from "react"
import { ModeToggle } from "../theme/mode-toggle"
import { XIcon, FacebookIcon, InstagramIcon, ChevronDownIcon, GithubIcon, LinkedInIcon } from "./Icon"
import { BadgeCheckIcon } from "lucide-react"

// --- Helper Components ---

interface NavItemProps {
  children: React.ReactNode
  href: string
  hasDropdown?: boolean
  onClick?: () => void
}

const NavItem: React.FC<NavItemProps> = ({ children, href, hasDropdown, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      onClick?.()
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      // UPDATED: Hover text color to #FA891A (Orange)
      className="group relative flex items-center text-foreground/80 hover:text-[#FA891A] transition-all duration-300 px-4 py-2"
    >
      <span className="font-medium text-sm lg:text-base">{children}</span>
      {hasDropdown && (
        <ChevronDownIcon className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      )}
      {/* UPDATED: Animated underline color to #FA891A (Orange) */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FA891A] transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

interface SocialIconProps {
  children: React.ReactNode
  label: string
  href: string
}

const SocialIcon: React.FC<SocialIconProps> = ({ children, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    // UPDATED: Hover background to #FA891A (Orange)
    className="text-foreground/70 hover:text-white transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-[#FA891A]"
  >
    {children}
  </a>
)

// --- Main Header ---

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-white/70 sticky top-0 z-50 border-b border-black/5 shadow-sm transition-all duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              closeMenu()
            }}
            className="flex items-center gap-1 group"
          >
            {/* Name */}
            <span className="text-2xl text-foreground font-extrabold tracking-tight group-hover:opacity-80 transition-opacity">
              Thierno
            </span>
            
            {/* Blue Verified Tick (Facebook Style) */}
            <BadgeCheckIcon className="w-6 h-6 text-white fill-blue-500" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About Me</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#blog" hasDropdown>Blog</NavItem>
            <NavItem href="#contact">Contact Me</NavItem>
          </nav>

          {/* Social Icons & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-1">
            <SocialIcon label="X (Twitter)" href="x.com">
              <XIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon label="Facebook" href="https://www.facebook.com/share/1DnZE4gG3Z/?mibextid=wwXIfr">
              <FacebookIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon label="Instagram" href="https://www.instagram.com/its_thierno_224?igsh=NG1zbGRkMWQ5Zjlj&utm_source=qr">
              <InstagramIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon label="GitHub" href="https://github.com/yourusername">
              <GithubIcon className="h-4 w-4" />
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="https://www.linkedin.com/in/thierno-madiou-diallo-99583124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <LinkedInIcon className="h-4 w-4" />
            </SocialIcon>
            
            <div className="ml-2 pl-2 border-l border-black/10">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground focus:outline-none p-2 rounded-lg hover:bg-black/5 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Glassmorphism Light) */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-black/5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2">
              <NavItem href="#home" onClick={closeMenu}>Home</NavItem>
              <NavItem href="#about" onClick={closeMenu}>About Me</NavItem>
              <NavItem href="#services" onClick={closeMenu}>Services</NavItem>
              <NavItem href="#projects" onClick={closeMenu}>Projects</NavItem>
              <NavItem href="#blog" hasDropdown onClick={closeMenu}>Blog</NavItem>
              <NavItem href="#contact" onClick={closeMenu}>Contact Me</NavItem>

              <div className="flex flex-wrap items-center gap-4 pt-6 mt-4 border-t border-black/5 justify-between">
                <div className="flex gap-2">
                    <SocialIcon label="X (Twitter)" href="https://x.com">
                    <XIcon className="h-5 w-5" />
                    </SocialIcon>
                    <SocialIcon label="GitHub" href="https://github.com/d-madiou">
                    <GithubIcon className="h-5 w-5" />
                    </SocialIcon>
                    <SocialIcon label="LinkedIn" href="https://www.linkedin.com/in/thierno-madiou-diallo-99583124b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <LinkedInIcon className="h-5 w-5" />
                    </SocialIcon>
                </div>
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header