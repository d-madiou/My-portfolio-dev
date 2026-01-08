"use client"

import React from "react"
import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import Marquee from "@/components/layout/Marque"
import Services from "@/components/layout/Services"
import AboutSection from "@/components/layout/About"
import Projects from "@/components/layout/Projects"
import Blog from "@/components/layout/Blog"
import Contact from "@/components/layout/Contact"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    // 1. bg-white: Explicit light background
    // 2. text-zinc-900: Dark text
    // 3. selection: Orange highlight
    <main className="relative overflow-x-hidden min-h-screen bg-white text-zinc-900 transition-colors duration-300 selection:bg-[#FA891A] selection:text-white">
      
      {/* --- BACKGROUND SYSTEM (LIGHT MODE) --- */}

      {/* Layer 1: African Geometric Pattern 
          Uses pure black fill with very low opacity (0.03) to create a watermark effect.
      */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3Cpath d='M20 20l10-10 10 10-10 10zM50 50l10-10 10 10-10 10z' stroke='%23000000' stroke-width='1.5' opacity='0.8'/%3E%3Cpath d='M50 20l10-10 10 10-10 10zM20 50l10-10 10 10-10 10z' stroke='%23000000' stroke-width='1.5' opacity='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Layer 2: Vignette 
          Subtle darkening at the very corners to focus eyes on the center content.
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(0,0,0,0.03) 100%)",
        }}
      />

      {/* Layer 3: Film Grain 
          Adds paper-like texture.
      */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.04] mix-blend-multiply"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
      
      {/* Layer 4: Brand Atmosphere (Orbs) */}
      {/* Top Left: Brand Orange Glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FA891A]/15 rounded-full blur-[120px] pointer-events-none z-0 animate-[pulse_10s_ease-in-out_infinite]" />
      
      {/* Bottom Right: Warm secondary glow */}
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FA891A]/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* --- CONTENT --- */}
      <div className="relative z-10">
        <Header />
        
        <section id="home">
          <Hero />
        </section>
        
        <Marquee />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="blog">
          <Blog />
        </section>
        
        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </main>
  )
}