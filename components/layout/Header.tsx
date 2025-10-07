"use client"

import type React from "react"
import { useState } from "react"
import { LogoIcon, XIcon, FacebookIcon, InstagramIcon, ChevronDownIcon, GithubIcon, LinkedInIcon} from "./Icon"

const NavItem: React.FC<{ children: React.ReactNode; hasDropdown?: boolean }> = ({ children, hasDropdown }) => (
  <a
    href="#"
    className="group relative flex items-center text-white/90 hover:text-brand-green transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/5"
  >
    <span className="font-medium">{children}</span>
    {hasDropdown && (
      <ChevronDownIcon className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
    )}
  </a>
)

const SocialIcon: React.FC<{ children: React.ReactNode; label: string }> = ({ children, label }) => (
  <a
    href="#"
    aria-label={label}
    className="text-white/80 hover:text-brand-green transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
  >
    {children}
  </a>
)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-5 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-brand-black/50 sticky top-0 z-50 border-b border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <LogoIcon className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
            <span className="text-2xl text-white font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Thierno.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavItem>Home</NavItem>
            <NavItem>About Me</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem hasDropdown>Blogs</NavItem>
            <NavItem>Contact Me</NavItem>
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-2">
            <SocialIcon label="X (Twitter)">
              <XIcon className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <FacebookIcon className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon label="GitHub">
            <GithubIcon className="h-5 w-5" />
          </SocialIcon>
          <SocialIcon label="LinkedIn">
            <LinkedInIcon className="h-5 w-5" />
          </SocialIcon>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 bg-brand-gray-dark/80 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2">
              <NavItem>Home</NavItem>
              <NavItem>About Me</NavItem>
              <NavItem>Services</NavItem>
              <NavItem>Projects</NavItem>
              <NavItem hasDropdown>Blogs</NavItem>
              <NavItem>Contact Me</NavItem>

              <div className="flex items-center gap-2 pt-6 mt-4 border-t border-white/10">
                <SocialIcon label="X (Twitter)">
                  <XIcon className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon label="Facebook">
                  <FacebookIcon className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon label="Instagram">
                  <InstagramIcon className="h-5 w-5" />
                </SocialIcon>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header