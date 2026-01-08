"use client"

import React, { useState } from "react"
import { 
  GithubIcon, 
  LinkedInIcon, 
  XIcon as TwitterIcon, 
  FacebookIcon, 
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CheckIcon,
  ArrowRightIcon
} from "./Icon"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

// --- Helper Components ---

const ContactItem: React.FC<{
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}> = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4">
    {/* Light Mode: Light gray bg, dark gray icon */}
    <div className="w-10 h-10 flex items-center justify-center rounded bg-secondary border border-black/5 text-muted-foreground">
      {icon}
    </div>
    <div>
      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
      {href ? (
        <a 
          href={href} 
          // Custom Orange Hover
          className="text-foreground font-medium hover:text-[#FA891A] transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-foreground font-medium">{value}</span>
      )}
    </div>
  </div>
)

const SocialButton: React.FC<{
  icon: React.ReactNode
  label: string
  href: string
}> = ({ icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Light Mode: White card, hover orange border/text
    className="flex items-center gap-3 px-4 py-3 bg-white border border-black/10 rounded hover:border-[#FA891A]/50 transition-colors group shadow-sm"
  >
    <div className="text-muted-foreground group-hover:text-[#FA891A] transition-colors">
      {icon}
    </div>
    <span className="text-sm font-medium text-foreground group-hover:text-[#FA891A] transition-colors">
      {label}
    </span>
  </a>
)

// --- Main Component ---

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 5 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-black/5 bg-background">
      
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Contact
        </h2>
        <p className="text-muted-foreground max-w-2xl text-lg">
          Available for freelance opportunities and collaborations.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* LEFT: Contact Information & Socials */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Direct Info (Updated with Real CV Data) */}
          <div className="space-y-8">
            <ContactItem
              icon={<MailIcon className="w-5 h-5" />}
              label="Email"
              value="madioudiallo846@gmail.com"
              href="mailto:madioudiallo846@gmail.com"
            />
            <ContactItem
              icon={<PhoneIcon className="w-5 h-5" />}
              label="Phone"
              value="(+60) 194840468"
              href="tel:+60194840468"
            />
            <ContactItem
              icon={<MapPinIcon className="w-5 h-5" />}
              label="Based In"
              value="Alor Setar, Kedah, Malaysia"
            />
          </div>

          <div className="h-px bg-black/5 w-full" />

          {/* Status Badge */}
          <div className="p-4 bg-secondary/30 border border-black/5 rounded flex items-center gap-4">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA891A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FA891A]"></span>
            </div>
            <div>
              <div className="text-foreground font-bold text-sm">Open to Work</div>
              <div className="text-muted-foreground text-xs">Currently accepting new projects</div>
            </div>
          </div>

          <div className="h-px bg-black/5 w-full" />

          {/* Social Grid */}
          <div>
            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">On the web</div>
            <div className="grid grid-cols-2 gap-3">
              <SocialButton icon={<GithubIcon className="w-5 h-5" />} label="GitHub" href="https://github.com/d-madiou" />
              <SocialButton icon={<LinkedInIcon className="w-5 h-5" />} label="LinkedIn" href="https://linkedin.com/in/thierno-madiou-diallo-99583124b" />
              <SocialButton icon={<TwitterIcon className="w-5 h-5" />} label="Twitter" href="https://twitter.com" />
              <SocialButton icon={<InstagramIcon className="w-5 h-5" />} label="Instagram" href="https://instagram.com" />
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-black/10 rounded-lg p-6 sm:p-10 shadow-lg">
            {isSubmitted ? (
              <div className="h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-[#FA891A]/10 text-[#FA891A] rounded-full flex items-center justify-center mb-6">
                  <CheckIcon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. I'll review your message and get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary/50 border border-black/10 rounded px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-[#FA891A]/50 focus:bg-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-secondary/50 border border-black/10 rounded px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-[#FA891A]/50 focus:bg-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary/50 border border-black/10 rounded px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-[#FA891A]/50 focus:bg-white transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-secondary/50 border border-black/10 rounded px-4 py-3 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:border-[#FA891A]/50 focus:bg-white transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    // Black button, Hover Orange
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded font-bold hover:bg-[#FA891A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRightIcon className="w-4 h-4" />}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact