"use client"

import type React from "react"
import { useState } from "react"
import { ModeToggle } from "../theme/mode-toggle"
import { LogoIcon, XIcon, FacebookIcon, InstagramIcon, ChevronDownIcon, GithubIcon, LinkedInIcon } from "./Icon"

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
      className="group relative flex items-center text-white/90 hover:text-brand-green transition-all duration-300 px-4 py-2"
    >
      <span className="font-medium">{children}</span>
      {hasDropdown && (
        <ChevronDownIcon className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
      )}
      {/* Animated underline */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full" />
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
    className="text-white/80 hover:text-brand-green transition-all duration-300 hover:scale-110 p-2 rounded-lg hover:bg-white/5"
  >
    {children}
  </a>
)

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="py-5 px-4 sm:px-6 lg:px-8 backdrop-blur-sm bg-transparent sticky top-0 z-50 border-b border-white/5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              closeMenu()
            }}
            className="flex items-center gap-3 group"
          >
            <LogoIcon className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
            <span className="text-2xl text-white font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Thierno.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About Me</NavItem>
            <NavItem href="#services">Services</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#blog" hasDropdown>Blog</NavItem>
            <NavItem href="#contact">Contact Me</NavItem>
          </nav>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-2">
            <SocialIcon label="X (Twitter)" href="https://twitter.com/yourhandle">
              <XIcon className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon label="Facebook" href="https://facebook.com/yourpage">
              <FacebookIcon className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon label="Instagram" href="https://instagram.com/yourhandle">
              <InstagramIcon className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon label="GitHub" href="https://github.com/yourusername">
              <GithubIcon className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon label="LinkedIn" href="https://linkedin.com/in/yourprofile">
              <LinkedInIcon className="h-5 w-5" />
            </SocialIcon>
            <ModeToggle />
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
              <NavItem href="#home" onClick={closeMenu}>Home</NavItem>
              <NavItem href="#about" onClick={closeMenu}>About Me</NavItem>
              <NavItem href="#services" onClick={closeMenu}>Services</NavItem>
              <NavItem href="#projects" onClick={closeMenu}>Projects</NavItem>
              <NavItem href="#blog" hasDropdown onClick={closeMenu}>Blog</NavItem>
              <NavItem href="#contact" onClick={closeMenu}>Contact Me</NavItem>

              <div className="flex items-center gap-2 pt-6 mt-4 border-t border-white/10">
                <SocialIcon label="X (Twitter)" href="https://twitter.com/yourhandle">
                  <XIcon className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon label="Facebook" href="https://facebook.com/yourpage">
                  <FacebookIcon className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon label="Instagram" href="https://instagram.com/yourhandle">
                  <InstagramIcon className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon label="GitHub" href="https://github.com/yourusername">
                  <GithubIcon className="h-5 w-5" />
                </SocialIcon>
                <SocialIcon label="LinkedIn" href="https://linkedin.com/in/yourprofile">
                  <LinkedInIcon className="h-5 w-5" />
                </SocialIcon>
                <div className="ml-auto">
                  <ModeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header